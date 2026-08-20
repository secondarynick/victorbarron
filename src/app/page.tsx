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

export default function Home() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-6xl items-center gap-x-16 px-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="pt-16 pb-12 md:py-28">
            <h1 className="text-[2.6rem] leading-[1.08] md:text-[3.9rem]">
              Spiritual healer and shaman teacher in Whittier, California.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-9">
              For more than thirty-five years, Victor Barron has helped people
              heal and establish an unbreakable bond with God — in person at
              the Body Mind & Spirit Healing Center, and by phone or Zoom
              anywhere in the world.
            </p>
            <p className="mt-8 text-lg">
              To book a session, call Cecilia at{" "}
              <a href={site.phoneCeciliaHref} className="font-medium">
                {site.phoneCecilia}
              </a>
              .
            </p>
          </div>
          <div className="relative -mx-6 aspect-[4/3] md:mx-0 md:aspect-auto md:min-h-[560px] md:self-stretch">
            <Image
              src={photos.victorRed}
              alt="Victor Barron at the Body Mind & Spirit Healing Center"
              fill
              priority
              sizes="(min-width: 768px) 48vw, 100vw"
              className="object-cover object-[68%_center]"
            />
          </div>
        </div>
      </section>

      <Section className="mt-24 md:mt-32">
        <div className="grid items-center gap-x-16 gap-y-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">Sessions</h2>
            <p className="mt-5 max-w-xl leading-8">
              A spiritual session — Victor calls it a tune-up, or reclaiming
              your life — cleanses and repairs the chakras and aura, removes
              negative energies, and returns you to the present. Sessions are
              held in person, by phone, or by Zoom. Traditional shamanic
              healing, proxy healings, blessings for expectant mothers, and
              ceremonies are also offered.
            </p>
            <p className="mt-5">
              <Link href="/sessions">About sessions and fees</Link>
            </p>
          </div>
          <div className="relative aspect-[3/4] max-h-[540px] overflow-hidden">
            <Image
              src={photos.healingSession}
              alt="Victor giving a healing during a session"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="mt-24 md:mt-32">
        <div className="grid items-center gap-x-16 gap-y-10 md:grid-cols-2">
          <div className="relative order-last aspect-[3/2] overflow-hidden md:order-first">
            <Image
              src={photos.riverGroup}
              alt="Students with Victor in nature during healer training"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl">Healer training</h2>
            <p className="mt-5 max-w-xl leading-8">
              Victor teaches a multi-year path — basic, intermediate, and
              advanced — at the Center in Whittier, in Europe, and on the East
              Coast. Students receive continuous healing while learning to work
              with their own God-given gifts. Daylong workshops are open to
              anyone deepening a spiritual journey.
            </p>
            <p className="mt-5">
              <Link href="/training">About the training</Link>
            </p>
          </div>
        </div>
      </Section>

      <Section narrow className="mt-24 md:mt-32">
        <h2 className="text-3xl md:text-4xl">Upcoming at the Center</h2>
        <ul className="mt-7 divide-y divide-hairline border-y border-hairline">
          {upcomingEvents.map((event) => (
            <li key={event.title} className="py-5">
              <p className="ui text-[13px] text-muted">
                {event.dates} · {event.time}
              </p>
              <p className="mt-1 text-lg font-medium">{event.title}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5">
          <Link href="/calendar">Full calendar and fees</Link>
        </p>
      </Section>

      <figure className="mx-auto mt-24 max-w-6xl px-6 md:mt-32">
        <div className="relative aspect-[3/2] overflow-hidden md:aspect-[21/9]">
          <Image
            src={photos.ceremony}
            alt="Victor Barron during a healing ceremony"
            fill
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="object-cover object-[center_30%]"
          />
        </div>
        <figcaption className="ui mt-3 text-xs text-muted">
          Victor during a traditional healing ceremony.
        </figcaption>
      </figure>

      <Section className="mt-24 md:mt-32">
        <div className="grid items-center gap-x-16 gap-y-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto aspect-[3/4] w-56 sm:w-64 md:w-full md:max-w-xs">
            <Image
              src={photos.bookCover}
              alt="Humanity's Spiritual Plague by Victor Barron"
              fill
              sizes="(min-width: 768px) 320px, 256px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl">The book</h2>
            <p className="mt-5 max-w-xl leading-8">
              <em>Humanity’s Spiritual Plague</em> explains two of the greatest
              spiritual problems facing humanity and the simple methods given
              to Victor by God for resolving them. A finalist in the 2004
              Independent Publisher Book Awards, available in English and
              Spanish.
            </p>
            <p className="mt-5">
              <Link href="/book">About the book</Link>
            </p>
          </div>
        </div>
      </Section>

      <Section className="mt-24 md:mt-32">
        <blockquote className="text-center">
          <p className="mx-auto max-w-2xl text-xl leading-9 italic md:text-2xl md:leading-10">
            “{testimonials[1].quote}”
          </p>
          <footer className="ui mt-5 text-[13px] text-muted">
            — {testimonials[1].initials}
          </footer>
        </blockquote>
        <p className="mt-6 text-center">
          <Link href="/sessions">More from people Victor has helped</Link>
        </p>
      </Section>

      <Section narrow className="mt-24 md:mt-32">
        <h2 className="text-3xl md:text-4xl">A message to humanity</h2>
        <div className="prose-site mt-6 max-w-2xl leading-8">
          <p>{messageToHumanity[0]}</p>
          <p>{messageToHumanity[3]}</p>
        </div>
        <p className="mt-6 italic text-muted">God bless — Victor</p>
      </Section>

      <Section className="mt-24 mb-24 md:mt-32 md:mb-32">
        <div className="grid items-center gap-x-16 gap-y-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">Visit</h2>
            <p className="mt-5 leading-8">
              {site.address.name}
              <br />
              {site.address.street}, {site.address.city}
            </p>
            <p className="mt-5 leading-8">
              Sessions and new students: Cecilia,{" "}
              <a href={site.phoneCeciliaHref}>{site.phoneCecilia}</a>
              <br />
              Office and store:{" "}
              <a href={site.phoneOfficeHref}>{site.phoneOffice}</a> ·{" "}
              <Link href="/contact">Directions and contact</Link>
            </p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src={photos.candleBlessing}
              alt="A candle blessing in the healing room at the Center"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
