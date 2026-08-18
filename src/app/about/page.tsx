import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Victor Barron is a shaman, spiritual healer, clairvoyant, medium, and teacher with more than thirty-five years of healing work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A life given to God"
        lede="Humility, integrity, and faith have been the ground of Victor’s work for more than thirty-five years."
        image="/images/victor-teaching.webp"
      />

      <Section className="bg-cream">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl">
              Shaman, healer, teacher
            </h2>
            <div className="prose-site mt-8 max-w-2xl text-lg leading-8 text-ink-soft">
              <p>
                Shaman, Spiritual Healer, Shaman Teacher, Clairvoyant, and
                Medium are among Victor Barron’s spiritual gifts. He has a
                special gift for accelerating a person’s spiritual growth.
              </p>
              <p>
                At a very early age, Victor’s unconditional love for God
                awakened a passion within him to help humanity heal itself. God
                has entrusted him with these gifts and with the ability to see
                and know beyond the ordinary limits of the physical senses.
              </p>
              <p>
                He is the author of <em>Humanity’s Spiritual Plague</em>, and he
                has established a school where students practice his principles
                and learn how to bring healing to their clients. His goal has
                always been to help people establish an unbreakable spiritual
                foundation and bond with God.
              </p>
              <p>
                Throughout more than thirty-five years of healing others, he has
                stressed humility, integrity, and faith in God. He teaches his
                basic principles and provides ongoing training at the Body Mind
                & Spirit Healing Center in Whittier, California — the original
                training ground where it all began.
              </p>
              <p>
                Students from around the world come to experience his training
                firsthand. During the process, every student receives continuous
                healing while learning to understand their own God-given
                spiritual gifts.
              </p>
            </div>
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <div className="border border-line bg-parchment p-8">
              <p className="eyebrow">The Center</p>
              <p className="mt-4 font-serif text-3xl">
                Body Mind & Spirit Healing Center
              </p>
              <p className="mt-4 leading-7 text-ink-soft">
                6347 Friends Avenue
                <br />
                Whittier, California 90601
              </p>
              <p className="mt-6 text-sm leading-7 text-stone">
                Also teaching in Europe and on the East Coast of the United
                States.
              </p>
              <Link
                href="/training"
                className="mt-8 inline-flex text-[0.72rem] tracking-[0.2em] text-terracotta uppercase"
              >
                See the training path →
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-parchment">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "/images/workshop-1.webp",
            "/images/workshop-3.webp",
            "/images/virgin-mary.webp",
          ].map((src) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
