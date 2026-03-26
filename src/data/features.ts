export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "~",
    title: "15 Progressive Lessons",
    description:
      "From home-row basics to full paragraphs and Rust code. Lessons 1\u20139 are tailored to each keyboard layout; lessons 10\u201315 are shared across all three.",
  },
  {
    icon: "\u25B6",
    title: "Practice Modes",
    description:
      "Random words, timed sessions, common bigrams, real quotes, weak-key drills targeting your least accurate characters, and a free-typing Zen mode. Toggle between Lessons and Practice with the m key.",
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
      "An on-screen keyboard highlights the next expected key (including Shift) in real time. Finger hints help you learn proper hand placement. Supports QWERTY, Dvorak, and Colemak — switch layouts with a single keystroke. Adapts to macOS and PC modifier labels.",
  },
  {
    icon: "\u2717",
    title: "Error Feedback",
    description:
      "Wrong keystrokes are shown inline and block progress until corrected with Backspace.",
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
      "Toggle finger hints, key hints, the virtual keyboard, and dark/light theme from the main menu. Preferences are saved automatically.",
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
