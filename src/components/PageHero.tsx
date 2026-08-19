type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  image?: string;
};

export function PageHero({ eyebrow, title, lede, image }: PageHeroProps) {
  if (!image) {
    return (
      <section className="border-b border-line bg-paper pt-16 pb-14 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-4 text-4xl leading-tight font-normal md:text-6xl">
            {title}
          </h1>
          {lede ? (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
              {lede}
            </p>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative isolate overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(32, 23, 19, 0.38), rgba(32, 23, 19, 0.56)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-4 text-5xl leading-tight font-light text-white md:text-7xl">
          {title}
        </h1>
        {lede ? (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
