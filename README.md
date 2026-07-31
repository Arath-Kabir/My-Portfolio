# A Z M Ahteshamul Kabir — Portfolio

Personal portfolio website of **A Z M Ahteshamul Kabir**, a Data Analyst & Business Analyst specialising in data analytics, business intelligence, and information systems. Built as a single-page static site to showcase professional experience, projects, education, certifications, and community engagement.

**Live site:** [https://arath-kabir.github.io/My-Portfolio/](https://arath-kabir.github.io/My-Portfolio/) *(once GitHub Pages is enabled — see [Deployment](#deployment))*

---

## Table of Contents

- [Overview](#overview)
- [Sections](#sections)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customising Content](#customising-content)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Contact](#contact)
- [License](#license)

---

## Overview

This site is a hand-built, dependency-free static page — no build tools, frameworks, or package manager required. It is designed to load fast, work well on mobile, and be easy to edit directly in `index.html`, `assets/css/style.css`, and `assets/js/script.js`.

Key interactions:
- Scroll-triggered reveal animations for content sections (via `IntersectionObserver`)
- Smooth, JavaScript-driven in-page navigation for anchor links (more reliable across mobile browsers than CSS-only smooth scrolling)
- Graceful fallback for missing images (`Image coming soon` placeholder)
- Responsive layout with dedicated breakpoints for tablet and mobile

## Sections

| Section | Description |
|---|---|
| **Home** | Hero introduction, availability status, core expertise summary, and profile photo |
| **Tech Strip** | At-a-glance list of core tools and technologies |
| **About** | Professional profile summary |
| **Career Timeline** | Key professional milestones |
| **Skills** | Core capability groups (Analytics & BI, Data & Systems, Tools & Technologies) |
| **Portfolio** | Featured projects with role, tooling, and outcome breakdowns |
| **Education** | Academic background timeline |
| **Certificates** | Scrollable strip of professional certifications |
| **Professional Memberships** | Active memberships in professional bodies and student organisations |
| **Activities** | Leadership, volunteering, and community engagement |
| **Contact** | Direct links to email, LinkedIn, GitHub, and resume |

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, Grid, Flexbox, no CSS framework
- **Vanilla JavaScript (ES6+)** — no libraries or dependencies
- **Google Fonts** — [Oswald](https://fonts.google.com/specimen/Oswald) (headings) and [Manrope](https://fonts.google.com/specimen/Manrope) (body text)

## Project Structure

```text
My-Portfolio/
├── index.html                  # Single-page site markup
├── assets/
│   ├── css/
│   │   └── style.css            # All styling, including responsive breakpoints
│   ├── js/
│   │   └── script.js            # Reveal animations, smooth-scroll nav, image fallback
│   ├── images/                  # Profile photo, project screenshots, certificates, activity photos
│   └── resume/
│       └── final-resume.pdf     # Downloadable resume
├── .github/
│   └── workflows/
│       └── jekyll-docker.yml    # Optional CI build check (not required for deployment)
└── README.md
```

## Getting Started

No build step is required — this is a static site.

**Option 1: Open directly**

Open `index.html` in any modern browser.

**Option 2: Run a local server (recommended)**

Serving over HTTP avoids any browser restrictions on local file access and better reflects production behaviour.

```bash
# Python 3
python -m http.server 8000
```

```bash
# Node.js (via npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Customising Content

| To change... | Edit... |
|---|---|
| Name, role, section text | `index.html` |
| Profile photo | Replace `assets/images/profile.jpg` |
| Project screenshots | Replace `assets/images/project-1.jpg` … `project-4.jpg` |
| Certificates | Replace/add images in `assets/images/certificate-*.jpg`, update captions in the `#certifications` section |
| Activity photos | Replace `assets/images/activity-*.jpg` |
| Resume | Replace `assets/resume/final-resume.pdf` (keep the same filename, or update the `href` in `index.html`) |
| Colours, spacing, layout | `assets/css/style.css` (see `:root` custom properties near the top of the file) |
| Scroll offset / nav behaviour | `assets/js/script.js` (`SCROLL_OFFSET` constant) |

Image error handling is automatic: if an image fails to load, a "Image coming soon" placeholder is shown instead of a broken image icon.

## Deployment

This project deploys cleanly to **GitHub Pages** with no build step:

1. Push the repository to GitHub (see below).
2. Go to **Settings → Pages** in the repository.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Select the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will publish the site at `https://<username>.github.io/<repository-name>/` within a few minutes.

### Pushing to GitHub for the first time

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Arath-Kabir/My-Portfolio.git
git push -u origin main
```

If the repository already exists on GitHub with content, clone it first and copy these files in instead of running `git init`.

> Note: `.github/workflows/jekyll-docker.yml` is an optional CI check that builds the site with Jekyll in a container; it is not required for GitHub Pages to serve this site and can be removed if unused.

## Browser Support

Tested on current versions of Chrome, Edge, Firefox, and Safari (desktop and mobile). The layout degrades gracefully on older browsers; JavaScript-driven smooth scrolling is used specifically for broader mobile browser compatibility.

## Contact

- **Email:** [arath.kabir@gmail.com](mailto:arath.kabir@gmail.com)
- **LinkedIn:** [linkedin.com/in/ahteshamul-kabir](https://www.linkedin.com/in/ahteshamul-kabir)
- **GitHub:** [github.com/Arath-Kabir](https://github.com/Arath-Kabir)
- **ResearchGate:** [A-Z-M-Ahteshamul-Kabir](https://www.researchgate.net/profile/A-Z-M-Ahteshamul-Kabir-2)

## License

© 2026 A Z M Ahteshamul Kabir. All rights reserved.

This repository contains personal portfolio content (résumé, photos, project write-ups, certificates). The source code structure (HTML/CSS/JS) may be referenced for learning purposes, but personal content, images, and copy should not be reused without permission.
