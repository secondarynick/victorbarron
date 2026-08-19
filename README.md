# Victor Barron

Upgraded website for [victorbarron.com](https://www.victorbarron.com) — a grounded, editorial home for Victor Barron’s healing work, training, book, and the Body Mind & Spirit Healing Center in Whittier, California.

## Design direction

Studio: **Invisible Designs**. Hosting: **Vercel**.

Deliberately simple and editorial — a quiet, book-like site where the words and the real photographs carry everything.

- One typeface: Newsreader (a warm editorial serif), set on a single reading column
- Warm paper background, espresso ink, one ochre accent for links — nothing else
- No hero banners, no cards, no overlays, no uppercase label chrome
- Real photography only, from the live site’s own CDN (no generated imagery)
- Hairline rules and whitespace do the structural work
- Phone-first booking (Cecilia and the office), as the practice already works
- Zero client-side JavaScript in the chrome: the header is a plain wrapping nav, no hamburger
- Skip-to-content, visible focus rings, and a small studio credit in the footer

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home: portrait, paths, upcoming workshops, book, testimonials |
| `/about` | Biography and the Center |
| `/sessions` | Spiritual, phone/Zoom, shamanic, proxy, ceremonies |
| `/training` | Basic / intermediate / advanced path and daylong workshops |
| `/calendar` | Upcoming dates and fees |
| `/book` | *Humanity’s Spiritual Plague* |
| `/reflector` | Super Spiritual Reflector / Neutralizor |
| `/store` | Angels’ Corner |
| `/clearing` | Home and business clearing |
| `/contact` | Address, phones, message form |

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
```

## Deploy on Vercel

This is a standard Next.js app. Vercel will detect the framework from `vercel.json`.

1. Import [github.com/secondarynick/victorbarron](https://github.com/secondarynick/victorbarron) in the [Vercel dashboard](https://vercel.com/new).
2. Leave the defaults (Next.js, `npm run build`, output from Next).
3. Deploy. You will get a `*.vercel.app` preview URL.
4. In Project → Settings → Domains, add `victorbarron.com` and `www.victorbarron.com`, then point the DNS at Vercel.

No environment variables are required for the first deploy. The contact form still opens the visitor’s email client.

## Notes

- Photos load from the current site’s Squarespace CDN (`images.squarespace-cdn.com`). Before cancelling Squarespace, download them into `public/images/` and update `src/lib/images.ts`. Local copies of most photos are already in `public/images/`.
- Contact form opens the visitor’s email client (`cecilia@victorbarron.com`). A later pass can wire this to a hosted form or inbox.
- Fees and 2026 workshop dates match the live calendar at the time of this redesign.
