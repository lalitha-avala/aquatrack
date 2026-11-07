import type { LucideIcon } from "lucide-react";
import styles from "@/features/dashboard/dashboard.module.css";

interface DashboardStatCardProps {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export function DashboardStatCard({
  label,
  value,
  description,
  icon: Icon,
}: DashboardStatCardProps) {
  return (
    <article className="surface-card h-100">
      <div className={styles.statIcon}>
        <Icon aria-hidden="true" strokeWidth={1.75} />
      </div>
      <h3 className={styles.statLabel}>{label}</h3>
      <p className={styles.statValue}>{value}</p>
      <p className={styles.statDescription}>{description}</p>
    </article>
  );
}
