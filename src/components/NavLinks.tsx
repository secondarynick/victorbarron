"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {nav.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "text-accent"
                : "text-muted transition-colors hover:text-accent"
            }
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
