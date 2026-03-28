import { useState } from "react";
import { layoutLessons, sharedLessons } from "../data/lessons";
import styles from "./Lessons.module.css";

const layouts = ["qwerty", "dvorak", "colemak"] as const;
type Layout = (typeof layouts)[number];

export default function Lessons() {
  const [layout, setLayout] = useState<Layout>("qwerty");

  return (
    <section id="lessons" className={styles.section}>
      <div className="container">
        <h2 className="section-heading">27 Built-in Lessons</h2>
        <p className="section-intro">
          A universal finger-pair system: 2 new keys per lesson, same physical
          positions across all 3 layouts. Lessons 1–21 are layout-specific;
          22–27 cover numbers and symbols.
        </p>

        <div className={styles.tabs}>
          {layouts.map((l) => (
            <button
              key={l}
              className={`${styles.tab} ${l === layout ? styles.tabActive : ""}`}
              onClick={() => setLayout(l)}
            >
              {l === "qwerty" ? "QWERTY" : l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {layoutLessons.map((l) => (
            <div className={styles.item} key={l.num}>
              <span className={styles.num}>{l.num}</span>
              <span className={styles.name}>{l.name}</span>
              <span className={styles.detail}>{l[layout]}</span>
            </div>
          ))}
          {sharedLessons.map((l) => (
            <div className={styles.item} key={l.num}>
              <span className={styles.num}>{l.num}</span>
              <span className={styles.name}>{l.name}</span>
              <span className={styles.detail}>{l.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
