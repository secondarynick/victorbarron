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
        eyebrow="Spaces"
        title="Clearing & blessing"
        lede="A spiritual cleansing of the place you live or work — followed by a blessing that restores peace."
      />

      <Section className="bg-paper">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="border border-line p-8 md:p-10">
            <h2 className="text-2xl font-medium">
              Clearing & blessing of your home or business
            </h2>
            <p className="mt-5 leading-8 text-soft">
              A spiritual cleansing of your home or business. Bad and stagnant
              energies, negative spirits, and witchcraft are removed. After the
              cleansing, a blessing is given that brings a feeling of
              peacefulness. An optional fee is charged for each individual
              healing of those residing at the home or business.
            </p>
            <p className="mt-6 text-sm text-muted">
              Fee is determined by square footage.
            </p>
          </article>
          <article className="border border-line p-8 md:p-10">
            <h2 className="text-2xl font-medium">Magnetic grid correction</h2>
            <p className="mt-5 leading-8 text-soft">
              This healing repairs, balances, and corrects magnetic tears in the
              earth’s grids. Stagnant energies, negative spirits, and witchcraft
              are removed. Harmony, health, and peace are restored so that
              positive energy can flow. A blessing and protection from God
              follow.
            </p>
            <p className="mt-6 text-sm text-muted">
              Spiritual feng shui, cleansing, and blessings — fee by square
              footage.
            </p>
          </article>
        </div>
        <div className="mt-12 text-center">
          <a href={site.phoneOfficeHref} className="btn btn-solid">
            Inquire · {site.phoneOffice}
          </a>
        </div>
      </Section>
    </>
  );
}
