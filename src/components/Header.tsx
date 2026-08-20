import Link from "next/link";
import { NavLinks } from "@/components/NavLinks";
import { site } from "@/lib/content";

export function Header() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-4 px-6 py-6 md:py-7">
        <Link href="/" className="shrink-0">
          <span className="text-[1.4rem] font-medium tracking-tight">
            {site.name}
          </span>
          <span className="ml-3 hidden text-[15px] text-muted italic sm:inline">
            {site.tagline}
          </span>
        </Link>
        <nav className="ui flex flex-wrap gap-x-5 gap-y-2.5 text-[14px]">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}
