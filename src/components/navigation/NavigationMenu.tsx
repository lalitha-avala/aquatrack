"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { appNavigation, isNavigationGroup } from "@/config/navigation";
import { findActiveNavigationGroupId } from "@/lib/navigation";
import { NavigationGroup } from "@/components/navigation/NavigationGroup";
import { NavigationItem } from "@/components/navigation/NavigationItem";

interface NavigationMenuProps {
  menuId: string;
  isCompact: boolean;
  onNavigate: () => void;
  onRequestExpandSidebar?: () => void;
}

export function NavigationMenu({
  menuId,
  isCompact,
  onNavigate,
  onRequestExpandSidebar,
}: NavigationMenuProps) {
  const pathname = usePathname();
  const activeGroupId = findActiveNavigationGroupId(pathname);
  const [expandedGroupIds, setExpandedGroupIds] = useState<string[]>(
    activeGroupId ? [activeGroupId] : [],
  );
  const [trackedGroupId, setTrackedGroupId] = useState(activeGroupId);

  if (activeGroupId !== trackedGroupId) {
    setTrackedGroupId(activeGroupId);
    if (activeGroupId && !expandedGroupIds.includes(activeGroupId)) {
      setExpandedGroupIds((currentGroupIds) => [...currentGroupIds, activeGroupId]);
    }
  }

  function handleToggleGroup(groupId: string): void {
    if (isCompact) {
      onRequestExpandSidebar?.();
      setExpandedGroupIds((currentGroupIds) =>
        currentGroupIds.includes(groupId)
          ? currentGroupIds
          : [...currentGroupIds, groupId],
      );
      return;
    }

    setExpandedGroupIds((currentGroupIds) =>
      currentGroupIds.includes(groupId)
        ? currentGroupIds.filter((currentGroupId) => currentGroupId !== groupId)
        : [...currentGroupIds, groupId],
    );
  }

  return (
    <ul className="navigation-menu">
      {appNavigation.map((entry) => {
        if (isNavigationGroup(entry)) {
          return (
            <NavigationGroup
              key={entry.id}
              group={entry}
              menuId={menuId}
              pathname={pathname}
              isExpanded={expandedGroupIds.includes(entry.id)}
              isCompact={isCompact}
              onToggle={() => handleToggleGroup(entry.id)}
              onNavigate={onNavigate}
            />
          );
        }

        return (
          <li key={entry.id}>
            <NavigationItem
              href={entry.href}
              label={entry.label}
              icon={entry.icon}
              isActive={entry.href === pathname}
              isCompact={isCompact}
              onNavigate={onNavigate}
            />
          </li>
        );
      })}
    </ul>
  );
}
