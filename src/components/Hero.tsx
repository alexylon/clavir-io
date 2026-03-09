import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>clavirio</h1>
        <p className={styles.tagline}>
          A friendly typing tutor that lives in your terminal.
        </p>
        <p className={styles.subtitle}>
          From Latin <em>clavis</em> (key). Built with Rust
          and <a href="https://ratatui.rs" target="_blank" rel="noopener noreferrer">ratatui</a>.
          Progressive lessons, real-time stats, a virtual keyboard with finger hints — all without leaving the command line.
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
