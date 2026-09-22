Drop MP3 files in here and point to them from CONFIG.PLAYLIST in
js/script.js, e.g.:

  { title: "Song title", artist: "Artist", cover: "assets/images/album-placeholder.jpg", audio: "assets/music/song1.mp3" }

If a file is missing, the player just stays paused gracefully — it
won't throw an error or break the page.
