import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Humanity’s Spiritual Plague",
  description:
    "Victor Barron’s award-winning book on the spiritual problems facing humanity, available in English and Spanish.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        title="Humanity’s Spiritual Plague"
        lede="Two of the greatest spiritual problems facing humanity — and the simple methods given to Victor by God for resolving them."
      />

      <Section className="mt-12 mb-24">
        <div className="flex flex-col gap-10 sm:flex-row">
          <div className="relative aspect-[3/4] w-48 shrink-0 overflow-hidden sm:w-56">
            <Image
              src={photos.bookCover}
              alt="Humanity's Spiritual Plague book cover"
              fill
              priority
              sizes="224px"
              className="object-cover"
            />
          </div>
          <div className="prose-site max-w-xl leading-8">
            <p>
              A must-read for anyone interested in the spiritual world.
              Victor’s book explains two of the biggest spiritual problems
              facing humanity today and outlines simple methods of resolving
              them.
            </p>
            <p>
              The problem of earthbound spirits has been known around the world
              since the beginning of time. Ancient cultures have taken care of
              this in their own way. By learning these step-by-step techniques
              you will be able to bring about profound healing for the
              emotional, mental, and physical well-being of those you seek to
              help.
            </p>
            <p className="text-[15px] text-muted">
              Finalist, 2004 Independent Publisher Book Awards — 2,086 titles
              were entered in the New Age category, with one winner and two
              finalists.
            </p>
            <p>
              Available in English and Spanish; other European languages
              through the Grandmother Turtle Center in Europe. US shipping only
              from this office. To order, call{" "}
              <a href={site.phoneOfficeHref}>{site.phoneOffice}</a>.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
