import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site, storeItems } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Angels’ Corner Store",
  description:
    "Blessed tools, books, and supplies from the Body Mind & Spirit Healing Center. Call the office to purchase.",
};

export default function StorePage() {
  return (
    <>
      <PageHero
        title="Angels’ Corner"
        lede="Blessed tools for daily life, prepared at the Center. Please call the office for all purchases."
        image={photos.virginMary}
        imageAlt="Image of the Blessed Virgin Mary of Guadalupe at the Center"
      />

      <Section narrow className="mt-6">
        <p className="text-lg">
          Office: <a href={site.phoneOfficeHref}>{site.phoneOffice}</a> · Also
          see the <Link href="/reflector">Super Spiritual Reflector</Link>.
        </p>
      </Section>

      <Section narrow className="mt-14 mb-24">
        <div className="divide-y divide-hairline border-y border-hairline">
          {storeItems.map((item) => (
            <article key={item.name} className="py-6">
              <div className="flex items-baseline justify-between gap-6">
                <h2 className="text-xl font-medium">{item.name}</h2>
                <p className="ui shrink-0 text-[15px]">{item.price}</p>
              </div>
              <p className="mt-2 max-w-2xl leading-7 text-[16px]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
