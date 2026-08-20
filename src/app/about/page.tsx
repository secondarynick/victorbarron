import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Victor Barron is a shaman, spiritual healer, clairvoyant, medium, and teacher with more than thirty-five years of healing work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Victor"
        lede="Shaman, spiritual healer, shaman teacher, clairvoyant, and medium — with a special gift for accelerating a person's spiritual growth."
        image={photos.victorGreen}
        imageAlt="Victor Barron at the Body Mind & Spirit Healing Center"
      />

      <Section narrow className="prose-site mt-14 leading-8">
        <p>
          At a very early age, Victor’s unconditional love for God awakened a
          passion within him to help humanity heal itself. God has entrusted
          him with these gifts and with the ability to see and know beyond the
          ordinary limits of the physical senses.
        </p>
        <p>
          He is the author of <em>Humanity’s Spiritual Plague</em>, and he has
          established a school where students practice his principles and learn
          how to bring healing to their clients. His goal has always been to
          help people establish an unbreakable spiritual foundation and bond
          with God.
        </p>
      </Section>

      <figure className="mx-auto mt-14 max-w-6xl px-6">
        <div className="relative aspect-[3/2] overflow-hidden md:aspect-[2/1]">
          <Image
            src={photos.victorRed}
            alt="Victor Barron at the Body Mind & Spirit Healing Center"
            fill
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="object-cover object-[center_35%]"
          />
        </div>
        <figcaption className="ui mt-3 text-xs text-muted">
          Victor at the Body Mind & Spirit Healing Center in Whittier.
        </figcaption>
      </figure>

      <Section narrow className="prose-site mt-14 mb-24 leading-8">
        <p>
          Throughout more than thirty-five years of healing others, he has
          stressed humility, integrity, and faith in God. He teaches his basic
          principles and provides ongoing training at the Body Mind & Spirit
          Healing Center in Whittier, California — the original training ground
          where it all began — and also in Europe and on the East Coast of the
          United States.
        </p>
        <p>
          Students from around the world come to experience his training
          firsthand. During the process, every student receives continuous
          healing while learning to understand their own God-given spiritual
          gifts.
        </p>
        <p className="mt-8">
          <Link href="/sessions">Book a session</Link> ·{" "}
          <Link href="/training">Study with Victor</Link>
        </p>
      </Section>
    </>
  );
}
