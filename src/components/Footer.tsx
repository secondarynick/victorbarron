import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto grid max-w-6xl gap-x-14 gap-y-8 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="text-xl font-medium tracking-tight">{site.name}</p>
          <p className="mt-1 text-[15px] text-muted italic">{site.tagline}</p>
        </div>
        <div>
          <p className="font-medium">{site.address.name}</p>
          <p className="mt-1 text-muted">
            {site.address.street}
            <br />
            {site.address.city}
          </p>
        </div>
        <div className="text-muted">
          <p>
            Sessions and new students:{" "}
            <a href={site.phoneCeciliaHref} className="text-accent">
              {site.phoneCecilia}
            </a>
          </p>
          <p className="mt-1">
            Office and store:{" "}
            <a href={site.phoneOfficeHref} className="text-accent">
              {site.phoneOffice}
            </a>
          </p>
          <p className="mt-1">
            <a href={`mailto:${site.email}`} className="text-accent">
              {site.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="ui mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-3 px-6 py-5 text-xs text-muted/80">
          <p>
            © {new Date().getFullYear()} Victor Barron · Designed by{" "}
            {site.studio.name}
          </p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
