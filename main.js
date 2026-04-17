/* ============================================
   THE LOOKBACK — main.js
   Scroll-driven horizontal carousel +
   logo animation + all interactions
   ============================================ */

'use strict';

// ============================================
// DATA — Articles / Images
// ============================================
const ARTICLES = [
  {
    url: '#anime',
    title: 'CULT CLASSICS',
    category: 'Motion',
    month: 'MARCH',
    images: [
      { src: 'BERSERK.png', aspect: 0.707, size: 'small', bg: '#101010', w: 2480, h: 3508, desc: 'A haunting glimpse into the eclipse. The struggling soul continues to fight against causality, standing tall against overwhelming darkness.' },
      { src: 'vagabond 1.png', aspect: 0.707, size: 'small', bg: '#151515', w: 2480, h: 3508, desc: 'The path of the sword is a lonely one. A visual study of the wanderer seeking enlightenment through conflict and survival.' },
      { src: 'gojo.png', aspect: 0.743, size: 'small', bg: '#222', w: 1240, h: 1670, desc: 'The strongest sorcerer showing unparalleled confidence. A snapshot of absolute power masking an underlying weight of responsibility.' },
      { src: 'zoro.png', aspect: 0.743, size: 'small', bg: '#0d1a0d', w: 1240, h: 1670, desc: 'A vow to the heavens. The pursuit of the ultimate swordsman title requires shedding blood, ignoring pain, and unwavering loyalty.' },
      { src: 'joatao.png', aspect: 0.741, size: 'small', bg: '#1a0d1a', w: 1240, h: 1674, desc: 'Stoic strength. A tribute to the timeless lineage and an inherited legacy that refuses to back down in the face of destiny.' },
    ]
  },
  {
    url: '#hiphop',
    title: 'THE ROSTER',
    category: 'Vibe',
    month: 'FEBRUARY',
    images: [
      { src: 'RAFTAAR.png', aspect: 0.741, size: 'small', bg: '#050505', w: 1240, h: 1674, desc: 'Pioneer of the beat. Capturing the raw energy, rhythm, and poetry that defined a generation in the underground scene.' },
      { src: 'RAWAL.png', aspect: 1.0, size: 'small', bg: '#0a0a0a', w: 2000, h: 2000, desc: 'An unfiltered narrative of the streets. Rawal brings unmatched authenticity to modern hip-hop culture.' },
      { src: 'EMEINEM.png', aspect: 0.741, size: 'small', bg: '#030303', w: 1240, h: 1674, desc: 'The rap god immortalized in a moment of lyrical intensity. A testament to technical genius and controversy.' },
      { src: 'SOLITUDE IN FLOWERS.png', aspect: 0.707, size: 'medium', bg: '#1a1a05', w: 2480, h: 3508, desc: 'Finding peace amidst the concrete jungle. A juxtaposition of natural beauty and the chaotic urban environment.' },
      { src: 'EMEINENEC 1.png', aspect: 0.563, size: 'medium', bg: '#030303', w: 1080, h: 1920, desc: 'A chaotic reflection. Echoes of alter-egos fighting for dominance inside the mind of the artist.' },
      { src: 'spidey.png', aspect: 0.707, size: 'small', bg: '#200505', w: 2480, h: 3508, desc: 'Swinging through the neon-lit cityscape. The visual energy of masked heroics blending into pop-culture mythos.' },
      { src: 'MAFIA.png', aspect: 0.8, size: 'medium', bg: '#100505', w: 1080, h: 1350, desc: 'Organized aesthetics. A shadowy homage to cinematic mobster tropes and underground brotherhood.' },
      { src: 'BADDIE NATION.png', aspect: 0.707, size: 'medium', bg: '#050a1a', w: 2480, h: 3508, desc: 'Fierce and unapologetic style. A vibrant visual celebration of modern streetwear and attitude.' },
    ]
  },
  {
    url: '#design',
    title: 'EXPERIMENTAL',
    category: 'Graph',
    month: 'JANUARY',
    images: [
      { src: 'WAVE DESIGN.png', aspect: 0.707, size: 'medium', bg: '#000', w: 2480, h: 3508, desc: 'Distorting reality through algorithmic waves. An exploration of minimal interference in a pure canvas.' },
      { src: 'HALFTONE.png', aspect: 0.707, size: 'medium', bg: '#151515', w: 2480, h: 3508, desc: 'Vintage printing techniques applied to modern vectors. Bridging the gap between retro mechanical art and digital perfection.' },
      { src: 'lfm.png', aspect: 0.8, size: 'small', bg: '#111', w: 736, h: 920, desc: 'A cryptic logo form derived from rigid grids. A study in reduction, form, and brutalist minimalism.' },
      { src: 'Instagram post - 6.png', aspect: 1.0, size: 'medium', bg: '#111', w: 1080, h: 1080, desc: 'Social media architecture. Designing for the endless scroll while demanding a momentary pause from the viewer.' },
      { src: 'BRUTALSIM 1.png', aspect: 0.741, size: 'medium', bg: '#111', w: 1240, h: 1674, desc: 'Unpolished and raw. A graphic design poster that aggressively breaks layout conventions for emotional impact.' },
      { src: 'CHAI.png', aspect: 0.707, size: 'small', bg: '#1a1005', w: 2480, h: 3508, desc: 'A warm palette dedicated to everyday rituals. Elevating a simple cup of tea into a monumental architectural form.' },
      { src: 'Snapinsta.app_457794779_1230657101276501_210081780780496647_n_1080.png', aspect: 0.8, size: 'medium', bg: '#111', w: 1040, h: 1300, desc: 'A found composition. Rescuing an algorithmic artifact from social media impermanence.' },
      { src: 'EXTRA ORDINARY.png', aspect: 0.707, size: 'medium', bg: '#05051a', w: 2480, h: 3508, desc: 'Magnifying the mundane. Rendering ordinary objects with hyper-intense colors to alter their perceived significance.' },
      { src: 'FLOAT WINDOW.png', aspect: 0.707, size: 'small', bg: '#051a05', w: 2480, h: 3508, desc: 'An OS-inspired graphic interface. Investigating our relationship with digital borders and floating contextual windows.' },
    ]
  },
  {
    url: '#culture',
    title: 'POP CULTURE',
    category: 'Media',
    month: 'MARCH',
    images: [
      { src: 'red dead.png', aspect: 0.707, size: 'medium', bg: '#1a0505', w: 2480, h: 3508, desc: 'The fading frontier. A vivid reimagining of the outlaw sunset where civilization pushes out the final remnants of the wild.' },
      { src: 'sprite.png', aspect: 0.741, size: 'medium', bg: '#111', w: 1240, h: 1674, desc: 'Effervescent nostalgia. Commercial aesthetics twisted into a glowing, synthetic study of consumerism.' },
      { src: 'tbsm.png', aspect: 0.741, size: 'small', bg: '#0a1a05', w: 1240, h: 1674, desc: 'Underground motifs crossing into mainstream awareness. A visual commentary on cultural assimilation.' },
    ]
  },
  {
    url: '#moments',
    title: 'MOMENTS',
    category: 'Life',
    month: 'DECEMBER',
    images: [
      { src: 'session post.png', aspect: 0.8, size: 'medium', bg: '#050505', w: 1080, h: 1350, desc: 'Late night sessions in the studio. Creating soundwaves and riding the creative flow until dawn breaks.' },
      { src: 'story.png', aspect: 0.563, size: 'small', bg: '#000', w: 1080, h: 1920, desc: 'A fleeting vertical fragment of a day. The ephemeral nature of memory captured before it disappears.' },
      { src: 'vaazha.png', aspect: 1.0, size: 'medium', bg: '#0a100a', w: 2000, h: 2000, desc: 'An abstract slice of tropical greenery. A heavy focus on texture, shadow, and organic architecture.' },
      { src: 'e3555bba6c3f4587105a9650b50f6438.jpg', aspect: 1.0, size: 'small', bg: '#050505', w: 720, h: 720, desc: 'A candid fragment out of context. A study of framing and mysterious narratives hiding in plain sight.' },
      { src: 'fc9ebdaf9569ef2632697f3f0bbe8578.jpg', aspect: 0.561, size: 'medium', bg: '#050505', w: 268, h: 478, desc: 'Timeless magnetism. An iconic image of SRK capturing his unmistakable screen presence and cultural impact.' },
    ]
  },
  {
    url: '#archive',
    title: 'THE ARCHIVE',
    category: 'Study',
    month: 'YEARLY',
    images: [
      { src: '26b683814cfd7f67386ca75b391265ab.jpg', aspect: 0.563, size: 'small', bg: '#050505', w: 736, h: 1308, desc: 'The official cover art for "Lunch Break" by Seedhe Maut. A defining visual statement capturing the raw, chaotic energy of the album.' },
      { src: '2c20fa10df09cfaff66c4d71a613224a.jpg', aspect: 0.8, size: 'medium', bg: '#050505', w: 1200, h: 1500, desc: 'A still from the coming-of-age classic "Wake Up Sid," reflecting perfectly on moments of transition and self-discovery.' },
      { src: '360f98c334c209046bc1f6e2ac3db099.jpg', aspect: 0.563, size: 'small', bg: '#050505', w: 736, h: 1308, desc: 'Archived File #03: Portrait layout experiments. Analyzing eye-tracking and typography displacement.' },
      { src: '391407e95d110612a5d40fb383b13051.jpg', aspect: 0.563, size: 'medium', bg: '#050505', w: 736, h: 1308, desc: 'A vibrant frame from "Yeh Jawaani Hai Deewani." Catching the wanderlust and fleeting, golden memories of youth in a single shot.' },
      { src: '717e15a9e6e0541c1faaca2f5aedb677.jpg', aspect: 0.562, size: 'small', bg: '#050505', w: 639, h: 1137, desc: 'Archived File #05: A moment frozen in high contrast. Light leaks acting as intentional graphic elements.' },
      { src: '7c6c1eca6ac33e21e91cf7c1d696cbdc.jpg', aspect: 0.828, size: 'medium', bg: '#050505', w: 735, h: 888, desc: 'A distinctively kinetic frame from "Dev.D," visually translating the film\'s modern, visceral take on heartbreak and descent.' },
    ]
  },
];

