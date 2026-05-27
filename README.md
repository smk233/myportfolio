# 🚀 Sumit Kumar — Personal Portfolio

> A modern, responsive developer portfolio built with pure HTML, CSS, and vanilla JavaScript.  
> No frameworks. No dependencies. Just clean code.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-blue?style=flat-square&logo=github)

---

## 📋 Table of Contents

- [About](#-about)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Sections](#-sections)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment-github-pages)
- [Customisation Guide](#-customisation-guide)
- [Tech Stack](#-tech-stack)
- [License](#-license)

---

## 🧑‍💻 About

This is the personal portfolio of **Sumit Kumar**, a Computer Science Engineering student with a focus on **AI, Robotics, DevOps, and Software Development**. The portfolio is designed to be recruiter-friendly, lightweight, and fully functional straight out of the box — no build tools, no package managers, no frameworks.

**Design Theme:** Cyber-Noir Dark  
**Colour Palette:** Deep space black · Electric cyan `#00d4ff` · Warm gold `#ffd166`  
**Typography:** [Syne](https://fonts.google.com/specimen/Syne) (headings) · [Outfit](https://fonts.google.com/specimen/Outfit) (body) · [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (code)

---

## 🌐 Live Demo

> **[sumit-kumar.github.io](https://sumit-kumar.github.io)** ← replace with your actual URL

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔵 **Particle Background** | Animated canvas network of floating particles with connecting lines |
| ⌨️ **Typing Animation** | Rotating typewriter effect cycling through 6 role titles |
| 🃏 **Floating Code Card** | Gently floating JSON card in the hero section |
| 📌 **Sticky Navbar** | Transparent → frosted glass on scroll |
| 🔦 **Active Section Highlight** | Navbar link updates as you scroll through sections |
| 🎞️ **Scroll Reveal** | Elements animate in (up / left / right) with staggered delays |
| 📊 **Animated Skill Bars** | Progress bars fill when scrolled into view |
| ☰ **Mobile Hamburger Menu** | Fully responsive nav for all screen sizes |
| ⬆️ **Back-to-Top Button** | Appears after scrolling 400px, smooth scroll to top |
| 💬 **Toast Notifications** | Form submit feedback without a backend |
| ⏳ **Loading Screen** | Branded spinner on initial page load |
| 🌙 **Dark Theme** | Consistent cyber-noir aesthetic throughout |

---

## 📄 Sections

1. **Hero** — Name, animated roles, intro, CTA buttons, social links, floating code card
2. **About** — Bio, avatar with animated rings, stat cards, interest tags
3. **Skills** — Animated progress bars (Programming) + pill badges (Core CS, AI/GenAI, DevOps, IoT)
4. **Projects** — Cards for Autonomous Delivery Robot & GenAI Cold Email Generator
5. **Experience** — DFCCIL internship in timeline format
6. **Leadership** — Navprayas & Renewable Energy Club cards
7. **Certifications** — Gen AI Study Jam & Paper Presentation certificates
8. **Contact** — Contact info items + message form with toast feedback

---

## 📁 Project Structure

```
portfolio/
│
├── index.html      # All markup — semantic HTML5, 8 sections, Font Awesome icons
├── style.css       # All styles — CSS variables, animations, responsive breakpoints
├── script.js       # All interactivity — particles, typing, reveal, skill bars, etc.
│
└── README.md       # You are here
```

> **No build step. No node_modules. No config files.** Drop the three files into any web server or GitHub Pages and it works.

---

## 🏁 Getting Started

### Option A — Open locally

```bash
# 1. Clone the repo
git clone https://github.com/your-username/your-username.github.io.git

# 2. Navigate into the folder
cd your-username.github.io

# 3. Open in browser (double-click or use a local server)
open index.html
```

> **Tip:** Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension for hot-reload during editing.

### Option B — Download ZIP

Click **Code → Download ZIP** on GitHub, extract, and open `index.html` in your browser.

---

## 🚀 Deployment (GitHub Pages)

1. Create a repository named exactly **`your-username.github.io`**
2. Push (or upload) `index.html`, `style.css`, and `script.js` to the `main` branch root
3. Go to **Settings → Pages → Source → Deploy from branch → main / root**
4. Your site will be live at `https://your-username.github.io` within ~60 seconds

```bash
git init
git add .
git commit -m "feat: initial portfolio deploy"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

---

## 🛠 Customisation Guide

All personal content is in `index.html`. Search for the comments below to find each section quickly.

### 🔗 Update your links

| What | Where in `index.html` | What to change |
|---|---|---|
| Resume download | `<a href="resume.pdf" download …>` | Replace `resume.pdf` with your file path |
| GitHub profile | `href="https://github.com/"` | Add your GitHub URL |
| LinkedIn profile | `href="https://linkedin.com/"` | Add your LinkedIn URL |
| Email address | `href="mailto:sumit@email.com"` | Add your email |
| Phone number | `href="tel:+910000000000"` | Add your phone number |
| Certificate links | `href="#"` inside `.cert-link` | Add your certificate URLs |
| Project repos | `href="#"` inside `.project-links` | Add your GitHub repo / live demo URLs |

### 🎨 Change the colour scheme

Open `style.css` and edit the CSS variables at the top of the file:

```css
:root {
  --cyan: #00d4ff;   /* primary accent — change this to any colour */
  --gold: #ffd166;   /* secondary accent */
  --bg:   #080b12;   /* main background */
}
```

Every colour in the site flows from these three variables.

### ⌨️ Change the typing phrases

Open `script.js` and find the `phrases` array (~line 90):

```js
const phrases = [
  'CSE Student',
  'AI Enthusiast',
  'Robotics Builder',
  'DevOps Explorer',
  'IoT Maker',
  'GenAI Developer',
];
```

Add, remove, or reorder entries freely.

### 📊 Update skill bar percentages

In `index.html`, find `.bar-fill` elements and change the `data-width` value (0–100):

```html
<div class="bar-fill" data-width="85"></div>  <!-- 85% -->
```

### 🌐 Add a profile photo

Replace the avatar initials block in the About section:

```html
<!-- Find this in index.html -->
<div class="avatar-initials">SK</div>

<!-- Replace with: -->
<img src="your-photo.jpg" alt="Sumit Kumar" class="avatar-initials"
     style="object-fit:cover;" />
```

Then add this one line to `style.css`:

```css
.avatar-initials { overflow: hidden; }
```

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure, accessibility attributes |
| **CSS3** | Custom properties, Grid, Flexbox, animations, `@keyframes` |
| **Vanilla JavaScript** | Canvas particles, IntersectionObserver, DOM manipulation |
| **Font Awesome 6** (CDN) | Icons throughout the site |
| **Google Fonts** (CDN) | Syne · Outfit · JetBrains Mono |

**Zero runtime dependencies. Zero build tools. Zero frameworks.**

---

## 🐛 Known Limitations

- The **contact form is UI-only** — it shows a toast notification but does not send emails. To make it functional, integrate [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com), or a backend endpoint.
- The **resume download** requires you to place your `resume.pdf` in the project root.
- Particle canvas is hidden on very low-power devices via `prefers-reduced-motion` — add the following to `style.css` if desired:

```css
@media (prefers-reduced-motion: reduce) {
  #particles-canvas { display: none; }
}
```

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).  
Feel free to fork, adapt, and use it for your own portfolio — a credit or star is appreciated but not required.

---

<div align="center">

Designed & built by **Sumit Kumar**

*// Compiling dreams into reality, one commit at a time.*

</div>
