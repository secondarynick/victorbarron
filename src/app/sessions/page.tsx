import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  additionalServices,
  fees,
  sessionTypes,
  site,
  testimonials,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Spiritual Sessions",
  description:
    "Book an in-person, phone, or Zoom spiritual session with Victor Barron. Traditional shamanic healing, proxy work, and ceremonies are also offered.",
};

export default function SessionsPage() {
  return (
    <>
      <PageHero
        title="Sessions"
        lede="Victor calls the fifteen-minute spiritual session a tune-up, or reclaiming your life. One-hour sessions, shamanic work, and proxy healings are also available."
      />

      <Section className="mt-6">
        <p className="text-lg">
          To book, call Cecilia at{" "}
          <a href={site.phoneCeciliaHref}>{site.phoneCecilia}</a>. Session days
          fill quickly; a waiting list is kept when dates are booked.
        </p>
      </Section>

      <Section className="mt-14">
        {sessionTypes.map((item) => (
          <article
            key={item.title}
            className="border-t border-hairline py-8 first:border-t-0 first:pt-0"
          >
            <h2 className="text-2xl">{item.title}</h2>
            <p className="ui mt-1 text-[13px] text-muted">{item.eyebrow}</p>
            <p className="mt-4 max-w-2xl leading-8">{item.body}</p>
          </article>
        ))}
      </Section>

      <Section className="mt-8">
        <h2 className="text-2xl">Also offered</h2>
        <ul className="mt-4 max-w-2xl space-y-1.5 leading-8">
          {additionalServices.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          <Link href="/clearing">Home and business clearing</Link>
        </p>
      </Section>

      <Section className="mt-16">
        <h2 className="text-2xl">Fees</h2>
        <dl className="mt-6 max-w-2xl divide-y divide-hairline border-y border-hairline">
          {fees.slice(0, 3).map((fee) => (
            <div
              key={fee.name}
              className="flex items-baseline justify-between gap-6 py-4"
            >
              <div>
                <dt className="font-medium">{fee.name}</dt>
                <dd className="text-[15px] text-muted">{fee.detail}</dd>
              </div>
              <dd className="ui shrink-0 text-[15px]">{fee.price}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
          Prepaid by Visa, Mastercard, debit, Zelle, or bank transfer. All
          fees are on the <Link href="/calendar">calendar page</Link>.
        </p>
      </Section>

      <Section className="mt-16">
        <h2 className="text-2xl">From people Victor has helped</h2>
        <div className="mt-6 space-y-10">
          {testimonials.map((item) => (
            <blockquote key={item.initials}>
              <p className="max-w-2xl leading-8 italic">“{item.quote}”</p>
              <footer className="ui mt-3 text-[13px] text-muted">
                — {item.initials}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section className="mt-16 mb-24 border-t border-hairline pt-10">
        <p className="max-w-2xl text-[15px] leading-7 text-muted">
          Spiritual healing is intended to complement, not replace, medical
          care. Victor Barron is a spiritual practitioner offering shamanic and
          energy healing. Results differ from person to person.
        </p>
      </Section>
    </>
  );
}
