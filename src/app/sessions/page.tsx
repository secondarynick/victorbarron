import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { additionalServices, fees, sessionTypes, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Spiritual Sessions",
  description:
    "Book an in-person, phone, or Zoom spiritual session with Victor Barron. Traditional shamanic healing, proxy work, and ceremonies are also offered.",
};

export default function SessionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sessions"
        title="Reclaiming your life"
        lede="Victor calls the fifteen-minute spiritual session a Spiritual Tune-Up. One-hour sessions, shamanic work, and proxy healings are also available."
        image="/images/prayer.webp"
      />

      <Section className="bg-cream">
        <div className="grid gap-8 md:grid-cols-2">
          {sessionTypes.map((item) => (
            <article key={item.title} className="border border-line p-8">
              <p className="eyebrow">{item.eyebrow}</p>
              <h2 className="mt-3 font-serif text-3xl">{item.title}</h2>
              <p className="mt-5 text-base leading-8 text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-parchment">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Also offered</p>
            <h2 className="mt-4 font-serif text-4xl">Additional services</h2>
            <ul className="mt-8 space-y-3 text-base leading-7 text-ink-soft">
              {additionalServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              href="/clearing"
              className="mt-8 inline-flex text-[0.72rem] tracking-[0.2em] text-terracotta uppercase"
            >
              Home & business clearing →
            </Link>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow">Fees</p>
            <h2 className="mt-4 font-serif text-4xl">Unless otherwise stated</h2>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {fees.slice(0, 3).map((fee) => (
                <div
                  key={fee.name}
                  className="flex items-baseline justify-between gap-6 py-4"
                >
                  <div>
                    <dt className="font-medium">{fee.name}</dt>
                    <dd className="text-sm text-stone">{fee.detail}</dd>
                  </div>
                  <dd className="shrink-0 text-sm tracking-wide">{fee.price}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-7 text-stone">
              Prepaid by Visa, Mastercard, debit, Zelle, or bank transfer.
              Contact Cecilia at{" "}
              <a className="text-terracotta underline" href={site.phoneCeciliaHref}>
                {site.phoneCecilia}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-forest text-cream">
        <div className="max-w-3xl">
          <p className="eyebrow">How to book</p>
          <h2 className="mt-4 font-serif text-5xl">Call Cecilia</h2>
          <p className="mt-6 text-lg leading-8 text-cream/75">
            New students and anyone arranging an in-person, phone, or Zoom
            session should call Cecilia. Current session days fill quickly; a
            waiting list is kept when dates are already booked.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={site.phoneCeciliaHref}
              className="bg-gold px-6 py-3 text-[0.72rem] tracking-[0.22em] text-forest-deep uppercase"
            >
              {site.phoneCecilia}
            </a>
            <Link
              href="/calendar"
              className="border border-cream/30 px-6 py-3 text-[0.72rem] tracking-[0.22em] uppercase"
            >
              See availability
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-cream">
        <p className="max-w-3xl text-sm leading-7 text-stone">
          Spiritual healing is intended to complement, not replace, medical
          care. Victor Barron is a spiritual practitioner offering shamanic and
          energy healing. Results differ from person to person. By receiving any
          service you acknowledge the informed consent published on the current
          site.
        </p>
      </Section>
    </>
  );
}
