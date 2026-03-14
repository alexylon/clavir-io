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
      "From home-row basics to full paragraphs and Rust code. Lessons 1\u20139 are tailored to each keyboard layout (QWERTY, Dvorak, Colemak); lessons 10\u201315 are shared. The menu auto-advances to your next unfinished lesson.",
  },
  {
    icon: ">_",
    title: "Live Stats",
    description:
      "WPM, accuracy, elapsed time, keystroke counts, and line progress update as you type. A completion summary highlights your weakest keys so you know what to practice next.",
  },
  {
    icon: "\u2328",
    title: "Virtual Keyboard",
    description:
      "An on-screen keyboard highlights the next expected key (including Shift) in real time. Finger hints (Pinky, Ring, Middle, Index, Thumb) on the top border help you learn proper hand placement. Adapts to macOS and PC layouts.",
  },
  {
    icon: "\u2699",
    title: "Keyboard Layouts",
    description:
      "Supports QWERTY, Dvorak, and Colemak. Switch layouts with a single keystroke from the main menu.",
  },
  {
    icon: "\u2717",
    title: "Error Feedback",
    description:
      "Wrong keystrokes are shown inline and block progress until corrected with Backspace. Learn accuracy, not just speed.",
  },
  {
    icon: "\u2193",
    title: "Session History",
    description:
      "Results are saved to ~/.clavirio/history.json automatically. Browse past sessions with per-lesson tracking, view averages, and track your improvement over time.",
  },
  {
    icon: "\u263C",
    title: "Display Settings",
    description:
      "Toggle finger hints, key hints, the virtual keyboard, and dark/light theme from the main menu. All preferences are saved to ~/.clavirio/settings.toml.",
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