// ============================================
// FLATTEN to individual slide objects
// ============================================
let SLIDES = [];
let globalIndex = 0;

ARTICLES.forEach(article => {
  article.images.forEach(img => {
    SLIDES.push({
      index: globalIndex++,
      url: article.url,
      title: article.title,
      category: article.category,
      month: article.month,
      ...img
    });
  });
});

// For infinite loop: Clone the list
const ORIGINAL_SLIDES = [...SLIDES];
SLIDES = [...ORIGINAL_SLIDES, ...ORIGINAL_SLIDES, ...ORIGINAL_SLIDES]; // 3x for safety

const TOTAL = SLIDES.length;
const ORIGINAL_TOTAL = ORIGINAL_SLIDES.length;

// ============================================
// DOM REFS
// ============================================
const loadMask     = document.querySelector('.js-load-mask');
const logoS1       = document.querySelector('.js-logo-s1');
const logoS2       = document.querySelector('.js-logo-s2');
const navEl        = document.querySelector('.js-nav');
const track        = document.querySelector('#carousel-track');
const scrollDriver = document.querySelector('.js-scroll-driver');
const infoBar      = document.querySelector('.js-info-bar');
const currentNum   = document.querySelector('.js-current-num');
const totalNum     = document.querySelector('.js-total-num');
const navCenter    = document.querySelector('.nav__center');

