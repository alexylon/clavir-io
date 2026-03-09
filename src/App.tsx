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

const lessons = [
  { num: 1, name: "f j", detail: "Index fingers" },
  { num: 2, name: "d k", detail: "Index + middle" },
  { num: 3, name: "s l ;", detail: "Ring + pinky" },
  { num: 4, name: "a s d f j k l ;", detail: "Full home row" },
  { num: 5, name: "g h", detail: "Home row complete" },
  { num: 6, name: "e i r u", detail: "Top row reach" },
  { num: 7, name: "q w e r t y u i o p", detail: "Full top row" },
  { num: 8, name: "z x c v b n m , .", detail: "Bottom row" },
  { num: 9, name: "All Letters", detail: "Pangrams" },
  { num: 10, name: "Capitals & Shift", detail: "Mixed case" },
  { num: 11, name: "0–9 Numbers", detail: "Numbers in context" },
  { num: 12, name: "Punctuation & Symbols", detail: "Special characters" },
  { num: 13, name: "Common Words", detail: "High-frequency words" },
  { num: 14, name: "Full Paragraphs", detail: "Real-world text" },
  { num: 15, name: "Code (Rust)", detail: "Programming syntax" },
];

const keybindings = [
  { keys: "↑ / k  ↓ / j", action: "Navigate lessons or scroll history" },
  { keys: "Enter", action: "Start selected lesson" },
  { keys: "h", action: "Open session history" },
  { keys: "Ctrl-F", action: "Load a custom text file" },
  { keys: "Ctrl-R", action: "Restart current lesson" },
  { keys: "Esc", action: "Return to menu / quit" },
  { keys: "r", action: "Restart after completion" },
];

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <a href="/" className="logo">clavirio</a>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#lessons">Lessons</a>
            <a href="#install">Install</a>
            <a href="https://github.com/alexylon/clavirio" target="_blank" rel="noopener noreferrer">GitHub</a>
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
              From Latin <em>clavis</em> (key). Built with Rust
              and <a href="https://ratatui.rs" target="_blank" rel="noopener noreferrer">ratatui</a>.
              Progressive lessons, real-time stats, a virtual keyboard with finger hints — all without leaving the command line.
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
                <p>From home-row basics to full paragraphs and Rust code. Lessons are ordered by difficulty so you build skills gradually. The menu auto-advances to your next unfinished lesson.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">&gt;_</div>
                <h3>Live Stats</h3>
                <p>WPM, accuracy, elapsed time, and keystroke counts update as you type. A completion summary highlights your weakest keys so you know what to practice next.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">&#9000;</div>
                <h3>Virtual Keyboard</h3>
                <p>An on-screen keyboard highlights the next expected key in real time. Finger hints (Pinky, Ring, Middle, Index, Thumb) help you learn proper hand placement. Adapts to macOS and PC layouts.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">&darr;</div>
                <h3>Session History</h3>
                <p>Results are saved to <code>~/.clavirio/history.json</code> automatically. Browse past sessions, view per-lesson averages, and track your improvement over time.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">&#9998;</div>
                <h3>Custom Texts</h3>
                <p>Load any text file with <code>Ctrl-F</code> or pass it as a CLI argument. Practice typing with your own content — code, prose, anything.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">&#10003;</div>
                <h3>Just Works</h3>
                <p>No config files, no accounts, no internet needed. A single binary — install it, run it, start typing. Sessions are saved on exit, even on SIGTERM.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="lessons" className="lessons">
          <div className="container">
            <h2>15 Built-in Lessons</h2>
            <p className="section-intro">
              Each lesson introduces new keys and builds on the previous ones. Start from the home row and work your way up to full paragraphs and code.
            </p>
            <div className="lesson-grid">
              {lessons.map((l) => (
                <div className="lesson-item" key={l.num}>
                  <span className="lesson-num">{l.num}</span>
                  <span className="lesson-name">{l.name}</span>
                  <span className="lesson-detail">{l.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="keybindings" className="keybindings">
          <div className="container">
            <h2>Keyboard Controls</h2>
            <p className="section-intro">
              Navigate with Vim-style keys or arrows. Everything is one or two keystrokes away.
            </p>
            <div className="keybinding-list">
              {keybindings.map((kb) => (
                <div className="keybinding-row" key={kb.keys}>
                  <kbd>{kb.keys}</kbd>
                  <span>{kb.action}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="platforms">
          <div className="container">
            <h2>Cross-platform</h2>
            <p className="section-intro">
              Runs on any terminal that supports UTF-8. The virtual keyboard adapts its modifier keys to your OS.
            </p>
            <div className="platform-grid">
              <div className="platform-card">
                <div className="platform-icon">&#63743;</div>
                <h3>macOS</h3>
                <p>Native support with &#8984; &#8997; &#8963; modifier keys</p>
              </div>
              <div className="platform-card">
                <div className="platform-icon">&#128039;</div>
                <h3>Linux</h3>
                <p>Full support on X11 and Wayland terminals</p>
              </div>
              <div className="platform-card">
                <div className="platform-icon">&#8862;</div>
                <h3>Windows</h3>
                <p>Works with Win, Alt, and Ctrl modifier keys</p>
              </div>
            </div>
          </div>
        </section>

        <section id="install" className="install">
          <div className="container">
            <h2>Install</h2>
            <p className="section-intro">
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
              Then run <code>clavirio</code> in your terminal. Or pass a text file directly: <code>clavirio mytext.txt</code>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            Made by <a href="https://alexo.io" target="_blank" rel="noopener noreferrer">Alexander Alexandrov</a> &middot; MIT License
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
