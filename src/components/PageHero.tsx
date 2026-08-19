type PageIntroProps = {
  title: string;
  lede?: string;
};

export function PageHero({ title, lede }: PageIntroProps) {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-14 md:pt-20">
      <h1 className="text-4xl leading-tight md:text-5xl">{title}</h1>
      {lede ? (
        <p className="mt-5 max-w-2xl text-xl leading-8 text-muted">{lede}</p>
      ) : null}
    </div>
  );
}
