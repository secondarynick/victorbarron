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

      <Section className="bg-paper">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Find us</p>
            <h2 className="mt-4 text-3xl md:text-4xl">{site.address.name}</h2>
            <p className="mt-5 text-lg leading-8 text-soft">
              {site.address.street}
              <br />
              {site.address.city}
            </p>
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-[0.7rem] font-semibold tracking-[0.2em] text-muted uppercase">
                  Sessions & new students
                </dt>
                <dd className="mt-1 text-2xl font-medium text-heading">
                  <a href={site.phoneCeciliaHref} className="hover:text-accent">
                    {site.phoneCecilia}
                  </a>
                  <span className="block text-base font-normal text-muted">
                    Cecilia
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] font-semibold tracking-[0.2em] text-muted uppercase">
                  Office & store
                </dt>
                <dd className="mt-1 text-2xl font-medium text-heading">
                  <a href={site.phoneOfficeHref} className="hover:text-accent">
                    {site.phoneOffice}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] font-semibold tracking-[0.2em] text-muted uppercase">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    className="text-accent hover:underline"
                    href={`mailto:${site.email}`}
                  >
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
              className="border border-line bg-mist p-8"
            >
              <p className="text-2xl font-medium text-heading">
                Write to the office
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                This opens your email app. For the fastest reply about sessions,
                call Cecilia.
              </p>
              <label className="mt-8 block text-[0.7rem] font-semibold tracking-[0.18em] text-muted uppercase">
                Name
                <input
                  required
                  name="name"
                  className="mt-2 w-full border border-line bg-paper px-3 py-3 text-base font-normal tracking-normal normal-case text-soft outline-none focus:border-accent"
                />
              </label>
              <label className="mt-5 block text-[0.7rem] font-semibold tracking-[0.18em] text-muted uppercase">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full border border-line bg-paper px-3 py-3 text-base font-normal tracking-normal normal-case text-soft outline-none focus:border-accent"
                />
              </label>
              <label className="mt-5 block text-[0.7rem] font-semibold tracking-[0.18em] text-muted uppercase">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full border border-line bg-paper px-3 py-3 text-base font-normal tracking-normal normal-case text-soft outline-none focus:border-accent"
                />
              </label>
              <button type="submit" className="btn btn-solid mt-8">
                Send message
              </button>
            </form>
          </div>
        </div>
      </Section>

      <div className="h-[360px] w-full bg-mist">
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
