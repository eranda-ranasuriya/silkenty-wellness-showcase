import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/logo.asset.json";
import hero from "@/assets/hero.asset.json";
import detox from "@/assets/detox.jpg";
import purify from "@/assets/purify.jpg";
import awakening from "@/assets/awakening.jpg";
import rejuvenate from "@/assets/rejuvenate.jpg";
import evolve from "@/assets/evolve.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Silkenty — Wellness Tea, Real Loose Leaf Blends" },
      {
        name: "description",
        content:
          "Silkenty wellness teas: five real loose-leaf blends — Detox Reboot, Purify, Awakening, Rejuvenate and Evolve — made with whole botanicals.",
      },
      { property: "og:title", content: "Silkenty — Wellness Tea" },
      {
        property: "og:description",
        content: "Five loose-leaf wellness blends made with real botanicals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "Detox Reboot",
    sub: "Moringa & Lemongrass",
    image: detox,
    desc: "A clean green reset for heavy days and slow mornings.",
    tone: "leaf" as const,
  },
  {
    name: "Purify",
    sub: "Kidney Health",
    image: purify,
    desc: "Gentle herbs infused with natural pomegranate for daily cleansing.",
    tone: "zest" as const,
  },
  {
    name: "Awakening",
    sub: "Memory Recall",
    image: awakening,
    desc: "Gotu kola and green leaf for clarity, focus and a quiet lift.",
    tone: "leaf" as const,
  },
  {
    name: "Rejuvenate",
    sub: "Sugar Balancing",
    image: rejuvenate,
    desc: "Cooling mint and gymnema to keep the day in balance.",
    tone: "leaf" as const,
  },
  {
    name: "Evolve",
    sub: "Get Fit Tea",
    image: evolve,
    desc: "Green tea, garcinia and orange peel for everyday momentum.",
    tone: "zest" as const,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative isolate min-h-[80vh] flex flex-col overflow-hidden">
        <img
          src={hero.url}
          alt="Misty tea hills at sunrise with a cast-iron teapot and a Silkenty tin"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/10" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
          <img src={logo.url} alt="Silkenty" className="h-14 w-auto mix-blend-multiply" />
          <div className="hidden items-center gap-9 text-sm text-foreground/70 sm:flex">
            <a href="#products" className="transition-colors hover:text-primary">
              Blends
            </a>
            <a href="#story" className="transition-colors hover:text-primary">
              Our story
            </a>
            <a
              href="#shop"
              className="rounded-full bg-primary px-5 py-2 text-primary-foreground transition-colors hover:bg-accent"
            >
              Shop
            </a>
          </div>
        </nav>

        <div className="mx-auto flex max-w-7xl flex-col justify-center flex-1 px-6 pt-10 pb-24">
          <p className="eyebrow text-accent">Real loose leaf · Grown, not manufactured</p>
          <h1 className="mt-6 max-w-2xl text-5xl leading-[1.05] sm:text-7xl">
            Tea that does <em className="not-italic text-primary">something</em> for you.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Five wellness blends of whole leaves, roots and petals — picked at origin and
            packed into silk pyramids. No dust, no filler, no shortcuts.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Shop the five blends
            </a>
            <a
              href="#story"
              className="rounded-full border border-primary/30 px-8 py-3.5 text-sm font-medium tracking-wide text-primary transition-colors hover:bg-leaf-soft"
            >
              Our story
            </a>
          </div>
        </div>
      </header>

      {/* Products */}
      <main>
        <section id="products" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-primary">The collection</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Five blends, five intentions</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Each tin holds 18–23 whole-leaf pyramids. Choose the one that matches how you
              want to feel.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_50px_-30px_color-mix(in_oklab,var(--color-leaf)_60%,transparent)]"
              >
                <div className="relative overflow-hidden bg-cream">
                  <img
                    src={p.image}
                    alt={`Silkenty ${p.name} loose leaf tea tin`}
                    loading="lazy"
                    width={912}
                    height={1104}
                    className="h-80 w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-5 top-5 rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${
                      p.tone === "leaf"
                        ? "bg-leaf-soft text-primary"
                        : "bg-zest-soft text-secondary-foreground"
                    }`}
                  >
                    {p.sub}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 border-t border-border p-7">
                  <h3 className="text-2xl">{p.name}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <a
                    href="#shop"
                    className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-accent"
                  >
                    Add to cart <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}

            <article className="flex flex-col justify-center gap-4 rounded-2xl border border-dashed border-primary/40 bg-leaf-soft/50 p-9">
              <h3 className="text-2xl">Try all five</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The Silkenty Discovery Set — one tin of every blend, a full week of rituals
                in each.
              </p>
              <a
                href="#shop"
                className="mt-2 w-fit rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                Shop the set
              </a>
            </article>
          </div>
        </section>

        {/* Brand story */}
        <section id="story" className="border-y border-border bg-cream">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-accent">Our story</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">
                Wellness begins with what's really in the cup.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Silkenty began on the hill country estates where the leaf is still picked by
                hand. We blend it with moringa, gotu kola, mint, pomegranate and orange peel
                — real ingredients you can see floating in the pyramid, never ground into
                dust.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Three minutes of steam and stillness. That small ritual is the whole point.
              </p>
            </div>
            <dl className="grid gap-5 sm:grid-cols-2">
              {[
                ["Whole leaf", "Visible botanicals in every silk pyramid."],
                ["Single origin", "Grown and blended at the estate."],
                ["Nothing added", "No sugar, no flavouring, no colour."],
                ["A daily ritual", "Five blends for five ways to feel."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-xl border border-border bg-card p-6">
                  <dt className="text-lg text-primary">{title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Closing CTA */}
        <section id="shop" className="mx-auto max-w-3xl px-6 py-28 text-center">
          <img src={logo.url} alt="Silkenty" className="mx-auto h-16 w-auto mix-blend-multiply" />
          <h2 className="mt-8 text-4xl sm:text-5xl">Begin your ritual</h2>
          <p className="mt-5 text-muted-foreground">
            Free delivery on the Discovery Set. Steep, breathe, repeat.
          </p>
          <a
            href="#products"
            className="mt-9 inline-block rounded-full bg-accent px-10 py-4 text-sm font-medium tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Shop Silkenty
          </a>
        </section>
      </main>

      <footer className="border-t border-border bg-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Silkenty Wellness Tea</p>
          <div className="flex gap-7">
            <a href="#products" className="hover:text-primary">
              Blends
            </a>
            <a href="#story" className="hover:text-primary">
              Story
            </a>
            <a href="#shop" className="hover:text-primary">
              Shop
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
