import type { UpcomingTaskItem } from "@/features/dashboard/types/dashboard.types";
import styles from "@/features/dashboard/dashboard.module.css";

interface UpcomingActivitiesProps {
  tasks: UpcomingTaskItem[];
}

export function UpcomingActivities({ tasks }: UpcomingActivitiesProps) {
  return (
    <section className={`surface-card ${styles.panel}`} aria-labelledby="upcoming-activities">
      <h2 id="upcoming-activities" className={styles.panelTitle}>
        Upcoming activities
      </h2>
      {tasks.length === 0 ? (
        <p className={styles.panelNote}>No upcoming tasks.</p>
      ) : (
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.task}>
              <p className={styles.taskTitle}>{task.label}</p>
              <div className={styles.taskMeta}>
                <p className={styles.location}>{task.locationLabel}</p>
                <p className={styles.taskTime}>{task.scheduleLabel}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
