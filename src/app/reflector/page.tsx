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
        title="Super Spiritual Reflector"
        lede="A blessed instrument of God — activated to protect the physical body’s energy field as you sleep and work."
      />

      <Section narrow className="prose-site mt-10 leading-8">
        <p>
          In addition to the magnetic grid, Victor was told in 2000 that a
          reflector would one day be needed in the home or office to assist and
          protect the physical body. Our generation of communication has made
          life easier — and produced electromagnetic radiation that interferes
          with the body’s own energy field.
        </p>
        <p>
          Once blessed and activated, the Super Spiritual Reflector /
          Neutralizor protects that field from electromagnetic waste and
          pollution. With God’s blessing. Amen.
        </p>
      </Section>

      <div className="mx-auto mt-12 max-w-6xl px-6"><div className="max-w-2xl">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={photos.reflector}
            alt="The Super Spiritual Reflector / Neutralizor"
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="ui mt-3 text-xs text-muted">
          The Reflector / Neutralizor, blessed at the Center.
        </p>
      </div></div>

      <Section narrow className="mt-14">
        <h2 className="text-2xl">What it is given to do</h2>
        <ul className="mt-4 list-disc space-y-1.5 pl-5 leading-8 marker:text-muted/60">
          {reflectorBenefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section narrow className="mt-16 mb-24">
        <h2 className="text-2xl">Prices</h2>
        <dl className="mt-6 max-w-2xl divide-y divide-hairline border-y border-hairline">
          {reflectorPrices.map((item) => (
            <div
              key={item.name}
              className="flex items-baseline justify-between py-4"
            >
              <dt>{item.name}</dt>
              <dd className="ui text-[15px]">{item.price}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4">
          To order, call the office at{" "}
          <a href={site.phoneOfficeHref}>{site.phoneOffice}</a>.
        </p>
      </Section>
    </>
  );
}
