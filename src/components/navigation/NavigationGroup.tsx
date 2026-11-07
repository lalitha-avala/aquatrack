"use client";

import { ChevronDown } from "lucide-react";
import type { NavigationGroupItem } from "@/config/navigation";
import { navigationIcons } from "@/components/navigation/navigationIcons";
import { NavigationItem } from "@/components/navigation/NavigationItem";

interface NavigationGroupProps {
  group: NavigationGroupItem;
  menuId: string;
  pathname: string;
  isExpanded: boolean;
  isCompact: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}

export function NavigationGroup({
  group,
  menuId,
  pathname,
  isExpanded,
  isCompact,
  onToggle,
  onNavigate,
}: NavigationGroupProps) {
  const Icon = navigationIcons[group.icon];
  const hasActiveChild = group.children.some((child) => child.href === pathname);
  const panelId = `${menuId}-${group.id}`;
  const toggleClassName = hasActiveChild
    ? "navigation-item is-current"
    : "navigation-item";
  const chevronClassName = isExpanded
    ? "navigation-group__chevron is-expanded"
    : "navigation-group__chevron";

  return (
    <li className="navigation-group">
      <button
        type="button"
        className={toggleClassName}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        aria-label={isCompact ? group.label : undefined}
        title={isCompact ? group.label : undefined}
        onClick={onToggle}
      >
        <Icon className="navigation-item__icon" aria-hidden="true" strokeWidth={1.75} />
        <span className="navigation-item__label">{group.label}</span>
        <ChevronDown className={chevronClassName} aria-hidden="true" strokeWidth={1.75} />
      </button>
      <ul id={panelId} className="navigation-group__items" hidden={!isExpanded || isCompact}>
        {group.children.map((child) => (
          <li key={child.id}>
            <NavigationItem
              href={child.href}
              label={child.label}
              icon={child.icon}
              isActive={child.href === pathname}
              isCompact={false}
              onNavigate={onNavigate}
            />
          </li>
        ))}
      </ul>
    </li>
  );
}
