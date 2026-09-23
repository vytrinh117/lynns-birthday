/* =========================================================================
   LYNN'S BIRTHDAY SCRAPBOOK — SCRIPT.JS
   ---------------------------------------------------------------------
   Everything you (a non-developer) need to personalize is in the
   CONFIG object right below. Scroll past it only if you want to see
   how things work under the hood.
   ========================================================================= */

const CONFIG = {

  // ---- Basic info ----
  LYNN_NAME: "Lynn",
  AGE: 25,                         // shown in the Friends section title
  BIRTHDAY_DATE: "June 21",        // shown on the final concert ticket
  DOG_NAME: "the poodle",          // used in a couple of dog messages below

  // ---- Photos ----
  // Replace these paths with your own images. Keep the same file names,
  // or update the path here if you rename a file. Nothing breaks if a
  // photo is missing — a soft placeholder box shows up instead.
  DOG_PHOTOS: ["assets/images/poodle-01.jpg", "assets/images/poodle-02.jpg"],
  MINGYU_PHOTOS: ["assets/images/mingyu-01.jpg"],
  SEVENTEEN_PHOTOS: ["assets/images/seventeen-01.jpg", "assets/images/seventeen-02.jpg"],

  // ---- Memories (Our Memories polaroid wall) ----
  // Add or remove objects freely. "rotate" is in degrees, "date" and
  // "caption" show up under each photo.
  MEMORY_PHOTOS: [
    { src: "assets/images/memory-01.jpg", date: "2023", caption: "The beginning of this chapter.", rotate: -4 },
    { src: "assets/images/memory-02.jpg", date: "2024", caption: "Apparently we thought we had everything figured out.", rotate: 3 },
    { src: "assets/images/memory-03.jpg", date: "2025", caption: "Still here. Still annoying each other.", rotate: -2 },
    { src: "assets/images/memory-04.jpg", date: "2026", caption: "Still making memories.", rotate: 4 },
  ],

  // ---- Music player ----
  // Add as many songs as you want. If "audio" points to a file that
  // doesn't exist yet, the player just shows a friendly placeholder
  // state instead of breaking.
  PLAYLIST: {
    "Main Character Energy": [
      { title: "Song title here", artist: "Artist name", cover: "assets/images/album-placeholder.jpg", audio: "assets/music/song1.mp3" },
      { title: "Another song", artist: "Artist name", cover: "assets/images/album-placeholder.jpg", audio: "assets/music/song2.mp3" },
    ],
    "Concert Night": [
      { title: "Concert anthem", artist: "Artist name", cover: "assets/images/album-placeholder.jpg", audio: "assets/music/song3.mp3" },
    ],
    "Singing Alone at 2AM": [
      { title: "3am vocal run", artist: "Artist name", cover: "assets/images/album-placeholder.jpg", audio: "assets/music/song4.mp3" },
    ],
    "SEVENTEEN Hours": [
      { title: "Bias wrecker", artist: "SEVENTEEN", cover: "assets/images/album-placeholder.jpg", audio: "assets/music/song5.mp3" },
    ],
    "Soft Girl Sunday": [
      { title: "Cozy morning", artist: "Artist name", cover: "assets/images/album-placeholder.jpg", audio: "assets/music/song6.mp3" },
    ],
  },

  // ---- Concert memories (small tickets under Music Room) ----
  CONCERTS: [
    { artist: "[ Artist ]", date: "[ Date ]", venue: "[ Venue ]", photo: "assets/images/concert-01.jpg", memory: "core memory unlocked" },
    { artist: "[ Artist ]", date: "[ Date ]", venue: "[ Venue ]", photo: "assets/images/concert-02.jpg", memory: "we screamed the whole time" },
    { artist: "[ Artist ]", date: "[ Date ]", venue: "[ Venue ]", photo: "assets/images/concert-03.jpg", memory: "worth every penny" },
  ],

  // ---- Birthday wishes (revealed one by one) ----
  BIRTHDAY_MESSAGES: [
    "I hope you keep finding songs that make you want to sing.",
    "I hope there are always concerts worth staying up late for.",
    "I hope your camera roll keeps filling with beautiful memories.",
    "I hope you keep finding people who make ordinary days feel special.",
    "I hope you always have something to look forward to.",
    "I hope you keep creating beautiful things with your own hands.",
    "And I hope you never stop being you.",
  ],

  // ---- Lynn Wrapped statistics ----
  // Mix real and playful numbers — this section is meant to be funny.
  WRAPPED_STATISTICS: [
    { emoji: "🎧", number: "412", label: "Hours of music listened to" },
    { emoji: "🎤", number: "9,004", label: "Songs sung (mostly in the shower)" },
    { emoji: "🎟️", number: "6", label: "Concerts attended" },
    { emoji: "💎", number: "928", label: "Times Mingyu was mentioned" },
    { emoji: "🐩", number: "37", label: "Dog-related activities" },
    { emoji: "🧵", number: "14", label: "Things sewn by hand" },
    { emoji: "☕", number: "∞", label: "Friends episodes rewatched" },
    { emoji: "🫠", number: "404", label: "Emotional stability: Not Found" },
  ],

  // ---- Friends-room modal content ----
  // Edit the "message" and "photo" for each object. "photo" can be left
  // as-is if you don't have one yet — a placeholder shows automatically.
  FRIENDS_ROOM_CONTENT: {
    tv:     { title: "The TV",          message: "Our comfort shows: reruns, background noise, and never actually finishing anything.", photo: "" },
    photo:  { title: "The Photo Frame", message: "Our favorite moments: the ones we still bring up for no reason.", photo: "" },
    couch:  { title: "The Couch",       message: "Our memories: every ordinary afternoon that somehow became a core one.", photo: "" },
    cup:    { title: "The Coffee Cup",  message: "Things I love about you: your laugh, your loyalty, and your very specific opinions about Mingyu.", photo: "" },
    door:   { title: "The Door",        message: "Another surprise: there's always something waiting on the other side, isn't there?", photo: "" },
  },
};

