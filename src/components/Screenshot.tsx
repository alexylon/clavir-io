import { useCallback, useEffect, useState } from "react";
import styles from "./Screenshot.module.css";

const SCREENSHOT_WIDTH = 2680;
const SCREENSHOT_HEIGHT = 2120;

const screenshots = [
  {
    src: "/images/screenshot_dark.webp",
    alt: "clavirio dark theme — typing lesson with virtual keyboard and live stats",
  },
  {
    src: "/images/screenshot_dark_2.webp",
    alt: "clavirio dark theme — results screen with a new best speed, WPM sparkline, weakest keys and each key coloured by its accuracy",
  },
  {
    src: "/images/screenshot_dark_3.webp",
    alt: "clavirio dark theme — lesson menu with virtual keyboard",
  },
  {
    src: "/images/screenshot_light.webp",
    alt: "clavirio light theme — practice menu with virtual keyboard",
  },
];

export default function Screenshot() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox, close]);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {screenshots.map((shot, i) => (
            <div className={styles.wrapper} key={shot.src} onClick={() => setLightbox(shot.src)}>
              <img
                src={shot.src}
                alt={shot.alt}
                width={SCREENSHOT_WIDTH}
                height={SCREENSHOT_HEIGHT}
                loading={i === 0 ? undefined : "lazy"}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className={styles.lightbox} onClick={close}>
          <img src={lightbox} alt="Screenshot enlarged" className={styles.lightboxImage} />
        </div>
      )}
    </section>
  );
}
