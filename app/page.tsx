/**
 * Home Page Component
 * 
 * This is the main landing page of the skincare salon website
 * Uses Framer Motion for animations and custom cursor context for interactive elements
 * 
 * "use client" directive: Required for client-side features like:
 * - Hooks (useCursor, useState, useEffect, etc.)
 * - Event handlers (onClick, onMouseEnter, etc.)
 * - Browser APIs (window, document, etc.)
 * - Framer Motion animations
 */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

// コンポネント
import ModalVideo from "@/components/ModalVideo";

/**
 * Home Component - Landing page with hero section
 * 
 * Features:
 * - Animated text content with staggered delays
 * - Image that slides up from bottom
 * - Interactive elements that trigger custom cursor effects
 * - Responsive layout (mobile-first with xl: breakpoint)
 */
const Home = () => {
  // Extract cursor handlers from context to enable custom cursor on hover
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      {/* Container with max-width and horizontal centering */}
      <div className="container mx-auto">
        {/* 
          Responsive flex layout: 
          - Column on mobile (flex-col)
          - Row on extra-large screens (xl:flex-row)
        */}
        <div className="flex flex-col xl:flex-row items-center h-full">
          {/* text */}
          {/* 
            Text content area with slide-down animation
            Animates from -100px above (y: -100) to final position (y: 0)
            Delay ensures it animates after the page transition overlay completes
          */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2, duration: 1, ease: "easeInOut" },
            }}
            className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]"
          >
            {/* 
              Main heading with custom cursor interaction
              onMouseEnter/onMouseLeave handlers change cursor appearance on hover
            */}
            <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h1 mb-6"
            >
              Natural Beauty <br /> Starts Here
            </motion.h1>
            {/* Lead paragraph text with cursor interaction */}
            <motion.p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lead max-w-xl mx-auto"
            >
              Tailored skincare solutions for a healthy complexion, offering customized
              care for radiant skin
            </motion.p>
            {/* 
              Button and video modal container
              Responsive: stacked on mobile, side-by-side on desktop
            */}
            <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              {/* CTA button with hover effect */}
              <motion.button
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="btn btn-lg"
              >
                Book an appointment
              </motion.button>
              {/* Video modal trigger with cursor interaction */}
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <ModalVideo />
              </motion.div>
            </div>
          </motion.div>
          {/* image */}
          {/* 
            Image container - flex-1 allows it to take remaining space
            On mobile, this section is hidden to focus on text content
          */}
          <div className="flex-1">
            {/* 
              Hero image with slide-up animation
              Animates from 100% below viewport (bottom: "-100%") to final position
              Uses fixed positioning to keep it at bottom of viewport
              Higher delay (2.4s) ensures it appears after text content
            */}
            <motion.div
              initial={{ opacity: 0, bottom: "-100%" }}
              animate={{
                opacity: 1,
                bottom: 0,
                transition: { delay: 2.4, duration: 1.2, ease: "easeInOut" },
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:flex fixed bottom-0"
            >
              {/* 
                Next.js Image component provides:
                - Automatic image optimization
                - Lazy loading
                - Responsive images
                - Better performance than regular <img> tag
              */}
              <Image
                src="/assets/home/img.png"
                width={864}
                height={650}
                quality={100}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
