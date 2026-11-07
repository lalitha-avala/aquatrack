"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { BrandLockup } from "@/components/layout/BrandLockup";
import { NavigationMenu } from "@/components/navigation/NavigationMenu";
import { IconButton } from "@/components/ui/IconButton";

interface AppSidebarProps {
  isCompact: boolean;
  onToggleCompact: () => void;
  onNavigate: () => void;
}

export function AppSidebar({ isCompact, onToggleCompact, onNavigate }: AppSidebarProps) {
  return (
    <aside className="app-sidebar d-none d-md-flex flex-column">
      <div className="app-sidebar__header">
        <BrandLockup isCompact={isCompact} />
        <IconButton
          className="d-none d-lg-inline-flex"
          label={isCompact ? "Expand sidebar" : "Collapse sidebar"}
          onClick={onToggleCompact}
        >
          {isCompact ? (
            <PanelLeftOpen aria-hidden="true" strokeWidth={1.75} />
          ) : (
            <PanelLeftClose aria-hidden="true" strokeWidth={1.75} />
          )}
        </IconButton>
      </div>
      <nav className="app-sidebar__nav" aria-label="Primary">
        <NavigationMenu
          menuId="sidebar"
          isCompact={isCompact}
          onNavigate={onNavigate}
          onRequestExpandSidebar={onToggleCompact}
        />
      </nav>
    </aside>
  );
}
