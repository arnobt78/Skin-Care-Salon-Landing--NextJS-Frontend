# Premium Skincare Salon - Next.js, React, TypeScript, TailwindCSS Frontend Website

A modern, responsive, and animated frontend website built with Next.js 14, React, TypeScript, and TailwindCSS. This project demonstrates how to build a professional skincare salon website with smooth animations, custom cursor interactions, and a modular component structure.

**Live Demo:** [https://skincare-salon.vercel.app/](https://skincare-salon.vercel.app//)

![Screenshot 2024-09-13 at 02 50 01](https://github.com/user-attachments/assets/3c23bd2d-bf2e-4d09-b991-2b451177739e) ![Screenshot 2024-09-13 at 02 50 26](https://github.com/user-attachments/assets/abee4693-f5c8-4669-9dad-0a6689a1a9b4) ![Screenshot 2024-09-13 at 02 50 49](https://github.com/user-attachments/assets/e9644d1f-550d-4bf4-a3da-fb07d912b346) ![Screenshot 2024-09-13 at 02 51 07](https://github.com/user-attachments/assets/55b85241-46ad-4811-a2cb-7d98f3619e23) ![Screenshot 2024-09-13 at 02 51 35](https://github.com/user-attachments/assets/3dc4604b-0e02-472f-be9a-a95de5f3254f)

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [Project Structure](#-project-structure)
- [Components Overview](#-components-overview)
- [Routes & Pages](#-routes--pages)
- [How It Works](#️-how-it-works)
- [Code Examples](#-code-examples)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [Keywords](#-keywords)
- [Conclusion](#-conclusion)

## 🎯 Project Overview

This is a full-stack frontend project for a premium skincare salon showcasing:

- **Home Page**: Hero section with animated content and video modal
- **About Page**: Company information with animated statistics
- **Treatments Page**: Service offerings in a grid layout
- **Contact Page**: Contact form and business information

The project uses Next.js 14 App Router, Framer Motion for animations, and a custom cursor context for enhanced user interactions. All components are built with TypeScript for type safety and maintainability.

---

## ✨ Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Custom Cursor**: Interactive cursor that changes on hover (desktop only)
- **Page Transitions**: Smooth fade-in/fade-out effects between pages
- **Animated Statistics**: CountUp animations for engaging number displays
- **Video Modal**: Embedded video player using ReactPlayer
- **SEO Optimized**: Comprehensive metadata for search engines and social sharing
- **TypeScript**: Full type safety throughout the application
- **Component-Based Architecture**: Reusable, modular components
- **Performance Optimized**: Next.js Image optimization and font optimization

---

## 🛠 Tech Stack

### Core Technologies

- **Framework**: Next.js 14.2.35 (React 18, App Router)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 3.4.1
- **Animations**: Framer Motion 11.3.29

### Key Dependencies

- **UI Components**:

  - `@radix-ui/react-dialog` - Accessible dialog/modal components
  - `lucide-react` - Icon library
  - `react-icons` - Additional icon sets

- **Utilities**:

  - `clsx` - Conditional className utility
  - `tailwind-merge` - Merge Tailwind classes intelligently
  - `class-variance-authority` - Component variant management

- **Features**:
  - `react-player` - Video player for YouTube/Vimeo
  - `react-countup` - Animated number counting
  - `react-responsive` - Media query hooks

### Development Tools

- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript strict mode
- **Build Tool**: Next.js built-in webpack/bundler

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher ([Download Node.js](https://nodejs.org/))
- **npm** or **yarn** or **pnpm** or **bun** (package manager)
- **Git** (for cloning the repository)
- **Code Editor**: VS Code recommended (with ESLint and Prettier extensions)

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd skincare-salon
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

This will install all required dependencies listed in `package.json`.

### Step 3: Verify Installation

Check that all packages are installed correctly:

```bash
npm list --depth=0
```

---

## 🔐 Environment Variables

This project uses optional environment variables for configuration. Create a `.env.local` file in the root directory (this file is gitignored for security).

### Required Environment Variables

**Note**: Currently, environment variables are optional. The project has fallback values in the code.

### Optional Environment Variables

Create `.env.local` file:

```env
# Site URL (used for metadata and absolute URLs)
# Default fallback: https://skincare-salon-arnob.vercel.app
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Add any other environment variables as needed
# NEXT_PUBLIC_API_URL=https://api.example.com
```

### Environment Variable Setup Instructions

1. **Create the file**: In the root directory, create a new file named `.env.local`

2. **Add variables**: Copy the template above and add your values

3. **Restart dev server**: After adding/changing environment variables, restart your development server:

```bash
npm run dev
```

### Important Notes

- `.env.local` is gitignored and should never be committed
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- Variables without the prefix are server-side only
- Never commit sensitive information (API keys, secrets, etc.)

### Example .env.local File

```env
NEXT_PUBLIC_SITE_URL=https://skincare-salon-arnob.vercel.app
```

---

## 🏃 Running the Project

### Development Mode

Start the development server with hot-reloading:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

Build the project for production:

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### Start Production Server

After building, start the production server:

```bash
npm start
```

### Linting

Check code quality and find potential issues:

```bash
npm run lint
```

---

## 📁 Project Structure

```bash
skincare-salon/
├── app/                          # Next.js App Router directory
│   ├── about/                    # About page route
│   │   └── page.tsx             # About page component
│   ├── contact/                  # Contact page route
│   │   └── page.tsx             # Contact page component
│   ├── treatments/               # Treatments page route
│   │   └── page.tsx             # Treatments page component
│   ├── favicon.ico              # Site favicon
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page component
│
├── components/                   # React components
│   ├── Form.tsx                 # Contact form component
│   ├── Header.tsx               # Main header/navigation
│   ├── InfoItem.tsx             # Reusable info display component
│   ├── ModalVideo.tsx           # Video modal component
│   ├── Socials.tsx              # Social media links component
│   ├── StatsItem.tsx            # Statistics counter component
│   ├── TreatmentsItem.tsx       # Treatment card component
│   ├── Nav/                     # Navigation components
│   │   ├── MobileNav.tsx        # Mobile navigation menu
│   │   └── Nav.tsx              # Desktop navigation
│   ├── Transition/              # Page transition components
│   │   ├── PageTransition.tsx   # Page fade transition
│   │   └── Transition.tsx       # Page overlay transition
│   └── ui/                      # shadcn/ui components
│       └── dialog.tsx           # Dialog/modal component
│
├── context/                     # React Context providers
│   └── CursorContext.tsx        # Custom cursor context
│
├── lib/                         # Utility functions
│   └── utils.ts                 # Helper functions (cn utility)
│
├── public/                      # Static assets
│   └── assets/                  # Images and icons
│       ├── about/
│       ├── contact/
│       ├── home/
│       ├── treatments/
│       └── logo.svg
│
├── utils/                       # Utility modules
│   └── links.ts                 # Navigation links data
│
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── components.json             # shadcn/ui configuration
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # TailwindCSS configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 🧩 Components Overview

### Layout Components

#### `app/layout.tsx`

The root layout component that wraps all pages. It includes:

- Font optimization (Marcellus & Montserrat from Google Fonts)
- SEO metadata configuration
- Global providers (CursorProvider)
- Shared UI elements (Header, Transitions)

**Key Features**:

- Font variables for CSS usage
- Comprehensive SEO metadata
- Persistent layout across route changes

---

#### `components/Header.tsx`

Main navigation header component featuring:

- Top contact bar (phone, email, social links)
- Logo with home link
- Desktop navigation menu
- Mobile hamburger menu
- Slide-out mobile navigation panel

**Props**: None (uses internal state)

**Usage Example**:

```tsx
import Header from "@/components/Header";

// In layout.tsx
<Header />;
```

---

### Page Components

#### `app/page.tsx` (Home)

Landing page with hero section, featuring:

- Animated heading and description
- Call-to-action button
- Video modal trigger
- Hero image with slide-up animation

**Key Animations**:

- Fade-in on page load (2s delay)
- Text slides down from top
- Image slides up from bottom

---

#### `app/about/page.tsx`

About page displaying:

- Company image
- Mission statement
- Animated statistics (CountUp)
- Contact CTA button

**Statistics Shown**:

- 13 Years On Market
- 35k+ Happy Clients
- 97% Natural Ingredients

---

#### `app/treatments/page.tsx`

Services/treatments page with:

- Treatment cards in grid layout
- Four main services:

  - Classic Facial
  - Chemical Peel
  - Eyebrow Waxing/Shaping
  - HydraFacial

---

#### `app/contact/page.tsx`

Contact page featuring:

- Contact information (address, phone, email)
- Contact form
- Two-column responsive layout

---

### Reusable Components

#### `components/Form.tsx`

Contact form component with:

- Full name input
- Email input
- Phone input
- Message textarea
- Submit button

**Note**: Currently a presentational component. Form submission handling would need to be added (e.g., using Next.js Server Actions or API routes).

**Usage Example**:

```tsx
import Form from "@/components/Form";

<Form />;
```

---

#### `components/StatsItem.tsx`

Animated statistics counter component.

**Props**:

```typescript
{
  countNum: number;      // Target number to count to
  countText?: string;    // Optional suffix (%, k+, etc.)
  text: string;          // Description text
}
```

**Usage Example**:

```tsx
import StatsItem from "@/components/StatsItem";

<StatsItem countNum={13} text="Years On Market" />
<StatsItem countNum={35} countText="k+" text="Happy Clients" />
<StatsItem countNum={97} countText="%" text="Natural Ingredients" />
```

**Features**:

- CountUp animation (2.4s delay, 6s duration)
- Optional text suffix for units

---

#### `components/InfoItem.tsx`

Reusable component for displaying information with icons.

**Props**:

```typescript
{
  imgSrc: `/${string}`; // Icon image path (must start with /)
  title: string; // Heading text
  description: React.ReactNode; // Flexible content (text, HTML, components)
}
```

**Usage Example**:

```tsx
import InfoItem from "@/components/InfoItem";

<InfoItem
  imgSrc="/assets/contact/pin.svg"
  title="Address"
  description={
    <p>
      123/45 Elm St, Suite 800
      <br />
      Los Angeles, CA 90012
    </p>
  }
/>;
```

---

#### `components/TreatmentsItem.tsx`

Treatment/service card component.

**Props**:

```typescript
{
  title: string; // Treatment name
  description: string; // Treatment description
}
```

**Usage Example**:

```tsx
import TreatmentsItem from "@/components/TreatmentsItem";

<TreatmentsItem
  title="Classic Facial"
  description="Deep cleansing, exfoliation and hydration for a refreshed complexion"
/>;
```

**Features**:

- Decorative accent shape
- Responsive alignment (centered on mobile, left on desktop)

---

#### `components/ModalVideo.tsx`

Video modal component using shadcn/ui Dialog.

**Features**:

- Play button trigger
- YouTube video player
- Accessible modal dialog

**Usage Example**:

```tsx
import ModalVideo from "@/components/ModalVideo";

<ModalVideo />;
```

**Customization**: Update the YouTube URL in the component to change the video.

---

#### `components/Socials.tsx`

Social media links component.

**Props**:

```typescript
{
  containerStyle: string; // Tailwind CSS classes for styling
}
```

**Usage Example**:

```tsx
import Socials from "@/components/Socials";

<Socials containerStyle="flex gap-6 text-white" />;
```

**Customization**: Update the `socialLinks` array in the component to change links and icons.

---

#### `components/Nav/Nav.tsx`

Desktop navigation component.

**Features**:

- Active link highlighting
- Uses `usePathname()` hook to detect current route

**Usage Example**:

```tsx
import Nav from "@/components/Nav/Nav";

<Nav />;
```

---

#### `components/Nav/MobileNav.tsx`

Mobile slide-out navigation panel.

**Props**:

```typescript
{
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}
```

**Features**:

- Close button
- Vertical link list
- Social media links at bottom
- Active link highlighting

---

### Transition Components

#### `components/Transition/Transition.tsx`

Page transition overlay component that creates a slide-up effect.

**Features**:

- AnimatePresence for exit animations
- Syncs with route changes using pathname key

---

#### `components/Transition/PageTransition.tsx`

Page fade-out wrapper component.

**Props**:

```typescript
{
  children: React.ReactNode;
}
```

**Usage Example**:

```tsx
import PageTransition from "@/components/Transition/PageTransition";

<PageTransition>{children}</PageTransition>;
```

---

### Context Providers

#### `context/CursorContext.tsx`

Custom cursor context provider.

**Features**:

- Spring-animated cursor following mouse
- Size change on hover
- Color change on hover
- Disabled on mobile/tablet (< 1200px)

**Usage Example**:

```tsx
import { useCursor } from "@/context/CursorContext";

const MyComponent = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      Hover me!
    </div>
  );
};
```

**Methods**:

- `mouseEnterHandler()`: Expands cursor and changes color
- `mouseLeaveHandler()`: Resets cursor to default

---

### Utility Components

#### `lib/utils.ts`

Utility functions, primarily the `cn` function.

**cn Function**: Combines `clsx` and `tailwind-merge` for optimal className handling.

**Usage Example**:

```tsx
import { cn } from "@/lib/utils";

// Conditionally apply classes
<div className={cn("base-class", isActive && "active-class", "another-class")} />

// Resolves Tailwind conflicts
<div className={cn("px-2 py-1", "px-4")} />
// Result: "py-1 px-4" (px-2 is overridden by px-4)
```

---

#### `utils/links.ts`

Centralized navigation links data.

**Usage Example**:

```tsx
import { links } from "@/utils/links";

links.map((link) => (
  <Link key={link.href} href={link.href}>
    {link.name}
  </Link>
));
```

---

## 🛣 Routes & Pages

Next.js 13+ App Router uses the file system for routing:

| Route         | File                      | Description                 |
| ------------- | ------------------------- | --------------------------- |
| `/`           | `app/page.tsx`            | Home page with hero section |
| `/about`      | `app/about/page.tsx`      | About page with statistics  |
| `/treatments` | `app/treatments/page.tsx` | Services/treatments page    |
| `/contact`    | `app/contact/page.tsx`    | Contact page with form      |

### Route Structure

```text
app/
├── page.tsx              → /
├── about/
│   └── page.tsx          → /about
├── treatments/
│   └── page.tsx          → /treatments
└── contact/
    └── page.tsx          → /contact
```

### Navigation

Navigation links are centralized in `utils/links.ts`:

```typescript
const links = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/treatments", name: "Treatments" },
  { href: "/contact", name: "Contact" },
];
```

---

## ⚙️ How It Works

### App Router Architecture

Next.js 14 uses the App Router (file-system based routing):

1. **Layouts**: `app/layout.tsx` wraps all pages, providing shared UI
2. **Pages**: Each `page.tsx` file becomes a route
3. **Server & Client Components**: Server components by default, use `"use client"` for interactivity

### Animation System

The project uses **Framer Motion** for animations:

1. **Page Transitions**: Coordinated fade-out/fade-in effects
2. **Component Animations**: Individual elements animate on mount
3. **Staggered Delays**: Animations are timed to create smooth sequences

**Animation Flow**:

- Page loads → Transition overlay slides up (0-0.6s)
- Page content fades in (2s delay)
- Individual elements animate with staggered delays

### Custom Cursor System

The custom cursor is implemented using:

1. **Context Provider**: `CursorContext` wraps the app
2. **Motion Values**: `useMotionValue` tracks mouse position
3. **Spring Physics**: `useSpring` creates smooth following effect
4. **State Management**: Size and color change based on hover state

### Responsive Design

TailwindCSS breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 960px
- `xl`: 1200px

**Mobile-First Approach**: Styles target mobile by default, then adjust for larger screens:

```tsx
<div className="flex-col xl:flex-row">
  {/* Stacked on mobile, row on desktop */}
</div>
```

---

## 💻 Code Examples

### Creating a New Page

1. **Create the route file**:

```tsx
// app/services/page.tsx
"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen"
    >
      <h1>Our Services</h1>
    </motion.section>
  );
}
```

1. **Add to navigation** (optional):

```typescript
// utils/links.ts
const links = [
  // ... existing links
  { href: "/services", name: "Services" },
];
```

---

### Creating a Reusable Component

```tsx
// components/Card.tsx
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image: string;
};

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Image src={image} alt={title} width={300} height={200} />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
```

**Usage**:

```tsx
import Card from "@/components/Card";

<Card
  title="Service Name"
  description="Service description"
  image="/assets/service.jpg"
/>;
```

---

### Using Animations

```tsx
"use client";
import { motion } from "framer-motion";

export default function AnimatedSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Content here
    </motion.div>
  );
}
```

---

### Using the Custom Cursor

```tsx
"use client";
import { useCursor } from "@/context/CursorContext";

export default function InteractiveElement() {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <button
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="btn"
    >
      Hover Me
    </button>
  );
}
```

---

### Adding Form Submission

```tsx
// components/Form.tsx
"use client";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Add your form submission logic here
    // Example: API route or Server Action
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // Handle response
  };

  return <form onSubmit={handleSubmit}>{/* Form fields */}</form>;
}
```

---

## 🎨 Customization Guide

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#473936",  // Change primary color
  },
  secondary: {
    DEFAULT: "#f2dfce",
    100: "#cea39c",
  },
  accent: {
    DEFAULT: "#f19687",  // Change accent color
    100: "#f2d5c5",
  },
}
```

