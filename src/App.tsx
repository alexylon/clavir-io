function copyToClipboard(text: string, btn: HTMLButtonElement) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.innerHTML;
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    setTimeout(() => { btn.innerHTML = original; }, 1500);
  });
}

const CopyButton = ({ text }: { text: string }) => (
  <button
    className="copy-btn"
    title="Copy to clipboard"
    onClick={(e) => copyToClipboard(text, e.currentTarget)}
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  </button>
);

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <a href="/" className="logo">clavirio</a>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#install">Install</a>
            <a href="https://github.com/alexylon/clavirio" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://crates.io/crates/clavirio" target="_blank" rel="noopener noreferrer">crates.io</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>clavirio</h1>
            <p className="tagline">
              A friendly typing tutor that lives in your terminal.
            </p>
            <p className="subtitle">
              Built with Rust and <a href="https://ratatui.rs" target="_blank" rel="noopener noreferrer">ratatui</a>.
              Practice touch typing with progressive lessons, real-time stats, and a virtual keyboard — all without leaving the command line.
            </p>
            <div className="hero-actions">
              <a href="#install" className="btn btn-primary">Get Started</a>
              <a href="https://github.com/alexylon/clavirio" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="screenshot-section">
          <div className="container">
            <div className="screenshot-wrapper">
              <img
                src="/screenshot.png"
                alt="Clavirio running in a terminal — showing a typing lesson with virtual keyboard and live stats"
                className="screenshot"
              />
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2>What you get</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">~</div>
                <h3>15 Progressive Lessons</h3>
                <p>From home row basics to full paragraphs and even Rust code snippets. Lessons are ordered by difficulty so you can build skills gradually.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">&gt;_</div>
                <h3>Live Stats</h3>
                <p>See your WPM, accuracy, elapsed time, and keystrokes as you type. A completion summary highlights your weakest keys.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">&#9000;</div>
                <h3>Virtual Keyboard</h3>
                <p>An on-screen keyboard highlights the next expected key with finger hints (Pinky, Ring, Middle, Index, Thumb). Supports macOS and PC layouts.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">&darr;</div>
                <h3>Session History</h3>
                <p>Results are saved to <code>~/.clavirio/history.json</code>. Browse past sessions, see per-lesson averages, and track your progress over time.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">&#9998;</div>
                <h3>Custom Texts</h3>
                <p>Load any text file via <code>Ctrl-F</code> or pass it as a CLI argument. Practice with your own content.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">&#10003;</div>
                <h3>Just Works</h3>
                <p>No config files, no accounts, no internet needed. Install it, run it, start typing. Sessions are saved on exit — even on SIGTERM.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="install" className="install">
          <div className="container">
            <h2>Install</h2>
            <p className="install-intro">
              Clavirio is a single binary. Pick whichever way works for you:
            </p>
            <div className="install-methods">
              <div className="install-card">
                <h3>From crates.io</h3>
                <div className="code-wrapper">
                  <pre><code>cargo install clavirio</code></pre>
                  <CopyButton text="cargo install clavirio" />
                </div>
              </div>
              <div className="install-card">
                <h3>From source</h3>
                <div className="code-wrapper">
                  <pre><code>{`git clone https://github.com/alexylon/clavirio.git
cd clavirio
cargo build --release`}</code></pre>
                  <CopyButton text={`git clone https://github.com/alexylon/clavirio.git\ncd clavirio\ncargo build --release`} />
                </div>
              </div>
            </div>
            <p className="install-note">
              Then just run <code>clavirio</code> in your terminal. Optionally pass a text file: <code>clavirio mytext.txt</code>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            Made by <a href="https://github.com/alexylon" target="_blank" rel="noopener noreferrer">Alexander Alexandrov</a> &middot; MIT License
          </p>
          <div className="footer-links">
            <a href="https://github.com/alexylon/clavirio" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://crates.io/crates/clavirio" target="_blank" rel="noopener noreferrer">crates.io</a>
            <a href="https://docs.rs/clavirio" target="_blank" rel="noopener noreferrer">docs.rs</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
