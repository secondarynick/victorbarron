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
      <Section className="pt-14 md:pt-24">
        <h1 className="max-w-2xl text-4xl leading-[1.15] md:text-[3.4rem]">
          Spiritual healer and shaman teacher in Whittier, California.
        </h1>
        <p className="mt-7 max-w-xl text-xl leading-9">
          For more than thirty-five years, Victor Barron has helped people heal
          and establish an unbreakable bond with God — in person at the Body
          Mind & Spirit Healing Center, and by phone or Zoom anywhere in the
          world.
        </p>
        <p className="mt-8 text-lg">
          To book a session, call Cecilia at{" "}
          <a href={site.phoneCeciliaHref}>{site.phoneCecilia}</a>.
        </p>
      </Section>

      <div className="mx-auto mt-16 max-w-5xl px-5 md:mt-24">
        <div className="relative aspect-[3/2] overflow-hidden md:aspect-[2/1]">
          <Image
            src={photos.ceremony}
            alt="Victor Barron during a healing ceremony"
            fill
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover object-[center_30%]"
          />
        </div>
        <p className="ui mt-3 text-xs text-muted">
          Victor during a traditional healing ceremony.
        </p>
      </div>

      <Section className="mt-20 md:mt-28">
        <h2 className="text-2xl md:text-3xl">Sessions</h2>
        <p className="mt-4 max-w-2xl leading-8">
          A spiritual session — Victor calls it a tune-up, or reclaiming your
          life — cleanses and repairs the chakras and aura, removes negative
          energies, and returns you to the present. Sessions are held in
          person, by phone, or by Zoom. Traditional shamanic healing, proxy
          healings, blessings for expectant mothers, and ceremonies are also
          offered.
        </p>
        <p className="mt-4">
          <Link href="/sessions">About sessions and fees</Link>
        </p>
      </Section>

      <Section className="mt-20 md:mt-28">
        <h2 className="text-2xl md:text-3xl">Healer training</h2>
        <p className="mt-4 max-w-2xl leading-8">
          Victor teaches a multi-year path — basic, intermediate, and advanced
          — at the Center in Whittier, in Europe, and on the East Coast.
          Students receive continuous healing while learning to work with
          their own God-given gifts. Daylong workshops are open to anyone
          deepening a spiritual journey.
        </p>
        <p className="mt-4">
          <Link href="/training">About the training</Link>
        </p>
      </Section>

      <Section className="mt-20 md:mt-28">
        <h2 className="text-2xl md:text-3xl">Upcoming at the Center</h2>
        <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
          {upcomingEvents.map((event) => (
            <li key={event.title} className="py-5">
              <p className="ui text-[13px] text-muted">
                {event.dates} · {event.time}
              </p>
              <p className="mt-1 text-lg font-medium">{event.title}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <Link href="/calendar">Full calendar and fees</Link>
        </p>
      </Section>

      <Section className="mt-20 md:mt-28">
        <h2 className="text-2xl md:text-3xl">The book</h2>
        <div className="mt-6 flex flex-col gap-8 sm:flex-row">
          <div className="relative aspect-[3/4] w-40 shrink-0 overflow-hidden sm:w-44">
            <Image
              src={photos.bookCover}
              alt="Humanity's Spiritual Plague by Victor Barron"
              fill
              sizes="176px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="max-w-xl leading-8">
              <em>Humanity’s Spiritual Plague</em> explains two of the greatest
              spiritual problems facing humanity and the simple methods given
              to Victor by God for resolving them. A finalist in the 2004
              Independent Publisher Book Awards, available in English and
              Spanish.
            </p>
            <p className="mt-4">
              <Link href="/book">About the book</Link>
            </p>
          </div>
        </div>
      </Section>

      <Section className="mt-20 md:mt-28">
        <blockquote>
          <p className="max-w-2xl text-xl leading-9 italic">
            “{testimonials[1].quote}”
          </p>
          <footer className="ui mt-4 text-[13px] text-muted">
            — {testimonials[1].initials}
          </footer>
        </blockquote>
        <p className="mt-4">
          <Link href="/sessions">More from people Victor has helped</Link>
        </p>
      </Section>

      <Section className="mt-20 border-t border-hairline pt-14 md:mt-28">
        <h2 className="text-2xl md:text-3xl">A message to humanity</h2>
        <div className="prose-site mt-6 max-w-2xl leading-8">
          <p>{messageToHumanity[0]}</p>
          <p>{messageToHumanity[3]}</p>
        </div>
        <p className="mt-6 italic text-muted">God bless — Victor</p>
      </Section>

      <Section className="mt-20 mb-24 md:mt-28">
        <h2 className="text-2xl md:text-3xl">Visit</h2>
        <p className="mt-4 leading-8">
          {site.address.name}
          <br />
          {site.address.street}, {site.address.city}
        </p>
        <p className="mt-4 leading-8">
          Sessions and new students: Cecilia,{" "}
          <a href={site.phoneCeciliaHref}>{site.phoneCecilia}</a>
          <br />
          Office and store: <a href={site.phoneOfficeHref}>
            {site.phoneOffice}
          </a>{" "}
          · <Link href="/contact">Directions and contact</Link>
        </p>
      </Section>
    </>
  );
}