// Custom Cursor Variables
let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;
let trailX = 0, trailY = 0;
const cursorDot = document.querySelector('.cursor-dot');
const cursorTrail = document.querySelector('.cursor-trail');

// ============================================
// BUILD CARDS
// ============================================
function buildCards() {
  SLIDES.forEach((slide, i) => {
    const card = document.createElement('article');
    // Apply size class (default to small if missing)
    card.className = `card card--${slide.size || 'small'}`;
    card.dataset.index = i % ORIGINAL_TOTAL;
    card.dataset.url = slide.url;
    
    // Inject exact measured aspect ratio for the CSS to use
    card.style.setProperty('--aspect', slide.aspect);

    card.innerHTML = `
      <div class="card__num"><span class="card__num-inner">${String((i % ORIGINAL_TOTAL) + 1).padStart(2, '0')}</span></div>
      <div class="card__media">
        <img
          src="${slide.src}"
          alt="${slide.title}"
          loading="lazy"
          decoding="async"
          draggable="false"
          width="${slide.w}"
          height="${slide.h}"
          style="background-color:${slide.bg};"
        >
      </div>
      <div class="card__label-bottom"><span class="card__label-inner">${slide.category} (${slide.month})</span></div>
    `;

    // Mark as loaded when img loads
    const img = card.querySelector('img');
    img.addEventListener('load', () => {
      card.querySelector('.card__media').classList.add('is-loaded');
    });
    if (img.complete) {
      card.querySelector('.card__media').classList.add('is-loaded');
    }

    track.appendChild(card);
  });

  totalNum.textContent = String(ORIGINAL_TOTAL).padStart(2, '0');
}

