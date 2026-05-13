"use client";

import { createContext, useContext } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ReducedMotionContext = createContext(false);

export function ReducedMotionProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <ReducedMotionContext.Provider value={prefersReducedMotion}>
      {children}
    </ReducedMotionContext.Provider>
  );
}

export function useReducedMotionPreference() {
  return useContext(ReducedMotionContext);
}
