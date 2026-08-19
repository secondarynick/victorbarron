import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { reflectorBenefits, reflectorPrices, site } from "@/lib/content";
import { photos } from "@/lib/images";

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

      <Section className="bg-paper">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden border border-line bg-mist">
              <Image
                src={photos.reflector}
                alt="Super Spiritual Reflector / Neutralizor"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-8 text-soft">
              In addition to the magnetic grid, Victor was told in 2000 that a
              reflector would one day be needed in the home or office to assist
              and protect the physical body. Our generation of communication has
              made life easier — and produced electromagnetic radiation that
              interferes with the body’s own energy field.
            </p>
            <p className="mt-6 text-lg leading-8 text-soft">
              Once blessed and activated, the Super Spiritual Reflector /
              Neutralizor can be used to protect that field from electromagnetic
              waste and pollution. With God’s blessing. Amen.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-mist">
        <p className="eyebrow">Benefits</p>
        <h2 className="mt-4 text-3xl md:text-4xl">What it is given to do</h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {reflectorBenefits.map((item) => (
            <li
              key={item}
              className="border-l-2 border-accent bg-paper py-3 pl-4 leading-7 text-soft"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-paper">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Prices</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Choose the scale</h2>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {reflectorPrices.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between py-4"
                >
                  <dt className="text-soft">{item.name}</dt>
                  <dd className="font-semibold text-heading">{item.price}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="bg-peach p-10">
            <p className="eyebrow">To order</p>
            <p className="mt-4 text-3xl font-medium text-heading">
              Call the office
            </p>
            <p className="mt-4 leading-8 text-soft">
              For information and current availability, call the Body Mind &
              Spirit Healing Center.
            </p>
            <a href={site.phoneOfficeHref} className="btn btn-solid mt-8">
              {site.phoneOffice}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
