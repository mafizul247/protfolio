# Mafizul Islam — Portfolio

Welcome to my personal portfolio site for **Mafizul Islam**, a Full Stack Web Developer specializing in the MERN stack. Built as a single-page React app showcasing skills, projects, and professional experience.

## About Me
I thrive on turning ideas into functional and visually appealing web applications. With a strong foundation in both front-end and back-end technologies, I enjoy working on diverse projects that challenge and inspire me.

## Portfolio Link
Explore my portfolio here: [https://mafizul.netlify.app/](https://mafizul.netlify.app/)

## Skills
- **Front-end:** HTML, CSS, Bootstrap, Tailwind CSS, daisyUI, JavaScript, DOM, ES6, React JS, Firebase, Email JS, Context API, Tanstack query, Recharts,
- **Back-end:** ExpressJS, NodeJS, MongoDB, Rest API
- **Familiar:**  JWT, Axios, Stripe JS,  SQL Server, MySQL, GitHub, Figma, Netlify, Vercel
- **Tools:** VS Code, Dev Tool,  Git Bash, NPM Package, Postman, Thunder Client
---
 
## Tech Stack
 
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS + daisyUI
- **Routing / scroll:** React Router, react-scroll (smooth in-page navigation)
- **Contact form:** EmailJS + SweetAlert2 confirmation/status dialogs
- **Icons:** react-icons
## Sections
- **Banner** — intro, name, title, resume download, social links
- **About** — bio and current role
- **Skill** — categorized tech stack (Frontend / Backend / Familiar / Tools)
- **Project** — featured projects with tech tags and links
- **Experience** — work history
- **Contact** — message form wired to EmailJS, plus address/phone/email/social links
## Getting Started
 
Install dependencies:
 
```bash
npm install
```
 
Run the dev server:
 
```bash
npm run dev
```
 
Build for production:
 
```bash
npm run build
```
 
Preview the production build locally:
 
```bash
npm run preview
```
 
## Environment Variables
 
The contact form uses [EmailJS](https://www.emailjs.com/) and expects the following variables in a `.env` file at the project root (not committed to version control):
 
```
VITE_EMAIL_JS_SERVICE_ID=your_service_id
VITE_EMAIL_JS_TEMPLATE_ID=your_template_id
VITE_EMAIL_JS_PUBLIC_KEY=your_public_key
```
 
These values come from your EmailJS dashboard. When deploying (e.g. to Netlify), add the same three variables under your host's environment variable settings, then trigger a fresh build — Vite bakes `VITE_*` variables in at build time, not runtime.
 
## SEO
 
- Meta description, Open Graph, and Twitter Card tags are set in `index.html`
- `public/robots.txt` and `public/sitemap.xml` are included for crawlability
- Structured data (`Person` schema) is embedded in `index.html`
- One `<h1>` per page and semantic `<section>`/`<main>`/`<nav>`/`<footer>` landmarks throughout
## Deployment
 
The site is deployed on [Netlify](https://www.netlify.com/). Any push to the main branch triggers a rebuild, provided the environment variables above are set in the Netlify dashboard.
 
## Projects
Here are some highlights from my portfolio:

1. **Project One:** [Smart Deal](https://smart-deals-232.netlify.app/)
2. **Project Two:** [ToyVerse](https://toy-marketplace-39472.web.app/)
3. **Project Three:** [Movie World](https://movideworld.web.app/)

## Contact
Feel free to reach out to me for collaboration or just to say hi! You can find my contact details on my portfolio.
 
- **Email:** mafizul247@gmail.com
- **GitHub:** [github.com/mafizul247](https://github.com/mafizul247)
- **LinkedIn:** [linkedin.com/in/mafizul-islam-john-24721b145](https://www.linkedin.com/in/mafizul-islam-john-24721b145/)


Happy coding!

