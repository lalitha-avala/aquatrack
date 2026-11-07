"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { findNavigationLink } from "@/lib/navigation";
import { IconButton } from "@/components/ui/IconButton";

const workspaceDateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

interface AppHeaderProps {
  isMobileDrawerOpen: boolean;
  onOpenMobileNavigation: () => void;
}

export function AppHeader({
  isMobileDrawerOpen,
  onOpenMobileNavigation,
}: AppHeaderProps) {
  const pathname = usePathname();
  const currentPage = findNavigationLink(pathname);
  const today = new Date();

  return (
    <header className="app-header d-flex align-items-center">
      <div className="app-header__lead">
        <IconButton
          className="d-md-none"
          label="Open navigation menu"
          aria-expanded={isMobileDrawerOpen}
          aria-controls="mobile-navigation"
          onClick={onOpenMobileNavigation}
        >
          <Menu aria-hidden="true" strokeWidth={1.75} />
        </IconButton>
        <div className="app-header__titles">
          <p className="app-header__eyebrow">Farmer workspace</p>
          <p className="app-header__section">{currentPage?.label ?? "AquaTrack"}</p>
        </div>
      </div>
      <p className="app-header__date">
        <time dateTime={today.toISOString()} suppressHydrationWarning>
          {workspaceDateFormatter.format(today)}
        </time>
      </p>
    </header>
  );
}