/* =========================================================================
   ASSET PATHS — centralized so nothing is scattered randomly through the
   JS. If you rename or move a file, update it here once.
   ========================================================================= */
const ASSETS = {
  potatoMingyu: "assets/images/potato-mingyu.png",   // Mingyu Corner ONLY
  friendsRoom: "assets/images/friends-room.jpg",
  lynnMain: "assets/images/lynn-main.jpg",
  poodleMain: "assets/images/poodle-01.jpg",
  poodleSecondary: "assets/images/poodle-02.jpg",
  mingyuOne: "assets/images/mingyu-01.jpg",   // solo
  mingyuTwo: "assets/images/mingyu-02.jpg",   // solo
  mingyuThree: "assets/images/mingyu-03.jpg", // concert/group
  seventeenOne: "assets/images/seventeen-01.jpg",
  seventeenTwo: "assets/images/seventeen-02.jpg",
  kuromiOne: "assets/images/kuromi-01.jpg",
  kuromiTwo: "assets/images/kuromi-02.jpg",
  kuromiThree: "assets/images/kuromi-03.jpg",
  sewingMachine: "assets/images/sewing-machine.jpg",
  coaster: "assets/images/coaster.jpg",
  icons: {
    music: "assets/images/icon-music.png",
    poodle: "assets/images/icon-poodle.png",
    seventeen: "assets/images/icon-seventeen.png",
    friends: "assets/images/icon-friends.png",
    concerts: "assets/images/icon-concerts.png",
    sewing: "assets/images/icon-sewing.png",
  },
  kit: {
    ticket: "assets/images/seventeen-ticket.png",
    lightstick: "assets/images/seventeen-lightstick.png",
    camera: "assets/images/seventeen-camera.png",
    water: "assets/images/seventeen-water.png",
    tissues: "assets/images/seventeen-tissues.png",
    emotional: "assets/images/seventeen-emotional.png",
  },
};

