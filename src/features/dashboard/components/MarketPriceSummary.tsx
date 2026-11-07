import Link from "next/link";
import type { MarketPriceSummaryRow } from "@/features/dashboard/types/dashboard.types";
import styles from "@/features/dashboard/dashboard.module.css";

interface MarketPriceSummaryProps {
  prices: MarketPriceSummaryRow[];
  marketPricesHref: string;
}

export function MarketPriceSummary({ prices, marketPricesHref }: MarketPriceSummaryProps) {
  return (
    <section className={`surface-card ${styles.panel}`} aria-labelledby="market-price-summary">
      <div className={styles.panelHeader}>
        <div>
          <h2 id="market-price-summary" className={styles.panelTitle}>
            Today&apos;s market prices
          </h2>
          <p className={styles.panelNote}>
            Illustrative sample figures for layout only. These are not live or current market rates.
          </p>
        </div>
        <Link href={marketPricesHref} className="aq-button aq-button--secondary">
          View market prices
        </Link>
      </div>

      <ul className={`${styles.recordList} d-lg-none`}>
        {prices.map((price) => (
          <li key={price.id} className={styles.record}>
            <p className={styles.recordTitle}>{price.shrimpCountLabel}</p>
            <dl className={styles.detailGrid}>
              <div>
                <dt>Price per kg</dt>
                <dd>{price.pricePerKgLabel}</dd>
              </div>
              <div>
                <dt>Previous price</dt>
                <dd>{price.previousPriceLabel}</dd>
              </div>
              <div>
                <dt>Movement</dt>
                <dd>{price.movementLabel}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      <div className={`${styles.tableWrap} d-none d-lg-block`}>
        <table className={`table table-borderless ${styles.table}`}>
          <caption className="visually-hidden">Illustrative shrimp price sample</caption>
          <thead>
            <tr>
              <th scope="col">Shrimp count</th>
              <th scope="col">Price per kg</th>
              <th scope="col">Previous price</th>
              <th scope="col">Price movement</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((price) => (
              <tr key={price.id}>
                <th scope="row">{price.shrimpCountLabel}</th>
                <td>{price.pricePerKgLabel}</td>
                <td>{price.previousPriceLabel}</td>
                <td>{price.movementLabel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
