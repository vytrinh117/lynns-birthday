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
  // The full friendship timeline. Two entry shapes:
  //  - a normal photo year:  { date, src, caption, rotate }
  //  - a "gap" year with no photo (type: "gap"), for stretches where you
  //    genuinely don't have — or don't want — a photo (different schools,
  //    a quiet year apart, etc.). It renders as a small text-only card
  //    instead of an empty/fake polaroid. Add, remove, or edit freely —
  //    nothing here is invented; fill in real captions for your own story.
  MEMORY_PHOTOS: [
    { src: "assets/images/memory-2013.jpg", date: "2013", caption: "The beginning of this chapter.", rotate: -4 },
    { src: "assets/images/memory-2014.jpg", date: "2014", caption: "[ add a caption for this year ]", rotate: 3 },
    { src: "assets/images/memory-2015.jpg", date: "2015", caption: "[ add a caption for this year ]", rotate: -3 },
    { src: "assets/images/memory-2016.jpg", date: "2016", caption: "[ add a caption for this year ]", rotate: 2 },
    { date: "2017 – 2019", type: "gap", icon: "🎒", caption: "different schools, different chapters." },
    { src: "assets/images/memory-2020.jpg", date: "2020", caption: "[ add a caption for this year ]", rotate: -2 },
    { src: "assets/images/memory-2021.jpg", date: "2021", caption: "[ add a caption for this year ]", rotate: 4 },
    { src: "assets/images/memory-2022.jpg", date: "2022", caption: "Apparently we thought we had everything figured out.", rotate: -3 },
    { date: "2023", type: "gap", icon: "✈", caption: "a quieter chapter ♡ different places, different routines." },
    { src: "assets/images/memory-2024.jpg", date: "2024", caption: "Still here. Still annoying each other.", rotate: 3 },
    { src: "assets/images/memory-2025.jpg", date: "2025", caption: "[ add a caption for this year ]", rotate: -2 },
    { src: "assets/images/memory-2026.jpg", date: "2026", caption: "Still making memories.", rotate: 4 },
  ],

  // ---- Music player ----
  // Add as many songs as you want. If "audio" points to a file that
  // doesn't exist yet, the player just shows a friendly placeholder
  // state instead of breaking.
  // Each record gets its own vinyl/label colors so the shelf reads as a
  // real personal collection, not six copies of the same black disc.
  // vinylColor: the disc itself. labelColor/labelTextColor: the center
  // label. Pick colors that suit each song's cover art once you add one.
  PLAYLIST: {
    "Main Character Energy": [
      { title: "Finesse (Remix)", artist: "Bruno Mars, Cardi B", cover: "assets/images/album-placeholder-1.jpg", audio: "assets/music/song1.mp3",
        vinylColor: "#17294a", labelColor: "#cfe0f4", labelTextColor: "#17294a" },
    ],
   "Your Mood": [
      { title: "Happy Now", artist: "Kali Uchis", cover: "assets/images/album-placeholder-2.jpg", audio: "assets/music/song2.mp3",
        vinylColor: "#2c3f66", labelColor: "#eef5fc", labelTextColor: "#2c3f66" },
    ],
    "Concert Night in October 2026": [
      { title: "After Hours", artist: "The Weeknd", cover: "assets/images/album-placeholder-3.jpg", audio: "assets/music/song3.mp3",
        vinylColor: "#3a2f5c", labelColor: "#d9d7ee", labelTextColor: "#3a2f5c" },
    ],
    "Singing Alone at Night": [
      { title: "3am vocal run", artist: "Artist name", cover: "assets/images/album-placeholder-4.jpg", audio: "assets/music/song4.mp3",
        vinylColor: "#0d1729", labelColor: "#9db8dd", labelTextColor: "#0d1729" },
    ],
    "SEVENTEEN Hours": [
      { title: "SOS", artist: "SEVENTEEN", cover: "assets/images/album-placeholder-5.jpg", audio: "assets/music/song5.mp3",
        vinylColor: "#5c7dad", labelColor: "#ffffff", labelTextColor: "#2c3f66" },
    ],
    "Lover Girl": [
      { title: "Ai Ngoài Anh", artist: "VSTRA", cover: "assets/images/album-placeholder-6.jpg", audio: "assets/music/song6.mp3",
        vinylColor: "#7d93b8", labelColor: "#fdf6ea", labelTextColor: "#5a4126" },
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
   SCROLL ENGINE — continuous, scroll-position-driven motion
   ---------------------------------------------------------------------
   Everything here reads the CURRENT scroll position every animation
   frame and sets styles directly from it — nothing is a one-shot
   triggered animation, and nothing uses a CSS transition to "catch up."
   That's what makes scrolling back up instantly and smoothly reverse
   every effect, exactly in step with the scrollbar.

   One rAF loop drives four independent categories, each with its own
   element set and its own property ownership (no two systems ever write
   the same transform on the same element):
     A. Content reveal   — .reveal elements (headings/cards/photos/lists),
                            fade + rise, distance varies by element type.
     B. Chapter divider  — its own progress calc, entirely separate from
                            category A. Drives the two lines, the motif,
                            the label and the title independently; the
                            divider element itself never moves, rotates,
                            or changes color as a whole. There is no
                            page-wide backdrop/color-interpolation layer —
                            sections are plain opaque blocks in normal
                            flow, and the divider between them is a small,
                            neutral, in-flow bridge, not a colored panel.
     C. Decorative parallax — [data-parallax] / [data-parallax-bg].
     D. Material motion   — thread draw, ticket stamp, timeline fill.
   Plus a light scroll-linked treatment for a deliberately small subset
   of decorative handwritten notes ([data-motion]), for rhythm rather
   than constant motion everywhere.

   Entirely skipped under prefers-reduced-motion — the CSS reduced-motion
   rules force every one of these to its settled, visible state instead.
   ========================================================================= */
function initScrollEngine() {
  // ---- Category A: CONTENT REVEAL --------------------------------------
  // Real content — headings, cards, photos, lists — fades/rises in as it
  // crosses a reveal band near the bottom of the viewport. Continuous and
  // reversible: it is a function of live scroll position, never a one-shot
  // trigger. Distance/scale vary slightly by element type so things don't
  // all move in lockstep (a heading drifts less than a photo, etc.) —
  // tuned via REVEAL_PROFILES below rather than one flat number everywhere.
  const REVEAL_PROFILES = [
    { selector: ".section-head, .section-inner > header", distance: 18, scaleFrom: 0.99 },
    { selector: ".polaroid", distance: 24, scaleFrom: 0.97 },
    { selector: ".interest-card, .wrapped-card, .kit-item", distance: 20, scaleFrom: 0.98 },
    { selector: ".profile-list li, .todo-list li", distance: 10, scaleFrom: 1 },
  ];
  const revealItems = [];
  const seen = new Set();
  REVEAL_PROFILES.forEach(profile => {
    $$(profile.selector).forEach(el => {
      if (seen.has(el)) return; // first matching profile wins if selectors overlap
      seen.add(el);
      el.classList.add("reveal");
      revealItems.push({ el, distance: profile.distance, scaleFrom: profile.scaleFrom });
    });
  });
  // Anything not covered by a specific profile (generic .section-inner
  // fallback) still gets the baseline content-reveal treatment.
  $$(".section-inner").forEach(el => {
    if (seen.has(el)) return;
    seen.add(el);
    el.classList.add("reveal");
    revealItems.push({ el, distance: 22, scaleFrom: 0.98 });
  });

  if (prefersReducedMotion) return; // CSS reduced-motion rules already force everything visible/static

  const parallaxEls = $$("[data-parallax]");
  const parallaxBgEls = $$("[data-parallax-bg]");
  const threadPaths = $$("[data-thread-path]");
  const timelines = $$("[data-timeline]");
  const stamps = $$("[data-stamp]");
  const noteEls = $$("[data-motion]");
  const dividers = $$(".chapter-divider");

  function clamp01(n) { return Math.min(1, Math.max(0, n)); }

  // ---- Category A: content reveal, per-element distance/scale ----------
  function updateReveals(vh) {
    const startLine = vh * 0.92;
    const endLine = vh * 0.55;
    revealItems.forEach(({ el, distance, scaleFrom }) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > vh + 200) return;
      const progress = clamp01((startLine - rect.top) / (startLine - endLine));
      el.style.opacity = String(0.15 + 0.85 * progress);
      el.style.translate = `0 ${((1 - progress) * distance).toFixed(1)}px`;
      if (scaleFrom !== 1) el.style.scale = String((scaleFrom + (1 - scaleFrom) * progress).toFixed(4));
    });
  }

  // ---- Category B: CHAPTER DIVIDER ---------------------------------------
  // Owns its own progress calculation, entirely separate from the generic
  // reveal system above. The divider element itself never moves, rotates,
  // or changes opacity as a whole — only its children do, independently:
  // the two lines grow inward, the motif settles, the label and title fade
  // in with a slight stagger. This is what keeps it reading as a quiet
  // in-flow bridge rather than a floating transitioning panel.
  function updateChapterDividers(vh) {
    dividers.forEach(div => {
      const rect = div.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > vh + 200) return;
      const startLine = vh * 0.85;
      const endLine = vh * 0.45;
      const progress = clamp01((startLine - rect.top) / (startLine - endLine));

      const lineLeft = $(".chapter-divider-line--left", div);
      const lineRight = $(".chapter-divider-line--right", div);
      const motif = $(".chapter-divider-motif", div);
      const label = $(".chapter-divider-label", div);
      const title = $(".chapter-divider-title", div);

      // Lines lead (0 → 0.7 of progress), motif follows, label/title settle last.
      const lineP = clamp01(progress / 0.7);
      const motifP = clamp01((progress - 0.15) / 0.7);
      const labelP = clamp01((progress - 0.3) / 0.7);
      const titleP = clamp01((progress - 0.4) / 0.7);

      if (lineLeft) lineLeft.style.transform = `scaleX(${lineP.toFixed(3)})`;
      if (lineRight) lineRight.style.transform = `scaleX(${lineP.toFixed(3)})`;
      if (motif) { motif.style.opacity = motifP.toFixed(3); motif.style.transform = `translateY(${((1 - motifP) * 6).toFixed(1)}px)`; }
      if (label) { label.style.opacity = labelP.toFixed(3); label.style.transform = `translateY(${((1 - labelP) * 8).toFixed(1)}px)`; }
      if (title) { title.style.opacity = titleP.toFixed(3); title.style.transform = `translateY(${((1 - titleP) * 10).toFixed(1)}px)`; }
    });
  }

  // ---- Category C: decorative parallax -----------------------------------
  function updateParallax(vh) {
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.parallax);
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -300 || rect.top > vh + 300) return;
      const centerOffset = (rect.top + rect.height / 2) - vh / 2;
      el.style.transform = `translateY(${(-centerOffset * speed).toFixed(1)}px)`;
    });
    parallaxBgEls.forEach(el => {
      const speed = parseFloat(el.dataset.parallaxBg);
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -300 || rect.top > vh + 300) return;
      const centerOffset = (rect.top + rect.height / 2) - vh / 2;
      el.style.backgroundPosition = `center ${(-centerOffset * speed).toFixed(1)}px`;
    });
  }

  // ---- Category D: material motion (thread, stamp, timeline) ------------
  function updateDrawn(vh) {
    threadPaths.forEach(path => {
      const host = path.closest("[data-thread]") || path;
      const rect = host.getBoundingClientRect();
      const progress = clamp01((vh * 0.75 - rect.top) / (rect.height * 0.85));
      path.style.strokeDashoffset = String((1 - progress).toFixed(4));
    });
    stamps.forEach(st => {
      const rect = st.parentElement.getBoundingClientRect();
      const p = clamp01((vh * 0.72 - rect.top) / (rect.height * 0.7));
      const k = clamp01((p - 0.45) / 0.4);
      st.style.opacity = k.toFixed(3);
      st.style.scale = (1.7 - 0.7 * k).toFixed(3);
    });
    timelines.forEach(tl => {
      const rect = tl.getBoundingClientRect();
      const progress = clamp01((vh * 0.7 - rect.top) / rect.height);
      tl.style.setProperty("--tl", progress.toFixed(4));
    });
  }

  // ---- Decorative scrapbook sentences: a small, varied motion vocabulary
  // (not every note moves — only the ones tagged data-motion in the HTML,
  // deliberately a minority, for visual rhythm rather than constant motion).
  function updateNotes(vh) {
    noteEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > vh + 200) return;
      const progress = clamp01((vh * 0.9 - rect.top) / (vh * 0.4));
      const type = el.dataset.motion;
      if (type === "settle") {
        el.style.opacity = (0.2 + 0.8 * progress).toFixed(3);
        el.style.translate = `0 ${((1 - progress) * 10).toFixed(1)}px`;
        el.style.rotate = `${((1 - progress) * -2).toFixed(2)}deg`;
      } else if (type === "drift") {
        el.style.opacity = (0.3 + 0.7 * progress).toFixed(3);
        el.style.translate = `0 ${((1 - progress) * -8).toFixed(1)}px`;
      } else if (type === "float") {
        const centerOffset = (rect.top + rect.height / 2) - vh / 2;
        el.style.translate = `0 ${(-centerOffset * 0.04).toFixed(1)}px`;
      }
    });
  }

  let ticking = false;
  function onFrame() {
    const vh = window.innerHeight;
    updateReveals(vh);
    updateChapterDividers(vh);
    updateParallax(vh);
    updateDrawn(vh);
    updateNotes(vh);
    ticking = false;
  }
  function requestUpdate() {
    if (!ticking) { requestAnimationFrame(onFrame); ticking = true; }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  onFrame();
}

