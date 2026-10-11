# Standalone JavaScript integration — October 11, 2026

## Changes made

- Merged the provided standalone `script.js` into the website at `js/script.js`.
- Preserved the ZIP's existing HTML page structure, CSS, and interactions. The external script has the same functional architecture as the bundled script; changes are primarily the custom birthday content, concert-photo fallback and dialogue.
- Updated the static Friends section age fallback in `index.html` from 25 to 24 (the script also fills it dynamically).
- Updated `assets/images/README.md` to match the personalized memory and album-cover file names used by the integrated script.

## Where to edit

The website loads `js/script.js` in `index.html`. Edit the `CONFIG` block near the start of `js/script.js` to modify the date, memories, concert information, playlist, and wishes. The standalone root-level `script.js` was not added as a second script, avoiding duplicate event handlers and variable declarations.

## Media not included in the supplied ZIP

Only `assets/images/potato-mingyu.png` was present in the source ZIP. The website references other personal photographs, album covers, and `assets/music/song1.mp3` through `song6.mp3`, but those files were not supplied. They must be added by the website owner at the paths listed in `assets/images/README.md` and in the `CONFIG` playlist. Existing fallback visuals handle most missing images. Missing MP3s cannot play sound until added.

## Intentionally unchanged

- All current visual styling and page sections, including the hidden-heart collection and secret room.
- Existing placeholder content inside `index.html` for the secret room.
- Microphone feature, browser localStorage behavior, and static hosting setup.

## Validation

- `node --check js/script.js` passed (valid JavaScript syntax).
- Source-level DOM validation passed: 68 active referenced HTML IDs exist, 93 unique HTML IDs, the external script is loaded once, and all five collectible hearts are present.
- JS configuration evaluation passed: 24 years, September 27, 12 memory entries, 6 songs, and 3 concert records.
- CSS parsing passed without syntax errors.
- Automated end-to-end browser navigation was blocked by the testing environment, so live click-through/browser visual QA was not completed. Test the ZIP in a browser after adding your photos and MP3s.