/* =========================================================================
   UTILITIES
   ========================================================================= */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function formatTime(seconds) {
  if (!isFinite(seconds) || isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

/* =========================================================================
   OPENING SCREEN → ENTER SITE
   ========================================================================= */
function initOpening() {
  const opening = $("#opening");
  const enterBtn = $("#enterBtn");
  const mainSite = $("#mainSite");
  const heartBadge = $("#heartHuntBadge");

  enterBtn.addEventListener("click", () => {
    // Start background music only after this user interaction.
    tryStartAmbientMusic();

    opening.classList.add("opening--leaving");
    setTimeout(() => {
      opening.style.display = "none";
      mainSite.hidden = false;
      heartBadge.hidden = false;
      document.body.style.overflow = "";
      initRevealObserver();
      initNavScrollSpy();
    }, prefersReducedMotion ? 0 : 900);
  }, { once: true });
}

function tryStartAmbientMusic() {
  // The music player only actually plays once the person presses play,
  // per the "no autoplay before interaction" rule. This hook is here in
  // case you'd like the first playlist song to gently start after entry —
  // uncomment the two lines below if you want that behavior.
  //
  // const player = document.getElementById("playerPlay");
  // if (player) player.click();
}

/* =========================================================================
   NAVIGATION
   ========================================================================= */
function initNav() {
  const toggle = $("#navToggle");
  const links = $("#navLinks");

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$("[data-nav]").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Interest cards + "scroll to" buttons across the site
  $$("[data-scroll]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  });
}

function initNavScrollSpy() {
  const sections = $$("[data-nav]").map(a => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
  const navLinkFor = id => $(`.nav-links a[href="#${id}"]`);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = navLinkFor(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        $$(".nav-links a").forEach(a => a.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -45% 0px" });

  sections.forEach(sec => observer.observe(sec));
}

/* =========================================================================
   SCROLL REVEAL (fade + slide, applied once per element)
   ========================================================================= */
function initRevealObserver() {
  const targets = $$(".section-inner, .polaroid, .interest-card, .wrapped-card, .kit-item, .reveal-stagger, .chapter-divider");
  targets.forEach(el => el.classList.add("reveal"));

  if (prefersReducedMotion) {
    targets.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
}

/* =========================================================================
   MUSIC PLAYER
   ========================================================================= */
function initMusicPlayer() {
  const audio = new Audio();
  audio.volume = 0.7;

  const playlistList = $("#playlistList");
  const playBtn = $("#playerPlay");
  const prevBtn = $("#playerPrev");
  const nextBtn = $("#playerNext");
  const progress = $("#playerProgress");
  const volume = $("#playerVolume");
  const artEl = $("#playerArt");
  const artImg = $("#playerArtImg");
  const songEl = $("#playerSong");
  const artistEl = $("#playerArtist");
  const timeCurrent = $("#playerTimeCurrent");
  const timeTotal = $("#playerTimeTotal");

  // Flatten playlist into a single ordered queue while remembering
  // which named playlist each song belongs to, for the sidebar UI.
  const queue = [];
  Object.entries(CONFIG.PLAYLIST).forEach(([name, songs]) => {
    songs.forEach(song => queue.push({ ...song, playlist: name }));
  });

  let currentIndex = queue.length ? 0 : -1;

  function renderPlaylistSidebar() {
    playlistList.innerHTML = "";
    Object.keys(CONFIG.PLAYLIST).forEach((name, i) => {
      const li = document.createElement("li");
      li.textContent = `${String(i + 1).padStart(2, "0")} — ${name}`;
      li.dataset.playlist = name;
      li.addEventListener("click", () => {
        const firstIndex = queue.findIndex(s => s.playlist === name);
        if (firstIndex !== -1) loadSong(firstIndex, true);
      });
      playlistList.appendChild(li);
    });
  }

  function highlightActivePlaylist() {
    const current = queue[currentIndex];
    $$(".playlist-list li").forEach(li => {
      li.classList.toggle("active", current && li.dataset.playlist === current.playlist);
    });
  }

  function loadSong(index, autoplay = false) {
    if (!queue.length) return;
    currentIndex = (index + queue.length) % queue.length;
    const song = queue[currentIndex];

    songEl.textContent = song.title || "Untitled";
    artistEl.textContent = song.artist || "Unknown artist";
    artImg.src = song.cover || "";
    artImg.style.display = "";
    artEl.classList.remove("img-missing");
    artImg.onerror = () => { artImg.style.display = "none"; artEl.classList.add("img-missing"); };

    audio.src = song.audio || "";
    progress.value = 0;
    timeCurrent.textContent = "0:00";
    timeTotal.textContent = "0:00";

    highlightActivePlaylist();

    if (autoplay) {
      audio.play().catch(() => {
        // Autoplay blocked or file missing — that's fine, just stay paused.
        setPlayingState(false);
      });
    }
  }

  function setPlayingState(isPlaying) {
    playBtn.textContent = isPlaying ? "⏸" : "▶";
    playBtn.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
    artEl.classList.toggle("is-playing", isPlaying);
  }

  playBtn.addEventListener("click", () => {
    if (!queue.length || !audio.src) return;
    if (audio.paused) {
      audio.play().then(() => setPlayingState(true)).catch(() => setPlayingState(false));
    } else {
      audio.pause();
      setPlayingState(false);
    }
  });

  prevBtn.addEventListener("click", () => loadSong(currentIndex - 1, !audio.paused));
  nextBtn.addEventListener("click", () => loadSong(currentIndex + 1, !audio.paused));

  audio.addEventListener("ended", () => loadSong(currentIndex + 1, true));
  audio.addEventListener("play", () => setPlayingState(true));
  audio.addEventListener("pause", () => setPlayingState(false));

  audio.addEventListener("loadedmetadata", () => {
    timeTotal.textContent = formatTime(audio.duration);
  });
  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      progress.value = (audio.currentTime / audio.duration) * 100;
      timeCurrent.textContent = formatTime(audio.currentTime);
    }
  });
  progress.addEventListener("input", () => {
    if (audio.duration) audio.currentTime = (progress.value / 100) * audio.duration;
  });
  volume.addEventListener("input", () => { audio.volume = Number(volume.value); });

  renderPlaylistSidebar();
  if (queue.length) {
    loadSong(0, false);
  } else {
    songEl.textContent = "No songs added yet";
    artistEl.textContent = "Add your MP3s in script.js ✦";
  }
}

/* =========================================================================
   CONCERT TICKETS (Music Room subsection)
   ========================================================================= */
function renderConcertTickets() {
  const row = $("#ticketRow");
  row.innerHTML = "";
  CONFIG.CONCERTS.forEach(c => {
    const ticket = document.createElement("div");
    ticket.className = "concert-ticket";
    ticket.innerHTML = `
      <p class="ct-admit">Admit One ♡</p>
      <div class="ct-photo img-missing">
        <img src="${c.photo}" alt="${c.artist} concert" loading="lazy"
             onerror="this.style.display='none'; this.parentElement.classList.add('img-missing')">
      </div>
      <dl>
        <dt>Artist</dt><dd>${c.artist}</dd>
        <dt>Date</dt><dd>${c.date}</dd>
        <dt>Venue</dt><dd>${c.venue}</dd>
      </dl>
      <p class="ct-status">Status: Core Memory</p>
      <p class="ct-memory">"${c.memory}"</p>
    `;
    row.appendChild(ticket);
  });
}

/* =========================================================================
   POODLE — RANDOM MESSAGES
   ========================================================================= */
function initPoodle() {
  const btn = $("#poodlePhotoBtn");
  const bubble = $("#poodleBubble");
  const messages = [
    "Lynn, have you fed me?",
    "Another concert ticket?",
    "I approve this birthday website.",
    "Can we go for a walk now?",
    "You may continue scrolling.",
    "I am clearly the cutest one here.",
  ];
  let lastMsg = "";

  btn.addEventListener("click", () => {
    let msg;
    do { msg = messages[Math.floor(Math.random() * messages.length)]; } while (msg === lastMsg && messages.length > 1);
    lastMsg = msg;
    bubble.textContent = msg;
    bubble.classList.add("show");
  });
}

/* =========================================================================
   MINGYU POTATO EASTER EGG
   ========================================================================= */
function initPotato() {
  const potato = $("#potatoMascot");
  const msgEl = $("#potatoMessage");
  const sequence = [
    "Mingyu has entered the chat.",
    "You have been Mingyu-approved.",
    "Okay, that's enough.",
  ];
  const randomExtras = [
    "The potato waves at you.",
    "It's giving visual (the potato agrees).",
    "13 members, 1 potato, 0 regrets.",
    "The potato has nothing left to say.",
  ];
  let clicks = 0;

  potato.addEventListener("click", () => {
    clicks += 1;
    if (clicks <= sequence.length) {
      msgEl.textContent = sequence[clicks - 1];
    } else {
      msgEl.textContent = randomExtras[Math.floor(Math.random() * randomExtras.length)];
    }
    if (!prefersReducedMotion) {
      potato.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.15) rotate(-6deg)" }, { transform: "scale(1)" }],
        { duration: 400, easing: "ease-out" }
      );
    }
  });
  // Note: #potatoMascot is a real <button>, so Enter/Space already trigger
  // the click handler above natively — no extra keydown listener needed
  // (adding one would double-count each keyboard activation).
}

/* =========================================================================
   FRIENDS ROOM — HOTSPOTS OVER THE ROOM IMAGE + MODAL
   ========================================================================= */
function initFriendsRoom() {
  $("#friendsAge").textContent = CONFIG.AGE;

  const overlay = $("#roomModalOverlay");
  const eyebrow = $("#roomModalEyebrow");
  const title = $("#roomModalTitle");
  const photo = $(".room-modal-photo");
  const message = $("#roomModalMessage");

  function openRoomModal(key) {
    const content = CONFIG.FRIENDS_ROOM_CONTENT[key];
    if (!content) return;
    eyebrow.textContent = "you clicked:";
    title.textContent = content.title;
    message.textContent = content.message;

    photo.classList.add("img-missing");
    photo.innerHTML = "";
    if (content.photo) {
      const img = document.createElement("img");
      img.src = content.photo;
      img.alt = content.title;
      img.style.cssText = "width:100%;height:100%;object-fit:cover;border-radius:12px;";
      img.onerror = () => { photo.innerHTML = ""; photo.classList.add("img-missing"); };
      img.onload = () => photo.classList.remove("img-missing");
      photo.appendChild(img);
    }

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeRoomModal() { overlay.hidden = true; document.body.style.overflow = ""; }

  // Hotspots layered on top of the room image
  $$(".room-hotspot").forEach(btn => {
    btn.addEventListener("click", () => openRoomModal(btn.dataset.room));
  });

  // Accessible fallback list (shown on very small screens via CSS)
  $$(".friends-room-list li").forEach(li => {
    li.setAttribute("tabindex", "0");
    li.setAttribute("role", "button");
    const respond = () => openRoomModal(li.dataset.room);
    li.addEventListener("click", respond);
    li.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); respond(); } });
  });

  $("#roomModalClose").addEventListener("click", closeRoomModal);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeRoomModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !overlay.hidden) closeRoomModal(); });
}

