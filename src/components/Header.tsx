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
    <header className="sticky top-0 z-50 bg-paper">
      <p className="bg-accent px-5 py-2 text-center text-[0.75rem] tracking-[0.06em] text-white">
        The Super Spiritual Reflector / Neutralizor is available now —{" "}
        <Link href="/reflector" className="font-semibold underline underline-offset-2">
          information & prices
        </Link>
      </p>

      <div className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="relative z-50">
            <p className="text-[1.1rem] leading-none font-semibold tracking-[0.22em] text-heading uppercase">
              {site.name}
            </p>
            <p className="mt-1.5 text-[0.6rem] tracking-[0.32em] text-muted uppercase">
              {site.tagline}
            </p>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[0.72rem] tracking-[0.16em] uppercase transition ${
                    active
                      ? "font-semibold text-accent"
                      : "text-soft hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/sessions" className="btn btn-solid !py-2.5 !px-5">
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
                className={`absolute left-0 top-0 block h-[2px] w-6 bg-heading transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-[2px] w-6 bg-heading transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-[2px] w-6 bg-heading transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 bg-paper px-5 pt-32 lg:hidden"
        >
          <nav className="flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-3xl font-medium text-heading hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/sessions" className="btn btn-solid mt-4 w-fit">
              Book a Session
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
