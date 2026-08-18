import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Body Mind & Spirit Healing Center in Whittier to book a session, ask about classes, or visit.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come to the Center"
        lede="To arrange a spiritual session, inquire about classes, or ask a question, call the office or Cecilia."
      />

      <Section className="bg-cream">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Find us</p>
            <h2 className="mt-4 font-serif text-4xl">{site.address.name}</h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft">
              {site.address.street}
              <br />
              {site.address.city}
            </p>
            <dl className="mt-10 space-y-5">
              <div>
                <dt className="text-[0.7rem] tracking-[0.2em] text-stone uppercase">
                  Sessions & new students
                </dt>
                <dd className="mt-1 font-serif text-2xl">
                  <a href={site.phoneCeciliaHref}>{site.phoneCecilia}</a>
                  <span className="block text-base text-stone">Cecilia</span>
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] tracking-[0.2em] text-stone uppercase">
                  Office & store
                </dt>
                <dd className="mt-1 font-serif text-2xl">
                  <a href={site.phoneOfficeHref}>{site.phoneOffice}</a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] tracking-[0.2em] text-stone uppercase">
                  Email
                </dt>
                <dd className="mt-1">
                  <a className="text-terracotta underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <form
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
              className="border border-line bg-parchment p-8"
            >
              <p className="font-serif text-3xl">Write to the office</p>
              <p className="mt-3 text-sm leading-6 text-stone">
                This opens your email app. For the fastest reply about sessions,
                call Cecilia.
              </p>
              <label className="mt-8 block text-[0.7rem] tracking-[0.18em] uppercase">
                Name
                <input
                  required
                  name="name"
                  className="mt-2 w-full border border-line bg-cream px-3 py-3 text-base tracking-normal normal-case outline-none focus:border-gold"
                />
              </label>
              <label className="mt-5 block text-[0.7rem] tracking-[0.18em] uppercase">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full border border-line bg-cream px-3 py-3 text-base tracking-normal normal-case outline-none focus:border-gold"
                />
              </label>
              <label className="mt-5 block text-[0.7rem] tracking-[0.18em] uppercase">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full border border-line bg-cream px-3 py-3 text-base tracking-normal normal-case outline-none focus:border-gold"
                />
              </label>
              <button
                type="submit"
                className="mt-8 bg-forest px-6 py-3 text-[0.72rem] tracking-[0.22em] text-cream uppercase"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </Section>

      <div className="h-[360px] w-full bg-sand">
        <iframe
          title="Map of Body Mind & Spirit Healing Center"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=6347+Friends+Avenue+Whittier+CA+90601&output=embed"
        />
      </div>
    </>
  );
}
