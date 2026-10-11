# HOTFIX — Star 3 Visibility and Click Accessibility

**Authoritative baseline:** `lynns-birthday-website-stars-barcode-pawprints-fixed.zip`.
**Scope:** SEVENTEEN section collectible `star-3` only. The existing five-star state machine, barcode, and animated Poodle pawprints are preserved.

## Root cause

The third star existed and worked in JavaScript, but its HTML used `hidden-star--light` and CSS set its color to `rgba(255,255,255,0.3)` directly over a nearly white Mingyu Fan Club card. Its prior `top:-6px; right:8px` also placed its clickable rectangle across part of the fan-card diamond decoration. The star therefore looked invisible or indistinguishable from decorative details.

## Changes

- `index.html`: removed **only** the `hidden-star--light` class from the `star-3` span. Retained `data-star-id="star-3"`, `role="button"`, keyboard focus, `aria-pressed`, and the existing 5-star collection markup.
- `css/style.css`: removed obsolete `.hidden-star--light` rules (the class had no other consumers). Positioned Star 3 beside the *outer upper-right corner* of the fan card (`top:-20px;right:-30px`), assigned blue ink (`#375d91`) on a pale-blue paper sticker, a fixed **44 × 44px** hit target, and a subtle twinkle/hover-focus glow. Animation is disabled for `prefers-reduced-motion`. Collected stars retain the existing pop animation.
- `js/script.js`: **unchanged**. No changes to `lynnHiddenStars`, legacy progress migration, the completion overlay or its click/keyboard listeners.
- Barcode asset, pawprint CSS/JS and original website content: **unchanged**.

## Rendered browser checks

Chromium/Playwright rendered actual HTML+CSS+JS via `page.set_content` because direct browser navigation to local files/HTTP is administratively blocked in this runtime. The testing harness used an in-memory localStorage double for saved-progress checks; **native-origin storage persistence on a deployed GitHub Pages website is not separately verified**. Personal photos not provided in the baseline remain placeholders. Google Fonts network access is unavailable, so screenshots use fallback fonts while the production website retains its font links.

| Viewport width | Hit target | Center receives pointer | No diamond/heading overlap | Saved 4/5 → 5/5 | Completion opens | Horizontal overflow | JS errors |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1440px | 44×44px | Pass | Pass | Pass | Pass | 0px | 0 |
| 1200px | 44×44px | Pass | Pass | Pass | Pass | 0px | 0 |
| 1024px | 44×44px | Pass | Pass | Pass | Pass | 0px | 0 |
| 768px | 44×44px | Pass | Pass | Pass | Pass | 0px | 0 |
| 430px | 44×44px | Pass | Pass | Pass | Pass | 0px | 0 |
| 375px | 44×44px | Pass | Pass | Pass | Pass | 0px | 0 |

Additional checks: Star 3 works with actual pointer clicks and keyboard **Enter** and **Space** after the entrance transition; saved IDs after collection are exactly stars 1–5, with no reset or double counting. CSS computed style shows `mingyuStarTwinkle`, and hovering adds a soft glow/transform. The reference barcode still renders at 166 × 100 natural pixels, and ten Poodle paw-step elements remain present at all six widths. `node --check js/script.js` passed. No Secret Room was introduced.

**Visual evidence:** `qa/evidence/star3-position-1440.png` and `star3-position-430.png` are cropped, unmodified real-browser screenshots, with complete viewport versions also provided. Annotated screenshots separately available as `qa/evidence/star3-labelled-desktop.png` and `qa/evidence/star3-labelled-mobile.png`. Precise click/layout measurement data is in `qa/star3-results.json`.

## Packaging and remaining limitations

The updated ZIP contains all baseline website files and assets. Source byte comparison confirmed that among existing files, **only `index.html` and `css/style.css` changed**. The report and Star 3 QA evidence are additions. GitHub Pages deployment and long-term native `localStorage` behavior are unverified in this restricted browser environment.
