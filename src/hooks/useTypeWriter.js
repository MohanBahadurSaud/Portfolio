import { useState, useEffect, useRef, useMemo } from "react";

// useTypeWriter
// - Named export `useTypeWriter` so it matches imports in components.
// - Interval/ref-based implementation to avoid effect restart issues.
export const useTypeWriter = (texts, speed = 100, delayBetweenTexts = 2000) => {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  // ensure stable array reference so the hook's effect deps are stable
  const stableTexts = useMemo(() => (Array.isArray(texts) ? texts : []), [texts]);

  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);
  const pauseTicksRef = useRef(0);

  useEffect(() => {
    if (!stableTexts || stableTexts.length === 0) return;

    const ticksPerPause = Math.max(1, Math.round(delayBetweenTexts / Math.max(1, speed)));

    const tick = () => {
      const current = stableTexts[indexRef.current] || "";

      if (!deletingRef.current) {
        // Typing
        if (charRef.current < current.length) {
          charRef.current += 1;
          setDisplayedText(current.slice(0, charRef.current));
        } else {
          // Pause at end before deleting
          if (pauseTicksRef.current < ticksPerPause) {
            pauseTicksRef.current += 1;
          } else {
            pauseTicksRef.current = 0;
            deletingRef.current = true;
          }
        }
      } else {
        // Deleting
        if (charRef.current > 0) {
          charRef.current -= 1;
          setDisplayedText(current.slice(0, charRef.current));
        } else {
          // Advance to next text and start typing
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % stableTexts.length;
        }
      }
    };

    const interval = setInterval(tick, speed);
    return () => clearInterval(interval);
  }, [stableTexts, speed, delayBetweenTexts]);

  // Cursor blink
  useEffect(() => {
    const ci = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(ci);
  }, []);

  return { displayedText, cursorVisible };
};
