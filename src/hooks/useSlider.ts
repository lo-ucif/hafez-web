import { useState, useCallback } from 'react';
import { clamp } from '../utils';

/**
 * Generic slider / carousel hook.
 * Returns the active index and prev/next navigation handlers.
 *
 * @param total  - total number of slides
 * @param initial - starting index (default: 0)
 */
export function useSlider(total: number, initial = 0) {
  const [index, setIndex] = useState(initial);

  const next = useCallback(() => {
    setIndex((prev) => clamp(prev + 1, 0, total - 1));
  }, [total]);

  const prev = useCallback(() => {
    setIndex((prev) => clamp(prev - 1, 0, total - 1));
  }, []);

  const goTo = useCallback(
    (i: number) => setIndex(clamp(i, 0, total - 1)),
    [total],
  );

  return { index, next, prev, goTo };
}
