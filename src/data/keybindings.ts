export interface Keybinding {
  keys: string;
  action: string;
}

export const keybindings: Keybinding[] = [
  { keys: "\u2191 \u2193 / k j", action: "Navigate lessons or scroll history" },
  { keys: "Enter", action: "Start selected lesson or practice" },
  { keys: "m", action: "Toggle Lessons / Practice mode" },
  { keys: "l", action: "Cycle layout: QWERTY \u2192 Dvorak \u2192 Colemak" },
  { keys: "1 \u2013 4", action: "Toggle fingers, hints, keyboard, theme" },
  { keys: "h", action: "Open session history" },
  { keys: "Ctrl-F", action: "Load a custom text file" },
  { keys: "Ctrl-R", action: "Restart current lesson" },
  { keys: "Backspace", action: "Correct a mistake" },
  { keys: "Ctrl-C", action: "Save and quit immediately" },
  { keys: "Esc", action: "Pause / save and return to menu" },
  { keys: "q", action: "Quit (from pause or menu)" },
  { keys: "r", action: "Restart after completion" },
  { keys: "w", action: "Weak-key drill (on finished screen)" },
];
