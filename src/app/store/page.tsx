import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site, storeItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Angels’ Corner Store",
  description:
    "Blessed tools, books, and supplies from the Body Mind & Spirit Healing Center. Call the office to purchase.",
};

export default function StorePage() {
  return (
    <>
      <PageHero
        eyebrow="Angels’ Corner"
        title="Blessed tools for daily life"
        lede="Please call the office for all purchases. Items are prepared and blessed at the Center."
      />

      <Section className="bg-cream">
        <div className="mb-12 flex flex-col gap-4 border border-line p-6 md:flex-row md:items-center md:justify-between">
          <p className="text-ink-soft">
            Office:{" "}
            <a className="text-terracotta underline" href={site.phoneOfficeHref}>
              {site.phoneOffice}
            </a>
          </p>
          <Link
            href="/reflector"
            className="text-[0.72rem] tracking-[0.2em] uppercase hover:text-terracotta"
          >
            Super Spiritual Reflector →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {storeItems.map((item) => (
            <article key={item.name} className="border-t border-line pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-2xl">{item.name}</h2>
                <p className="shrink-0 text-sm tracking-wide">{item.price}</p>
              </div>
              <p className="mt-3 leading-7 text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
