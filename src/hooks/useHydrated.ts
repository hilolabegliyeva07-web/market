"use client";

import { useEffect, useState } from "react";

/** localStorage'dan o'qilgan holat server HTML'i bilan to'qnashmasligi uchun. */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}
