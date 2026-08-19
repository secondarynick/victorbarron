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
        eyebrow="Training"
        title="Learn the work"
        lede="From first principles to the Highest Levels of Consciousness — a living school, not a weekend certificate."
        image={photos.workshopFire}
      />

      <Section className="bg-paper">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-8 text-soft">
            Victor teaches at the Body Mind & Spirit Healing Center in Whittier,
            and also in Europe and on the East Coast. The multi-year programs
            take you from the basics of spiritual healing up to advanced levels,
            where you work at the Highest Levels of Consciousness for many
            different kinds of healing.
          </p>
          <p className="mt-6 text-sm font-semibold tracking-wide text-accent uppercase">
            New students: call Cecilia at {site.phoneCecilia}
          </p>
        </div>

        <div className="mt-16 grid gap-6">
          {trainingLevels.map((level, index) => (
            <article
              key={level.title}
              className="grid gap-6 border border-line p-8 md:grid-cols-12 md:p-10"
            >
              <p className="text-5xl font-light text-accent md:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="md:col-span-9">
                <p className="eyebrow">{level.levels}</p>
                <h2 className="mt-2 text-3xl font-medium">{level.title}</h2>
                <p className="mt-5 text-base leading-8 text-soft">
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
            src={photos.workshopCircle}
            alt="Workshop at the Healing Center"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="bg-peach px-8 py-16 md:px-14">
          <p className="eyebrow">Sacred instruments</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Tools of the work</h2>
          <p className="mt-6 max-w-md text-base leading-8 text-soft">
            Several healing tools can be used to help people and clear spaces.
            Each has a special spiritual purpose. Special training and
            anointments from Victor are required to use each one at the Highest
            Level.
          </p>
        </div>
      </section>

      <Section className="bg-mist">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Daylong workshops</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            For those deepening a spiritual journey
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {daylongWorkshops.map((workshop) => (
            <article
              key={workshop.title}
              className="border-t-2 border-accent bg-paper p-7"
            >
              <h3 className="text-xl font-medium">{workshop.title}</h3>
              <p className="mt-3 text-base leading-7 text-soft">
                {workshop.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/calendar" className="btn btn-solid">
            See upcoming dates
          </Link>
        </div>
      </Section>
    </>
  );
}
