## Portfolio (React + Netlify)

This repository contains my personal portfolio site built with React and deployed on Netlify. It showcases projects, experience, skills, and includes a contact form powered by Netlify Functions.

### Tech stack
- React 19
- React Router
- Netlify Functions (serverless API)
- AOS animations, Bootstrap, Framer Motion

### Local development
1. Install dependencies:
```bash
npm install
```
2. Run the dev server:
```bash
npm run dev
```
3. Optional: run with Netlify local server (to emulate Functions):
```bash
npm run dev:nl
```

### Build
```bash
npm run build
```
The build output is generated in the `dist/` directory.

### Environment variables
- Private secrets should be stored in Netlify environment variables and accessed only in `netlify/functions/**` via `process.env`.
- Do not prefix secrets with `VITE_`; any `VITE_` variable is public in the browser.

### Deployment
Push to the default branch; Netlify will build and deploy automatically. Branch deploys and previews are enabled.

### License
This project is for personal portfolio use. Content © the site owner.
