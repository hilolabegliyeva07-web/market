# Do'kon

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Zustand.
Mahsulotlar https://dummyjson.com API'dan olinadi.

## Ishga tushirish

```bash
npm install
npm run dev
```

http://localhost:3000

## Sahifalar

| Manzil          | Nima qiladi                                    |
| --------------- | ---------------------------------------------- |
| `/`             | Mahsulotlar ro'yxati (`GET /products`)         |
| `/product/[id]` | Bitta mahsulot id bo'yicha (`GET /products/id`) |
| `/cart`         | Savat: miqdorni o'zgartirish, o'chirish, jami   |

## Tuzilma

```
src/
  app/          sahifalar (page, product/[id], cart, loading, error, not-found)
  components/   Header, ProductCard, AddToCartButton
  lib/          api.ts (fetch funksiyalari), format.ts
  store/        useCartStore.ts (zustand, localStorage'da saqlanadi)
  types/        product.ts
```