/* =========================================================================
   SEWING TO-DO CHECKLIST (session-only, doesn't persist)
   ========================================================================= */
function initSewingTodo() {
  $$("[data-todo]").forEach(box => {
    box.addEventListener("change", () => {
      if (box.checked && !prefersReducedMotion) {
        const label = box.closest("label");
        const heart = document.createElement("span");
        heart.textContent = " ♡";
        heart.style.color = "var(--beige)";
        heart.style.animation = "heartFoundPop 500ms ease";
        label.appendChild(heart);
        setTimeout(() => heart.remove(), 900);
      }
    });
  });
}

/* =========================================================================
   MEMORIES — POLAROID WALL + LIGHTBOX
   ========================================================================= */
function renderMemories() {
  const wall = $("#polaroidWall");
  wall.innerHTML = "";

  CONFIG.MEMORY_PHOTOS.forEach((m, i) => {
    const item = document.createElement("div");
    item.className = "polaroid memory-item";
    item.style.transform = `rotate(${m.rotate || 0}deg)`;
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.setAttribute("aria-label", `Memory from ${m.date}: ${m.caption}`);
    item.innerHTML = `
      <div class="photo-frame">
        <img src="${m.src}" alt="Memory from ${m.date}" loading="lazy"
             onerror="this.style.display='none'; this.parentElement.classList.add('img-missing')">
      </div>
      <p class="polaroid-caption handwritten">
        <span class="memory-date">${m.date}</span>
        "${m.caption}"
      </p>
    `;
    const openLightbox = () => showLightbox(m);
    item.addEventListener("click", openLightbox);
    item.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(); } });
    wall.appendChild(item);
  });
}

