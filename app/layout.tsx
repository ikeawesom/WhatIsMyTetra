import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elementaire | Unlock your team potential",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-radial to-slate-200 from-white ${inter.className} flex flex-col w-full items-center justify-center`}
      >
        {children}
        <p className="text-sm text-gray-400 text-center mb-4">
          Created by Ike Lim.
        </p>
      </body>
    </html>
  );
}
