import type { Metadata } from "next";
import { CalendarDays, Leaf, Warehouse, Waves } from "lucide-react";
import { PageContainer } from "@/components/ui/PageContainer";
import { ActiveCropOverview } from "@/features/dashboard/components/ActiveCropOverview";
import { DashboardStatCard } from "@/features/dashboard/components/DashboardStatCard";
import { DashboardWelcome } from "@/features/dashboard/components/DashboardWelcome";
import { MarketPriceSummary } from "@/features/dashboard/components/MarketPriceSummary";
import { RecentFarmActivities } from "@/features/dashboard/components/RecentFarmActivities";
import { UpcomingActivities } from "@/features/dashboard/components/UpcomingActivities";
import { dashboardSampleData } from "@/features/dashboard/data/dashboardMockData";
import styles from "@/features/dashboard/dashboard.module.css";
import {
  buildActiveCropOverview,
  buildDashboardSummary,
  buildFarmingOverview,
  buildMarketPriceSummary,
  buildRecentActivityItems,
  buildUpcomingTaskItems,
  formatDashboardDate,
} from "@/features/dashboard/utils/dashboard.utils";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "A farming overview of your ponds, crop cycles, and sample market prices.",
};

/**
 * Server Component: the dashboard only displays prepared data, so it does not
 * need browser state or a client boundary.
 */
export default function DashboardPage() {
  const today = new Date();
  const summary = buildDashboardSummary(dashboardSampleData, today);
  const statCards = [
    {
      label: "Total farms",
      value: String(summary.totalFarmCount),
      description: "Farms in your workspace.",
      icon: Warehouse,
    },
    {
      label: "Active ponds",
      value: String(summary.activePondCount),
      description: "Ponds currently in use.",
      icon: Waves,
    },
    {
      label: "Active crop cycles",
      value: String(summary.activeCropCycleCount),
      description: "Cycles being tracked now.",
      icon: Leaf,
    },
    {
      label: "Longest active crop age",
      value: `${summary.longestActiveCropAgeDays} days`,
      description: "Oldest crop cycle still active.",
      icon: CalendarDays,
    },
  ];

  return (
    <PageContainer>
      <div className={styles.dashboard}>
        <DashboardWelcome
          welcomeMessage="Welcome back"
          overview={buildFarmingOverview(summary)}
          currentDateLabel={formatDashboardDate(today)}
          quickActionHref="/crop-management"
          quickActionLabel="Review crop cycles"
        />

        <section aria-label="Farming overview">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3">
            {statCards.map((statCard) => (
              <div key={statCard.label} className="col">
                <DashboardStatCard
                  label={statCard.label}
                  value={statCard.value}
                  description={statCard.description}
                  icon={statCard.icon}
                />
              </div>
            ))}
          </div>
        </section>

        <MarketPriceSummary
          prices={buildMarketPriceSummary(dashboardSampleData.marketPrices)}
          marketPricesHref="/market-prices"
        />
        <ActiveCropOverview crops={buildActiveCropOverview(dashboardSampleData, today)} />

        <div className="row g-3">
          <div className="col-12 col-lg-6">
            <RecentFarmActivities activities={buildRecentActivityItems(dashboardSampleData)} />
          </div>
          <div className="col-12 col-lg-6">
            <UpcomingActivities tasks={buildUpcomingTaskItems(dashboardSampleData, today)} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
