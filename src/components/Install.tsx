import CopyButton from "./CopyButton";
import styles from "./Install.module.css";

export default function Install() {
  return (
    <section id="install" className={styles.section}>
      <div className="container">
        <h2 className="section-heading">Install</h2>
        <p className="section-intro">
          <span className="brand-mono">clavirio</span> is a single binary. Pick whichever way works for you:
        </p>
        <div className={styles.methods}>
          <div className={styles.card}>
            <h3>Prebuilt binary</h3>
            <p className={styles.cardNote}>
              Download from <a href="https://github.com/alexylon/clavirio/releases/latest" target="_blank" rel="noopener noreferrer">GitHub Releases</a> (macOS, Linux, Windows), then:
            </p>
            <pre className={styles.preNoCopy}><code>{`# macOS / Linux
tar xzf clavirio-*.tar.gz
sudo mv clavirio /usr/local/bin/

# Windows — extract the .zip,
# then add the folder to your PATH`}</code></pre>
            <p className={styles.cardHint}>
              <strong>macOS:</strong> On first run, macOS may block the binary. Go to System Settings &rarr; Privacy &amp; Security and click <em>Allow Anyway</em>.
            </p>
          </div>
          <div className={styles.card}>
            <h3>With Rust</h3>
            <p className={styles.cardNote}>
              Requires <a href="https://www.rust-lang.org/tools/install" target="_blank" rel="noopener noreferrer">Rust</a> toolchain:
            </p>
            <div className={styles.codeWrapper}>
              <pre><code>cargo install clavirio</code></pre>
              <CopyButton text="cargo install clavirio" />
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