function showLightbox(m) {
  const lightbox = $("#lightbox");
  const frame = $("#lightboxFrame");
  const caption = $("#lightboxCaption");
  frame.classList.remove("img-missing");
  frame.innerHTML = `<img src="${m.src}" alt="Memory from ${m.date}" onerror="this.style.display='none'; this.parentElement.classList.add('img-missing')">`;
  caption.textContent = `${m.date} — "${m.caption}"`;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function initLightboxClose() {
  const lightbox = $("#lightbox");
  const close = () => { lightbox.hidden = true; document.body.style.overflow = ""; };
  $("#lightboxClose").addEventListener("click", close);
  lightbox.addEventListener("click", e => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !lightbox.hidden) close(); });
}

/* =========================================================================
   LYNN WRAPPED
   ========================================================================= */
function renderWrapped() {
  const grid = $("#wrappedGrid");
  grid.innerHTML = "";
  CONFIG.WRAPPED_STATISTICS.forEach(stat => {
    const card = document.createElement("div");
    card.className = "wrapped-card";
    card.innerHTML = `
      <div class="wrapped-emoji">${stat.emoji}</div>
      <div class="wrapped-number">${stat.number}</div>
      <div class="wrapped-label">${stat.label}</div>
    `;
    grid.appendChild(card);
  });
}

