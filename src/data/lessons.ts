export interface LayoutLesson {
  num: number;
  name: string;
  qwerty: string;
  dvorak: string;
  colemak: string;
}

export interface SharedLesson {
  num: number;
  name: string;
  detail: string;
}

export const layoutLessons: LayoutLesson[] = [
  { num: 1, name: "Home: Index", qwerty: "f j", dvorak: "u h", colemak: "t n" },
  { num: 2, name: "Home: Middle", qwerty: "d k", dvorak: "e t", colemak: "s e" },
  { num: 3, name: "Home: Ring", qwerty: "s l", dvorak: "o n", colemak: "r i" },
  { num: 4, name: "Home: Pinky", qwerty: "a ;", dvorak: "a s", colemak: "a o" },
  { num: 5, name: "Home: Reach", qwerty: "g h", dvorak: "i d", colemak: "d h" },
  { num: 6, name: "Home Row", qwerty: "full row", dvorak: "full row", colemak: "full row" },
  { num: 7, name: "Home + Shift", qwerty: "+ caps", dvorak: "+ caps", colemak: "+ caps" },
  { num: 8, name: "Top: Index", qwerty: "r u", dvorak: "p g", colemak: "p l" },
  { num: 9, name: "Top: Middle", qwerty: "e i", dvorak: ". c", colemak: "f u" },
  { num: 10, name: "Top: Ring", qwerty: "w o", dvorak: ", r", colemak: "w y" },
  { num: 11, name: "Top: Pinky", qwerty: "q p", dvorak: "' l", colemak: "q ;" },
  { num: 12, name: "Top: Reach", qwerty: "t y", dvorak: "y f", colemak: "g j" },
  { num: 13, name: "Top Row", qwerty: "full row", dvorak: "full row", colemak: "full row" },
  { num: 14, name: "Top + Shift", qwerty: "+ caps", dvorak: "+ caps", colemak: "+ caps" },
  { num: 15, name: "Bottom: Index", qwerty: "v m", dvorak: "k m", colemak: "v m" },
  { num: 16, name: "Bottom: Middle", qwerty: "c ,", dvorak: "j w", colemak: "c ," },
  { num: 17, name: "Bottom: Ring", qwerty: "x .", dvorak: "q v", colemak: "x ." },
  { num: 18, name: "Bottom: Pinky", qwerty: "z /", dvorak: "; z", colemak: "z /" },
  { num: 19, name: "Bottom: Reach", qwerty: "b n", dvorak: "x b", colemak: "b k" },
  { num: 20, name: "Bottom Row", qwerty: "full row", dvorak: "full row", colemak: "full row" },
  { num: 21, name: "Bottom + Shift", qwerty: "+ caps", dvorak: "+ caps", colemak: "+ caps" },
];

export const sharedLessons: SharedLesson[] = [
  { num: 22, name: "Numbers", detail: "1 2 3 4 5 6 7 8 9 0" },
  { num: 23, name: "Symbols I", detail: "/ ? : ' \"" },
  { num: 24, name: "Symbols II", detail: "[ ] { } < > | \\" },
  { num: 25, name: "Symbols III", detail: "` ~ ! - _ + =" },
  { num: 26, name: "Symbols IV", detail: "@ # $ % ^ & * ( )" },
  { num: 27, name: "Numbers & Symbols", detail: "Review" },
];
