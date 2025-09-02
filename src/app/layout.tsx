import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Shop | Your Online Shopping Destination",
  description: "Modern e-commerce website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="w-full min-h-screen flex flex-col">
          <div className="flex-1 w-full">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