/* =========================================================================
   BIRTHDAY WISHES — REVEAL ONE BY ONE
   ========================================================================= */
function renderWishes() {
  const container = $("#wishClouds");
  container.innerHTML = "";
  CONFIG.BIRTHDAY_MESSAGES.forEach(msg => {
    const note = document.createElement("p");
    note.className = "wish-note";
    note.textContent = msg;
    container.appendChild(note);
  });

  if (prefersReducedMotion) {
    $$(".wish-note").forEach(n => n.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  $$(".wish-note").forEach(n => observer.observe(n));
}

/* =========================================================================
   FINAL TICKET DATE
   ========================================================================= */
function initFinale() {
  $("#finaleDate").textContent = CONFIG.BIRTHDAY_DATE;
}

/* =========================================================================
   HIDDEN HEART HUNT — real, verifiable, persistent state
   ---------------------------------------------------------------------
   There are exactly 5 hearts in the DOM, each with a unique
   data-heart-id ("heart-1" ... "heart-5"). Progress is stored in
   localStorage under the key below, so it survives a page refresh.

   TO RESET PROGRESS WHILE TESTING:
   Open the browser console (F12) on the live site and run:
       localStorage.removeItem('lynnHiddenHearts');
   then refresh the page. This also resets the secret room lock.
   ========================================================================= */
const HEART_STORAGE_KEY = "lynnHiddenHearts";
let secretRoomUnlocked = false;

function getCollectedHearts() {
  try {
    const raw = localStorage.getItem(HEART_STORAGE_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch (e) {
    return []; // localStorage unavailable (private browsing, etc.) — degrade gracefully
  }
}

function saveCollectedHearts(arr) {
  try { localStorage.setItem(HEART_STORAGE_KEY, JSON.stringify(arr)); } catch (e) { /* ignore */ }
}

function initHeartHunt() {
  const heartEls = $$(".hidden-heart[data-heart-id]");
  const totalHearts = heartEls.length; // must be exactly 5
  const countEl = $("#heartHuntCount");
  const badge = $("#heartHuntBadge");
  const overlay = $("#heartCompleteOverlay");

  let collected = getCollectedHearts().filter(id =>
    heartEls.some(h => h.dataset.heartId === id) // ignore stale/unknown ids
  );

  function updateCounterUI() {
    countEl.textContent = collected.length >= totalHearts
      ? `${collected.length} / ${totalHearts} — ALL FOUND!`
      : `${collected.length} / ${totalHearts}`;
    badge.classList.toggle("all-found", collected.length >= totalHearts);
  }

  function markHeartCollectedInDOM(heart) {
    heart.classList.add("found");
    heart.textContent = "♥";
    heart.setAttribute("aria-pressed", "true");
  }

  // Restore already-collected hearts on load (e.g. after a refresh)
  heartEls.forEach(heart => {
    if (collected.includes(heart.dataset.heartId)) markHeartCollectedInDOM(heart);
  });
  updateCounterUI();
  if (collected.length >= totalHearts) secretRoomUnlocked = true;

  heartEls.forEach(heart => {
    const id = heart.dataset.heartId;

    const collect = () => {
      if (collected.includes(id)) return; // already collected — do nothing, ever
      collected.push(id);
      saveCollectedHearts(collected);
      markHeartCollectedInDOM(heart);
      updateCounterUI();

      badge.classList.add("pulse");
      setTimeout(() => badge.classList.remove("pulse"), 500);

      if (collected.length === totalHearts) {
        secretRoomUnlocked = true;
        setTimeout(() => { overlay.hidden = false; }, 600);
      }
    };

    heart.addEventListener("click", collect);
    heart.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); collect(); } });
  });

  $("#heartCompleteClose").addEventListener("click", () => { overlay.hidden = true; });
  overlay.addEventListener("click", e => { if (e.target === overlay) overlay.hidden = true; });

  $("#openSecretRoomBtn").addEventListener("click", () => {
    overlay.hidden = true;
    openSecretRoom();
  });
}

