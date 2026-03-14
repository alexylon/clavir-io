import { platforms } from "../data/platforms";
import styles from "./Platforms.module.css";

export default function Platforms() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-heading">Cross-platform</h2>
        <p className="section-intro">
          Runs on macOS, Linux, and Windows. The virtual keyboard adapts its modifier labels to your platform.
        </p>
        <div className={styles.grid}>
          {platforms.map((p) => (
            <div className={styles.card} key={p.name}>
              <div className={styles.icon}>{p.icon}</div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
