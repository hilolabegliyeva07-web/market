import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import { getProduct } from "@/lib/api";
import { formatPrice } from "@/lib/format";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  return { title: product ? `${product.title} — Do'kon` : "Mahsulot topilmadi" };
}

export default async function ProductPage({ params }: Props) {
  // URL'dagi id: /product/5 -> id = "5"
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) notFound();

  return (
    <>
      <Link
        href="/"
        className="inline-block py-6 text-sm text-muted transition-colors hover:text-ink"
      >
        ← Orqaga
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-card p-6">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
            priority
            className="mx-auto"
          />
        </div>

        <div>
          <p className="text-sm text-muted capitalize">{product.category}</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">{product.title}</h1>
          <p className="mt-2 text-sm text-muted">
            Reyting: {product.rating.toFixed(1)} / 5 · Omborda: {product.stock} ta
          </p>

          <p className="mt-5 text-muted">{product.description}</p>

          <div className="mt-8 flex items-center gap-5">
            <p className="text-2xl font-semibold">{formatPrice(product.price)}</p>
            <AddToCartButton
              item={{
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
