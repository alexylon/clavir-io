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
          <div className={styles.wrapper} onClick={() => setLightbox("/images/screenshot_dark.png")}>
            <img
              src="/images/screenshot_dark.png"
              alt="Clavirio dark theme — typing lesson with virtual keyboard and live stats"
              className={styles.image}
            />
          </div>
          <div className={styles.wrapper} onClick={() => setLightbox("/images/screenshot_light.png")}>
            <img
              src="/images/screenshot_light.png"
              alt="Clavirio light theme — typing lesson with virtual keyboard and live stats"
              className={styles.image}
            />
          </div>
        </div>
      </div>

      {lightbox && (
        <div className={styles.lightbox} onClick={close}>
          <img src={lightbox} alt="" className={styles.lightboxImage} />
        </div>
      )}
    </section>
  );
}
