"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MobileNavigationDrawer } from "@/components/layout/MobileNavigationDrawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  const isSidebarPersistent = useMediaQuery("(min-width: 768px)");
  const isCollapsibleSidebar = useMediaQuery("(min-width: 992px)");
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activePathname, setActivePathname] = useState(pathname);
  const isCompact = isCollapsibleSidebar && isSidebarCollapsed;

  if (pathname !== activePathname) {
    setActivePathname(pathname);
    setIsMobileDrawerOpen(false);
  }

  if (isSidebarPersistent && isMobileDrawerOpen) {
    setIsMobileDrawerOpen(false);
  }

  useEffect(() => {
    if (!isMobileDrawerOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileDrawerOpen]);

  function closeMobileDrawer(): void {
    setIsMobileDrawerOpen(false);
  }

  function toggleSidebar(): void {
    setIsSidebarCollapsed((isCollapsed) => !isCollapsed);
  }

  const shellClassName = isCompact
    ? "app-shell is-sidebar-collapsed d-flex min-vh-100"
    : "app-shell d-flex min-vh-100";

  return (
    <div className={shellClassName}>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <AppSidebar
        isCompact={isCompact}
        onToggleCompact={toggleSidebar}
        onNavigate={closeMobileDrawer}
      />
      <MobileNavigationDrawer isOpen={isMobileDrawerOpen} onClose={closeMobileDrawer} />
      <div className="app-shell__workspace d-flex flex-column flex-grow-1" inert={isMobileDrawerOpen}>
        <AppHeader
          isMobileDrawerOpen={isMobileDrawerOpen}
          onOpenMobileNavigation={() => setIsMobileDrawerOpen(true)}
        />
        <main id="main-content" tabIndex={-1} className="app-shell__content">
          {children}
        </main>
      </div>
    </div>
  );
}
