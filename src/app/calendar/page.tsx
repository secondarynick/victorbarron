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
        title="Calendar"
        lede="Sessions, workshops, and training at the Center. New students interested in beginner workshops should contact Cecilia to sign up."
      />

      <Section narrow className="mt-6">
        <p className="text-lg">
          Reserve with Cecilia at{" "}
          <a href={site.phoneCeciliaHref}>{site.phoneCecilia}</a> or the office
          at <a href={site.phoneOfficeHref}>{site.phoneOffice}</a>.
        </p>
      </Section>

      <Section narrow className="mt-14">
        <h2 className="text-2xl">Upcoming workshops</h2>
        <div className="mt-6 space-y-8">
          {upcomingEvents.map((event) => (
            <article
              key={event.title}
              className="border-t border-hairline pt-6 first:border-t-0 first:pt-0"
            >
              <p className="ui text-[13px] text-muted">
                {event.dates} · {event.time} · {event.place}
              </p>
              <h3 className="mt-2 text-xl font-medium">{event.title}</h3>
              <p className="mt-3 max-w-2xl leading-8">{event.summary}</p>
            </article>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/training">Read about the training path</Link>
        </p>
      </Section>

      <Section narrow className="mt-16 mb-24">
        <h2 className="text-2xl">Fees</h2>
        <p className="mt-3 max-w-2xl text-[15px] text-muted">
          Unless otherwise stated. Prepaid by Visa, Mastercard, debit, Zelle,
          or bank transfer.
        </p>
        <dl className="mt-6 max-w-2xl divide-y divide-hairline border-y border-hairline">
          {fees.map((fee) => (
            <div
              key={fee.name}
              className="flex items-baseline justify-between gap-6 py-4"
            >
              <div>
                <dt className="font-medium">{fee.name}</dt>
                <dd className="text-[15px] text-muted">{fee.detail}</dd>
              </div>
              <dd className="ui shrink-0 text-right text-[15px]">
                {fee.price}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
          Healing Meditation: $40 Zelle / $45 card. Catedra: donations from the
          heart are appreciated.
        </p>
      </Section>
    </>
  );
}
