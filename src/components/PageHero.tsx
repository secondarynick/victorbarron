import Image from "next/image";

type PageIntroProps = {
  title: string;
  lede?: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({ title, lede, image, imageAlt }: PageIntroProps) {
  if (!image) {
    return (
      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <h1 className="max-w-3xl text-4xl leading-[1.1] md:text-[3.4rem]">
          {title}
        </h1>
        {lede ? (
          <p className="mt-6 max-w-2xl text-xl leading-9">{lede}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="border-b border-hairline">
      <div className="mx-auto grid max-w-6xl items-center gap-x-14 px-6 md:grid-cols-2">
        <div className="pt-14 pb-10 md:py-24">
          <h1 className="text-4xl leading-[1.1] md:text-[3.4rem]">{title}</h1>
          {lede ? (
            <p className="mt-6 max-w-xl text-xl leading-9">{lede}</p>
          ) : null}
        </div>
        <div className="relative -mx-6 aspect-[4/3] md:mx-0 md:aspect-auto md:min-h-[420px] md:self-stretch">
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
