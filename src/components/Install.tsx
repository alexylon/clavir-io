import CopyButton from "./CopyButton";
import styles from "./Install.module.css";

const APT_INSTALL = `sudo install -d /etc/apt/keyrings
sudo wget -qO /etc/apt/keyrings/clavirio.gpg https://clavir.io/apt/clavirio.gpg
echo "deb [signed-by=/etc/apt/keyrings/clavirio.gpg] https://clavir.io/apt stable main" | sudo tee /etc/apt/sources.list.d/clavirio.list
sudo apt update
sudo apt install clavirio`;

const SNAP_INSTALL = "sudo snap install clavirio";

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
            <h3>Debian and Ubuntu (apt)</h3>
            <p className={styles.cardNote}>
              Add the clavirio apt repository once, then install and update it with apt. Debian 12, Ubuntu 22.04 and newer, on amd64 and arm64:
            </p>
            <div className={styles.codeWrapper}>
              <pre><code>{APT_INSTALL}</code></pre>
              <CopyButton text={APT_INSTALL} />
            </div>
          </div>
          <div className={styles.card}>
            <h3>Snap</h3>
            <p className={styles.cardNote}>
              From the <a href="https://snapcraft.io/clavirio" target="_blank" rel="noopener noreferrer">Snap Store</a> or the Ubuntu App Center:
            </p>
            <div className={styles.codeWrapper}>
              <pre><code>{SNAP_INSTALL}</code></pre>
              <CopyButton text={SNAP_INSTALL} />
            </div>
          </div>
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
              <strong>Linux:</strong> The binary is for x86_64 and runs on Debian 12, Ubuntu 22.04 and newer.
            </p>
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
            <p className={styles.cardHint}>
              With <a href="https://github.com/cargo-bins/cargo-binstall" target="_blank" rel="noopener noreferrer">cargo-binstall</a>, <code>cargo binstall clavirio</code> downloads the prebuilt binary instead of building it.
            </p>
          </div>
        </div>
        <p className={styles.note}>
          Then run <code>clavirio</code> in your terminal, or jump straight into a mode:
        </p>
        <pre className={styles.cli}><code>{`clavirio                    # lessons menu
clavirio -w                 # random words
clavirio -t 60              # timed 60s
clavirio -t 60 -l words.txt # your own words
clavirio -f mytext.txt      # custom file`}</code></pre>
        <p className={styles.note}>
          Session history and preferences are stored in <code>~/.clavirio/</code>, or in <code>~/snap/clavirio/current/.clavirio/</code> for the snap.
        </p>
      </div>
    </section>
  );
}
