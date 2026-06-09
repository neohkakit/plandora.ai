import { Navbar } from "@/components/Navbar";
import Link from "next/link";

const features = [
  {
    title: "Launch in minutes",
    description:
      "Pre-built templates and one-click deploys get you from idea to live URL before lunch.",
    icon: "⚡",
  },
  {
    title: "Built for growth",
    description:
      "Analytics, waitlists, and email capture baked in — no duct-taping five tools together.",
    icon: "📈",
  },
  {
    title: "Enterprise-ready",
    description:
      "SSO, audit logs, and 99.9% uptime SLA when you're ready to sell to the big leagues.",
    icon: "🔒",
  },
];

const logos = ["Acme", "Northwind", "Globex", "Initech", "Umbrella"];

const steps = [
  { n: "01", title: "Connect", body: "Link your repo or start from a template." },
  { n: "02", title: "Customize", body: "Edit copy, colors, and sections in one file." },
  { n: "03", title: "Ship", body: "Deploy to Vercel with a single git push." },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 text-center md:pt-24">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Now in public beta
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Ship your SaaS landing page{" "}
            <span className="gradient-text">before the weekend</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Launchpad gives product teams a beautiful one-pager, waitlist capture, and
            deploy-to-Vercel workflow — so you can validate ideas instead of wrestling
            with boilerplate.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-background transition hover:bg-accent-dim"
            >
              Start free
            </a>
            <a
              href="#how"
              className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-full border border-border px-8 text-sm font-medium transition hover:bg-surface"
            >
              See how it works
            </a>
          </div>
          <p className="mt-4 text-xs text-muted">No credit card · Deploy in under 5 minutes</p>

          {/* Product preview mock */}
          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="grid-fade absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-2xl shadow-accent/5 backdrop-blur">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-4 flex-1 rounded-md bg-background/50 py-1 text-center text-xs text-muted">
                  yourproduct.com
                </span>
              </div>
              <div className="space-y-4 p-8 text-left">
                <div className="h-4 w-1/3 rounded bg-foreground/10" />
                <div className="h-8 w-2/3 rounded bg-foreground/15" />
                <div className="h-3 w-full max-w-md rounded bg-foreground/8" />
                <div className="h-3 w-4/5 max-w-sm rounded bg-foreground/8" />
                <div className="mt-6 flex gap-3">
                  <div className="h-10 w-28 rounded-full bg-accent/30" />
                  <div className="h-10 w-28 rounded-full bg-foreground/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo cloud */}
        <section className="border-y border-border bg-surface/30 py-12">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="mb-8 text-sm text-muted">Trusted by teams shipping fast</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {logos.map((name) => (
                <span
                  key={name}
                  className="text-lg font-medium tracking-wide text-foreground/25"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Everything you need to launch
            </h2>
            <p className="mt-4 text-lg text-muted">
              One page. Zero config. Focus on your message, not your stack.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-2xl border border-border bg-surface/50 p-8 transition hover:border-accent/30 hover:bg-surface"
              >
                <span className="text-2xl" aria-hidden>
                  {f.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-t border-border bg-surface/20 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
              Three steps to live
            </h2>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="text-center md:text-left">
                  <span className="font-mono text-sm text-accent">{s.n}</span>
                  <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-lg rounded-3xl border border-border bg-surface/60 p-10 text-center">
            <p className="text-sm font-medium text-accent">Simple pricing</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">
              $0 <span className="text-lg font-normal text-muted">to start</span>
            </h2>
            <p className="mt-4 text-muted">
              Free tier includes hosting, SSL, and up to 1,000 waitlist signups per month.
            </p>
            <ul className="mt-8 space-y-3 text-left text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent">✓</span> Custom domain
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span> Analytics dashboard
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span> Email integrations
              </li>
            </ul>
            <a
              href="#cta"
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background transition hover:opacity-90"
            >
              Get started free
            </a>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="border-t border-border py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Ready to launch?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Join hundreds of founders who shipped their landing page this week.
            </p>
            <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-full border border-border bg-surface px-5 text-sm outline-none transition placeholder:text-muted focus:border-accent/50"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-accent px-8 text-sm font-semibold text-background transition hover:bg-accent-dim"
              >
                Join waitlist
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Launchpad. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition hover:text-foreground">
              Terms
            </a>
            <a href="#" className="transition hover:text-foreground">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
