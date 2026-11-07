import type { ActiveCropOverviewItem } from "@/features/dashboard/types/dashboard.types";
import styles from "@/features/dashboard/dashboard.module.css";

interface ActiveCropOverviewProps {
  crops: ActiveCropOverviewItem[];
}

export function ActiveCropOverview({ crops }: ActiveCropOverviewProps) {
  return (
    <section className={`surface-card ${styles.panel}`} aria-labelledby="active-crop-overview">
      <div className={styles.panelHeader}>
        <div>
          <h2 id="active-crop-overview" className={styles.panelTitle}>
            Active crop overview
          </h2>
          <p className={styles.panelNote}>Crop cycles currently being tracked on your ponds.</p>
        </div>
      </div>

      {crops.length === 0 ? (
        <p className={styles.panelNote}>No active crop cycles yet.</p>
      ) : (
        <>
          <ul className={`${styles.recordList} d-lg-none`}>
            {crops.map((crop) => (
              <li key={crop.id} className={styles.record}>
                <p className={styles.recordTitle}>
                  {crop.farmName} · {crop.pondName}
                </p>
                <dl className={styles.detailGrid}>
                  <div>
                    <dt>Species</dt>
                    <dd>{crop.species}</dd>
                  </div>
                  <div>
                    <dt>Stocking date</dt>
                    <dd>{crop.stockingDateLabel}</dd>
                  </div>
                  <div>
                    <dt>Crop age</dt>
                    <dd>{crop.cropAgeDays} days</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>{crop.status}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>

          <div className={`${styles.tableWrap} d-none d-lg-block`}>
            <table className={`table table-borderless ${styles.table}`}>
              <caption className="visually-hidden">Active crop cycles</caption>
              <thead>
                <tr>
                  <th scope="col">Farm</th>
                  <th scope="col">Pond</th>
                  <th scope="col">Species</th>
                  <th scope="col">Stocking date</th>
                  <th scope="col">Crop age</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {crops.map((crop) => (
                  <tr key={crop.id}>
                    <td>{crop.farmName}</td>
                    <td>{crop.pondName}</td>
                    <td>{crop.species}</td>
                    <td>{crop.stockingDateLabel}</td>
                    <td>{crop.cropAgeDays} days</td>
                    <td>{crop.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}
