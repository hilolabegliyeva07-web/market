"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="py-20 text-center">
      <p className="text-lg font-medium">Nimadir xato ketdi</p>
      <p className="mt-1 text-muted">Ma&apos;lumotlarni yuklab bo&apos;lmadi.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-5 rounded-lg bg-brand px-5 py-2 text-brand-ink"
      >
        Qayta urinish
      </button>
    </div>
  );
}
