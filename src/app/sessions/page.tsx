import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { additionalServices, fees, sessionTypes, site } from "@/lib/content";
import { photos } from "@/lib/images";

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
        image={photos.ceremony}
      />

      <Section className="bg-paper">
        <div className="grid gap-6 md:grid-cols-2">
          {sessionTypes.map((item) => (
            <article key={item.title} className="border border-line p-8">
              <p className="eyebrow">{item.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-medium">{item.title}</h2>
              <p className="mt-5 text-base leading-8 text-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-mist">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Also offered</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Additional services</h2>
            <ul className="mt-8 space-y-3 text-base leading-7 text-soft">
              {additionalServices.map((item) => (
                <li key={item} className="border-l-2 border-accent pl-4">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/clearing"
              className="mt-8 inline-flex text-[0.72rem] font-semibold tracking-[0.2em] text-accent uppercase hover:text-accent-deep"
            >
              Home & business clearing →
            </Link>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow">Fees</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Unless otherwise stated</h2>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {fees.slice(0, 3).map((fee) => (
                <div
                  key={fee.name}
                  className="flex items-baseline justify-between gap-6 py-4"
                >
                  <div>
                    <dt className="font-medium text-heading">{fee.name}</dt>
                    <dd className="text-sm text-muted">{fee.detail}</dd>
                  </div>
                  <dd className="shrink-0 text-sm font-semibold text-heading">
                    {fee.price}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-7 text-muted">
              Prepaid by Visa, Mastercard, debit, Zelle, or bank transfer.
              Contact Cecilia at{" "}
              <a
                className="font-semibold text-accent hover:underline"
                href={site.phoneCeciliaHref}
              >
                {site.phoneCecilia}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-peach">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">How to book</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Call Cecilia</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-soft">
            New students and anyone arranging an in-person, phone, or Zoom
            session should call Cecilia. Current session days fill quickly; a
            waiting list is kept when dates are already booked.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={site.phoneCeciliaHref} className="btn btn-solid">
              {site.phoneCecilia}
            </a>
            <Link href="/calendar" className="btn btn-outline">
              See availability
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-paper">
        <p className="mx-auto max-w-3xl text-center text-sm leading-7 text-muted">
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
