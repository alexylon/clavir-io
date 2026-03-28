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
          <button onClick={() => scrollTo("methodology")}>Methodology</button>
          <button onClick={() => scrollTo("features")}>Features</button>
          <button onClick={() => scrollTo("lessons")}>Lessons</button>
          <button onClick={() => scrollTo("keybindings")}>Controls</button>
          <button onClick={() => scrollTo("install")}>Install</button>
        </nav>
      </div>
    </header>
  );
}