// width calculation now handled by card--size classes in CSS

// ============================================
// SCROLL-DRIVEN CAROUSEL
// ============================================
let trackX       = 0; // actual rendered X
let targetX      = 0; // lerp target
let maxX         = 0;
let raf          = null;
let isDragging   = false;
let dragStartX   = 0;
let dragStartTrackX = 0;
let dragVelocity = 0;
let lastDragX    = 0;
let lastDragTime = 0;

// Width of one full set of slides
let originalWidth = 0;
let loopThreshold = 0;

function computeMaxX() {
  const cards = track.querySelectorAll('.card');
  if (cards.length < ORIGINAL_TOTAL) return;

  // Measure the width of exactly one set of slides
  let width = 0;
  for(let i=0; i<ORIGINAL_TOTAL; i++) {
    const rect = cards[i].getBoundingClientRect();
    const style = getComputedStyle(cards[i]);
    width += rect.width + parseFloat(style.marginRight || 0);
  }
  
  originalWidth = width;
  // Threshold to trigger the jump (start of the 2nd clone)
  loopThreshold = originalWidth;

  const trackWidth = track.scrollWidth;
  const viewWidth  = window.innerWidth;
  maxX = trackWidth - viewWidth;
}

function setScrollDriverHeight() {
  // Use a very large scroll driver for "infinite" response
  const scrollHeight = 30000;
  scrollDriver.style.height = scrollHeight + 'px';
  
  // No longer auto-centering on load to ensure intro layout (State 1 logo) is visible
  // window.scrollTo(0, 0) is default browser behavior on fresh load
  targetX = window.scrollY;
  trackX = window.scrollY;
}

// ============================================
// AUDIO — Procedural Scroll Sound
// ============================================
let audioCtx = null;
let lastTickTime = 0;

function playTick() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const now = audioCtx.currentTime;
  // Throttle to 50ms (20 ticks/sec) for smoothness
  if (Date.now() - lastTickTime < 50) return;
  lastTickTime = Date.now();

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  // Subtle "click" sound: short sine wave with fast decay
  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, now);
  osc.frequency.exponentialRampToValueAtTime(100, now + 0.05);

  gain.gain.setValueAtTime(0.0125, now); // Very quiet
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + 0.05);
}

