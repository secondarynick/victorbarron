import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Body Mind & Spirit Healing Center in Whittier to book a session, ask about classes, or visit.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        lede="To arrange a spiritual session, inquire about classes, or ask a question, call the office or Cecilia."
        image={photos.phonePark}
        imageAlt="Victor Barron taking a phone call"
      />

      <Section narrow className="mt-12">
        <h2 className="text-2xl">{site.address.name}</h2>
        <p className="mt-3 leading-8">
          {site.address.street}
          <br />
          {site.address.city}
        </p>
        <dl className="mt-8 max-w-md space-y-5">
          <div>
            <dt className="ui text-[13px] text-muted">
              Sessions and new students — Cecilia
            </dt>
            <dd className="mt-0.5 text-2xl">
              <a href={site.phoneCeciliaHref}>{site.phoneCecilia}</a>
            </dd>
          </div>
          <div>
            <dt className="ui text-[13px] text-muted">Office and store</dt>
            <dd className="mt-0.5 text-2xl">
              <a href={site.phoneOfficeHref}>{site.phoneOffice}</a>
            </dd>
          </div>
          <div>
            <dt className="ui text-[13px] text-muted">Email</dt>
            <dd className="mt-0.5 text-lg">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
          </div>
        </dl>
      </Section>

      <Section narrow className="mt-14">
        <h2 className="text-2xl">Write to the office</h2>
        <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted">
          This opens your email app. For the fastest reply about sessions, call
          Cecilia.
        </p>
        <form
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
          className="ui mt-8 max-w-xl space-y-5 text-[15px]"
        >
          <label className="block text-muted">
            Name
            <input
              required
              name="name"
              className="mt-1.5 w-full border-b border-hairline bg-transparent py-2 text-base text-ink outline-none focus:border-accent"
            />
          </label>
          <label className="block text-muted">
            Email
            <input
              required
              type="email"
              name="email"
              className="mt-1.5 w-full border-b border-hairline bg-transparent py-2 text-base text-ink outline-none focus:border-accent"
            />
          </label>
          <label className="block text-muted">
            Message
            <textarea
              required
              name="message"
              rows={5}
              className="mt-1.5 w-full border-b border-hairline bg-transparent py-2 text-base text-ink outline-none focus:border-accent"
            />
          </label>
          <button
            type="submit"
            className="cursor-pointer border border-ink/40 px-6 py-2.5 text-[14px] transition-colors hover:border-accent hover:text-accent"
          >
            Send message
          </button>
        </form>
      </Section>

      <div className="mx-auto mt-16 mb-24 max-w-6xl px-6"><div className="max-w-2xl">
        <div className="h-[340px] w-full">
          <iframe
            title="Map of Body Mind & Spirit Healing Center"
            className="h-full w-full border border-hairline"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=6347+Friends+Avenue+Whittier+CA+90601&output=embed"
          />
        </div>
      </div></div>
    </>
  );
}
