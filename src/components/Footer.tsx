import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          <em className="brand-mono">clavirio</em> &mdash; from Latin <em>clavis</em> (key) &bull; Made by <a href="https://alexo.io" target="_blank" rel="noopener noreferrer">Alexander Alexandrov</a> in the EU <img className={styles.flag} src="/images/svg/eu_flag.svg" alt="" /> &bull; Apache License 2.0
        </p>
        <div className={styles.links}>
          <a href="https://github.com/alexylon/clavirio" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://crates.io/crates/clavirio" target="_blank" rel="noopener noreferrer">crates.io</a>
          <a href="https://docs.rs/clavirio" target="_blank" rel="noopener noreferrer">docs.rs</a>
        </div>
      </div>
    </footer>
  );
}
