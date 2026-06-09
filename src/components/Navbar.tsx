import { Logo } from "@/components/Logo";
import Link from "next/link";

const navLinks = [
  { label: "Why", href: "#why" },
  { label: "Creators", href: "#creators" },
];

function NavDivider() {
  return <div className="w-px self-stretch bg-[#e8e8e8]" aria-hidden />;
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e8e8e8] bg-white">
      <div className="flex h-14 items-stretch">
        {/* Logo */}
        <Link
          href="/"
          className="flex w-14 shrink-0 items-center justify-center transition hover:bg-black/[0.02]"
          aria-label="Home"
        >
          <Logo size={40} className="h-10 w-10" />
        </Link>

        <NavDivider />

        {/* Nav links */}
        {navLinks.map((link) => (
          <div key={link.href} className="flex items-stretch">
            <Link
              href={link.href}
              className="flex items-center px-6 text-[15px] font-medium text-black transition hover:bg-black/[0.02]"
            >
              {link.label}
            </Link>
            <NavDivider />
          </div>
        ))}

        {/* Spacer */}
        <div className="min-w-0 flex-1" />

        {/* CTA */}
        <Link
          href="#create"
          className="flex shrink-0 items-center bg-[#ff2d8a] px-6 text-[15px] font-medium text-white transition hover:bg-[#e8287d]"
        >
          Create your mind
        </Link>
      </div>
    </header>
  );
}
