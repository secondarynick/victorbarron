import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Home & Business Clearing",
  description:
    "Spiritual cleansing and blessing of homes and businesses, including magnetic grid correction, with Victor Barron.",
};

export default function ClearingPage() {
  return (
    <>
      <PageHero
        title="Home and business clearing"
        lede="A spiritual cleansing of the place you live or work — followed by a blessing that restores peace."
      />

      <Section className="mt-12">
        <h2 className="text-2xl">Clearing and blessing</h2>
        <p className="mt-4 max-w-2xl leading-8">
          A spiritual cleansing of your home or business. Bad and stagnant
          energies, negative spirits, and witchcraft are removed. After the
          cleansing, a blessing is given that brings a feeling of peacefulness.
          An optional fee is charged for each individual healing of those
          residing at the home or business.
        </p>
        <p className="mt-3 text-[15px] text-muted">
          Fee is determined by square footage.
        </p>
      </Section>

      <Section className="mt-12 mb-24">
        <h2 className="text-2xl">Magnetic grid correction</h2>
        <p className="mt-4 max-w-2xl leading-8">
          This healing repairs, balances, and corrects magnetic tears in the
          earth’s grids. Stagnant energies, negative spirits, and witchcraft
          are removed. Harmony, health, and peace are restored so that positive
          energy can flow. A blessing and protection from God follow.
        </p>
        <p className="mt-3 text-[15px] text-muted">
          Spiritual feng shui, cleansing, and blessings — fee by square
          footage.
        </p>
        <p className="mt-8">
          To inquire, call the office at{" "}
          <a href={site.phoneOfficeHref}>{site.phoneOffice}</a>.
        </p>
      </Section>
    </>
  );
}
