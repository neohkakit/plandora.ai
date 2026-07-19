import { Logo } from "@/components/Logo";
import { WAITLIST_MIND_URL } from "@/lib/contact";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Enterprise", href: "/business" },
];

function NavDivider() {
  return <div className="w-px self-stretch bg-[#e8e8e8]" aria-hidden />;
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d9d9d9] bg-white">
      <nav className="flex h-[50px] items-stretch" aria-label="Primary navigation">
        <Link
          href="/"
          className="flex w-12 shrink-0 items-center justify-center transition-colors hover:bg-black/[0.025] sm:w-[50px]"
          aria-label="Home"
        >
          <Logo size={32} className="h-8 w-8" />
        </Link>

        <NavDivider />

        {navLinks.map((link) => (
          <div key={link.href} className="flex items-stretch">
            <Link
              href={link.href}
              className="flex items-center px-3 text-[14px] font-medium text-[#171717] transition-colors hover:bg-black/[0.025] sm:px-[18px]"
            >
              {link.label}
            </Link>
            <NavDivider />
          </div>
        ))}

        <div className="min-w-0 flex-1" />

        <Link
          href={WAITLIST_MIND_URL}
          className="flex min-w-[120px] shrink-0 items-center justify-center bg-brand-pink px-3 text-[14px] font-medium text-white transition-colors hover:bg-brand-pink-hover sm:min-w-[147px] sm:px-5"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
