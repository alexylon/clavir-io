export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "~",
    title: "27 Progressive Lessons",
    description:
      "A universal finger-pair system \u2014 2 new keys per lesson, same physical positions across all 3 layouts. Each row follows index \u2192 middle \u2192 ring \u2192 pinky \u2192 reach \u2192 full row \u2192 row + Shift. Lessons 1\u201321 are layout-specific; 22\u201327 cover numbers and symbols.",
  },
  {
    icon: "\u25B6",
    title: "Practice Modes",
    description:
      "Random words (english 200/1k), code keywords (Rust, Python, JavaScript, Go, C/C++, Java, HTML/CSS), timed sessions, common bigrams, real quotes, weak-key drills, and Zen free-typing. Toggle punctuation and numbers injection with 5/6 in practice mode.",
  },
  {
    icon: ">_",
    title: "Live Stats",
    description:
      "WPM, accuracy, elapsed time, keystroke counts, and line progress update as you type. The completion screen shows a WPM sparkline graph and your weakest keys.",
  },
  {
    icon: "\u2328",
    title: "Virtual Keyboard",
    description:
      "An on-screen keyboard highlights the next expected key (including Shift) in real time. Finger hints help you learn proper hand placement. Supports QWERTY, Dvorak, and Colemak \u2014 switch layouts with a single keystroke. Adapts to macOS and PC modifier labels.",
  },
  {
    icon: "\u2717",
    title: "Error Feedback",
    description:
      "Two modes: error stop off (default) lets you type past mistakes with backspace correction within the current word; error stop on blocks until corrected. Toggle with key 4.",
  },
  {
    icon: "\u2193",
    title: "Session History",
    description:
      "Browse past sessions with per-lesson tracking and view averages. Results are saved automatically between sessions.",
  },
  {
    icon: "\u263C",
    title: "Display Settings",
    description:
      "Toggle finger hints, key hints, the virtual keyboard, error stop, and dark/light theme from the main menu. Preferences including menu mode are saved automatically across sessions.",
  },
  {
    icon: "\u270E",
    title: "Custom Texts",
    description:
      "Load any text file with Ctrl-F or pass it as a CLI argument. Practice typing with your own content \u2014 code, prose, anything.",
  },
  {
    icon: "\u2713",
    title: "Just Works",
    description:
      "No accounts, no internet, no setup needed. A single binary \u2014 install it, run it, start typing. In-progress sessions are saved on exit.",
  },
];
