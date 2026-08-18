import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { daylongWorkshops, site, trainingLevels } from "@/lib/content";

export const metadata: Metadata = {
  title: "Healer Training & Workshops",
  description:
    "Victor Barron teaches multi-year healer training and daylong workshops at the Body Mind & Spirit Healing Center in Whittier, as well as in Europe and on the East Coast.",
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Learn the work"
        lede="From first principles to the Highest Levels of Consciousness — a living school, not a weekend certificate."
        image="/images/workshop-2.webp"
      />

      <Section className="bg-cream">
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-ink-soft">
            Victor teaches at the Body Mind & Spirit Healing Center in Whittier,
            and also in Europe and on the East Coast. The multi-year programs
            take you from the basics of spiritual healing up to advanced levels,
            where you work at the Highest Levels of Consciousness for many
            different kinds of healing.
          </p>
          <p className="mt-6 text-sm tracking-wide text-stone uppercase">
            New students: call Cecilia at {site.phoneCecilia}
          </p>
        </div>

        <div className="mt-16 grid gap-8">
          {trainingLevels.map((level, index) => (
            <article
              key={level.title}
              className="grid gap-6 border border-line p-8 md:grid-cols-12 md:p-10"
            >
              <p className="font-serif text-5xl text-gold md:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="md:col-span-9">
                <p className="eyebrow">{level.levels}</p>
                <h2 className="mt-2 font-serif text-4xl">{level.title}</h2>
                <p className="mt-5 text-base leading-8 text-ink-soft">
                  {level.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[320px]">
          <Image
            src="/images/workshop-4.webp"
            alt="Workshop at the Healing Center"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-forest px-8 py-16 text-cream md:px-14">
          <p className="eyebrow">Sacred instruments</p>
          <h2 className="mt-4 font-serif text-4xl">Tools of the work</h2>
          <p className="mt-6 max-w-md text-base leading-8 text-cream/75">
            Several healing tools can be used to help people and clear spaces.
            Each has a special spiritual purpose. Special training and
            anointments from Victor are required to use each one at the Highest
            Level.
          </p>
        </div>
      </section>

      <Section className="bg-parchment">
        <p className="eyebrow">Daylong workshops</p>
        <h2 className="mt-4 max-w-2xl font-serif text-5xl leading-tight">
          For those deepening a spiritual journey without entering the full
          training
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {daylongWorkshops.map((workshop) => (
            <article key={workshop.title}>
              <h3 className="font-serif text-2xl">{workshop.title}</h3>
              <p className="mt-3 text-base leading-7 text-ink-soft">
                {workshop.body}
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/calendar"
          className="mt-12 inline-flex bg-forest px-6 py-3 text-[0.72rem] tracking-[0.22em] text-cream uppercase"
        >
          See upcoming dates
        </Link>
      </Section>
    </>
  );
}
