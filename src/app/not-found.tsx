import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-paper px-5 py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl md:text-5xl">This page has moved</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        The upgraded site uses clearer paths. Start at the home page or choose
        a section from the menu.
      </p>
      <Link href="/" className="btn btn-solid mt-8">
        Return home
      </Link>
    </section>
  );
}
