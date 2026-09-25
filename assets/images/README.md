# Image assets

Only files listed here currently exist or are expected by the code. Nothing
breaks if a file is missing — a soft scrapbook-style placeholder shows
instead (see "General fallback behavior" below).

| File | Purpose | Used in |
|------|---------|---------|
| `potato-mingyu.png` | Mingyu's potato mascot (original illustration) | SEVENTEEN → Mingyu Corner **only** |
| `lynn-main.jpg` | Main Lynn photo | About section |
| `poodle-01.jpg` | Lynn's poodle (main photo) | Poodle section |
| `poodle-02.jpg` | Lynn's poodle (second photo) | Poodle section |
| `mingyu-01.jpg` | Mingyu photo (solo) | Mingyu Corner photo cluster |
| `mingyu-02.jpg` | Mingyu photo (solo) | Mingyu Corner photo cluster |
| `mingyu-03.jpg` | Mingyu photo (concert/group) | Mingyu Corner photo cluster |
| `kuromi-sticker.png` | Kuromi decoration — reused as a small floating sticker | Scattered across About, Music, Sewing, and Wishes sections |
| `icon-music.png` | About section interest-card icon | About section |
| `icon-poodle.png` | About section interest-card icon | About section |
| `icon-seventeen.png` | About section interest-card icon | About section |
| `icon-friends.png` | About section interest-card icon | About section |
| `icon-concerts.png` | About section interest-card icon | About section |
| `icon-sewing.png` | About section interest-card icon | About section |
| `seventeen-01.jpg` | SEVENTEEN photo | SEVENTEEN section, photo strip |
| `seventeen-02.jpg` | SEVENTEEN photo | SEVENTEEN section, photo strip |
| `sewing-machine.jpg` | Lynn's sewing machine | Sewing Corner |
| `coaster.jpg` | The coaster Lynn sewed by hand | Sewing Corner |
| `memory-01.jpg` – `memory-04.jpg` | Friendship memories | Our Memories polaroid wall |
| `album-placeholder.jpg` | Default album art | Music Room player |
| `concert-01.jpg` – `concert-03.jpg` | Concert photos | Concert Nights tickets |
| `friends-room.jpg` | The Friends-inspired room photo/illustration | Friends section (hotspots sit on top of this image) |
| `seventeen-ticket.png` | Survival-kit icon: ticket | SEVENTEEN Concert Survival Kit |
| `seventeen-lightstick.png` | Survival-kit icon: lightstick | SEVENTEEN Concert Survival Kit |
| `seventeen-camera.png` | Survival-kit icon: camera | SEVENTEEN Concert Survival Kit |
| `seventeen-water.png` | Survival-kit icon: water | SEVENTEEN Concert Survival Kit |
| `seventeen-tissues.png` | Survival-kit icon: tissues | SEVENTEEN Concert Survival Kit |
| `seventeen-emotional.png` | Survival-kit icon: "emotional stability" | SEVENTEEN Concert Survival Kit |

Of these, only `potato-mingyu.png` currently exists in the repo. Everything
else is a documented expectation — add the file whenever you're ready and it
will show up automatically.

## Adding new images

1. Put the image inside `assets/images/`.
2. Give it a descriptive, lowercase, hyphenated filename (e.g.
   `memory-05.jpg`, not `IMG_4821 (2).JPG`).
3. Reference it from the relevant config:
   - Most photos → `CONFIG` at the top of `js/script.js` (memories,
     concerts, friends-room modal photos, etc.)
   - A few structural photos (Lynn's main photo, the poodle, Mingyu,
     SEVENTEEN, the sewing machine/coaster, the Friends room) are written
     directly into `index.html` as `<img src="assets/images/...">` tags —
     search the file for the filename to find the exact spot.
   - The `ASSETS` object near the top of `js/script.js` centralizes the
     canonical path for each of these, so update it there too if you ever
     rename a file.
4. Use relative paths exactly like the existing ones (`assets/images/...`),
   never an absolute path or a full URL.
5. Recommended formats: JPG/JPEG for photos, PNG for illustrations/icons
   with transparency, WebP if you want smaller file sizes.
6. Keep filenames simple: lowercase letters, numbers, and hyphens only. No
   spaces, no parentheses, no uppercase.

## General fallback behavior

Every `<img>` on the site has an `onerror` handler that hides the broken
image and shows a soft, on-brand placeholder box instead (a pale blue
diagonal pattern with a small handwritten "add photo here" note, or a plain
placeholder for tiny icons). This means you can deploy the site today with
zero photos added, and add them one at a time later without ever breaking
anything.

## About the Kuromi sticker

Kuromi is an official Sanrio character, so — unlike the original potato
mascot — this image is expected to be **your own photo/sticker** (merch,
official art you own the rights to use personally, a screenshot of a
sticker sheet, etc.), not anything generated for this site. Rather than a
dedicated section, Kuromi appears as a small recurring decorative sticker
that gently floats/drifts in the corner of four different sections (About,
Music, Sewing, Wishes) — the same single image file is just reused and
repositioned each time, so you only need to provide one file.

## About the About-section icons

`icon-music.png` through `icon-sewing.png` are optional. Until you add
them, each interest card falls back to its original emoji automatically —
nothing looks broken either way.



`potato-mingyu.png` is an **original illustration** inspired by the general
idea of a cute potato mascot — not a reproduction of any official artwork —
since fan merchandise and official art are copyrighted. It is intentionally
used in exactly one place: the **SEVENTEEN → Mingyu Corner** section. It
does not appear in the navigation, the opening screen, the poodle section,
the sewing section, or the finale.
