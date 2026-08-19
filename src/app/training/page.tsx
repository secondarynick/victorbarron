import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { daylongWorkshops, site, trainingLevels } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Healer Training & Workshops",
  description:
    "Victor Barron teaches multi-year healer training and daylong workshops at the Body Mind & Spirit Healing Center in Whittier, as well as in Europe and on the East Coast.",
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        title="Healer training"
        lede="From first principles to the highest levels of consciousness — a living school, not a weekend certificate."
      />

      <Section className="mt-6">
        <p className="max-w-2xl leading-8">
          Victor teaches at the Body Mind & Spirit Healing Center in Whittier,
          and also in Europe and on the East Coast. New students should call
          Cecilia at <a href={site.phoneCeciliaHref}>{site.phoneCecilia}</a>.
        </p>
      </Section>

      <div className="mx-auto mt-12 max-w-3xl px-5">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={photos.workshopFire}
            alt="Victor teaching a workshop at the Healing Center"
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="ui mt-3 text-xs text-muted">
          A healer training workshop at the Center.
        </p>
      </div>

      <Section className="mt-14">
        {trainingLevels.map((level) => (
          <article
            key={level.title}
            className="border-t border-hairline py-8 first:border-t-0 first:pt-0"
          >
            <h2 className="text-2xl">{level.title}</h2>
            <p className="ui mt-1 text-[13px] text-muted">{level.levels}</p>
            <p className="mt-4 max-w-2xl leading-8">{level.body}</p>
          </article>
        ))}
      </Section>

      <Section className="mt-8">
        <h2 className="text-2xl">Daylong workshops</h2>
        <p className="mt-4 max-w-2xl leading-8 text-muted">
          For those deepening a spiritual journey without entering the full
          training. Dates are on the <Link href="/calendar">calendar</Link>.
        </p>
        <div className="mt-8 space-y-7">
          {daylongWorkshops.map((workshop) => (
            <div key={workshop.title}>
              <h3 className="text-lg font-medium">{workshop.title}</h3>
              <p className="mt-1.5 max-w-2xl leading-7 text-[16px]">
                {workshop.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="mt-16 mb-24 border-t border-hairline pt-10">
        <p className="max-w-2xl leading-8 text-muted">
          Several sacred healing tools are used in the work, each with a
          special spiritual purpose. Special training and anointments from
          Victor are required to use each one at the highest level.
        </p>
      </Section>
    </>
  );
}
