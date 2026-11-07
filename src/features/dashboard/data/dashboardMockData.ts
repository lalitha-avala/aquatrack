import type { DashboardData } from "@/features/dashboard/types/dashboard.types";

/**
 * Temporary stand-in for the signed-in farmer's dashboard response.
 * Market prices are illustrative sample figures, not live or current rates.
 */
export const dashboardSampleData: DashboardData = {
  farms: [
    { id: "farm-godavari", name: "Godavari Aqua Farm" },
    { id: "farm-kolleru", name: "Kolleru Pond Farm" },
  ],
  ponds: [
    { id: "pond-a", farmId: "farm-godavari", name: "Pond A", isActive: true },
    { id: "pond-b", farmId: "farm-godavari", name: "Pond B", isActive: true },
    { id: "pond-1", farmId: "farm-kolleru", name: "Pond 1", isActive: true },
    { id: "pond-2", farmId: "farm-kolleru", name: "Pond 2", isActive: true },
    { id: "pond-3", farmId: "farm-kolleru", name: "Pond 3", isActive: false },
  ],
  marketPrices: [
    { id: "count-30", shrimpCount: 30, pricePerKg: 420, previousPricePerKg: 400 },
    { id: "count-40", shrimpCount: 40, pricePerKg: 380, previousPricePerKg: 390 },
    { id: "count-50", shrimpCount: 50, pricePerKg: 340, previousPricePerKg: 340 },
    { id: "count-60", shrimpCount: 60, pricePerKg: 310, previousPricePerKg: 300 },
    { id: "count-80", shrimpCount: 80, pricePerKg: 270, previousPricePerKg: 280 },
    { id: "count-100", shrimpCount: 100, pricePerKg: 240, previousPricePerKg: 250 },
  ],
  activeCropCycles: [
    {
      id: "crop-pond-a",
      farmName: "Godavari Aqua Farm",
      pondName: "Pond A",
      species: "Vannamei",
      stockingDate: "2026-08-20",
      status: "Growing",
    },
    {
      id: "crop-pond-b",
      farmName: "Godavari Aqua Farm",
      pondName: "Pond B",
      species: "Vannamei",
      stockingDate: "2026-09-15",
      status: "Growing",
    },
    {
      id: "crop-pond-1",
      farmName: "Kolleru Pond Farm",
      pondName: "Pond 1",
      species: "Vannamei",
      stockingDate: "2026-07-28",
      status: "Ready for review",
    },
  ],
  recentFarmActivities: [
    {
      id: "activity-feed",
      description: "Feed record added",
      farmName: "Godavari Aqua Farm",
      pondName: "Pond A",
      occurredAt: "2026-11-07T06:30:00",
    },
    {
      id: "activity-water",
      description: "Water quality updated",
      farmName: "Kolleru Pond Farm",
      pondName: "Pond 1",
      occurredAt: "2026-11-06T17:15:00",
    },
    {
      id: "activity-medicine",
      description: "Medicine application recorded",
      farmName: "Godavari Aqua Farm",
      pondName: "Pond B",
      occurredAt: "2026-11-05T09:00:00",
    },
    {
      id: "activity-stocking",
      description: "Crop stocking completed",
      farmName: "Kolleru Pond Farm",
      pondName: "Pond 2",
      occurredAt: "2026-11-02T08:45:00",
    },
  ],
  upcomingFarmTasks: [
    {
      id: "task-feeding",
      label: "Evening feeding",
      farmName: "Godavari Aqua Farm",
      pondName: "Pond A",
      scheduledFor: "2026-11-07",
    },
    {
      id: "task-water",
      label: "Water quality check",
      farmName: "Kolleru Pond Farm",
      pondName: "Pond 1",
      scheduledFor: "2026-11-08",
    },
    {
      id: "task-review",
      label: "Crop review",
      farmName: "Kolleru Pond Farm",
      pondName: "Pond 1",
      scheduledFor: "2026-11-10",
    },
  ],
};
