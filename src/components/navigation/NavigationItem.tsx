"use client";

import Link from "next/link";
import type { NavigationIconName } from "@/config/navigation";
import { navigationIcons } from "@/components/navigation/navigationIcons";

interface NavigationItemProps {
  href: string;
  label: string;
  icon: NavigationIconName;
  isActive: boolean;
  isCompact: boolean;
  onNavigate: () => void;
}

export function NavigationItem({
  href,
  label,
  icon,
  isActive,
  isCompact,
  onNavigate,
}: NavigationItemProps) {
  const Icon = navigationIcons[icon];
  const itemClassName = isActive ? "navigation-item is-active" : "navigation-item";

  return (
    <Link
      href={href}
      className={itemClassName}
      aria-current={isActive ? "page" : undefined}
      aria-label={isCompact ? label : undefined}
      title={isCompact ? label : undefined}
      onClick={onNavigate}
    >
      <Icon className="navigation-item__icon" aria-hidden="true" strokeWidth={1.75} />
      <span className="navigation-item__label">{label}</span>
    </Link>
  );
}
