# Naitify AI Tech — Complete Project Tree

This generated README contains a full, recursive tree of the project's files and folders as discovered in the workspace. The exhaustive raw listing (including the full `node_modules` contents) is saved in `FULL_FILE_LIST.txt` at the project root. Use that file if you need to inspect every dependency file.

If you'd like a condensed view without `node_modules`, tell me and I'll regenerate a shorter tree.

## Full project tree (clean, readable)

```
.
├─ index.html (application HTML entry)
├─ package.json (npm manifest — scripts & deps)
├─ package-lock.json (npm lockfile)
├─ postcss.config.cjs (PostCSS configuration)
├─ postcss.config.js (PostCSS configuration - alternate)
├─ tailwind.config.js (Tailwind CSS config)
├─ vite.config.js (Vite configuration)
├─ public/
│  ├─ _headers (static hosting headers)
│  └─ vite.svg (public asset)
├─ src/
│  ├─ App.css (global app styles)
│  ├─ App.jsx (root React component)
│  ├─ assets/
│  │  ├─ fonts/ (custom fonts)
│  │  ├─ icons/
│  │  │  └─ social/ (social icons)
│  │  ├─ images/
│  │  │  ├─ hero-image.jpg (hero image)
│  │  │  └─ react.svg (React logo used in demo)
│  │  └─ videos/
│  │     └─ hero.mp4 (hero video)
│  ├─ components/
│  │  └─ layout/
│  │     ├─ Footer.jsx (site footer)
│  │     ├─ Header.jsx (site header)
│  │     ├─ Layout.jsx (page layout wrapper)
│  │     ├─ Sidebar.jsx (sidebar navigation)
│  │     └─ ThemeToggle.jsx (theme switcher)
│  ├─ components/seo/
│  │  └─ SEO.jsx (head/metadata helper)
│  ├─ components/ui/
│  │  ├─ AnimatedSection.jsx (animated section wrapper)
│  │  ├─ Button.jsx (reusable button)
│  │  ├─ Card.jsx (card UI)
│  │  ├─ SocialPanel.jsx (social links panel)
│  │  └─ TestimonialSlider.jsx (testimonials slider)
│  ├─ context/
│  │  └─ ThemeContext.jsx (theme context provider)
│  ├─ data/
│  │  └─ navItems.js (site navigation data)
│  ├─ hooks/ (custom hooks)
│  ├─ index.css (app CSS entry)
│  ├─ main.jsx (app bootstrap/mount)
│  ├─ pages/
│  │  ├─ About.jsx
│  │  ├─ Blog.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Home.jsx
│  │  ├─ NotFound.jsx
│  │  ├─ Products.jsx
│  │  ├─ Projects.jsx
│  │  └─ Services.jsx
│  ├─ router.jsx (client-side routes)
│  └─ utils/ (utility helpers)
├─ FULL_FILE_LIST.txt (raw, exhaustive file listing saved by the generator)
└─ node_modules/ (installed dependencies — full listing in FULL_FILE_LIST.txt)

```

## Short descriptions (top-level)

- `index.html` — the server-served HTML that bootstraps the app.
- `package.json` — contains project metadata, scripts, and dependency declarations.
- `vite.config.js` — config for the Vite dev server and build.
- `tailwind.config.js` — Tailwind CSS customization.
- `postcss.config.cjs` / `postcss.config.js` — PostCSS plugin configuration (used by Tailwind).
- `public/` — static files publicly served (icons, SVGs, headers).
- `src/` — the application source code (React components, pages, and assets).
- `src/main.jsx` — mounts the React app; app entry point.
- `src/App.jsx` — the root App component that composes the layout and routes.
- `src/components/` — modular UI components (layout and UI primitives).
- `src/pages/` — page components mapped to routes.
- `node_modules/` — dependency folder (huge; see FULL_FILE_LIST.txt for details).

## Notes & next steps

- I saved the exhaustive scan in `FULL_FILE_LIST.txt`. If you want a single README that contains every `node_modules` file expanded inline, I can produce that, but it will make the README extremely large.
- Would you prefer a condensed tree (excluding `node_modules`) or a per-folder README breakdown? Reply with your preference and I'll update.

---

Generated on: 2025-10-13
