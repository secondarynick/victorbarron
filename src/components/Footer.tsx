import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-3xl px-5 py-12">
        <p className="font-medium">{site.address.name}</p>
        <p className="mt-1 text-muted">
          {site.address.street}, {site.address.city}
        </p>
        <p className="mt-4 text-muted">
          Sessions and new students:{" "}
          <a href={site.phoneCeciliaHref} className="text-accent">
            {site.phoneCecilia}
          </a>
          <br />
          Office and store:{" "}
          <a href={site.phoneOfficeHref} className="text-accent">
            {site.phoneOffice}
          </a>
          {" · "}
          <a href={`mailto:${site.email}`} className="text-accent">
            {site.email}
          </a>
        </p>
        <p className="ui mt-10 text-xs text-muted/80">
          © {new Date().getFullYear()} Victor Barron · Designed by{" "}
          {site.studio.name}
        </p>
      </div>
    </footer>
  );
}
