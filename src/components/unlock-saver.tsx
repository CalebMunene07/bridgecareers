"use client";

import { useEffect } from "react";

// Must match UNLOCK_KEY in components/cv/cv-builder.tsx: it unlocks the PDF download in this browser.
const UNLOCK_KEY = "bridge-cv-unlock";

export function UnlockSaver({ code }: { code: string }) {
  useEffect(() => {
    try {
      localStorage.setItem(UNLOCK_KEY, code);
    } catch {
      // Storage unavailable: the visitor can still type the code in the CV maker.
    }
  }, [code]);
  return null;
}
