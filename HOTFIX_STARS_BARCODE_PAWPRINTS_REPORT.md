# Lynn's Birthday Scrapbook — Star Hunt, Barcode & Pawprint Hotfix

**Baseline:** `lynns-birthday-website-star-fixes.zip` (existing website; not rebuilt)

## What changed

| File | Change |
| --- | --- |
| `index.html` | Replaced decorative paw emoji spans with 10 stamped SVG paw steps inside a dedicated trail; replaced the striped barcode `<div>` with an image of the supplied barcode; kept all five stars, all original sections and personalized copy. |
| `css/style.css` | Added safe paw-trail layout and sequential CSS keyframes; made a separate mobile-safe footprint corridor; improved star hit targets and moved star 5 to a visible pocket beside the Wishes cards; used a real proportional barcode image and responsive ticket-stub layout. |
| `js/script.js` | Added `initPawTrail()` to animate the trail only while the Poodle section is visible, using `IntersectionObserver` and honoring reduced-motion preference. Kept existing star count, storage migration, and completion logic. |
| `assets/images/barcode-27092002.png` | Lossless PNG conversion of the user-supplied `barcode.gif`: preserves exact bars and **27092002** digits rather than inventing a substitute. |

## Root causes and corrections

1. **Star hunt stuck at four:** The `star-5` element was present, but positioned at `top: 72px; left: 12%` of the Wishes content, in the heading/text area where it was hard to see or reach. It now sits to the side of the Wishes cards with a larger focusable hit target, mobile-specific placement and contrasting ink color. The other four star positions and IDs remain intact. Browser-driven clicks confirmed *all five* stars independently collect. The old Secret Room is **not** restored.
2. **Ticket barcode:** The original `.barcode` was CSS repeating stripes without numbers. Replaced with a local image converted from the exact uploaded reference; the printed digits **27092002** appear directly underneath the bars and above the unchanged **“Valid forever.”** message. The dashed perforation and all ticket details remain unchanged. Mobile ticket stubs now stack vertically.
3. **Poodle pawprints:** Earlier emoji positions increased `left` while moving upward, crossing the main Polaroid. Those emoji were static. The new original SVG stamps use separate wrapper coordinates and animated inner artwork, with ten alternating footprints progressing upward. The desktop path sits entirely outside the photos. At phone widths (`<=600px`) the trail becomes a dedicated in-flow corridor between the photos instead of trying to squeeze into the narrow side margin. One collision found at 1024px during QA was corrected by shifting the desktop path left.

## Browser testing actually performed

Because the container's Chromium is blocked from navigating to `file://` and local HTTP URLs (`ERR_BLOCKED_BY_ADMINISTRATOR`), QA used Chromium/Playwright's `set_content` to render the site's **actual HTML, CSS and JavaScript**, inlined solely for the test. The barcode and the existing potato image were embedded as the exact PNG bytes for the test. Unavailable personal photos/music remained missing, with the site's existing placeholders.

The QA harness supplied a localStorage-equivalent test double on the sandboxed `about:blank` origin, since native storage is restricted there. **Therefore persistence and migration logic were exercised with saved-state simulations, not independently verified against native localStorage on a deployed GitHub Pages origin.** The production files still use native `localStorage`.

| Width | All 5 stars clicked | 5/5 completion overlay | Barcode rendered (166 × 100 natural pixels) | Paw/Polaroid collision | Horizontal overflow | Uncaught page errors |
| --- | --- | --- | --- | --- | --- | --- |
| 1440px | Pass | Pass | Pass | None | 0px | None |
| 1200px | Pass | Pass | Pass | None | 0px | None |
| 1024px | Pass | Pass | Pass | None, after correction | 0px | None |
| 768px | Pass | Pass | Pass | None | 0px | None |
| 430px | Pass | Pass | Pass | None | 0px | None |
| 375px | Pass | Pass | Pass | None | 0px | None |

These checks used reduced motion to obtain stable bounding rectangles. **Separate real-time/normal-motion tests** at 1440px and 430px also successfully collected all five stars by actual clicks. At 1440px the sequential SVG animation was sampled and captured over approximately 15 seconds (around two 8-second cycles); its opacity profile changed in the expected walking pattern. The animation is disabled in reduced-motion mode while the static trail remains visible.

Further interaction smoke checks: opening/entering site, Poodle response button, Mingyu potato button, birthday finale opening, candle swap, blowing out the candles, finale close and 5/5 completion — all ran without uncaught JavaScript exceptions in the test browser. Keyboard Enter/Space collection passed. The 4/5 saved-state test reached 5/5 without resetting; legacy heart IDs deduplicated/migrated to valid star IDs; invalid saved JSON was safely ignored; full progress did not re-open the completion modal after a new page load simulation.

JavaScript syntax passed `node --check`. Source checks confirmed exactly five unique `data-star-id` values, ten paw SVG steps, the presence of the exact local PNG, and no restored Secret Room elements. ZIP integrity was checked separately after packaging.

### Limitations

- This environment did not permit direct local-HTTP or GitHub Pages deployment testing, so **native-origin storage persistence and deployment are not independently verified** here.
- The ZIP baseline did not include most personalized photos/MP3s; existing placeholders remain until those assets are added. Their absence is not a hotfix regression.
- The reference video's behavior was recreated using CSS and SVG; no stock-video content was embedded in the site.

## Visual evidence

See `qa/evidence/` for real Chromium captures:

- `poodle-desktop.png` — paw trail beside, not across, the Polaroid, with 5/5 in the nav.
- `poodle-mobile-430.png` — in-flow phone-safe trail.
- `ticket-desktop.png`, `ticket-mobile-430.png` — reference barcode + digits on responsive ticket.
- `star-completion.png` — completion overlay after the fifth star.
- `paw-animation-frames.png` — frames of successive stamped footsteps.
- `paw-animation.gif` — an **accelerated** slideshow of frames captured over more than 15 seconds of animation; it is not a real-time screen recording.

Start the website with `index.html`. For full browser behavior, serve its extracted directory as a normal static site or deploy to GitHub Pages; keep the directory layout intact.
