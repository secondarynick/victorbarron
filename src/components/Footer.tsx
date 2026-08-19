import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="text-xl font-semibold tracking-[0.2em] text-heading uppercase">
            Victor Barron
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
            Shaman, spiritual healer, and teacher. Helping people establish an
            unbreakable spiritual foundation and bond with God.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Visit</p>
          <p className="mt-4 font-medium text-heading">{site.address.name}</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            {site.address.street}
            <br />
            {site.address.city}
          </p>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow">Arrange a visit</p>
          <p className="mt-4 text-sm leading-7 text-soft">
            Sessions and new students:{" "}
            <a
              className="font-semibold text-accent hover:underline"
              href={site.phoneCeciliaHref}
            >
              {site.phoneCecilia}
            </a>
            <br />
            Office and store:{" "}
            <a
              className="font-semibold text-accent hover:underline"
              href={site.phoneOfficeHref}
            >
              {site.phoneOffice}
            </a>
            <br />
            <a
              className="text-accent hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-[0.68rem] tracking-[0.14em] text-muted uppercase md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Victor Barron</p>
          <p>Designed by {site.studio.name}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