function onScroll() {
  const scrollY = window.scrollY;
  targetX = scrollY;
  
  const scrollDelta = 30000;
  const originalWidthVal = originalWidth;
  const upperThreshold = 25000;

  if (scrollY > upperThreshold) {
    const jump = 5000 + (scrollY % originalWidthVal);
    const delta = scrollY - jump;
    targetX -= delta;
    trackX -= delta;
    window.scrollTo({ top: jump, behavior: 'instant' });
  }

  updateCounter();
}

let lastClosest = -1;
function updateCounter() {
  const viewCx = window.innerWidth * 0.35;
  const cards = track.querySelectorAll('.card');
  let closest = 0;
  let closestDist = Infinity;

  // RenderX is our current "modulo" position
  const renderX = ((trackX % originalWidth) + originalWidth) % originalWidth;

  // We only need to check cards that could reasonably be in view
  // Each card is roughly getCardWidth() px wide.
  // We can filter for performance, but 100 <div>s is usually fine for getBoundingClientRect.
  // To be safe and premium, let's keep it robust.
  cards.forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    const cardCx = rect.left + rect.width / 2;
    const dist = Math.abs(cardCx - viewCx);
    if (dist < closestDist) {
      closestDist = dist;
      closest = parseInt(card.dataset.index);
    }
  });

  if (closest !== lastClosest) {
    lastClosest = closest;
    playTick();
  }

  currentNum.textContent = String(closest + 1).padStart(2, '0');

  // Progress bar maps to one full cycle of the "masters"
  const pct = (renderX / originalWidth) * 100;
  const pb = document.querySelector('.progress-bar');
  if (pb) pb.style.width = pct + '%';
}

function animate() {
  // Dynamic lerp for "responsive" feel
  const ease = 0.075;
  const delta = targetX - trackX;
  
  if (Math.abs(delta) > 0.1) {
    trackX += delta * ease;
  } else {
    trackX = targetX;
  }

  // Infinite Visual Wrapping
  // Map the trackX to a single cycle width
  const renderX = ((trackX % originalWidth) + originalWidth) % originalWidth;
  track.style.transform = `translateX(${-renderX}px)`;

  // Update cursor position in loop for trail smoothness
  updateCursor();

  raf = requestAnimationFrame(animate);
}

// ============================================
// DRAG SUPPORT
// ============================================
function initDrag() {
  const layer = document.querySelector('.carousel-layer');

  layer.addEventListener('mousedown', onDragStart);
  layer.addEventListener('touchstart', onDragStart, { passive: true });

  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('touchmove', onDragMove, { passive: false });

  window.addEventListener('mouseup', onDragEnd);
  window.addEventListener('touchend', onDragEnd);
}

function onDragStart(e) {
  isDragging = true;
  dragStartX = e.touches ? e.touches[0].clientX : e.clientX;
  dragStartTrackX = targetX;
  dragVelocity = 0;
  lastDragX = dragStartX;
  lastDragTime = performance.now();
  document.querySelector('.carousel-layer').style.cursor = 'grabbing';
}

function onDragMove(e) {
  if (!isDragging) return;
  if (e.cancelable) e.preventDefault();

  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const now = performance.now();
  const dt = now - lastDragTime;

  dragVelocity = dt > 0 ? (lastDragX - clientX) / dt * 16 : 0;
  lastDragX = clientX;
  lastDragTime = now;

  const diff = dragStartX - clientX;
  targetX = Math.max(0, Math.min(maxX, dragStartTrackX + diff));

  // Sync scroll position too
  window.scrollTo({ top: targetX, behavior: 'instant' });
}

function onDragEnd() {
  if (!isDragging) return;
  isDragging = false;
  document.querySelector('.carousel-layer').style.cursor = 'grab';

  // Momentum
  const momentum = dragVelocity * 8;
  targetX = Math.max(0, Math.min(maxX, targetX + momentum));
  window.scrollTo({ top: targetX, behavior: 'smooth' });
}

