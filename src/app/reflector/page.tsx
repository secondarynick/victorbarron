import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { reflectorBenefits, reflectorPrices, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Super Spiritual Reflector",
  description:
    "The Super Spiritual Reflector / Neutralizor is a blessed instrument for protecting the physical body’s energy field from electromagnetic interference.",
};

export default function ReflectorPage() {
  return (
    <>
      <PageHero
        eyebrow="Blessed instrument"
        title="Super Spiritual Reflector"
        lede="An instrument of God, blessed and activated to protect the physical body’s energy field as you sleep and work."
      />

      <Section className="bg-cream">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-square overflow-hidden bg-sand">
              <Image
                src="/images/reflector.webp"
                alt="Super Spiritual Reflector"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-8 text-ink-soft">
              In addition to the magnetic grid, Victor was told in 2000 that a
              reflector would one day be needed in the home or office to assist
              and protect the physical body. Our generation of communication has
              made life easier — and produced electromagnetic radiation that
              interferes with the body’s own energy field.
            </p>
            <p className="mt-6 text-lg leading-8 text-ink-soft">
              Once blessed and activated, the Super Spiritual Reflector /
              Neutralizor can be used to protect that field from electromagnetic
              waste and pollution. With God’s blessing. Amen.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-parchment">
        <p className="eyebrow">Benefits</p>
        <h2 className="mt-4 font-serif text-4xl">What it is given to do</h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {reflectorBenefits.map((item) => (
            <li key={item} className="border-l border-gold pl-4 leading-7">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-cream">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Prices</p>
            <h2 className="mt-4 font-serif text-4xl">Choose the scale</h2>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {reflectorPrices.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between py-4"
                >
                  <dt>{item.name}</dt>
                  <dd className="tracking-wide">{item.price}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="bg-forest p-10 text-cream">
            <p className="eyebrow">To order</p>
            <p className="mt-4 font-serif text-3xl">Call the office</p>
            <p className="mt-4 leading-8 text-cream/75">
              For information and current availability, call the Body Mind &
              Spirit Healing Center.
            </p>
            <a
              href={site.phoneOfficeHref}
              className="mt-8 inline-flex bg-gold px-6 py-3 text-[0.72rem] tracking-[0.22em] text-forest-deep uppercase"
            >
              {site.phoneOffice}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
