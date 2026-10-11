"use client";

import { useHydrated } from "@/hooks/useHydrated";
import { useCartStore } from "@/store/useCartStore";
import type { CartItem } from "@/types/product";

export default function AddToCartButton({ item }: { item: Omit<CartItem, "qty"> }) {
  const hydrated = useHydrated();
  const add = useCartStore((s) => s.add);
  const qty = useCartStore((s) => s.items.find((i) => i.id === item.id)?.qty ?? 0);

  return (
    <button
      type="button"
      onClick={() => add(item)}
      className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-brand-ink transition-opacity hover:opacity-90"
    >
      Savatga{hydrated && qty > 0 ? ` (${qty})` : ""}
    </button>
  );
}
