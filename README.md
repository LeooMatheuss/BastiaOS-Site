# BastiaOS Website

Official landing page for [BastiaOS](https://github.com/LeooMatheuss/bastiaos). Static HTML/CSS/JS, no build step.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

```
├── index.html       # Landing page
├── download.html    # Download, requirements and build-from-source guide
├── css/style.css    # Design system and layout
├── js/main.js       # Navigation, reveal animations, tabs, copy buttons
└── assets/img/      # Logo, icon and boot splash (from bastiaos/assets/branding)
```

## Deploy

Any static host works (GitHub Pages, Netlify, Cloudflare Pages). For GitHub Pages, push this folder to a repository and enable Pages on the `main` branch root.
