# Heaven Furniture Mart — Landing Page

A conversion-focused, immersive landing page for Heaven Furniture Mart, built
with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Swap in real photos

Every photo is currently a placeholder (Unsplash) so the layout and motion
can be judged before real assets are in. Replace them with real Heaven
Furniture Mart photography before the final submission. All content and
image URLs live in one place: `lib/content.ts` — search-and-replace the
`image:` fields in each exported array:

- `COLLECTIONS` — the 5 interactive space categories
- `BESPOKE_STAGES` — the 5-stage bespoke journey images
- `MATERIALS` — the "Make It Yours" configurator preview images
- `TRANSFORMATION` — the before/after slider's two images
- `GALLERY` — the "Our Real Work" horizontal gallery

Also update the hero background in `components/Hero.tsx` and the showroom
image in `components/BrandIntro.tsx` and `components/SocialProof.tsx`.

Pull real shots from their Facebook, Instagram, or YouTube (see `SITE.social`
in `lib/content.ts`), touch up as needed, and drop the URLs (or local files in
`/public`) into the spots above.

## Page structure (in scroll order)

1. **Hero** — parallax background, word-by-word text reveal, magnetic CTA,
   and a floating room-selector that jumps into the Explore section.
2. **Enter the Studio** (`BrandIntro`) — brand introduction with a parallax
   image.
3. **Explore the Spaces** (`CollectionsInteractive`) — hover/tap a category
   (Living, Bedroom, Dining, Office, Bespoke) and the visual crossfades with
   a slow Ken Burns zoom.
4. **The Bespoke Journey** (`BespokeJourney`) — a pinned, scroll-driven story
   through five real stages: Your Space → Your Design → Your Materials →
   Our Craftsmanship → Your Finished Space. Falls back to a stacked list on
   mobile/tablet.
5. **Make It Yours** (`MakeItYours`) — a lightweight configurator: pick a
   material, finish, and configuration; the preview and a WhatsApp message
   update live. Not a full 3D product configurator — it's meant to start a
   conversation, not place an order.
6. **The Transformation** (`TransformationSlider`) — a drag-to-compare
   before/after slider (empty room vs. finished interior).
7. **Why Heaven** (`TrustJourney`) — a connected vertical scroll-line
   walking through the 7 trust points.
8. **Our Real Work** (`RealWork`) — a horizontal-scroll gallery of showroom
   and project photography.
9. **Our Story** (`SocialProof` + `Milestones`) — the MD's quote and a
   timeline from 2020 to 2026.
10. **Let's Design Your Space** (`ConsultationFlow`) — a 3-step flow
    (project type → style → budget) that ends by generating a personalized
    WhatsApp message.
11. **Final banner + Footer**.

## A note on scope

An earlier draft of the brief asked for a fully 3D, rotatable interior scene
(move around a room, click furniture for material details, live 3D
re-rendering). That's deliberately not in here: there are no real 3D models
for this brand's furniture, and a generic placeholder 3D scene would look
worse than the photography-led design above, not better — that's real-render
or 3D-asset scope, not a landing-page build. Everything above is built to
deliver the same *feeling* (interactive, personal, transformation-driven)
with techniques that will actually render well: crossfades, a drag slider,
a live-updating configurator panel, and a scroll-pinned story.

## Design notes

- Palette: deep charcoal-teal background, warm ivory text, muted brass/gold
  accent used sparingly, wood-tan and deep brown for material-led moments.
- Type: Cormorant Garamond (display/serif headlines) + Inter (body, UI, labels).
- Motion respects `prefers-reduced-motion`.
- All copy and data (including the configurator options and consultation
  flow questions) live in `lib/content.ts` — edit there first.
