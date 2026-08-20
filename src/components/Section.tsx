import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  wide?: boolean;
};

export function Section({ children, className = "", id, wide }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto ${wide ? "max-w-6xl" : "max-w-3xl"} px-6 ${className}`}
    >
      {children}
    </section>
  );
}
