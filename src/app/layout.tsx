import type { Metadata } from "next";
import { plusJakartaSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plandora | AI for Creators and Businesses to run 24/7",
  description:
    "Plandora is an AI Agent with your Digital Mind to answer repeated questions, sells products and recommend affiliate 24/7 for creators and businesses.",
  openGraph: {
    title: "Plandora | AI for Creators and Businesses to run 24/7",
    description:
      "Plandora is an AI Agent with your Digital Mind to answer repeated questions, sells products and recommend affiliate 24/7 for creators and businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white font-sans text-black">
        {children}
      </body>
    </html>
  );
}
