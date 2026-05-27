/* ═══════════════════════════════════════════════════════════
   SUMIT KUMAR — PORTFOLIO SCRIPT
   Features:
     · Loading screen
     · Animated particle background (canvas)
     · Typing / typewriter effect
     · Scroll reveal animations
     · Skill bar animation
     · Active navbar section highlight
     · Sticky navbar scroll effect
     · Mobile hamburger menu
     · Back-to-top button
     · Toast notification on form submit
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ─── 1. LOADING SCREEN ─────────────────────────────────── */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  // Give a brief moment so the animation looks intentional
  setTimeout(() => loader.classList.add('hide'), 800);
});


/* ─── 2. PARTICLE BACKGROUND ────────────────────────────── */
(function initParticles() {
  const canvas  = document.getElementById('particles-canvas');
  const ctx     = canvas.getContext('2d');
  let   W, H, particles;
  const COUNT   = 70;           // number of particles
  const MAX_DIST = 130;         // max connection distance

  /* Resize handler */
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  /* Particle factory */
  function createParticle() {
    return {
      x:    Math.random() * W,
      y:    Math.random() * H,
      vx:   (Math.random() - 0.5) * 0.35,  // slow drift
      vy:   (Math.random() - 0.5) * 0.35,
      r:    Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.4 + 0.15,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, createParticle);
  }

  /* Main draw loop */
  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Update positions with wrapping
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    }

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const opacity = (1 - dist / MAX_DIST) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  init();
  draw();
})();


/* ─── 3. TYPING EFFECT ──────────────────────────────────── */
(function initTyping() {
  const el     = document.getElementById('typed-text');
  if (!el) return;

  const phrases = [
    'CSE Student',
    'AI Enthusiast',
    'Robotics Builder',
    'DevOps Explorer',
    'IoT Maker',
    'GenAI Developer',
  ];

  let pIndex  = 0;  // phrase index
  let cIndex  = 0;  // character index
  let deleting = false;
  const TYPE_SPEED   = 85;
  const DELETE_SPEED = 45;
  const PAUSE_END    = 2000;
  const PAUSE_START  = 400;

  function type() {
    const current = phrases[pIndex];

    if (!deleting) {
      // Typing forward
      el.textContent = current.slice(0, cIndex + 1);
      cIndex++;
      if (cIndex === current.length) {
        // Pause at end, then start deleting
        deleting = true;
        setTimeout(type, PAUSE_END);
        return;
      }
      setTimeout(type, TYPE_SPEED);
    } else {
      // Deleting
      el.textContent = current.slice(0, cIndex - 1);
      cIndex--;
      if (cIndex === 0) {
        deleting = false;
        pIndex = (pIndex + 1) % phrases.length;
        setTimeout(type, PAUSE_START);
        return;
      }
      setTimeout(type, DELETE_SPEED);
    }
  }

  // Small initial delay
  setTimeout(type, 600);
})();


/* ─── 4. NAVBAR — SCROLL EFFECT & ACTIVE SECTION ───────── */
(function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    // Sticky glass effect
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlight
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load
})();


/* ─── 5. MOBILE HAMBURGER MENU ──────────────────────────── */
(function initHamburger() {
  const btn      = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (!btn || !navLinks) return;

  btn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      btn.classList.remove('open');
    });
  });
})();


/* ─── 6. SCROLL REVEAL ──────────────────────────────────── */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  /* Apply stagger delay from data-delay attribute */
  revealEls.forEach(el => {
    const delay = el.getAttribute('data-delay');
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));
})();


/* ─── 7. SKILL BAR ANIMATION ────────────────────────────── */
(function initSkillBars() {
  const bars = document.querySelectorAll('.bar-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar   = entry.target;
          const width = bar.getAttribute('data-width') || '0';
          // Small delay so CSS transition is visible
          setTimeout(() => {
            bar.style.width = width + '%';
          }, 200);
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.5 }
  );

  bars.forEach(bar => observer.observe(bar));
})();


/* ─── 8. BACK TO TOP BUTTON ─────────────────────────────── */
(function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ─── 9. CONTACT FORM — TOAST NOTIFICATION ──────────────── */
function handleFormSubmit() {
  /* Grab values */
  const name    = document.getElementById('name')?.value.trim();
  const email   = document.getElementById('email')?.value.trim();
  const subject = document.getElementById('subject')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  /* Simple validation */
  if (!name || !email || !message) {
    showToast('⚠️  Please fill in all required fields.');
    return;
  }

  if (!email.includes('@')) {
    showToast('⚠️  Please enter a valid email address.');
    return;
  }

  /* UI-only demo: show success toast */
  showToast('🚀  Message sent! I\'ll get back to you soon.');

  /* Clear form */
  ['name', 'email', 'subject', 'message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function showToast(msg) {
  /* Remove any existing toast */
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);

  // Trigger show state after paint
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });

  // Auto-remove after 3 s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}


/* ─── 10. SMOOTH ANCHOR SCROLLING (offset for sticky nav) ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH   = document.getElementById('navbar')?.offsetHeight || 70;
    const top    = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* ─── 11. HERO CODE CARD — SUBTLE FLOAT ANIMATION ────────── */
(function initCodeCardFloat() {
  const card = document.querySelector('.hero-code-card');
  if (!card) return;

  /* Gentle continuous float using requestAnimationFrame */
  let start = null;
  function float(ts) {
    if (!start) start = ts;
    const elapsed = ts - start;
    // ±6px vertical oscillation, period ≈ 4 s
    const y = Math.sin((elapsed / 4000) * Math.PI * 2) * 6;
    card.style.transform = `translateY(${y}px)`;
    requestAnimationFrame(float);
  }
  requestAnimationFrame(float);
})();
