# Zawadi Junior Academy website

React + TypeScript + Vite + React Router. No backend; forms post to a configurable endpoint.

## Run

```bash
npm install
npm run dev        # development server
npm run build      # type-check and production build into /dist
npm run preview    # serve the production build locally
```

## Where to edit things

| What | File |
| --- | --- |
| Phone, WhatsApp, email, address, hours, map, social links, navigation, grade list | `src/config.ts` |
| Photos (replace placeholders) | `src/content/images.ts` + files in `public/images/` |
| Gallery photos and videos | `src/content/gallery.ts` + files in `public/images/gallery/` |
| News posts | `src/content/news.ts` |
| Page wording | `src/pages/*.tsx` |
| Colours, spacing, typography | `:root` variables at the top of `src/styles.css` |

Any value containing `[INSERT` is treated as not configured: contact buttons stay disabled and the placeholder is highlighted. Search the project for `[INSERT` to find everything still to be supplied.

## Connecting the forms

1. Create a form endpoint (Formspree, a Netlify/Vercel function, or your own serverless handler).
2. Copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT=<the public URL>`.
3. Rebuild. Never put API keys, passwords or email credentials in this file; it is public.

Until an endpoint is set, forms show a "Development mode: NOT sent" message.

## Replacing images

Put optimised files in `public/images/` and set `src` for the slot in `src/content/images.ts` (for example `"/images/hero.jpg"`). Only use photographs the school owns and has permission to publish, especially of children.

## Deployment

Build with `npm run build` and host `/dist` on any static host. Configure the host to serve `index.html` for all routes (single-page app fallback), otherwise direct links such as `/admissions` will 404.

## Before launch checklist

- [ ] Phone, WhatsApp, email, admissions email, transport contact
- [ ] Physical address, opening hours, verified Google Maps links
- [ ] Social media links
- [ ] Verified school history and leadership (About)
- [ ] Confirmed grade structure, curriculum, subjects, activities (Academics, School Life)
- [ ] Admissions process, requirements, deadlines, fees
- [ ] Transport details (areas, times, fees, safety information)
- [ ] Real photographs with permissions; remove placeholder labels
- [ ] Delete demonstration news posts or replace with real ones
- [ ] Form endpoint connected and a test enquiry received by the school
- [ ] Privacy Policy reviewed and approved
- [ ] Brand colours checked against the logo
- [ ] Open Graph image and favicon confirmed
