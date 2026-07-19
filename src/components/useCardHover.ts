"use client";

import { useRef, useState } from "react";

export function useCardHover<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [hovered, setHovered] = useState(false);
  const [clipped, setClipped] = useState(false);

  const onEnter = () => {
    setHovered(true);
    const el = ref.current;
    if (el) setClipped(el.getBoundingClientRect().bottom > window.innerHeight);
  };
  const onLeave = () => {
    setHovered(false);
    setClipped(false);
  };

  return { ref, onEnter, onLeave, describeOnly: hovered && clipped };
}
