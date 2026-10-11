"use client";

import Image from "next/image";
import Link from "next/link";
import { useHydrated } from "@/hooks/useHydrated";
import { formatPrice } from "@/lib/format";
import { useCartStore } from "@/store/useCartStore";

export default function CartPage() {
  const hydrated = useHydrated();
  const items = useCartStore((s) => s.items);
  const increase = useCartStore((s) => s.increase);
  const decrease = useCartStore((s) => s.decrease);
  const remove = useCartStore((s) => s.remove);
  const clear = useCartStore((s) => s.clear);

  if (!hydrated) return null;

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <h1 className="py-8 text-3xl font-semibold tracking-tight">Savat</h1>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line py-16 text-center">
          <p className="text-muted">Savat bo&apos;sh</p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-5 py-2 text-brand-ink"
          >
            Mahsulotlarni ko&apos;rish
          </Link>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-line rounded-2xl border border-line bg-card">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-4 p-4">
                <Link href={`/product/${item.id}`} className="shrink-0">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={72}
                    height={72}
                    className="rounded-lg bg-paper"
                  />
                </Link>

                <div className="min-w-0 flex-1">
                  <Link
                    href={`/product/${item.id}`}
                    className="block truncate font-medium hover:underline"
                  >
                    {item.title}
                  </Link>
                  <p className="text-sm text-muted">{formatPrice(item.price)}</p>
                </div>

                <div className="inline-flex items-center rounded-lg border border-line">
                  <button
                    type="button"
                    onClick={() => decrease(item.id)}
                    aria-label="Kamaytirish"
                    className="size-9 hover:bg-paper"
                  >
                    −
                  </button>
                  <span className="min-w-8 text-center tabular-nums">{item.qty}</span>
                  <button
                    type="button"
                    onClick={() => increase(item.id)}
                    aria-label="Ko'paytirish"
                    className="size-9 hover:bg-paper"
                  >
                    +
                  </button>
                </div>

                <p className="hidden w-24 text-right font-medium tabular-nums sm:block">
                  {formatPrice(item.price * item.qty)}
                </p>

                <button
                  type="button"
                  onClick={() => remove(item.id)}
                  aria-label={`${item.title} ni o'chirish`}
                  className="px-2 text-muted transition-colors hover:text-danger"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={clear}
              className="text-sm text-muted underline-offset-4 hover:text-danger hover:underline"
            >
              Savatni tozalash
            </button>
            <p className="text-xl font-semibold">Jami: {formatPrice(total)}</p>
          </div>
        </>
      )}
    </>
  );
}
