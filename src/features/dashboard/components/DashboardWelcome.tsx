import Link from "next/link";
import styles from "@/features/dashboard/dashboard.module.css";

interface DashboardWelcomeProps {
  welcomeMessage: string;
  overview: string;
  currentDateLabel: string;
  quickActionHref: string;
  quickActionLabel: string;
}

export function DashboardWelcome({
  welcomeMessage,
  overview,
  currentDateLabel,
  quickActionHref,
  quickActionLabel,
}: DashboardWelcomeProps) {
  return (
    <section className={`surface-card ${styles.welcome}`} aria-labelledby="dashboard-welcome">
      <div>
        <p className={styles.eyebrow}>Farmer workspace</p>
        <h2 id="dashboard-welcome" className={styles.title}>
          {welcomeMessage}
        </h2>
        <p className={styles.overview}>{overview}</p>
        <p className={styles.meta}>{currentDateLabel}</p>
      </div>
      <Link href={quickActionHref} className="aq-button aq-button--primary">
        {quickActionLabel}
      </Link>
    </section>
  );
}
