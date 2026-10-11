import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Do'kon",
  description: "Next.js, TypeScript, Tailwind CSS va Zustand bilan yozilgan do'kon.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body className="min-h-dvh antialiased">
        <Header />
        <main className="mx-auto w-full max-w-5xl px-4 pb-16">{children}</main>
      </body>
    </html>
  );
}
