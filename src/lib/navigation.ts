import {
  appNavigation,
  isNavigationGroup,
  type NavigationLinkItem,
} from "@/config/navigation";

export function buildPathname(section?: string[]): string {
  if (!section || section.length === 0) {
    return "/";
  }

  return `/${section.join("/")}`;
}

export function findNavigationLink(pathname: string): NavigationLinkItem | undefined {
  for (const entry of appNavigation) {
    if (isNavigationGroup(entry)) {
      const matchingChild = entry.children.find((child) => child.href === pathname);
      if (matchingChild) {
        return matchingChild;
      }
    } else if (entry.href === pathname) {
      return entry;
    }
  }

  return undefined;
}

export function findActiveNavigationGroupId(pathname: string): string | undefined {
  for (const entry of appNavigation) {
    if (
      isNavigationGroup(entry) &&
      entry.children.some((child) => child.href === pathname)
    ) {
      return entry.id;
    }
  }

  return undefined;
}
