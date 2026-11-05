import { useState, useEffect } from "react";
export default function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState(initial);
  useEffect(() => {
    const first = requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem(key);
        if (saved !== null) setValue(JSON.parse(saved) as T);
      } catch {
        /* A blocked store or malformed value keeps the initial state. */
      }
    });
    return () => cancelAnimationFrame(first);
  }, [key]);
  const save = (next: T) => {
    setValue(next);
    try {
      window.localStorage.setItem(key, JSON.stringify(next));
    } catch {
      /* The control remains usable when storage is unavailable. */
    }
  };
  return [value, save] as const;
}