/* =========================================================================
   OPENING SCREEN → ENTER SITE
   ========================================================================= */
function initOpening() {
  const opening = $("#opening");
  const enterBtn = $("#enterBtn");
  const mainSite = $("#mainSite");
  const heartBadge = $("#heartHuntBadge");

  initOpeningPhotoCycler();

  enterBtn.addEventListener("click", () => {
    tryStartAmbientMusic();
    runEnterTransition(() => {
      opening.style.display = "none";
      mainSite.hidden = false;
      heartBadge.hidden = false;
      document.body.style.overflow = "";
      initScrollEngine();
      initNavScrollSpy();
      initScrollProgress();
    });
  }, { once: true });
}

/* =========================================================================
   OPENING — LIVING PHOTO FRAME
   ---------------------------------------------------------------------
   Cross-fades between whichever .opening-photo images actually loaded
   (broken/missing ones remove themselves via onerror) every ~11 seconds
   of visitor idle time. Any interaction — mouse move, click, touch,
   scroll, keypress — resets the idle timer, exactly as requested: the
   visitor is never interrupted mid-interaction by a photo change.
   ========================================================================= */
let openingPhotoIndex = 0;
function initOpeningPhotoCycler() {
  const caption = $("#openingPhotoCaption");
  const IDLE_MS = 11000;
  let idleTimer = null;

  function currentPhotos() {
    return $$(".opening-photo"); // re-queried each time: broken ones self-remove via onerror
  }

  function showNextPhoto() {
    const photos = currentPhotos();
    if (photos.length < 2 || prefersReducedMotion) { scheduleIdle(); return; }
    photos[openingPhotoIndex]?.classList.remove("is-active");
    openingPhotoIndex = (openingPhotoIndex + 1) % photos.length;
    const next = photos[openingPhotoIndex];
    next.classList.add("is-active");
    if (caption) {
      caption.style.opacity = 0;
      setTimeout(() => {
        caption.textContent = next.dataset.caption || "";
        caption.style.opacity = 1;
      }, 300);
    }
    scheduleIdle();
  }

  function scheduleIdle() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(showNextPhoto, IDLE_MS);
  }

  ["mousemove", "click", "touchstart", "scroll", "keydown"].forEach(evt => {
    document.addEventListener(evt, scheduleIdle, { passive: true });
  });
  scheduleIdle();
}

