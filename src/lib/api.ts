import type { Product, ProductsResponse } from "@/types/product";

const BASE_URL = "https://dummyjson.com";

/** Barcha mahsulotlar: GET /products */
export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products?limit=20`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Mahsulotlarni yuklab bo'lmadi");

  const data: ProductsResponse = await res.json();
  return data.products;
}

/** Bitta mahsulot id bo'yicha: GET /products/:id */
export async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    next: { revalidate: 3600 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Mahsulotni yuklab bo'lmadi");

  return res.json();
}
