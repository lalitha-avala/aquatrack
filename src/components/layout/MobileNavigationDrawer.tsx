"use client";

import { useRef } from "react";
import { X } from "lucide-react";
import { BrandLockup } from "@/components/layout/BrandLockup";
import { NavigationMenu } from "@/components/navigation/NavigationMenu";
import { IconButton } from "@/components/ui/IconButton";
import { useDialogFocus } from "@/hooks/useDialogFocus";

interface MobileNavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigationDrawer({ isOpen, onClose }: MobileNavigationDrawerProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useDialogFocus({ dialogRef, isOpen, onClose });

  return (
    <div
      ref={dialogRef}
      className="mobile-drawer"
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation"
      tabIndex={-1}
      hidden={!isOpen}
    >
      <div className="mobile-drawer__panel">
        <div className="mobile-drawer__header">
          <BrandLockup />
          <IconButton label="Close navigation" onClick={onClose}>
            <X aria-hidden="true" strokeWidth={1.75} />
          </IconButton>
        </div>
        <nav className="mobile-drawer__nav" aria-label="Primary">
          <NavigationMenu menuId="drawer" isCompact={false} onNavigate={onClose} />
        </nav>
      </div>
      <button type="button" className="mobile-drawer__backdrop" aria-label="Close navigation" onClick={onClose} />
    </div>
  );
}
