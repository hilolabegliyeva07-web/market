import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/product";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card">
      <Link href={`/product/${product.id}`} className="bg-paper p-4">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
          className="mx-auto"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-muted capitalize">{product.category}</p>
        <h2 className="mt-1 font-medium">
          <Link href={`/product/${product.id}`} className="hover:underline">
            {product.title}
          </Link>
        </h2>

        <div className="mt-auto flex items-center justify-between pt-4">
          <p className="font-semibold">{formatPrice(product.price)}</p>
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
    </article>
  );
}
