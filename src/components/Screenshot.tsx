import { useCallback, useEffect, useState } from "react";
import styles from "./Screenshot.module.css";

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
          <div className={styles.wrapper} onClick={() => setLightbox("/images/screenshot_dark.webp")}>
            <img
              src="/images/screenshot_dark.webp"
              alt="clavirio dark theme — typing lesson with virtual keyboard and live stats"
              width={2742}
              height={2112}
              className={styles.image}
            />
          </div>
          <div className={styles.wrapper} onClick={() => setLightbox("/images/screenshot_light.webp")}>
            <img
              src="/images/screenshot_light.webp"
              alt="clavirio light theme — typing lesson with virtual keyboard and live stats"
              width={2742}
              height={2112}
              loading="lazy"
              className={styles.image}
            />
          </div>
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
