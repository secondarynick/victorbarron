import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28"><div className="max-w-2xl">
      <h1 className="text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md leading-8 text-muted">
        The page you are looking for has moved. Start at the{" "}
        <Link href="/" className="text-accent underline underline-offset-4">
          home page
        </Link>{" "}
        or choose a section from the menu above.
      </p>
    </div></section>
  );
}