// ============================================
// LOGO ANIMATION
// ============================================
function animateLogo() {
  // Slide in state 1 chars
  const s1Chars = document.querySelectorAll('.js-char-s1');
  s1Chars.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('is-visible');
    }, 100 + i * 30);
  });
}

function transitionLogoToSmall() {
  // Hide nav center redundant heading
  navCenter.classList.add('is-hidden');

  // Step 1: fade out State 1
  logoS1.classList.add('is-hidden');
  // Step 2: after State 1 finishes fading (~400ms), bring in State 2
  setTimeout(() => {
    const s2Chars = document.querySelectorAll('.js-char-s2');
    logoS2.classList.add('is-shown');
    s2Chars.forEach((el, i) => {
      setTimeout(() => el.classList.add('is-visible'), i * 40);
    });
  }, 420);
}

function transitionLogoToLarge() {
  // Hide nav center redundant heading
  navCenter.classList.add('is-hidden');

  // Step 1: fade out State 2
  logoS2.classList.remove('is-shown');
  document.querySelectorAll('.js-char-s2').forEach(el => el.classList.remove('is-visible'));
  // Step 2: after State 2 finishes fading (~400ms), bring in State 1
  setTimeout(() => {
    logoS1.classList.remove('is-hidden');
  }, 420);
}

// After scrolling past a threshold, compact the logo
let logoIsSmall = false;
function updateLogoState() {
  const scrollY = window.scrollY;
  if (scrollY > 80 && !logoIsSmall) {
    logoIsSmall = true;
    transitionLogoToSmall();
  } else if (scrollY <= 20 && logoIsSmall) {
    logoIsSmall = false;
    transitionLogoToLarge();
  }
}

