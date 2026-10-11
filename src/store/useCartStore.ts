import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { CartItem } from "@/types/product";

interface CartState {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  remove: (id: number) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      add: (item) =>
        set((s) =>
          s.items.some((i) => i.id === item.id)
            ? {
                items: s.items.map((i) =>
                  i.id === item.id ? { ...i, qty: i.qty + 1 } : i,
                ),
              }
            : { items: [...s.items, { ...item, qty: 1 }] },
        ),

      increase: (id) =>
        set((s) => ({
          items: s.items.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)),
        })),

      decrease: (id) =>
        set((s) => ({
          items: s.items
            .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
            .filter((i) => i.qty > 0),
        })),

      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),

      clear: () => set({ items: [] }),
    }),
    {
      name: "shop-cart",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
