export interface Platform {
  icon: string;
  name: string;
  description: string;
}

export const platforms: Platform[] = [
  {
    icon: "\uF8FF",
    name: "Mac keyboard",
    description: "Virtual keyboard shows \u2318 \u2325 \u2303 modifier labels",
  },
  {
    icon: "\u2328",
    name: "PC keyboard",
    description: "Virtual keyboard shows Win, Alt, and Ctrl modifier labels",
  },
];
