import type { Metadata } from "next";
import { plusJakartaSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Launchpad — Ship your product faster",
  description:
    "The all-in-one platform to launch, grow, and scale your SaaS. Start free, no credit card required.",
  openGraph: {
    title: "Launchpad — Ship your product faster",
    description:
      "The all-in-one platform to launch, grow, and scale your SaaS.",
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
