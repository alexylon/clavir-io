import { features } from "../data/features";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <h2 className="section-heading">Features</h2>
        <div className={styles.grid}>
          {features.map((f) => (
            <div className={styles.card} key={f.title}>
              <div className={styles.icon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
