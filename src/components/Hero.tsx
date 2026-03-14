import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <img src="/images/png/icon_gunmetal_scanlines_512.png" alt="" width={100} height={100} className={styles.icon} />
        <h1 className={styles.title}>clavirio</h1>
        <p className={styles.tagline}>
          Learn touch typing without leaving the terminal.
        </p>
        <p className={styles.subtitle}>
          A free, open-source typing tutor with progressive lessons for QWERTY, Dvorak & Colemak — real-time stats,
          a virtual keyboard with finger hints, and session history. Made with Rust.
        </p>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => document.getElementById("install")?.scrollIntoView({ behavior: "smooth" })}>Get Started</button>
          <a href="https://github.com/alexylon/clavirio" className={styles.btnSecondary} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
