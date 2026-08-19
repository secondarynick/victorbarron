import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Header() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto max-w-3xl px-5 pt-10 pb-6 md:pt-14">
        <Link href="/" className="text-2xl font-medium tracking-tight">
          {site.name}
        </Link>
        <p className="mt-1 text-[15px] text-muted italic">{site.tagline}</p>
        <nav className="ui mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted">
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
    </header>
  );
}
