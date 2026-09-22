# Lynn's Birthday Scrapbook

A personal, interactive digital scrapbook website. No build step, no backend —
just open `index.html` in a browser, or serve the folder with any static
server.

## How to run it
- Easiest: double-click `index.html`.
- Recommended (avoids browser file-access quirks): from this folder run
  `python3 -m http.server 8000` and open `http://localhost:8000`.

## Where to personalize everything
Almost every editable piece of content lives at the top of **`js/script.js`**,
inside the `CONFIG` object:

| To change...                     | Edit...                                  |
|-----------------------------------|-------------------------------------------|
| Lynn's age                        | `CONFIG.AGE`                              |
| Birthday date on the final ticket | `CONFIG.BIRTHDAY_DATE`                    |
| Dog's name                        | `CONFIG.DOG_NAME`                         |
| Songs / playlists                 | `CONFIG.PLAYLIST`                         |
| Concert memories                  | `CONFIG.CONCERTS`                         |
| Memories polaroid wall + captions | `CONFIG.MEMORY_PHOTOS`                    |
| Birthday wish messages            | `CONFIG.BIRTHDAY_MESSAGES`                |
| Lynn Wrapped statistics           | `CONFIG.WRAPPED_STATISTICS`               |

Photos go in `assets/images/` (see the README.txt in that folder for exact
file names) and songs go in `assets/music/`.

Secret Room content (10 reasons, inside jokes, personal message, etc.) is
written directly into `index.html` inside the `#secretRoomOverlay` block —
look for the `[ ... ]` placeholder text and replace it with your own words.

## What's interactive
- Functioning music player (play/pause/skip/seek/volume/playlists)
- Poodle photo → random speech-bubble messages
- Mingyu potato mascot → click sequence + random extra messages
- Friends-inspired room → clickable couch/cup/tv/door/photo frame
- Sewing to-do checklist
- Memories polaroid wall → click any photo for a lightbox view
- Hidden Heart Hunt → 5 hearts scattered through the site, unlocks the
  Secret Room when all are found
- Secret Room modal
- Final birthday concert ticket

## Notes on the potato mascot
The Mingyu Corner uses `assets/images/potato-mingyu.png` — an original
illustration inspired by the general idea of a cute potato character,
rather than a reproduction of any official artwork, since official fan
merchandise/art is copyrighted. It only appears in that one section, laid
out in its own column so it can never overlap the text next to it, even on
narrow screens or with longer text.

## Personalizing the website

| To change... | Edit... |
|---|---|
| Lynn's age, birthday date, dog's name | `CONFIG` at the top of `js/script.js` |
| Songs / playlists | `CONFIG.PLAYLIST` in `js/script.js` |
| Concert memories | `CONFIG.CONCERTS` in `js/script.js` |
| Memories polaroid wall + captions | `CONFIG.MEMORY_PHOTOS` in `js/script.js` |
| Birthday wish messages | `CONFIG.BIRTHDAY_MESSAGES` in `js/script.js` |
| Lynn Wrapped statistics | `CONFIG.WRAPPED_STATISTICS` in `js/script.js` |
| Friends-room object messages | `CONFIG.FRIENDS_ROOM_CONTENT` in `js/script.js` |
| Secret Room text (10 reasons, inside jokes, etc.) | directly in `index.html`, inside `#secretRoomOverlay` — look for `[ ... ]` placeholders |
| Any image path | `ASSETS` near the top of `js/script.js` for the main structural photos, or search `index.html`/the relevant `CONFIG` list for the rest |

Photos go in `assets/images/` (see `assets/images/README.md` for the full
list of expected filenames and what each one is for) and songs go in
`assets/music/`.

### Hidden Heart Hunt

There are exactly **5** hidden hearts scattered across the site (About,
Poodle, Mingyu Corner, Sewing, and Wishes). Each is a real, individually
clickable element with a unique ID (`heart-1` through `heart-5`), and each
can only be collected once. The counter in the top-right corner shows live
progress (`0 / 5` up to `5 / 5 — ALL FOUND!`), and the Secret Room only
unlocks once all 5 have been found.

Progress is saved in the browser's `localStorage` under the key
`lynnHiddenHearts`, so it survives a page refresh. **To reset progress**
(useful while testing, or to give someone a fresh hunt), open the browser
console (F12 → Console tab) on the live site and run:

```js
localStorage.removeItem('lynnHiddenHearts');
```

then refresh the page.

### Troubleshooting

If a section ever looks empty or a feature stops responding, open the
browser console (F12 → Console tab). Every feature on this site initializes
independently — if one has a problem, it logs a message there prefixed
with `[Lynn's site]` instead of silently breaking every feature that comes
after it on the page.
