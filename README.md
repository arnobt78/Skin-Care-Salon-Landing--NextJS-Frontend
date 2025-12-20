# Skin Care Salon - Next.js TailwindCSS Frontend Project

![Screenshot 2024-09-13 at 02 50 01](https://github.com/user-attachments/assets/3c23bd2d-bf2e-4d09-b991-2b451177739e) ![Screenshot 2024-09-13 at 02 50 26](https://github.com/user-attachments/assets/abee4693-f5c8-4669-9dad-0a6689a1a9b4) ![Screenshot 2024-09-13 at 02 50 49](https://github.com/user-attachments/assets/e9644d1f-550d-4bf4-a3da-fb07d912b346) ![Screenshot 2024-09-13 at 02 51 07](https://github.com/user-attachments/assets/55b85241-46ad-4811-a2cb-7d98f3619e23) ![Screenshot 2024-09-13 at 02 51 35](https://github.com/user-attachments/assets/3dc4604b-0e02-472f-be9a-a95de5f3254f)

---

## Project Summary

**SkinCare-Salon** is a modern, responsive, and animated frontend website built with Next.js 14, React, and TypeScript. The project simulates a skin care salon's online presence, featuring sleek design, smooth transitions, and a modular component structure. The goal is to demonstrate how to build a professional landing site using the latest web technologies, with a strong focus on TailwindCSS, Framer Motion for animations, and Shadcn-UI for UI components.

- **Live Demo:** [https://skincare-salon-arnob.vercel.app/](https://skincare-salon-arnob.vercel.app/)

---

## Table of Contents

- [Project Summary](#project-summary)
- [Tech Stack & Key Dependencies](#tech-stack--key-dependencies)
- [Project Structure](#project-structure)
- [Features and Functionalities](#features-and-functionalities)
- [How to Run the Project](#how-to-run-the-project)
- [Installing NodeJS](#installing-nodejs)
- [Component & Page Walkthrough](#component--page-walkthrough)
- [API, Routes & Navigation](#api-routes--navigation)
- [Learning & Teaching Resources](#learning--teaching-resources)
- [Deployment](#deployment)
- [Keywords](#keywords)
- [Examples & Scripts](#examples--scripts)
- [Conclusion](#conclusion)

---

## Tech Stack & Key Dependencies

- **Framework:** Next.js 14 (React, SSR/SSG Hybrid)
- **Language:** TypeScript
- **Styling:** TailwindCSS, tailwindcss-animate
- **Animation:** Framer Motion
- **UI Components:** Shadcn-UI, Dialog (modal)
- **Icons:** Lucide-React, React-Icons
- **Media:** React-Player
- **UX:** React-Responsive, React-CountUp

**Install Key Packages:**

```bash
npm i framer-motion react-icons react-player react-responsive react-countup
npx shadcn-ui@latest init
npx shadcn-ui@latest add dialog
```

---

## Project Structure

A typical Next.js 14 project structure is as follows:

```
SkinCare-Salon--TailwindCSS-Fundamental-Project-6/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── [other pages].tsx
├── components/
│   ├── [UI components].tsx
├── public/
│   ├── images/
├── styles/
│   ├── globals.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── README.md
└── ...
```

- **app/**: Next.js 14 app directory with pages and layouts.
- **components/**: Reusable UI components like Navbar, Footer, ServiceCard, etc.
- **public/**: Static assets such as images and icons.
- **styles/**: Global and component-specific styles.
- **package.json**: Project dependencies and scripts.
- **tailwind.config.js**: TailwindCSS customizations.

---

## Features and Functionalities

- **Responsive Design:** Fully mobile-friendly layout using TailwindCSS utility classes.
- **Animated Transitions:** Smooth entrance/exit effects via Framer Motion.
- **UI Library Integration:** Shadcn-UI for accessible, reusable components (e.g., dialogs/modals).
- **Rich Media Support:** Video playback with React-Player.
- **Dynamic Stats:** Animated counters via React-CountUp.
- **Iconography:** Modern icon sets (Lucide, React-Icons).
- **SEO-Friendly:** SSR & SSG by Next.js for fast load and optimized search indexing.
- **Developer Friendly:** TypeScript, modular file structure, and hot reloading.
- **Deployment Ready:** Easily deployed to Vercel or any Node.js environment.

---

## How to Run the Project

### 1. Install Dependencies

Before running, install all required dependencies as listed in `package.json`:

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Edit Pages

Start editing by modifying `app/page.tsx`. The site auto-updates as you save files.

---

## Installing NodeJS

Ensure NodeJS is installed on your machine.  
[NodeJS Download & Installation Guide](https://nodejs.org/en/)

---

## Component & Page Walkthrough

- **Homepage (`app/page.tsx`):**  
  Landing page with hero section, services overview, call-to-action buttons, and animated stats.
- **Service Cards (`components/ServiceCard.tsx`):**  
  Card components for each service, animated on scroll.
- **Modal Dialog (`components/Dialog.tsx`):**  
  Shadcn-UI modal for booking or more info.
- **Navigation Bar & Footer:**  
  Consistent layout across pages.
- **Gallery/Media Section:**  
  Showcases salon images, video player, and testimonials.
- **Contact/Booking:**  
  Simple contact form or booking modal.

---

## API, Routes & Navigation

- **Static Routing:**  
  Pages are statically generated under `app/` directory.
- **Dynamic Components:**  
  Some content (like counters, modals) is dynamic using React's state/hooks.
- **No backend/API integration:**  
  This project is frontend-only, ideal for portfolio or static deployment.

---

## Learning & Teaching Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js Interactive Tutorial](https://nextjs.org/learn)
- [Shadcn-UI Docs](https://ui.shadcn.com/docs/installation/next)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [YouTube Tutorial - Build Modern Next.js Website](https://www.youtube.com/watch?v=XhOAesfkVco)
- [Other References](https://zenn.dev/msy/articles/e21e729eb0727d), [Reffect Guide for Shadcn-React](https://reffect.co.jp/react/shadcn-react#Slot)

---

## Deployment

Deploy instantly with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app).

More on [Next.js deployment](https://nextjs.org/docs/deployment).

---

## Keywords

Next.js, React, TypeScript, TailwindCSS, Framer Motion, Shadcn-UI, Dialog, Lucide-React, React-Icons, React-Player, Responsive Design, Animation, Modern Web, Static Website, Portfolio, UI/UX.

---

## Examples & Scripts

**Run locally:**

```bash
npm install
npm run dev
```

**Install extra packages:**

```bash
npm i framer-motion react-icons react-player react-responsive react-countup
npx shadcn-ui@latest init
npx shadcn-ui@latest add dialog
```

**Edit page:**

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Services />
      <Gallery />
      <ContactForm />
    </main>
  );
}
```

---

## Conclusion

SkinCare-Salon is a modern, animated, and fully responsive frontend project, ideal for learning Next.js, TailwindCSS, and modern React UI practices.  
Clone, explore, and adapt it for your own business, portfolio, or learning needs.

---

## Happy Coding! 🎉

Thank you for visiting and learning!
