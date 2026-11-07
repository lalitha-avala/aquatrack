/**
 * Dashboard contract the UI renders today and a future farmer API can return.
 * Components depend on these shapes, not on where the values are stored.
 */

export type PriceMovement = "up" | "down" | "unchanged";

export type CropStatus = "Growing" | "Ready for review";

export interface FarmerFarm {
  id: string;
  name: string;
}

export interface FarmerPond {
  id: string;
  farmId: string;
  name: string;
  isActive: boolean;
}

export interface MarketPriceSnapshot {
  id: string;
  shrimpCount: number;
  pricePerKg: number;
  previousPricePerKg: number;
}

export interface ActiveCropCycle {
  id: string;
  farmName: string;
  pondName: string;
  species: string;
  stockingDate: string;
  status: CropStatus;
}

export interface FarmActivity {
  id: string;
  description: string;
  farmName: string;
  pondName: string;
  occurredAt: string;
}

export interface UpcomingFarmTask {
  id: string;
  label: string;
  farmName: string;
  pondName: string;
  scheduledFor: string;
}

export interface DashboardData {
  farms: FarmerFarm[];
  ponds: FarmerPond[];
  marketPrices: MarketPriceSnapshot[];
  activeCropCycles: ActiveCropCycle[];
  recentFarmActivities: FarmActivity[];
  upcomingFarmTasks: UpcomingFarmTask[];
}

export interface DashboardSummary {
  totalFarmCount: number;
  activePondCount: number;
  activeCropCycleCount: number;
  longestActiveCropAgeDays: number;
}

export interface ActiveCropOverviewItem {
  id: string;
  farmName: string;
  pondName: string;
  species: string;
  stockingDateLabel: string;
  cropAgeDays: number;
  status: CropStatus;
}

export interface MarketPriceSummaryRow {
  id: string;
  shrimpCountLabel: string;
  pricePerKgLabel: string;
  previousPriceLabel: string;
  movementLabel: string;
}

export interface RecentActivityItem {
  id: string;
  description: string;
  locationLabel: string;
  timestampLabel: string;
}

export interface UpcomingTaskItem {
  id: string;
  label: string;
  locationLabel: string;
  scheduleLabel: string;
}
