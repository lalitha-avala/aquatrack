import type { RecentActivityItem } from "@/features/dashboard/types/dashboard.types";
import styles from "@/features/dashboard/dashboard.module.css";

interface RecentFarmActivitiesProps {
  activities: RecentActivityItem[];
}

export function RecentFarmActivities({ activities }: RecentFarmActivitiesProps) {
  return (
    <section className={`surface-card ${styles.panel}`} aria-labelledby="recent-farm-activities">
      <h2 id="recent-farm-activities" className={styles.panelTitle}>
        Recent farm activities
      </h2>
      {activities.length === 0 ? (
        <p className={styles.panelNote}>No recent activity recorded.</p>
      ) : (
        <ol className={styles.activityList}>
          {activities.map((activity) => (
            <li key={activity.id} className={styles.activityItem}>
              <div className={styles.activityRail} aria-hidden="true">
                <span className={styles.activityMarker} />
              </div>
              <div className={styles.activityBody}>
                <p className={styles.activityTitle}>{activity.description}</p>
                <p className={styles.location}>{activity.locationLabel}</p>
                <p className={styles.meta}>
                  <time>{activity.timestampLabel}</time>
                </p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
