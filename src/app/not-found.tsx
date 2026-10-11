import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="text-lg font-medium">Mahsulot topilmadi</p>
      <Link
        href="/"
        className="mt-5 inline-block rounded-lg bg-brand px-5 py-2 text-brand-ink"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
