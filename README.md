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
The Mingyu Corner includes an original, hand-styled potato mascot (drawn in
SVG, inspired by the general idea of a cute potato character) rather than a
reproduction of any official artwork, since official fan merchandise/art is
copyrighted. It only appears in that one section, as requested.
