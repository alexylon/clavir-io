export interface Keybinding {
  keys: string;
  action: string;
}

export const keybindings: Keybinding[] = [
  { keys: "\u2191 \u2193 / k j", action: "Navigate lessons or scroll history" },
  { keys: "Enter", action: "Start selected lesson or practice" },
  { keys: "m", action: "Toggle Lessons / Practice mode" },
  { keys: "l", action: "Cycle layout: QWERTY \u2192 Dvorak \u2192 Colemak" },
  { keys: "1 \u2013 3", action: "Toggle fingers, hints, keyboard" },
  { keys: "4", action: "Toggle error stop" },
  { keys: "t", action: "Cycle theme" },
  { keys: "5 / 6", action: "Toggle punctuation / numbers (practice only)" },
  { keys: "7", action: "Toggle shift error (needs a terminal with the kitty keyboard protocol)" },
  { keys: "h", action: "Open session history" },
  { keys: "Ctrl-F", action: "Load a custom text file" },
  { keys: "Ctrl-R", action: "Restart current lesson" },
  { keys: "Backspace", action: "Correct a mistake" },
  { keys: "Esc", action: "Pause / save and return to menu" },
  { keys: "r", action: "Retype the same text (on finished screen)" },
  { keys: "w", action: "Weak-key drill (on finished screen)" },
  { keys: "n", action: "Next lesson (on finished screen or pause menu), or the same practice with new text" },
  { keys: "Ctrl-C", action: "Save and quit immediately" },
  { keys: "q", action: "Quit (from pause or menu)" },
];
