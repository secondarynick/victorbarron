import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Humanity’s Spiritual Plague",
  description:
    "Victor Barron’s award-winning book on the spiritual problems facing humanity, available in English and Spanish.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="The Book"
        title="Humanity’s Spiritual Plague"
        lede="Two of the greatest spiritual problems facing humanity — and the simple methods given to Victor by God."
      />

      <Section className="bg-cream">
        <div className="grid items-start gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-sand shadow-[0_24px_70px_rgba(61,92,74,0.14)]">
              <Image
                src="/images/book-cover.webp"
                alt="Humanity's Spiritual Plague book cover"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow">By Victor Barron</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              A practical teaching for a wounded world
            </h2>
            <div className="prose-site mt-8 text-lg leading-8 text-ink-soft">
              <p>
                A must-read for anyone interested in the spiritual world.
                Victor’s book explains two of the biggest spiritual problems
                facing humanity today and outlines simple methods of resolving
                them.
              </p>
              <p>
                The problem of earthbound spirits has been known around the
                world since the beginning of time. Ancient cultures have taken
                care of this in their own way. Today most natural-born healers
                perform a little bit of everything — some traditionally trained,
                others simply responding to what presents itself.
              </p>
              <p>
                By learning these step-by-step techniques you will be able to
                bring about profound healing for the emotional, mental, and
                physical well-being of those you seek to help.
              </p>
            </div>
            <p className="mt-8 border-l border-gold pl-5 text-sm leading-7 text-stone">
              Awarded finalist in the 2004 Independent Publisher Book Awards.
              There were 2,086 titles entered in the New Age category, and only
              one winner and two finalists.
            </p>
            <p className="mt-8 leading-8 text-ink-soft">
              Available in English and Spanish. Other European languages can be
              requested through the Grandmother Turtle Center in Europe. US
              shipping only from this office.
            </p>
            <a
              href={site.phoneOfficeHref}
              className="mt-8 inline-flex bg-forest px-6 py-3 text-[0.72rem] tracking-[0.22em] text-cream uppercase"
            >
              Order by phone · {site.phoneOffice}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
