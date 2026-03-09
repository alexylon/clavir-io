import styles from "./Header.module.css";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>clavirio</button>
        <nav className={styles.nav}>
          <button onClick={() => scrollTo("features")}>Features</button>
          <button onClick={() => scrollTo("lessons")}>Lessons</button>
          <button onClick={() => scrollTo("install")}>Install</button>
          <a href="https://github.com/alexylon/clavirio" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </header>
  );
}
