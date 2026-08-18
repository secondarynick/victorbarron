import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl tracking-[0.12em] uppercase">
            Victor Barron
          </p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-cream/70">
            Shaman, spiritual healer, and teacher. Helping people establish an
            unbreakable spiritual foundation and bond with God.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Visit</p>
          <p className="mt-4 font-serif text-xl">{site.address.name}</p>
          <p className="mt-2 text-sm leading-7 text-cream/70">
            {site.address.street}
            <br />
            {site.address.city}
          </p>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow">Arrange a visit</p>
          <p className="mt-4 text-sm leading-7 text-cream/80">
            Sessions and new students:{" "}
            <a className="text-gold hover:underline" href={site.phoneCeciliaHref}>
              {site.phoneCecilia}
            </a>
            <br />
            Office and store:{" "}
            <a className="text-gold hover:underline" href={site.phoneOfficeHref}>
              {site.phoneOffice}
            </a>
            <br />
            <a className="text-gold hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-[0.7rem] tracking-[0.16em] text-cream/50 uppercase md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Victor Barron</p>
          <p className="tracking-[0.2em] text-cream/40">
            Designed by {site.studio.name}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
