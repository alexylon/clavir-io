import CopyButton from "./CopyButton";
import styles from "./Install.module.css";

const SOURCE_CMD = `git clone https://github.com/alexylon/clavirio.git
cd clavirio
cargo build --release`;

export default function Install() {
  return (
    <section id="install" className={styles.section}>
      <div className="container">
        <h2 className="section-heading">Install</h2>
        <p className="section-intro">
          <span className="brand-mono">clavirio</span> is a single binary. Requires <a href="https://www.rust-lang.org/tools/install" target="_blank" rel="noopener noreferrer">Rust</a> &mdash; pick whichever way works for you:
        </p>
        <div className={styles.methods}>
          <div className={styles.card}>
            <h3>From crates.io</h3>
            <div className={styles.codeWrapper}>
              <pre><code>cargo install clavirio</code></pre>
              <CopyButton text="cargo install clavirio" />
            </div>
          </div>
          <div className={styles.card}>
            <h3>From source</h3>
            <div className={styles.codeWrapper}>
              <pre><code>{SOURCE_CMD}</code></pre>
              <CopyButton text={SOURCE_CMD} />
            </div>
          </div>
        </div>
        <p className={styles.note}>
          Then run <code>clavirio</code> in your terminal, or jump straight into a mode:
        </p>
        <pre className={styles.cli}><code>{`clavirio               # lessons menu
clavirio -w            # random words
clavirio -t 60         # timed 60s
clavirio -f mytext.txt # custom file`}</code></pre>
        <p className={styles.note}>
          Session history and preferences are stored in <code>~/.clavirio/</code>.
        </p>
      </div>
    </section>
  );
}