---

### Changing Fonts

1. **Update font imports** in `app/layout.tsx`:

```tsx
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-yourfont",
});
```

1. **Update Tailwind config**:

```typescript
fontFamily: {
  primary: "var(--font-yourfont)",
}
```

---

### Adding New Pages

1. Create new directory in `app/`:

```bash
mkdir app/new-page
```

1. Create `page.tsx`:

```tsx
// app/new-page/page.tsx
export default function NewPage() {
  return <div>New Page Content</div>;
}
```

1. Add to navigation (optional):

```typescript
// utils/links.ts
{ href: "/new-page", name: "New Page" }
```

---

### Modifying Animations

Adjust animation timings in component files:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 2,        // Change delay
    duration: 1,     // Change duration
    ease: "easeInOut" // Change easing
  }}
>
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**:

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

1. **Deploy on Vercel**:

   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

1. **Environment Variables** (if needed):

   - Add in Vercel dashboard → Settings → Environment Variables

---

### Netlify

1. **Build settings**:

   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**:

   - Connect repository on Netlify
   - Configure build settings
   - Deploy

---

### Other Platforms

- **AWS Amplify**: Supports Next.js out of the box
- **DigitalOcean App Platform**: Configure Next.js buildpack
- **Docker**: Create Dockerfile for containerized deployment

---

## 🔑 Keywords

Next.js, React, TypeScript, TailwindCSS, Framer Motion, shadcn/ui, Radix UI, Dialog, Lucide React, React Icons, React Player, React CountUp, Responsive Design, Animation, Modern Web, Static Website, Portfolio, UI/UX, Custom Cursor, Page Transitions, SEO, App Router, Server Components, Client Components, Skincare Salon, Beauty Services, Facial Treatments, HydraFacial

---

## 📚 Conclusion

This project demonstrates modern web development practices using Next.js 14, React, and TypeScript. It showcases:

- **Component-Based Architecture**: Reusable, modular components
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized images, fonts, and animations
- **User Experience**: Smooth animations and interactive elements
- **SEO**: Comprehensive metadata and optimization
- **Responsive Design**: Mobile-first approach
- **Best Practices**: Clean code, proper file structure, and documentation

The codebase is educational and suitable for learning Next.js App Router, Framer Motion animations, and modern React patterns. All components are well-commented and can be easily adapted for other projects.

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊
