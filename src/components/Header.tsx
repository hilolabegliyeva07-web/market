"use client";

import Link from "next/link";
import { useHydrated } from "@/hooks/useHydrated";
import { useCartStore } from "@/store/useCartStore";

export default function Header() {
  const hydrated = useHydrated();
  const count = useCartStore((s) => s.items.reduce((sum, i) => sum + i.qty, 0));

  return (
    <header className="border-b border-line bg-card">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Do&apos;kon
        </Link>

        <Link
          href="/cart"
          className="rounded-full bg-brand px-4 py-2 text-sm text-brand-ink"
        >
          Savat ({hydrated ? count : 0})
        </Link>
      </div>
    </header>
  );
}
