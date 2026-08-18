import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  messageToHumanity,
  site,
  testimonials,
  upcomingEvents,
} from "@/lib/content";

const paths = [
  {
    href: "/sessions",
    title: "Spiritual Sessions",
    copy: "In person, by phone, or Zoom. A tune-up that returns you to the present and to God.",
  },
  {
    href: "/training",
    title: "Healer Training",
    copy: "A multi-year path from first principles to the highest levels of consciousness.",
  },
  {
    href: "/book",
    title: "The Book",
    copy: "Humanity’s Spiritual Plague — awarded Independent Publisher Book Awards finalist.",
  },
  {
    href: "/reflector",
    title: "The Reflector",
    copy: "A blessed instrument for home, car, and body in an age of electromagnetic noise.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[92vh] overflow-hidden bg-forest-deep">
        <Image
          src="/images/victor-hero.webp"
          alt="Victor Barron"
          fill
          priority
          className="object-cover object-[center_20%] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/45 via-forest/40 to-forest" />
        <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-end px-5 pb-20 pt-16 md:px-8 md:pb-24">
          <p className="eyebrow">World-renowned · Whittier, California</p>
          <h1 className="mt-5 max-w-3xl font-serif text-6xl leading-[0.9] text-cream md:text-8xl">
            Spiritual
            <br />
            Healer
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cream/80">
            Shaman, clairvoyant, medium, and teacher. For more than thirty-five
            years, Victor Barron has helped people heal and establish an
            unbreakable bond with God.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/sessions"
              className="bg-gold px-6 py-3 text-[0.72rem] tracking-[0.22em] text-forest-deep uppercase transition hover:bg-gold-soft"
            >
              Book a Session
            </Link>
            <Link
              href="/calendar"
              className="border border-cream/40 px-6 py-3 text-[0.72rem] tracking-[0.22em] text-cream uppercase transition hover:border-gold hover:text-gold"
            >
              View the Calendar
            </Link>
          </div>
        </div>
      </section>

      <Section className="bg-cream">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src="/images/victor-portrait.webp"
                alt="Portrait of Victor Barron"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow">About</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] md:text-6xl">
              Victor Barron
            </h2>
            <div className="rule mt-6" />
            <div className="prose-site mt-8 text-[1.05rem] leading-8 text-ink-soft">
              <p>
                Shaman, Spiritual Healer, Shaman Teacher, Clairvoyant, and
                Medium are among his gifts. At a very early age, Victor’s
                unconditional love for God awakened a passion to help humanity
                heal itself.
              </p>
              <p>
                His work is rooted in humility, integrity, and faith. Students
                from around the world come to the Body Mind & Spirit Healing
                Center — the original training ground — to learn his principles
                and accelerate their own God-given gifts.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex text-[0.72rem] tracking-[0.22em] text-terracotta uppercase hover:text-forest"
            >
              Read his story →
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-parchment">
        <div className="max-w-2xl">
          <p className="eyebrow">Begin here</p>
          <h2 className="mt-4 font-serif text-5xl leading-tight">
            Four ways to work with Victor
          </h2>
        </div>
        <div className="mt-14 grid gap-px bg-line md:grid-cols-2">
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group bg-parchment p-8 transition hover:bg-cream md:p-10"
            >
              <h3 className="font-serif text-3xl group-hover:text-terracotta">
                {path.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-7 text-ink-soft">
                {path.copy}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-forest text-cream">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Upcoming</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight">
              Workshops at the Center
            </h2>
          </div>
          <Link
            href="/calendar"
            className="text-[0.72rem] tracking-[0.22em] text-gold uppercase hover:text-gold-soft"
          >
            Full calendar →
          </Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {upcomingEvents.map((event) => (
            <article
              key={event.title}
              className="border border-cream/15 p-8 md:p-10"
            >
              <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">
                {event.dates}
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight">
                {event.title}
              </h3>
              <p className="mt-3 text-sm text-cream/60">
                {event.place} · {event.time}
              </p>
              <p className="mt-5 text-base leading-8 text-cream/75">
                {event.summary}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-cream">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">Award-winning author</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">
              Humanity&apos;s Spiritual Plague
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-ink-soft">
              A must-read for anyone interested in the spiritual world. Victor
              explains two of the greatest spiritual problems facing humanity
              and the simple methods given to him by God for resolving them.
            </p>
            <p className="mt-4 text-sm tracking-wide text-stone uppercase">
              2004 Independent Publisher Book Awards finalist · English & Spanish
            </p>
            <Link
              href="/book"
              className="mt-8 inline-flex bg-forest px-6 py-3 text-[0.72rem] tracking-[0.22em] text-cream uppercase hover:bg-moss"
            >
              Get your copy
            </Link>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden bg-sand shadow-[0_30px_80px_rgba(61,92,74,0.16)]">
              <Image
                src="/images/book-cover.webp"
                alt="Cover of Humanity's Spiritual Plague"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-parchment">
        <p className="eyebrow">Testimonials</p>
        <h2 className="mt-4 max-w-xl font-serif text-5xl leading-tight">
          What people carry home
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.initials}
              className="border-l border-gold pl-6"
            >
              <p className="font-serif text-2xl leading-8 text-ink/95">
                “{item.quote}”
              </p>
              <footer className="mt-5 text-[0.72rem] tracking-[0.2em] text-stone uppercase">
                — {item.initials}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <section className="relative isolate overflow-hidden bg-forest-deep py-24 md:py-32">
        <Image
          src="/images/prayer.webp"
          alt=""
          fill
          className="object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="eyebrow">A message to humanity</p>
          <p className="mt-8 font-serif text-3xl leading-snug text-cream md:text-4xl">
            {messageToHumanity[0]}
          </p>
          <p className="mt-10 font-serif text-xl tracking-[0.28em] text-gold uppercase">
            God bless · Victor
          </p>
        </div>
      </section>

      <Section className="bg-cream">
        <div className="grid gap-10 border border-line p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="eyebrow">Visit the center</p>
            <h2 className="mt-4 font-serif text-4xl">{site.address.name}</h2>
            <p className="mt-4 text-lg leading-8 text-ink-soft">
              {site.address.street}
              <br />
              {site.address.city}
            </p>
          </div>
          <div className="md:self-end">
            <p className="text-base leading-8 text-ink-soft">
              To arrange a spiritual session or inquire about classes, call
              Cecilia at{" "}
              <a className="text-terracotta underline" href={site.phoneCeciliaHref}>
                {site.phoneCecilia}
              </a>{" "}
              or the office at{" "}
              <a className="text-terracotta underline" href={site.phoneOfficeHref}>
                {site.phoneOffice}
              </a>
              .
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex text-[0.72rem] tracking-[0.22em] uppercase hover:text-terracotta"
            >
              Contact & directions →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
