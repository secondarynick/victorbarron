import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  narrow?: boolean;
};

// Every section shares the same max-w-6xl grid so headings, text, and photos
// all start on one left edge; `narrow` caps the reading measure inside it.
export function Section({ children, className = "", id, narrow }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 ${className}`}>
      {narrow ? <div className="max-w-2xl">{children}</div> : children}
    </section>
  );
}
