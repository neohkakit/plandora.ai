import type { Metadata } from "next";
import { plusJakartaSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mind-in-Bio",
  description:
    "A link-in-bio with your mind that sells and converts using storytelling for creators and businesses.",
  openGraph: {
    title: "Mind-in-Bio",
    description:
      "A link-in-bio with your mind that sells and converts using storytelling for creators and businesses.",
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
