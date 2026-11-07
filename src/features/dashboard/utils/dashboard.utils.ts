import type {
  ActiveCropOverviewItem,
  DashboardData,
  DashboardSummary,
  MarketPriceSnapshot,
  MarketPriceSummaryRow,
  PriceMovement,
  RecentActivityItem,
  UpcomingTaskItem,
} from "@/features/dashboard/types/dashboard.types";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const longDateFormatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const activityTimestampFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const priceFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

interface CalendarDate {
  year: number;
  month: number;
  day: number;
}

function parseIsoDate(isoDate: string): CalendarDate {
  const [year, month, day] = isoDate.slice(0, 10).split("-").map(Number);
  return { year, month, day };
}

function toCalendarDate(date: Date): CalendarDate {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
}

function calendarDateToUtc(date: CalendarDate): number {
  return Date.UTC(date.year, date.month - 1, date.day);
}

/**
 * Crop age is calculated once from the stocking date so the overview card
 * and the crop table cannot show two different ages for the same cycle.
 */
export function calculateCropAgeInDays(stockingDate: string, today: Date): number {
  const elapsedMilliseconds = calendarDateToUtc(toCalendarDate(today)) - calendarDateToUtc(parseIsoDate(stockingDate));
  return Math.max(0, Math.round(elapsedMilliseconds / 86_400_000));
}

export function buildDashboardSummary(dashboardData: DashboardData, today: Date): DashboardSummary {
  const cropAges = dashboardData.activeCropCycles.map((cropCycle) =>
    calculateCropAgeInDays(cropCycle.stockingDate, today),
  );

  return {
    totalFarmCount: dashboardData.farms.length,
    activePondCount: dashboardData.ponds.filter((pond) => pond.isActive).length,
    activeCropCycleCount: dashboardData.activeCropCycles.length,
    longestActiveCropAgeDays: cropAges.length === 0 ? 0 : Math.max(...cropAges),
  };
}

function pluralize(count: number, singular: string, plural: string): string {
  return `${count} ${count === 1 ? singular : plural}`;
}

export function buildFarmingOverview(summary: DashboardSummary): string {
  return `You have ${pluralize(summary.totalFarmCount, "farm", "farms")}, ${pluralize(summary.activePondCount, "active pond", "active ponds")}, and ${pluralize(summary.activeCropCycleCount, "active crop cycle", "active crop cycles")} in progress.`;
}

export function formatDashboardDate(date: Date): string {
  return longDateFormatter.format(date);
}

export function formatPricePerKg(amount: number): string {
  return priceFormatter.format(amount);
}

function resolvePriceMovement(price: MarketPriceSnapshot): PriceMovement {
  if (price.pricePerKg > price.previousPricePerKg) {
    return "up";
  }

  if (price.pricePerKg < price.previousPricePerKg) {
    return "down";
  }

  return "unchanged";
}

function formatPriceMovement(price: MarketPriceSnapshot): string {
  const movement = resolvePriceMovement(price);
  const difference = Math.abs(price.pricePerKg - price.previousPricePerKg);

  if (movement === "up") {
    return `Higher by ${formatPricePerKg(difference)}`;
  }

  if (movement === "down") {
    return `Lower by ${formatPricePerKg(difference)}`;
  }

  return "Unchanged";
}

export function buildMarketPriceSummary(prices: MarketPriceSnapshot[]): MarketPriceSummaryRow[] {
  return prices.map((price) => ({
    id: price.id,
    shrimpCountLabel: `${price.shrimpCount} count`,
    pricePerKgLabel: formatPricePerKg(price.pricePerKg),
    previousPriceLabel: formatPricePerKg(price.previousPricePerKg),
    movementLabel: formatPriceMovement(price),
  }));
}

export function buildActiveCropOverview(
  dashboardData: DashboardData,
  today: Date,
): ActiveCropOverviewItem[] {
  return dashboardData.activeCropCycles.map((cropCycle) => {
    const stockingDate = parseIsoDate(cropCycle.stockingDate);

    return {
      id: cropCycle.id,
      farmName: cropCycle.farmName,
      pondName: cropCycle.pondName,
      species: cropCycle.species,
      stockingDateLabel: dateFormatter.format(
        new Date(stockingDate.year, stockingDate.month - 1, stockingDate.day),
      ),
      cropAgeDays: calculateCropAgeInDays(cropCycle.stockingDate, today),
      status: cropCycle.status,
    };
  });
}

export function formatActivityTimestamp(occurredAt: string): string {
  return activityTimestampFormatter.format(new Date(occurredAt));
}

export function buildRecentActivityItems(dashboardData: DashboardData): RecentActivityItem[] {
  return dashboardData.recentFarmActivities.map((activity) => ({
    id: activity.id,
    description: activity.description,
    locationLabel: `${activity.farmName} · ${activity.pondName}`,
    timestampLabel: formatActivityTimestamp(activity.occurredAt),
  }));
}

function formatUpcomingSchedule(scheduledFor: string, today: Date): string {
  const scheduledDate = parseIsoDate(scheduledFor);
  const todayDate = toCalendarDate(today);
  const dayDifference = Math.round(
    (calendarDateToUtc(scheduledDate) - calendarDateToUtc(todayDate)) / 86_400_000,
  );
  const dateLabel = dateFormatter.format(
    new Date(scheduledDate.year, scheduledDate.month - 1, scheduledDate.day),
  );

  if (dayDifference === 0) {
    return `Today, ${dateLabel}`;
  }

  if (dayDifference === 1) {
    return `Tomorrow, ${dateLabel}`;
  }

  return dateLabel;
}

export function buildUpcomingTaskItems(dashboardData: DashboardData, today: Date): UpcomingTaskItem[] {
  return dashboardData.upcomingFarmTasks.map((task) => ({
    id: task.id,
    label: task.label,
    locationLabel: `${task.farmName} · ${task.pondName}`,
    scheduleLabel: formatUpcomingSchedule(task.scheduledFor, today),
  }));
}