// ============================================
// CARD CLICK
// ============================================
function initCardClicks() {
  const memoryOverlay = document.getElementById('memory-overlay');
  const memoryClose = document.getElementById('memory-close');
  const memoryImage = document.querySelector('.js-memory-image');
  const memoryTitle = document.querySelector('.js-memory-title');
  const memoryMeta = document.querySelector('.js-memory-meta');
  const memoryDesc = document.querySelector('.js-memory-desc');

  track.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if (!card || isDragging) return;

    // Get slide data
    const indexStr = card.dataset.index;
    if (!indexStr) return;
    const originalIndex = parseInt(indexStr, 10);
    const slide = ORIGINAL_SLIDES[originalIndex];
    if (!slide) return;

    // Populate overlay
    memoryImage.src = slide.src;
    memoryImage.alt = slide.title;
    memoryImage.style.backgroundColor = slide.bg;
    
    memoryTitle.textContent = slide.title;
    memoryMeta.textContent = `${slide.category} (${slide.month})`;
    memoryDesc.textContent = slide.desc || 'A fragment of memory preserved in the archives.';

    // Show overlay
    memoryOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden'; 
  });

  if (memoryClose) {
    memoryClose.addEventListener('click', () => {
      memoryOverlay.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  }

  if (memoryOverlay) {
    memoryOverlay.addEventListener('click', (e) => {
      // Close only if clicking the overlay background (not inner content)
      if (e.target === memoryOverlay) {
        memoryOverlay.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }
}

// ============================================
// MUSIC PLAYER
// ============================================
const TRACKS = [
  {
    file: 'Baawe Raftaar (pagalall.com).mp3',
    label: 'Baawe — Raftaar'
  },
  {
    file: 'Kheench Maari - Raga X Dg Immortals (pagalall.com).mp3',
    label: 'Kheench Maari — Raga × DG Immortals'
  },
  {
    file: 'Raat Ki Rani - Seedhe Maut (pagalall.com).mp3',
    label: 'Raat Ki Rani — Seedhe Maut'
  },
  {
    file: 'Bajenge - Badshah, Seedhe Maut (pagalall.com).mp3',
    label: 'Bajenge — Badshah × SM'
  },
  {
    file: 'Naksha - Seedhe Maut (pagalall.com).mp3',
    label: 'Naksha — Seedhe Maut'
  },
];

let audioEl        = null;
let currentTrack   = -1;   // index into TRACKS
let playerIsOpen   = false;
let playerIsPlaying= false;

function formatTime(sec) {
  if (!isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ':' + String(s).padStart(2, '0');
}

function initMusicPlayer() {
  audioEl = document.getElementById('site-audio');
  const playerEl    = document.getElementById('music-player');
  const toggleBtn   = document.getElementById('music-toggle-btn');
  const dropdown    = document.getElementById('music-dropdown');
  const trackList   = document.getElementById('track-list');
  const progressBar = document.getElementById('audio-progress-bar');
  const fill        = document.getElementById('progress-fill');
  const nowPlaying  = document.querySelector('.js-now-playing');
  const currentTimeEl = document.querySelector('.js-current-time');
  const durationEl    = document.querySelector('.js-duration');
  const iconPlay      = document.querySelector('.js-icon-play');
  const iconPause     = document.querySelector('.js-icon-pause');

  // ---- Build track list ----
  TRACKS.forEach((t, i) => {
    const item = document.createElement('div');
    item.className = 'track-item';
    item.dataset.index = i;
    item.innerHTML = `
      <span class="track-item__num">${String(i + 1).padStart(2, '0')}</span>
      <span class="track-item__eq">
        <span class="eq-bar"></span>
        <span class="eq-bar"></span>
        <span class="eq-bar"></span>
      </span>
      <span class="track-item__info">
        <span class="track-item__title">${t.label}</span>
        <span class="track-item__duration js-duration-${i}">—:——</span>
      </span>
    `;
    item.addEventListener('click', () => selectTrack(i));
    trackList.appendChild(item);

    // Pre-load duration
    const probe = new Audio();
    probe.preload = 'metadata';
    probe.src = trackSrc(t.file);
    probe.addEventListener('loadedmetadata', () => {
      const d = document.querySelector(`.js-duration-${i}`);
      if (d) d.textContent = formatTime(probe.duration);
    });
  });

  // ---- Toggle dropdown ----
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    playerIsOpen = !playerIsOpen;
    playerEl.classList.toggle('is-open', playerIsOpen);
    toggleBtn.setAttribute('aria-expanded', playerIsOpen);
    dropdown.setAttribute('aria-hidden', !playerIsOpen);
  });

  // Click outside closes
  document.addEventListener('click', (e) => {
    if (playerIsOpen && !playerEl.contains(e.target)) {
      playerIsOpen = false;
      playerEl.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // ---- Playback toggle (click icon area) ----
  // Clicking play/pause icon while track is selected
  iconPlay.parentElement.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentTrack === -1) {
      selectTrack(0);
      return;
    }
    if (playerIsPlaying) pauseAudio();
    else playAudio();
  });

  // ---- Audio events ----
  audioEl.addEventListener('timeupdate', () => {
    if (!audioEl.duration) return;
    const pct = (audioEl.currentTime / audioEl.duration) * 100;
    fill.style.width = pct + '%';
    currentTimeEl.textContent = formatTime(audioEl.currentTime);
  });

  audioEl.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audioEl.duration);
  });

  audioEl.addEventListener('ended', () => {
    // Auto-advance to next track
    const next = (currentTrack + 1) % TRACKS.length;
    selectTrack(next);
  });

  audioEl.addEventListener('play',  () => setPlayingState(true));
  audioEl.addEventListener('pause', () => setPlayingState(false));
  audioEl.addEventListener('error', () => setPlayingState(false));

  // ---- Seekable progress bar ----
  progressBar.addEventListener('click', (e) => {
    if (!audioEl.duration) return;
    const rect = progressBar.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audioEl.currentTime = ratio * audioEl.duration;
  });
}

function trackSrc(filename) {
  // Encode just the filename portion so spaces/parens/etc work locally
  return encodeURIComponent(filename).replace(/%20/g, '%20');
}