/* =========================================================================
   SECRET ROOM — only ever opens if secretRoomUnlocked is true
   ========================================================================= */
function openSecretRoom() {
  if (!secretRoomUnlocked) return; // defensive gate: cannot be opened early
  $("#secretRoomOverlay").hidden = false;
  document.body.style.overflow = "hidden";
}
function initSecretRoom() {
  const overlay = $("#secretRoomOverlay");
  const close = () => { overlay.hidden = true; document.body.style.overflow = ""; };
  $("#secretRoomClose").addEventListener("click", close);
  overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !overlay.hidden) close(); });
}

/* =========================================================================
   CUSTOM CURSOR (subtle, desktop only)
   ========================================================================= */
function initCursor() {
  if (window.matchMedia("(hover: none)").matches || prefersReducedMotion) return;
  const dot = $("#cursorDot");
  window.addEventListener("mousemove", e => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    dot.classList.add("active");
  });
  document.addEventListener("mouseleave", () => dot.classList.remove("active"));
}

/* =========================================================================
   INIT EVERYTHING
   ---------------------------------------------------------------------
   Each feature is wrapped in its own try/catch. This is deliberate: if
   one section has a bug (a missing element, a bad selector, etc.), it
   logs an error to the console but does NOT stop every feature listed
   after it from running. Previously an error in an early feature could
   silently prevent Memories/Wrapped/Wishes/the heart hunt from ever
   initializing at all — this guards against that class of bug.
   ========================================================================= */
function safeInit(name, fn) {
  try {
    fn();
  } catch (err) {
    console.error(`[Lynn's site] "${name}" failed to initialize:`, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflow = "hidden"; // locked until entrance, then released in initOpening

  safeInit("opening", initOpening);
  safeInit("nav", initNav);
  safeInit("music player", initMusicPlayer);
  safeInit("concert tickets", renderConcertTickets);
  safeInit("poodle", initPoodle);
  safeInit("potato", initPotato);
  safeInit("friends room", initFriendsRoom);
  safeInit("sewing to-do", initSewingTodo);
  safeInit("memories", renderMemories);
  safeInit("lightbox", initLightboxClose);
  safeInit("wrapped", renderWrapped);
  safeInit("wishes", renderWishes);
  safeInit("finale", initFinale);
  safeInit("heart hunt", initHeartHunt);
  safeInit("secret room", initSecretRoom);
  safeInit("cursor", initCursor);
});
