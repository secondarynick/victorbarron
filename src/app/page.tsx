import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  messageToHumanity,
  site,
  testimonials,
  upcomingEvents,
} from "@/lib/content";
import { photos } from "@/lib/images";

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
    copy: "Humanity’s Spiritual Plague — an Independent Publisher Book Awards finalist.",
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
      <section className="relative isolate flex min-h-[86vh] items-center justify-center overflow-hidden">
        <Image
          src={photos.heroGathering}
          alt="A prayer gathering at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(32,23,19,0.34)] via-[rgba(32,23,19,0.30)] to-[rgba(32,23,19,0.55)]" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:px-8">
          <p className="eyebrow">World-Renowned</p>
          <h1 className="mt-4 text-6xl leading-none font-light text-white md:text-8xl">
            Spiritual Healer
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
            Shaman, clairvoyant, medium, and teacher. For more than thirty-five
            years, Victor Barron has helped people heal and establish an
            unbreakable bond with God.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/sessions" className="btn btn-solid">
              Book a Session
            </Link>
            <Link href="/calendar" className="btn btn-ghost">
              View the Calendar
            </Link>
          </div>
        </div>
      </section>

      <Section className="bg-paper">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-mist shadow-[0_18px_50px_rgba(32,23,19,0.14)] md:aspect-[4/5]">
              <Image
                src={photos.victorRed}
                alt="Portrait of Victor Barron"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[65%_center]"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow">About</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              Victor Barron
            </h2>
            <div className="rule mt-6" />
            <div className="prose-site mt-8 text-[1.02rem] leading-8 text-soft">
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
              className="mt-8 inline-flex text-[0.72rem] font-semibold tracking-[0.2em] text-accent uppercase hover:text-accent-deep"
            >
              Read his story →
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-mist">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Begin here</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            Four ways to work with Victor
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group border border-line bg-paper p-8 transition hover:border-accent md:p-10"
            >
              <h3 className="text-2xl font-medium group-hover:text-accent">
                {path.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-7 text-muted">
                {path.copy}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-paper">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Upcoming</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              Workshops at the Center
            </h2>
          </div>
          <Link
            href="/calendar"
            className="text-[0.72rem] font-semibold tracking-[0.2em] text-accent uppercase hover:text-accent-deep"
          >
            Full calendar →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {upcomingEvents.map((event) => (
            <article key={event.title} className="border border-line p-8 md:p-10">
              <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-accent uppercase">
                {event.dates}
              </p>
              <h3 className="mt-4 text-2xl leading-snug font-medium">
                {event.title}
              </h3>
              <p className="mt-3 text-sm text-muted">
                {event.place} · {event.time}
              </p>
              <p className="mt-5 text-base leading-8 text-soft">
                {event.summary}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <section
        className="relative isolate overflow-hidden py-24 md:py-32"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(32, 23, 19, 0.5), rgba(32, 23, 19, 0.62)), url(${photos.ceremony})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="eyebrow">A message to humanity</p>
          <p className="mt-8 text-2xl leading-relaxed font-light text-white md:text-3xl">
            {messageToHumanity[0]}
          </p>
          <p className="mt-10 text-base font-semibold tracking-[0.3em] text-accent uppercase">
            God bless · Victor
          </p>
        </div>
      </section>

      <Section className="bg-paper">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">Award-winning author</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              Humanity&apos;s Spiritual Plague
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-soft">
              A must-read for anyone interested in the spiritual world. Victor
              explains two of the greatest spiritual problems facing humanity
              and the simple methods given to him by God for resolving them.
            </p>
            <p className="mt-4 text-sm tracking-wide text-muted uppercase">
              2004 Independent Publisher Book Awards finalist · English & Spanish
            </p>
            <Link href="/book" className="btn btn-solid mt-8">
              Get your copy
            </Link>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden bg-mist shadow-[0_24px_60px_rgba(32,23,19,0.16)]">
              <Image
                src={photos.bookCover}
                alt="Cover of Humanity's Spiritual Plague"
                fill
                sizes="(min-width: 768px) 33vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-mist">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            What people carry home
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.initials}
              className="border-l-2 border-accent bg-paper p-7 pl-8"
            >
              <p className="text-[1.05rem] leading-8 text-soft">
                “{item.quote}”
              </p>
              <footer className="mt-5 text-[0.72rem] font-semibold tracking-[0.2em] text-muted uppercase">
                — {item.initials}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section className="bg-paper">
        <div className="grid gap-10 border border-line p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="eyebrow">Visit the center</p>
            <h2 className="mt-4 text-3xl md:text-4xl">{site.address.name}</h2>
            <p className="mt-4 text-lg leading-8 text-soft">
              {site.address.street}
              <br />
              {site.address.city}
            </p>
          </div>
          <div className="md:self-end">
            <p className="text-base leading-8 text-soft">
              To arrange a spiritual session or inquire about classes, call
              Cecilia at{" "}
              <a
                className="font-semibold text-accent hover:underline"
                href={site.phoneCeciliaHref}
              >
                {site.phoneCecilia}
              </a>{" "}
              or the office at{" "}
              <a
                className="font-semibold text-accent hover:underline"
                href={site.phoneOfficeHref}
              >
                {site.phoneOffice}
              </a>
              .
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex text-[0.72rem] font-semibold tracking-[0.2em] text-accent uppercase hover:text-accent-deep"
            >
              Contact & directions →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