/* =========================================================================
   OPENING — CINEMATIC ENTER TRANSITION
   ---------------------------------------------------------------------
   The visitor's current photo grows to fill the screen, then dissolves
   into the main site — "stepping through the photograph." Falls back to
   the simple fade used before if reduced motion is on.
   ========================================================================= */
function runEnterTransition(onDone) {
  const enterBtn = $("#enterBtn");
  const opening = $("#opening");
  enterBtn.classList.add("pressed");

  if (prefersReducedMotion) {
    opening.classList.add("opening--leaving");
    setTimeout(onDone, 0);
    return;
  }

  const activePhoto = $(".opening-photo.is-active");
  const overlay = $("#enterTransition");
  overlay.innerHTML = "";

  if (activePhoto && !activePhoto.classList.contains("img-missing")) {
    const clone = document.createElement("img");
    clone.src = activePhoto.src;
    clone.alt = "";
    overlay.appendChild(clone);
  }

  // Beat 1: thin line expands from the button (pure CSS, triggered by .pressed)
  setTimeout(() => {
    // Beat 2: photo clone fades in over the opening screen
    overlay.classList.add("is-active");
    requestAnimationFrame(() => {
      // Beat 3: photo clone expands to fill the viewport
      overlay.classList.add("is-expanding");
    });
  }, 150);

  setTimeout(() => {
    // Beat 4: dissolve into the main site's blue environment
    overlay.classList.add("is-dissolving");
    opening.classList.add("opening--leaving");
  }, 950);

  setTimeout(() => {
    overlay.classList.add("is-done");
    onDone();
  }, 1550);

  setTimeout(() => {
    overlay.classList.remove("is-active", "is-expanding", "is-dissolving", "is-done");
    overlay.innerHTML = "";
  }, 2100);
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

/* Thin chapter progress line along the bottom of the nav pill. A plain
   indicator (not decorative motion), so it runs even with reduced motion. */
function initScrollProgress() {
  const nav = $("#siteNav");
  let ticking = false;
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    nav.style.setProperty("--sp", max > 0 ? Math.min(1, window.scrollY / max).toFixed(4) : 0);
    ticking = false;
  }
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* Subtle photocard tilt + shine that follows the cursor (mouse only). */
function initFanCardTilt() {
  if (prefersReducedMotion) return;
  $$(".fan-card").forEach(card => {
    card.addEventListener("pointermove", e => {
      if (e.pointerType !== "mouse") return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      card.style.transform = `perspective(700px) rotateX(${((0.5 - py) * 10).toFixed(2)}deg) rotateY(${((px - 0.5) * 12).toFixed(2)}deg)`;
      card.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
      card.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
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
   MUSIC PLAYER
   ========================================================================= */
/* =========================================================================
   VINYL MUSIC PLAYER — signature interaction
   ---------------------------------------------------------------------
   Records live on a shelf as clickable sleeves. Clicking one sends a
   flying vinyl clone from the sleeve to the turntable (FLIP-animated),
   the tonearm lowers, and it starts playing. Clicking a different
   record while one is already loaded first sends the old vinyl flying
   back to its own sleeve before bringing the new one out. Clicking the
   tonearm itself toggles play/pause on whatever's already loaded, with
   the platter audibly/visually "decelerating" to a stop rather than
   snapping off instantly.
   ========================================================================= */
function initMusicPlayer() {
  const audio = new Audio();
  audio.volume = 0.7;

  const turntable = $("#turntable");
  const tonearm = $("#tonearm");
  const shelf = $("#vinylShelf");
  const vinylDisc = $("#vinylDisc");
  const vinylLabelArt = $("#vinylLabelArt");
  const flying = $("#flyingVinyl");
  const titleEl = $("#vpSongTitle");
  const artistEl = $("#vpSongArtist");
  const captionEl = $("#vpSongCaption");
  const progress = $("#vpProgress");
  const volume = $("#vpVolume");
  const timeCurrent = $("#vpTimeCurrent");
  const timeTotal = $("#vpTimeTotal");

  // Flatten the named playlists into one shelf of individual records —
  // easier to browse as a physical collection than nested playlist names.
  const records = [];
  Object.entries(CONFIG.PLAYLIST).forEach(([name, songs]) => {
    songs.forEach(song => records.push({ ...song, mood: name }));
  });

  let currentIndex = -1;
  let isPlaying = false;
  let isAnimating = false;
  let sleeveEls = [];

  function renderShelf() {
    shelf.innerHTML = "";
    sleeveEls = records.map((rec, i) => {
      const sleeve = document.createElement("button");
      sleeve.type = "button";
      sleeve.className = "vinyl-sleeve";
      sleeve.setAttribute("aria-label", `Play ${rec.title} by ${rec.artist}`);
      sleeve.style.setProperty("--sleeve-accent", rec.vinylColor || "var(--blue-mid)");
      sleeve.innerHTML = `
        <div class="vinyl-sleeve-art">
          <img src="${rec.cover || ""}" alt="" loading="lazy"
               onerror="this.style.display='none'; this.parentElement.classList.add('img-missing')">
          <span class="vinyl-sleeve-accent" aria-hidden="true"></span>
        </div>
        <p class="vinyl-sleeve-track">${String(i + 1).padStart(2, "0")} — ${rec.mood}</p>
        <p class="vinyl-sleeve-title">${rec.title}</p>
        <p class="vinyl-sleeve-now">now playing</p>
      `;
      sleeve.addEventListener("click", () => selectRecord(i));
      shelf.appendChild(sleeve);
      return sleeve;
    });
  }

  function highlightActiveSleeve() {
    sleeveEls.forEach((el, i) => el.classList.toggle("is-active", i === currentIndex));
  }

  // FLIP-animate a flying vinyl clone from one element's rect to another's.
  function flyVinyl(fromEl, toEl, coverSrc, duration = 650, vinylColor) {
    return new Promise(resolve => {
      if (prefersReducedMotion || !fromEl || !toEl) { resolve(); return; }
      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();
      flying.innerHTML = coverSrc ? `<img src="${coverSrc}" alt="" onerror="this.remove()">` : "";
      flying.style.background = vinylColor ? `radial-gradient(circle, ${vinylColor} 0%, #0d1729 72%)` : "";
      flying.style.transition = "none";
      flying.style.width = `${fromRect.width}px`;
      flying.style.height = `${fromRect.height}px`;
      flying.style.transform = `translate(${fromRect.left}px, ${fromRect.top}px)`;
      flying.classList.add("is-flying");
      void flying.offsetWidth; // force reflow so the transition below actually animates
      requestAnimationFrame(() => {
        flying.style.transition = `transform ${duration}ms cubic-bezier(0.22,1,0.36,1), width ${duration}ms, height ${duration}ms, border-radius 400ms`;
        flying.style.width = `${toRect.width}px`;
        flying.style.height = `${toRect.height}px`;
        flying.style.transform = `translate(${toRect.left}px, ${toRect.top}px)`;
      });
      setTimeout(() => { flying.classList.remove("is-flying"); resolve(); }, duration + 30);
    });
  }

  function wait(ms) { return new Promise(r => setTimeout(r, prefersReducedMotion ? 0 : ms)); }

  function liftTonearm() { turntable.classList.remove("is-playing"); }
  function lowerTonearm() { turntable.classList.add("is-playing"); }

  // Decelerate the spinning disc to a natural-looking stop instead of an
  // instant snap, then hand back to the (paused) CSS animation state.
  function decelerateDisc() {
    const spin = $(".vinyl-disc-spin", vinylDisc);
    if (!spin || prefersReducedMotion) return;
    const computed = getComputedStyle(spin).transform;
    let angle = 0;
    if (computed && computed !== "none") {
      const m = computed.match(/matrix\(([^)]+)\)/);
      if (m) {
        const [a, b] = m[1].split(",").map(Number);
        angle = Math.atan2(b, a) * (180 / Math.PI);
      }
    }
    spin.style.animation = "none";
    spin.style.transform = `rotate(${angle}deg)`;
    void spin.offsetWidth;
    spin.style.transition = "transform 1.3s cubic-bezier(0.15, 0.7, 0.3, 1)";
    spin.style.transform = `rotate(${angle + 220}deg)`;
    setTimeout(() => {
      spin.style.transition = "";
      spin.style.animation = "";
      spin.style.transform = "";
    }, 1350);
  }

  async function stopPlayback({ keepDiscVisible = true } = {}) {
    if (!isPlaying) return;
    isPlaying = false;
    liftTonearm();
    audio.pause();
    decelerateDisc();
    await wait(500);
  }

  async function ejectCurrentRecord() {
    if (currentIndex === -1) return;
    const fromEl = vinylDisc;
    const toEl = sleeveEls[currentIndex]?.querySelector(".vinyl-sleeve-art");
    turntable.classList.remove("has-vinyl");
    await flyVinyl(fromEl, toEl || fromEl, records[currentIndex]?.cover, 650, records[currentIndex]?.vinylColor);
  }

  async function bringInRecord(index) {
    const sleeveArt = sleeveEls[index]?.querySelector(".vinyl-sleeve-art");
    const rec = records[index];
    vinylLabelArt.src = rec.cover || "";
    vinylLabelArt.onerror = () => { vinylLabelArt.style.display = "none"; };

    // Give this record its own disc/label colors, so the shelf reads as a
    // real personal collection rather than six identical black discs.
    vinylDisc.style.setProperty("--vinyl-color", rec.vinylColor || "#172947");
    vinylDisc.style.setProperty("--label-color", rec.labelColor || "#5c7dad");
    vinylDisc.style.setProperty("--label-text", rec.labelTextColor || "#ffffff");

    await flyVinyl(sleeveArt, $(".turntable-plate"), rec.cover, 650, rec.vinylColor);
    turntable.classList.add("has-vinyl");

    titleEl.textContent = rec.title || "Untitled";
    artistEl.textContent = rec.artist || "Unknown artist";
    captionEl.textContent = rec.caption || `one of her "${rec.mood}" songs`;
    audio.src = rec.audio || "";
    progress.value = 0;
    timeCurrent.textContent = "0:00";
    timeTotal.textContent = "0:00";
    highlightActiveSleeve();
  }

  async function startPlayback() {
    lowerTonearm();
    await wait(350); // let the tonearm visually land before sound starts
    try { await audio.play(); isPlaying = true; }
    catch (e) { liftTonearm(); isPlaying = false; }
  }

  async function selectRecord(index) {
    if (isAnimating || index === currentIndex) {
      // Clicking the record already on the turntable is equivalent to
      // toggling the tonearm — handled by the tonearm's own listener.
      return;
    }
    isAnimating = true;
    try {
      await stopPlayback();
      await ejectCurrentRecord();
      currentIndex = index;
      await bringInRecord(index);
      await startPlayback();
    } finally {
      isAnimating = false;
    }
  }

  tonearm.addEventListener("click", async () => {
    if (isAnimating) return;
    if (currentIndex === -1) {
      // No record loaded yet — nudge toward the shelf instead of doing nothing.
      const hint = $("#tonearmHint");
      hint.animate([{ transform: "translateX(0)" }, { transform: "translateX(-4px)" }, { transform: "translateX(4px)" }, { transform: "translateX(0)" }], { duration: 300 });
      return;
    }
    isAnimating = true;
    try {
      if (isPlaying) {
        await stopPlayback();
      } else {
        await startPlayback();
      }
    } finally {
      isAnimating = false;
    }
  });

  audio.addEventListener("ended", () => {
    isPlaying = false;
    liftTonearm();
    decelerateDisc();
    if (records.length > 1) selectRecord((currentIndex + 1) % records.length);
  });
  audio.addEventListener("loadedmetadata", () => { timeTotal.textContent = formatTime(audio.duration); });
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

  renderShelf();
  if (!records.length) {
    titleEl.textContent = "No records added yet";
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

    // Re-trigger the pop+bounce animation every click, even for repeat
    // clicks in a row: remove the class, force a reflow, then re-add it.
    bubble.classList.remove("show");
    void bubble.offsetWidth;
    bubble.classList.add("show");
  });
}

/* =========================================================================
   MINGYU PHOTO CAROUSEL — manual (prev/next/dots) + gentle auto-advance
   when idle. Pauses on hover/focus and after any manual interaction
   resets the idle timer, so it never fights the person using it.
   ========================================================================= */
function initMingyuCarousel() {
  const carousel = $("#mingyuCarousel");
  const track = $("#mingyuCarouselTrack");
  const slides = $$(".carousel-slide", track);
  const dots = $$(".carousel-dot", carousel);
  const prevBtn = $("#mingyuPrev");
  const nextBtn = $("#mingyuNext");
  const total = slides.length;
  let index = 0;
  let autoTimer = null;

  function goTo(i) {
    index = (i + total) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, d) => {
      dot.classList.toggle("active", d === index);
      dot.setAttribute("aria-selected", d === index ? "true" : "false");
    });
  }

  function startAuto() {
    if (prefersReducedMotion) return; // no auto-advance for reduced motion
    stopAuto();
    autoTimer = setInterval(() => goTo(index + 1), 4500);
  }
  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = null;
  }
  function restartAuto() { stopAuto(); startAuto(); }

  prevBtn.addEventListener("click", () => { goTo(index - 1); restartAuto(); });
  nextBtn.addEventListener("click", () => { goTo(index + 1); restartAuto(); });
  dots.forEach(dot => {
    dot.addEventListener("click", () => { goTo(Number(dot.dataset.index)); restartAuto(); });
  });

  carousel.addEventListener("mouseenter", stopAuto);
  carousel.addEventListener("mouseleave", startAuto);
  carousel.addEventListener("focusin", stopAuto);
  carousel.addEventListener("focusout", startAuto);

  goTo(0);
  startAuto();
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
  wall.classList.add("memory-timeline");
  wall.setAttribute("data-timeline", "");

  CONFIG.MEMORY_PHOTOS.forEach((m, i) => {
    const entry = document.createElement("div");
    entry.className = `timeline-entry timeline-entry--${i % 2 === 0 ? "left" : "right"}`;
    entry.innerHTML = `<span class="timeline-year">${m.date}</span><span class="timeline-dot" aria-hidden="true"></span>`;

    if (m.type === "gap") {
      // An intentional gap year: no photo, just a small honest note —
      // never a fabricated memory or a placeholder polaroid.
      const card = document.createElement("div");
      card.className = "timeline-gap-card";
      card.innerHTML = `
        <span class="timeline-gap-icon" aria-hidden="true">${m.icon || "♡"}</span>
        <p class="timeline-gap-text handwritten">${m.caption}</p>
      `;
      entry.appendChild(card);
      wall.appendChild(entry);
      return;
    }

    const item = document.createElement("div");
    item.className = "polaroid memory-item";
    item.style.setProperty("--tilt", `${m.rotate || 0}deg`);
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.setAttribute("aria-label", `Memory from ${m.date}: ${m.caption}`);
    item.innerHTML = `
      <div class="photo-frame">
        <img src="${m.src}" alt="Memory from ${m.date}" loading="lazy"
             onerror="this.style.display='none'; this.parentElement.classList.add('img-missing')">
      </div>
      <p class="polaroid-caption handwritten">"${m.caption}"</p>
    `;
    const openLightbox = () => showLightbox(m);
    item.addEventListener("click", openLightbox);
    item.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(); } });
    entry.appendChild(item);
    wall.appendChild(entry);
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
      <div class="wrapped-number" data-final="${stat.number}">${stat.number}</div>
      <div class="wrapped-label">${stat.label}</div>
    `;
    grid.appendChild(card);
  });

  // Count-up: purely numeric stats tick up from 0 the first time the grid
  // scrolls into view. Non-numeric ones (∞, "404 Not Found") just stay as
  // written. Reduced motion: final values shown immediately, no ticking.
  if (prefersReducedMotion) return;
  const numEls = $$(".wrapped-number", grid).filter(el => /^[\d,]+$/.test(el.dataset.final));
  numEls.forEach(el => { el.textContent = "0"; });
  const obs = new IntersectionObserver((entries, o) => {
    if (!entries.some(e => e.isIntersecting)) return;
    o.disconnect();
    numEls.forEach((el, idx) => {
      const target = parseInt(el.dataset.final.replace(/,/g, ""), 10);
      const start = performance.now() + idx * 120;
      const dur = 1600;
      (function tick(now) {
        const t = Math.min(1, Math.max(0, (now - start) / dur));
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased).toLocaleString("en-US");
        if (t < 1) requestAnimationFrame(tick);
      })(performance.now());
    });
  }, { threshold: 0.35 });
  obs.observe(grid);
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
   BIRTHDAY FINALE OVERLAY
   ---------------------------------------------------------------------
   Triggered exactly once, only when #finaleSentinel (placed at the very
   end of the page) actually scrolls into view — never earlier. Runs the
   full sequence: overlay fade-in → cake reveal → drag/tap "002" away →
   "4" arrives → blow out (button or mic) → fireworks → balloons →
   replay, which resets every bit of state and plays it again.
   ========================================================================= */
function initFinaleOverlay() {
  const cta = $("#finaleCtaBtn");
  if (!cta || !$("#finaleOverlay")) return;
  // The finale is a deliberate choice, never an automatic consequence of
  // scrolling — it opens only when this button is clicked.
  cta.addEventListener("click", showFinaleOverlay);
  $("#finaleCloseBtn")?.addEventListener("click", closeFinaleOverlay);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !$("#finaleOverlay").hidden) closeFinaleOverlay();
  });
}

let finaleReturnScrollY = 0;
let finaleBonusFireworksTimer = null;

function showFinaleOverlay() {
  finaleReturnScrollY = window.scrollY;
  const overlay = $("#finaleOverlay");
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => overlay.classList.add("is-visible"));

  startAmbientFireworks(); // a few gentle bursts as the scene settles in
  startBalloons();

  // Delayed surprise: a bigger burst if the visitor lingers on the final
  // screen. Not required for "completing" the experience — just a treat.
  clearTimeout(finaleBonusFireworksTimer);
  finaleBonusFireworksTimer = setTimeout(() => {
    if (!overlay.hidden) burstFireworks(9);
  }, prefersReducedMotion ? 0 : 2.5 * 60 * 1000);

  initCandleInteraction();
  initBlowInteraction();
  initFinaleReplay();
}

/* ---- Candles: drag OR tap "002" away, "4" arrives, "2002" → "24" ----
   Bound exactly once; replay/close just reset candleState (no re-binding,
   so listeners never stack up). */
const candleState = { resolved: false, dragging: false, startX: 0, currentX: 0 };
function initCandleInteraction() {
  const group = $("#candleDragGroup");
  if (!group || group.dataset.bound) return;
  group.dataset.bound = "1";

  function resolveSwap() {
    if (candleState.resolved) return;
    candleState.resolved = true;
    group.classList.add("is-leaving");
    $("#candleDragHint").classList.add("is-hidden");
    setTimeout(() => {
      if (!candleState.resolved) return; // finale was reset/closed mid-animation
      $("#cakeCandles").classList.add("is-swapped");
      $("#candleFour").classList.add("is-entering");
      const message = $("#candleMessage");
      message.textContent = "24 looks good on you. ♡";
      message.classList.add("is-shown");
      sparkleBurst($(".finale-cake"));
      const controls = $("#finaleBlowControls");
      controls.hidden = false;
      requestAnimationFrame(() => controls.classList.add("is-shown"));
    }, 520);
  }

  group.addEventListener("pointerdown", e => {
    candleState.dragging = true; candleState.startX = e.clientX; candleState.currentX = 0;
    group.setPointerCapture(e.pointerId);
  });
  group.addEventListener("pointermove", e => {
    if (!candleState.dragging) return;
    candleState.currentX = e.clientX - candleState.startX;
    group.style.transform = `translateX(${Math.max(0, candleState.currentX)}px)`;
  });
  group.addEventListener("pointerup", () => {
    candleState.dragging = false;
    group.style.transform = "";
    if (candleState.currentX > 40) resolveSwap(); // dragged far enough
  });
  // A plain tap/click also works — the reliable path on mobile.
  group.addEventListener("click", () => { if (Math.abs(candleState.currentX) < 5) resolveSwap(); });
  group.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); resolveSwap(); } });
}

function sparkleBurst(anchorEl) {
  if (prefersReducedMotion || !anchorEl) return;
  const rect = anchorEl.getBoundingClientRect();
  for (let i = 0; i < 8; i++) {
    const s = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 8;
    s.textContent = "✦";
    s.style.cssText = `position:fixed; left:${rect.left + rect.width / 2}px; top:${rect.top + rect.height / 2}px;
      color:#cfe0f4; font-size:14px; pointer-events:none; z-index:1002;
      transition: transform 700ms ease-out, opacity 700ms ease-out; opacity:1;`;
    document.body.appendChild(s);
    requestAnimationFrame(() => {
      s.style.transform = `translate(${Math.cos(angle) * 60}px, ${Math.sin(angle) * 60}px)`;
      s.style.opacity = "0";
    });
    setTimeout(() => s.remove(), 750);
  }
}

/* ---- Blow out the candles: button (always works) or microphone (opt-in) ---- */
function initBlowInteraction() {
  const blowBtn = $("#finaleBlowBtn");
  const micBtn = $("#finaleMicBtn");
  if (blowBtn.dataset.bound) return;
  blowBtn.dataset.bound = "1";

  let holdTimer = null;
  function startHold() {
    blowBtn.classList.add("is-holding");
    holdTimer = setTimeout(extinguishCandles, 500);
  }
  function cancelHold() {
    blowBtn.classList.remove("is-holding");
    clearTimeout(holdTimer);
  }
  blowBtn.addEventListener("pointerdown", startHold);
  blowBtn.addEventListener("pointerup", cancelHold);
  blowBtn.addEventListener("pointerleave", cancelHold);
  blowBtn.addEventListener("click", extinguishCandles); // simple click also just works

  micBtn.addEventListener("click", async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      micBtn.textContent = "mic not available here — use the button ♡";
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stopFinaleMic();
      micBtn.textContent = "listening... blow now ♡";
      micBtn.classList.add("is-listening");
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      source.connect(analyser);
      const data = new Uint8Array(analyser.frequencyBinCount);
      let stopped = false;
      finaleMic = { stream, ctx, stop() { stopped = true; stream.getTracks().forEach(t => t.stop()); ctx.close().catch(() => {}); } };

      function checkVolume() {
        if (stopped) return;
        analyser.getByteFrequencyData(data);
        const avg = data.reduce((a, b) => a + b, 0) / data.length;
        if (avg > 55) { // sustained loud/breathy input reads as a "blow"
          stopFinaleMic();
          extinguishCandles();
          return;
        }
        requestAnimationFrame(checkVolume);
      }
      checkVolume();
    } catch (e) {
      micBtn.textContent = "mic permission declined — use the button ♡";
    }
  });
}

let finaleMic = null;
function stopFinaleMic() { if (finaleMic) { finaleMic.stop(); finaleMic = null; } }

let candlesExtinguished = false;
function extinguishCandles() {
  if (candlesExtinguished) return;
  candlesExtinguished = true;

  $$(".candle").forEach((candle, i) => {
    setTimeout(() => {
      candle.classList.add("is-out");
      const smoke = document.createElement("span");
      smoke.className = "candle-smoke";
      candle.style.position = "relative";
      candle.appendChild(smoke);
      requestAnimationFrame(() => smoke.classList.add("is-rising"));
      setTimeout(() => smoke.remove(), 1500);
    }, i * 120);
  });

  setTimeout(() => {
    burstFireworks(5);
    burstConfetti();
    revealReplay();
  }, prefersReducedMotion ? 200 : 1600);
}

/* ---- Fireworks: small CSS-particle bursts, not a full canvas engine ---- */
const FIREWORK_COLORS = ["#cfe0f4", "#9db8dd", "#eef5fc", "#d9d7ee", "#ffffff"];
function burstFireworks(count = 3) {
  if (prefersReducedMotion) return;
  const layer = $("#finaleFireworks");
  for (let i = 0; i < count; i++) {
    setTimeout(() => spawnSingleFirework(layer), i * 420);
  }
}
function spawnSingleFirework(layer) {
  const x = 15 + Math.random() * 70; // vw
  const y = 20 + Math.random() * 40; // vh
  const color = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
  const particleCount = 14;
  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement("span");
    p.className = "firework-particle";
    const angle = (Math.PI * 2 * i) / particleCount;
    const dist = 40 + Math.random() * 40;
    p.style.left = `${x}vw`;
    p.style.top = `${y}vh`;
    p.style.setProperty("--particle-color", color);
    p.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    p.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
    layer.appendChild(p);
    setTimeout(() => p.remove(), 1200);
  }
}
function startAmbientFireworks() {
  if (prefersReducedMotion) return;
  burstFireworks(4);
}

/* ---- Balloons: gentle ambient drift, blue/white/silver only ---- */
const BALLOON_COLORS = ["#9db8dd", "#cfe0f4", "#eef5fc", "#d9d7ee"];
let balloonInterval = null;
function startBalloons() {
  if (prefersReducedMotion) return;
  const layer = $("#finaleBalloons");
  stopBalloons();
  function spawn() {
    const b = document.createElement("span");
    b.className = "balloon";
    const left = 5 + Math.random() * 90;
    const duration = 9 + Math.random() * 6;
    const drift = (Math.random() - 0.5) * 120;
    b.style.left = `${left}vw`;
    b.style.setProperty("--balloon-color", BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)]);
    b.style.setProperty("--drift", `${drift}px`);
    b.style.animationDuration = `${duration}s`;
    layer.appendChild(b);
    setTimeout(() => b.remove(), duration * 1000 + 200);
  }
  for (let i = 0; i < 3; i++) setTimeout(spawn, i * 600);
  balloonInterval = setInterval(spawn, 2600);
}
function stopBalloons() {
  clearInterval(balloonInterval);
  balloonInterval = null;
}

/* ---- Confetti: a restrained burst, not a constant screen-filling storm ---- */
const CONFETTI_COLORS = ["#9db8dd", "#cfe0f4", "#eef5fc", "#d9d7ee", "#ffffff"];
function burstConfetti(count = 26) {
  if (prefersReducedMotion) return;
  const layer = $("#finaleConfetti");
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    const left = Math.random() * 100;
    const duration = 2.6 + Math.random() * 1.6;
    const drift = (Math.random() - 0.5) * 140;
    const spin = 180 + Math.random() * 360;
    piece.style.left = `${left}vw`;
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    piece.style.animationDuration = `${duration}s`;
    piece.style.setProperty("--confetti-color", CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]);
    piece.style.setProperty("--drift", `${drift}px`);
    piece.style.setProperty("--spin", `${spin}deg`);
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), (duration + 0.4) * 1000 + 100);
  }
}

/* ---- Replay: fully resets and plays the whole sequence again ---- */
function revealReplay() {
  const btn = $("#finaleReplayBtn");
  btn.hidden = false;
  requestAnimationFrame(() => btn.classList.add("is-shown"));
}
function initFinaleReplay() {
  const btn = $("#finaleReplayBtn");
  if (btn.dataset.bound) return;
  btn.dataset.bound = "1";
  btn.addEventListener("click", () => {
    btn.classList.remove("is-shown");
    const overlayStage = $(".finale-stage");
    overlayStage.style.transition = "opacity 400ms";
    overlayStage.style.opacity = "0";
    setTimeout(() => {
      resetFinaleState();
      overlayStage.style.opacity = "1";
      startAmbientFireworks();
      startBalloons();
    }, 420);
  });
}
function resetFinaleState() {
  candlesExtinguished = false;
  const group = $("#candleDragGroup");
  const four = $("#candleFour");
  const cakeCandles = $("#cakeCandles");
  const hint = $("#candleDragHint");
  const message = $("#candleMessage");
  const blowControls = $("#finaleBlowControls");
  const micBtn = $("#finaleMicBtn");
  const replayBtn = $("#finaleReplayBtn");

  cakeCandles.classList.remove("is-swapped");
  group.classList.remove("is-leaving");
  group.style.transform = "";
  four.classList.remove("is-entering");
  hint.classList.remove("is-hidden");
  message.classList.remove("is-shown");
  message.textContent = "";
  blowControls.classList.remove("is-shown");
  blowControls.hidden = true;
  micBtn.textContent = "🎤 or actually blow, using your mic";
  micBtn.classList.remove("is-listening");
  replayBtn.hidden = true;
  replayBtn.classList.remove("is-shown");

  $$(".candle").forEach(c => {
    c.classList.remove("is-out");
    $$(".candle-smoke", c).forEach(s => s.remove());
  });

  // Reset the (single, already-bound) interaction state — no re-binding.
  candleState.resolved = false; candleState.dragging = false; candleState.currentX = 0;
  stopFinaleMic();
}

function closeFinaleOverlay() {
  const overlay = $("#finaleOverlay");
  if (overlay.hidden) return;
  overlay.classList.remove("is-visible");
  stopBalloons();
  stopFinaleMic();
  clearTimeout(finaleBonusFireworksTimer);
  setTimeout(() => {
    overlay.hidden = true;
    document.body.style.overflow = "";
    $("#finaleFireworks").innerHTML = "";
    $("#finaleBalloons").innerHTML = "";
    $("#finaleConfetti").innerHTML = "";
    resetFinaleState();
    // Return exactly to where they were reading before opening the surprise.
    window.scrollTo({ top: finaleReturnScrollY, behavior: "instant" });
  }, prefersReducedMotion ? 0 : 1100);
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
  safeInit("mingyu carousel", initMingyuCarousel);
  safeInit("potato", initPotato);
  safeInit("fan card tilt", initFanCardTilt);
  safeInit("friends room", initFriendsRoom);
  safeInit("sewing to-do", initSewingTodo);
  safeInit("memories", renderMemories);
  safeInit("lightbox", initLightboxClose);
  safeInit("wrapped", renderWrapped);
  safeInit("wishes", renderWishes);
  safeInit("finale", initFinale);
  safeInit("finale overlay", initFinaleOverlay);
  safeInit("heart hunt", initHeartHunt);
  safeInit("secret room", initSecretRoom);
  safeInit("cursor", initCursor);
});
