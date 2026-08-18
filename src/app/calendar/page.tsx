import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { fees, site, upcomingEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Upcoming spiritual sessions, healer trainings, and workshops with Victor Barron at the Body Mind & Spirit Healing Center.",
};

export default function CalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar"
        title="Sessions, workshops, and training"
        lede="Any new student interested in beginner healing workshops should contact Cecilia to sign up."
      />

      <Section className="bg-cream">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">California</p>
            <h2 className="mt-4 font-serif text-4xl">Spiritual sessions</h2>
            <p className="mt-6 leading-8 text-ink-soft">
              In person, phone, or Zoom. Session days fill in advance. When a
              block is already booked, a waiting list is kept.
            </p>
            <a
              href={site.phoneCeciliaHref}
              className="mt-8 inline-flex bg-forest px-6 py-3 text-[0.72rem] tracking-[0.22em] text-cream uppercase"
            >
              Reserve with Cecilia
            </a>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <dl className="divide-y divide-line border-y border-line">
              {fees.map((fee) => (
                <div
                  key={fee.name}
                  className="flex items-baseline justify-between gap-6 py-4"
                >
                  <div>
                    <dt className="font-medium">{fee.name}</dt>
                    <dd className="text-sm text-stone">{fee.detail}</dd>
                  </div>
                  <dd className="shrink-0 text-right text-sm">{fee.price}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-stone">
              Healing Meditation: $40 Zelle / $45 card. Catedra: donations from
              the heart are appreciated.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-parchment">
        <p className="eyebrow">Featured</p>
        <h2 className="mt-4 font-serif text-5xl">Upcoming workshops</h2>
        <div className="mt-12 space-y-8">
          {upcomingEvents.map((event) => (
            <article
              key={event.title}
              className="grid gap-6 border border-line bg-cream p-8 md:grid-cols-12"
            >
              <p className="text-[0.78rem] tracking-[0.16em] text-terracotta uppercase md:col-span-3">
                {event.dates}
                <br />
                {event.time}
              </p>
              <div className="md:col-span-9">
                <h3 className="font-serif text-3xl">{event.title}</h3>
                <p className="mt-2 text-sm text-stone">{event.place}</p>
                <p className="mt-4 leading-8 text-ink-soft">{event.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm leading-7 text-stone">
          Workshop registration continues through the office. Call{" "}
          <a className="text-terracotta underline" href={site.phoneCeciliaHref}>
            {site.phoneCecilia}
          </a>{" "}
          or{" "}
          <a className="text-terracotta underline" href={site.phoneOfficeHref}>
            {site.phoneOffice}
          </a>
          .
        </p>
        <Link
          href="/training"
          className="mt-6 inline-flex text-[0.72rem] tracking-[0.2em] uppercase hover:text-terracotta"
        >
          Read workshop descriptions →
        </Link>
      </Section>
    </>
  );
}
