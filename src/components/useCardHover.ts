"use client";

import { useRef, useState, type MouseEvent } from "react";

export function useCardHover<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [hovered, setHovered] = useState(false);
  const [clipped, setClipped] = useState(false);

  const onEnter = () => {
    setHovered(true);
    const el = ref.current;
    if (el) setClipped(el.getBoundingClientRect().bottom > window.innerHeight);
  };
  const onLeave = (e: MouseEvent) => {
    requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) {
        setHovered(false);
        setClipped(false);
        return;
      }
      const r = el.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;
      const inside =
        x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
      if (!inside) {
        setHovered(false);
        setClipped(false);
      }
    });
  };

  return { ref, onEnter, onLeave, hovered, describeOnly: hovered && clipped };
}
