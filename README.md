# Victor Barron

Upgraded website for [victorbarron.com](https://www.victorbarron.com) — a grounded, editorial home for Victor Barron’s healing work, training, book, and the Body Mind & Spirit Healing Center in Whittier, California.

## Design direction

Studio: **Invisible Designs**. Hosting: **Vercel**.

The current Squarespace site is content-rich and hard to navigate. This redesign keeps Victor’s voice and offerings, and gives them a calmer structure. The interface should recede so the work, the photos, and the next phone call stay in front.

- Warm forest, parchment, and gold — sacred without feeling generic “new age”
- No black: type is umber, dark bands are moss, photo veils are green rather than a black wash
- Serif headlines (Cormorant Garamond) with a readable sans body
- Clear paths: book a session, enter training, get the book, visit the store
- Phone-first booking (Cecilia and the office), as the practice already works
- Quiet chrome: skip-to-content, focus rings only when needed, a small studio credit in the footer

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

- Photos are from the current public site.
- Contact form opens the visitor’s email client (`cecilia@victorbarron.com`). A later pass can wire this to a hosted form or inbox.
- Fees and 2026 workshop dates match the live calendar at the time of this redesign.
