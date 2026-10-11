# LYNN'S BIRTHDAY WEBSITE — ALBUM FRAME HOTFIX REPORT

**Authoritative baseline:** `lynns-birthday-website-star3-original-style-restored(1).zip`  
**Scope:** Music Room vinyl sleeve artwork framing and top-edge alignment **only**.

## Root cause

- `.vinyl-sleeve-art img` used `object-fit: cover`, which crops any non-square supplied artwork to the square frame.
- The frame had redundant independently hardcoded width and height values.
- Browser-default button padding made the 128px outer button's actual art box narrower (~116px), while different track-label heights could shift the artwork top edge.

## Implementation

**Only existing source file changed:** `css/style.css` (VINYL SLEEVE SHELF block).

1. `.vinyl-sleeve`: fixed `flex: 0 0 128px`, `width: 128px`, `min-width: 0`, `padding: 0`, and `align-self: flex-start` to ensure all six square frames are truly 128px and aligned from the same top edge.
2. `.vinyl-sleeve-art`: changed to `width: 100%; aspect-ratio: 1 / 1; height: auto`; preserved 10px rounded corners, clipping, shadow, hover transitions, active outline and accent strip. Added the existing theme's dark-navy fallback for non-square-art letterboxing.
3. `.vinyl-sleeve-art img`: `position: absolute; inset: 0; display: block; width: 100%; height: 100%; object-fit: contain; object-position: center`. Full foreground image is visible, centered, and not distorted.

**No changes to `index.html`, `js/script.js`, song configuration, music playback, flying-vinyl mechanics, other sections, star hunt, barcode, or pawprints.** No new image assets or external libraries. No blurred background layer was needed; the restrained existing navy palette is better with non-square covers.

## Missing supplied artwork

The authoritative ZIP does **not** contain any of the six referenced album-cover files:

- `assets/images/album-placeholder1.jpg` — Finesse (Remix)
- `assets/images/album-placeholder2.jpg` — Happy Now
- `assets/images/album-placeholder3.jpg` — After Hours
- `assets/images/album-placeholder4.jpg` — Snooze
- `assets/images/album-placeholder5.jpg` — SOS
- `assets/images/album-placeholder6.jpg` — Ai Ngoài Anh

Their original paths and music configuration are untouched. The real website still shows its built-in placeholders until the original image files are added; no fake album art is packaged. The six real album covers **could not** be visually checked because they were not supplied, even though an earlier screenshot shows them.

## Browser and static verification

Used headless Chromium with the **real HTML/CSS/JS**, inlined into the browser to work around this environment's blocking of direct `file://` / HTTP navigation. External Google Fonts links were removed **from the test renderer only**, not from the deliverable. In the test renderer only, the six unavailable album covers were replaced at runtime with unmistakably labeled **QA TEST IMAGE / NOT AN ALBUM COVER** fixture images, with source aspect ratios 1:1, 2:3, 5:3, ~4:5, 16:9, and ~3:5. These temporary fixtures were **not added to the website ZIP**.

**All tested widths passed:** 1440, 1200, 1024, 768, 430, and 375 CSS pixels.

- Six renderable 128 x 128px frames, sharing an identical top baseline: **PASS**.
- `object-fit: contain` and centering for all six differing image aspect ratios: **PASS**.
- Track labels wrap without shifting artwork or causing page-level horizontal overflow: **PASS**.
- Mobile shelf scrolls horizontally, without a page-level horizontal scrollbar: **PASS**.
- First record selection displays **Finesse (Remix)**; second selection displays **Happy Now**: **PASS**.
- The flying-vinyl element becomes visible during selection, and the active record receives its selected outline: **PASS**.
- Keyboard Enter selection for **Snooze** and mobile touch selection for **Happy Now**: **PASS**.
- Real six missing assets trigger the existing `.img-missing` fallback: **PASS**.
- No uncaught JavaScript page errors during these tests: **PASS**.
- JavaScript syntax and CSS top-level parse: **PASS**.
- Five existing collectible `data-star-id` elements remain present, and all baseline non-CSS files are byte-for-byte unchanged: **PASS**.

**Not verifiable here:** rendering of the six specific original album covers, audible MP3 playback (the referenced MP3s are absent), real GitHub Pages deployment, and full network-loaded font matching.

## Screenshot evidence

The two enclosed images are clearly marked QA test-fixture screenshots and **do not show the user's actual album artwork**:

- `qa/album_frame/album-frame-qa-1440-labelled.png` — desktop collection with six frames and diverse test aspect ratios.
- `qa/album_frame/album-frame-qa-430-labelled.png` — mobile collection at 430px, with local horizontal shelf scroll.

Structured results: `qa/album_frame/ALBUM_FRAME_TEST_RESULTS.json` and `qa/album_frame/ADDITIONAL_TEST_RESULTS.json`.

**Release:** a full static website, preserving all baseline files and assets, with CSS-only feature change and this QA documentation.
