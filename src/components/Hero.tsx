import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <img src="/images/icon.svg" alt="" width={80} height={80} className={styles.icon} />
        <h1 className={styles.title}>clavirio</h1>
        <p className={styles.tagline}>
          Learn touch typing without leaving the terminal.
        </p>
        <p className={styles.subtitle}>
          Progressive lessons for QWERTY, Dvorak & Colemak. Real-time stats, a virtual keyboard
          with finger hints, and session history — in a fast, lightweight
          binary built with Rust
          and <a href="https://ratatui.rs" target="_blank" rel="noopener noreferrer">ratatui</a>.
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
