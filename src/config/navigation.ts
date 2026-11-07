export type NavigationIconName =
  | "dashboard"
  | "marketPrices"
  | "farmManagement"
  | "farms"
  | "ponds"
  | "cropManagement"
  | "cropTracking"
  | "feedTracking"
  | "medicineTracking"
  | "waterQuality"
  | "dailyActivity"
  | "finance"
  | "expenses"
  | "harvest"
  | "profitAndLoss"
  | "cropPerformance"
  | "account"
  | "profile"
  | "notifications"
  | "settings";

export interface NavigationLinkItem {
  id: string;
  label: string;
  href: string;
  icon: NavigationIconName;
  summary: string;
}

export interface NavigationGroupItem {
  id: string;
  label: string;
  icon: NavigationIconName;
  children: NavigationLinkItem[];
}

export type NavigationEntry = NavigationLinkItem | NavigationGroupItem;

export function isNavigationGroup(
  entry: NavigationEntry,
): entry is NavigationGroupItem {
  return "children" in entry;
}

export const appNavigation: NavigationEntry[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/",
    icon: "dashboard",
    summary: "See the work that needs attention across your farms.",
  },
  {
    id: "market-prices",
    label: "Market Prices",
    href: "/market-prices",
    icon: "marketPrices",
    summary: "Check daily shrimp prices for the districts you follow.",
  },
  {
    id: "farm-management",
    label: "Farm Management",
    icon: "farmManagement",
    children: [
      {
        id: "farms",
        label: "My Farms",
        href: "/farms",
        icon: "farms",
        summary: "Keep the farms you operate in one place.",
      },
      {
        id: "ponds",
        label: "My Ponds",
        href: "/ponds",
        icon: "ponds",
        summary: "Review the ponds that belong to each farm.",
      },
      {
        id: "crop-management",
        label: "Crop Management",
        href: "/crop-management",
        icon: "cropManagement",
        summary: "Follow each crop cycle from stocking to harvest.",
      },
    ],
  },
  {
    id: "crop-tracking",
    label: "Crop Tracking",
    icon: "cropTracking",
    children: [
      {
        id: "feed-tracking",
        label: "Feed Tracking",
        href: "/feed-tracking",
        icon: "feedTracking",
        summary: "Record the feed used during a crop cycle.",
      },
      {
        id: "medicine-tracking",
        label: "Medicine Tracking",
        href: "/medicine-tracking",
        icon: "medicineTracking",
        summary: "Record medicines and treatments applied to a crop.",
      },
      {
        id: "water-quality",
        label: "Water Quality",
        href: "/water-quality",
        icon: "waterQuality",
        summary: "Log water readings so changes are easy to spot.",
      },
      {
        id: "daily-activity",
        label: "Daily Activity Records",
        href: "/daily-activity",
        icon: "dailyActivity",
        summary: "Note the daily work completed on a crop.",
      },
    ],
  },
  {
    id: "finance",
    label: "Finance & Reports",
    icon: "finance",
    children: [
      {
        id: "expenses",
        label: "Expenses",
        href: "/expenses",
        icon: "expenses",
        summary: "Track costs against the crop that incurred them.",
      },
      {
        id: "harvest",
        label: "Harvest & Revenue",
        href: "/harvest",
        icon: "harvest",
        summary: "Record harvest quantities and the revenue they bring in.",
      },
      {
        id: "profit-and-loss",
        label: "Profit & Loss",
        href: "/profit-and-loss",
        icon: "profitAndLoss",
        summary: "Compare crop income with the costs recorded against it.",
      },
      {
        id: "crop-performance",
        label: "Crop Performance",
        href: "/crop-performance",
        icon: "cropPerformance",
        summary: "Review how each crop cycle performed.",
      },
    ],
  },
  {
    id: "account",
    label: "My Account",
    icon: "account",
    children: [
      {
        id: "profile",
        label: "Profile",
        href: "/profile",
        icon: "profile",
        summary: "Manage the personal details on your AquaTrack account.",
      },
      {
        id: "notifications",
        label: "Notifications",
        href: "/notifications",
        icon: "notifications",
        summary: "Choose which farm updates you want to receive.",
      },
      {
        id: "settings",
        label: "Settings",
        href: "/settings",
        icon: "settings",
        summary: "Set the preferences for your AquaTrack workspace.",
      },
    ],
  },
];
