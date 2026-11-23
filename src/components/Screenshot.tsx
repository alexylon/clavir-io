import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type TouchEvent,
} from "react";
import { createPortal } from "react-dom";
import styles from "./Screenshot.module.css";

interface Shot {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

const DEMO_SIZE = { width: 1600, height: 1193 };
const SCREENSHOT_SIZE = { width: 2600, height: 1938 };
// The demo's first frame, shown until the animation has loaded, and instead of
// it for visitors who ask for less motion
const DEMO_STILL = "/images/demo_still.webp";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
// The distance a finger has to move sideways for a swipe to turn the image
const SWIPE_DISTANCE = 50;
// How near the screen the demo has to come for its animation to start loading
const NEAR_SCREEN = "200px";

const demo: Shot = {
  src: "/images/demo.gif",
  alt: "clavirio dark theme — typing a lesson with capitals: the next key, its finger and Shift light up, wrong keys flash orange, then the results colour each key by its accuracy",
  caption: "Typing a lesson",
  ...DEMO_SIZE,
};

const screenshots: Shot[] = [
  {
    src: "/images/screenshot_dark.webp",
    alt: "clavirio dark theme — typing practice with virtual keyboard, finger and Shift hints and live stats",
    caption: "Typing practice",
    ...SCREENSHOT_SIZE,
  },
  {
    src: "/images/screenshot_dark_2.webp",
    alt: "clavirio dark theme — results screen with a new best speed, WPM sparkline, weakest keys and each key coloured by its accuracy",
    caption: "Results",
    ...SCREENSHOT_SIZE,
  },
  {
    src: "/images/screenshot_dark_3.webp",
    alt: "clavirio dark theme — lesson menu with virtual keyboard",
    caption: "Lesson menu",
    ...SCREENSHOT_SIZE,
  },
  {
    src: "/images/screenshot_light.webp",
    alt: "clavirio light theme — practice menu with virtual keyboard",
    caption: "Practice menu, light theme",
    ...SCREENSHOT_SIZE,
  },
];

const shots = [demo, ...screenshots];

const isZoomed = () => (window.visualViewport?.scale ?? 1) > 1;

export default function Screenshot() {
  const [current, setCurrent] = useState<number | null>(null);
  const [demoSrc, setDemoSrc] = useState(DEMO_STILL);
  const main = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const isOpen = current !== null;
  const srcOf = (index: number) => (index === 0 ? demoSrc : shots[index].src);

  // The animation, much larger than the still, loads once the demo comes near
  // the screen and then takes its place, unless the visitor asks for less
  // motion, now or later, or to save data
  useEffect(() => {
    const target = main.current;
    const reducedMotion = window.matchMedia(REDUCED_MOTION);
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (saveData || !target) return;

    let cancelled = false;
    let near = false;
    let loaded = false;
    const animation = new Image();

    const show = () => {
      if (!cancelled) setDemoSrc(loaded && !reducedMotion.matches ? demo.src : DEMO_STILL);
    };

    const update = () => {
      if (near && !reducedMotion.matches && !animation.src) animation.src = demo.src;
      show();
    };

    animation.onload = () => {
      loaded = true;
      show();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        near = true;
        observer.disconnect();
        update();
      },
      { rootMargin: NEAR_SCREEN },
    );
    observer.observe(target);
    reducedMotion.addEventListener("change", update);

    return () => {
      cancelled = true;
      observer.disconnect();
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  const open = (index: number) => (e: MouseEvent<HTMLButtonElement>) => {
    opener.current = e.currentTarget;
    setCurrent(index);
  };

  const close = useCallback(() => setCurrent(null), []);
  const turn = useCallback(
    (step: number) => setCurrent((i) => (i === null ? i : (i + step + shots.length) % shots.length)),
    [],
  );

  // While open, the dialog holds the focus and the page behind it doesn't
  // scroll; on closing, the focus goes back to the image that opened it
  useEffect(() => {
    if (!isOpen) return;

    const overlay = dialog.current;
    const { overflow, paddingRight } = document.body.style;

    // The hidden scrollbar's width, added to the body's padding so the page
    // doesn't shift sideways
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const padding = parseFloat(getComputedStyle(document.body).paddingRight) || 0;

    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${padding + scrollbar}px`;

    // iOS scrolls the page behind on a one-finger drag despite the hidden
    // overflow. A pinch still zooms, and a drag still moves around a zoomed
    // page or an overlay too tall for the screen.
    const holdPage = (e: globalThis.TouchEvent) => {
      const scrolls = overlay !== null && overlay.scrollHeight > overlay.clientHeight;
      if (e.touches.length === 1 && !isZoomed() && !scrolls) e.preventDefault();
    };
    overlay?.addEventListener("touchmove", holdPage, { passive: false });

    // The rest of the page is out of reach, for screen readers too, until the
    // gallery closes
    const background = [...document.body.children].filter(
      (element): element is HTMLElement => element instanceof HTMLElement && element !== overlay && !element.inert,
    );
    background.forEach((element) => (element.inert = true));

    overlay?.focus();

    const keepFocusInside = (e: KeyboardEvent) => {
      const buttons = [...(overlay?.querySelectorAll("button") ?? [])];
      if (buttons.length === 0) return;

      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      const active = document.activeElement;
      const inside = active instanceof HTMLButtonElement && buttons.includes(active);

      if (e.shiftKey && (!inside || active === first)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (!inside || active === last)) {
        e.preventDefault();
        first.focus();
      }
    };

    const onKey = (e: KeyboardEvent) => {
      // With a modifier, an arrow is a browser shortcut, such as Alt-Left for back
      const modified = e.altKey || e.ctrlKey || e.metaKey;

      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight" && !modified) turn(1);
      else if (e.key === "ArrowLeft" && !modified) turn(-1);
      else if (e.key === "Tab") keepFocusInside(e);
    };

    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      overlay?.removeEventListener("touchmove", holdPage);
      background.forEach((element) => (element.inert = false));
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      opener.current?.focus();
    };
  }, [isOpen, close, turn]);

  // Clicks on the image and the buttons mustn't reach the backdrop, which closes
  const onButton = (action: () => void) => (e: MouseEvent) => {
    e.stopPropagation();
    action();
  };

  // The image's left half turns back and its right half forward, like a page,
  // so a tap that just misses an arrow still goes its way
  const onImage = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    const { left, width } = e.currentTarget.getBoundingClientRect();
    turn(e.clientX < left + width / 2 ? -1 : 1);
  };

  const onTouchStart = (e: TouchEvent) => {
    // A second finger, as in a pinch zoom, isn't a swipe
    touchStart.current = e.touches.length === 1 ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null;
  };

  const onTouchEnd = (e: TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    // On a zoomed page, a drag moves around the zoomed view
    if (!start || isZoomed()) return;

    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) >= SWIPE_DISTANCE && Math.abs(dx) > Math.abs(dy)) turn(dx < 0 ? 1 : -1);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <button type="button" ref={main} className={styles.main} onClick={open(0)}>
          <img src={demoSrc} alt={demo.alt} width={demo.width} height={demo.height} className={styles.image} />
        </button>
        <div className={styles.thumbnails}>
          {screenshots.map((s, i) => (
            <button type="button" className={styles.thumbnail} key={s.src} onClick={open(i + 1)}>
              <img src={s.src} alt={s.alt} width={s.width} height={s.height} loading="lazy" className={styles.image} />
            </button>
          ))}
        </div>
      </div>

      {/* Outside the page, in the body, so the page can be made inert */}
      {current !== null &&
        createPortal(
          <div
            ref={dialog}
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Screenshots"
            tabIndex={-1}
            onClick={close}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <figure className={styles.figure}>
              <div className={styles.frame}>
                {/* A new element for each image, sized before it loads, so the
                    last image doesn't stay under the new caption */}
                <img
                  key={current}
                  src={srcOf(current)}
                  alt={shots[current].alt}
                  width={shots[current].width}
                  height={shots[current].height}
                  className={styles.lightboxImage}
                  style={{ "--ratio": shots[current].width / shots[current].height } as CSSProperties}
                  onClick={onImage}
                />
                {/* Close, shown above the image, comes first in the Tab order */}
                <button type="button" className={`${styles.control} ${styles.close}`} aria-label="Close" onClick={onButton(close)}>
                  ×
                </button>
                <button type="button" className={`${styles.control} ${styles.prev}`} aria-label="Previous image" onClick={onButton(() => turn(-1))}>
                  ‹
                </button>
                <button type="button" className={`${styles.control} ${styles.next}`} aria-label="Next image" onClick={onButton(() => turn(1))}>
                  ›
                </button>
              </div>
              <figcaption className={styles.caption} aria-live="polite">
                {current + 1} / {shots.length} · {shots[current].caption}
              </figcaption>
            </figure>
          </div>,
          document.body,
        )}
    </section>
  );
}
