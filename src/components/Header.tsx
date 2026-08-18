"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-forest-deep">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="relative z-50">
          <p className="font-serif text-[1.35rem] leading-none tracking-[0.18em] text-cream uppercase">
            {site.name}
          </p>
          <p className="mt-1 text-[0.62rem] tracking-[0.32em] text-gold uppercase">
            {site.tagline}
          </p>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.72rem] tracking-[0.18em] uppercase transition ${
                  active ? "text-gold" : "text-cream/80 hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/sessions"
            className="border border-gold/70 px-4 py-2 text-[0.68rem] tracking-[0.2em] text-gold uppercase transition hover:bg-gold hover:text-forest-deep"
          >
            Book a Session
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 top-0 block h-px w-6 bg-cream transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-px w-6 bg-cream transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-px w-6 bg-cream transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 bg-forest-deep px-5 pt-28 lg:hidden"
        >
          <nav className="flex flex-col gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif text-4xl text-cream"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/sessions"
              className="mt-4 inline-flex w-fit border border-gold px-5 py-3 text-[0.7rem] tracking-[0.22em] text-gold uppercase"
            >
              Book a Session
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