function selectTrack(index) {
  const playerEl  = document.getElementById('music-player');
  const nowPlaying = document.querySelector('.js-now-playing');
  const fill       = document.getElementById('progress-fill');
  const currentTimeEl = document.querySelector('.js-current-time');
  const durationEl    = document.querySelector('.js-duration');

  // Deselect previous
  document.querySelectorAll('.track-item').forEach(el => el.classList.remove('is-active'));

  currentTrack = index;
  const t = TRACKS[index];

  // Highlight row
  const rows = document.querySelectorAll('.track-item');
  if (rows[index]) rows[index].classList.add('is-active');

  // Update label
  nowPlaying.textContent = t.label;

  // Reset progress
  fill.style.width = '0%';
  currentTimeEl.textContent = '0:00';
  durationEl.textContent = '—:——';

  // Load + play
  audioEl.src = trackSrc(t.file);
  audioEl.load();
  audioEl.play().catch(() => {});
}

function playAudio() {
  audioEl.play().catch(() => {});
}

function pauseAudio() {
  audioEl.pause();
}

function setPlayingState(isPlaying) {
  playerIsPlaying = isPlaying;
  const playerEl  = document.getElementById('music-player');
  const iconPlay  = document.querySelector('.js-icon-play');
  const iconPause = document.querySelector('.js-icon-pause');

  playerEl.classList.toggle('is-playing', isPlaying);

  // Swap icons
  if (iconPlay)  iconPlay.style.display  = isPlaying ? 'none' : 'block';
  if (iconPause) iconPause.style.display = isPlaying ? 'block' : 'none';

  // Animate eq bars in active track only when playing
  document.querySelectorAll('.track-item.is-active .track-item__eq .eq-bar').forEach(bar => {
    bar.style.animationPlayState = isPlaying ? 'running' : 'paused';
  });
}

// ============================================
// CUSTOM CURSOR
// ============================================
function onMouseMove(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function updateCursor() {
  const dotEase   = 1; // Snappy
  const trailEase = 0.15; // Smooth lag for the trail

  dotX += (mouseX - dotX) * dotEase;
  dotY += (mouseY - dotY) * dotEase;
  trailX += (mouseX - trailX) * trailEase;
  trailY += (mouseY - trailY) * trailEase;

  if (cursorDot && cursorTrail) {
    cursorDot.style.transform = `translate3d(${dotX - 3}px, ${dotY - 3}px, 0)`;
    cursorTrail.style.transform = `translate3d(${trailX - 12}px, ${trailY - 12}px, 0)`;
  }
}

function initCursorHover() {
  const targets = 'a, button, .card, .music-player__dropdown, .track-item, #music-toggle-btn';
  document.querySelectorAll(targets).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
  });
}

// ============================================
// RESIZE
// ============================================
function onResize() {
  computeMaxX();
  setScrollDriverHeight();
  // Re-snap scroll
  const ratio = maxX > 0 ? targetX / maxX : 0;
  // keep ratio
}

// ============================================
// INIT
// ============================================
function init() {
  buildCards();

  // Wait one tick for layout
  requestAnimationFrame(() => {
    computeMaxX();
    setScrollDriverHeight();

    // Start animation loop
    animate();

    // Events
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);

    onScroll();

    initDrag();
    initMusicPlayer();
    initCardClicks();
    initCursorHover();

    // Progress bar element
    const pb = document.createElement('div');
    pb.className = 'progress-bar';
    document.body.appendChild(pb);

    // Reveal sequence
    setTimeout(() => {
      document.body.classList.remove('is-loading');
      loadMask.classList.add('is-hidden');
      animateLogo();

      // State 1 (large) is visible by default now, so hide redundant nav title
      navCenter.classList.add('is-hidden');

      setTimeout(() => {
        navEl.classList.add('is-visible');
        infoBar.classList.add('is-visible');
      }, 400);
    }, 300);

    window.addEventListener('scroll', updateLogoState, { passive: true });
  });
}

// Kick off
document.addEventListener('DOMContentLoaded', init);
