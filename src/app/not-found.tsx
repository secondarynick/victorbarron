import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cream px-5 py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-serif text-5xl">This page has moved</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-soft">
        The upgraded site uses clearer paths. Start at the home page or choose
        a section from the menu.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex bg-forest px-6 py-3 text-[0.72rem] tracking-[0.22em] text-cream uppercase"
      >
        Return home
      </Link>
    </section>
  );
}
