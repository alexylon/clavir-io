import { keybindings } from "../data/keybindings";
import styles from "./Keybindings.module.css";

export default function Keybindings() {
  return (
    <section id="keybindings" className={styles.section}>
      <div className="container">
        <h2 className="section-heading">Keyboard Controls</h2>
        <p className="section-intro">
          Navigate with Vim-style keys or arrows. Everything is one or two keystrokes away.
        </p>
        <div className={styles.list}>
          {keybindings.map((kb) => (
            <div className={styles.row} key={kb.keys}>
              <kbd className={styles.kbd}>{kb.keys}</kbd>
              <span className={styles.action}>{kb.action}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
