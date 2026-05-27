# Riley Portfolio Website

This is a ready-to-run React/Vite portfolio website with local MP4 showcase videos included.

## Run it locally

1. Install Node.js from https://nodejs.org/
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

Open the local URL Vite gives you, usually `http://localhost:5173`.

On this Windows machine, PowerShell blocks `.ps1` scripts. If `npm install` or
`npm run dev` is blocked, use these instead:

```bash
npm.cmd install
npm.cmd run dev
```

## Build the website

```bash
npm run build
```

This creates a `dist` folder. The `dist` folder is the finished website.

To test the finished website locally:

```bash
npm run preview
```

## Easiest way to publish without coding

1. Run `npm install`
2. Run `npm run build`
3. Go to Netlify Drop in your browser.
4. Drag the generated `dist` folder onto the page.
5. Netlify gives you a public website link.

## Better long-term hosting

Upload this project to GitHub, then import it into Vercel or Netlify. Every time you update the GitHub repo, your website can redeploy automatically.

Recommended Netlify settings:

- Build command: `npm run build`
- Publish directory: `dist`

This repo also includes `netlify.toml`, so Netlify can read those settings automatically.
