type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  image?: string;
};

export function PageHero({ eyebrow, title, lede, image }: PageHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-forest-deep pt-24 pb-20 md:pt-28 md:pb-24"
      style={
        image
          ? {
              backgroundImage: `linear-gradient(180deg, rgba(61, 92, 74, 0.42), rgba(47, 77, 61, 0.66)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-cream md:text-7xl">
          {title}
        </h1>
        {lede ? (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cream/75 md:text-lg">
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
