/**
 * Transition Component
 *
 * Creates a page transition overlay effect
 * Slides up from bottom on route changes
 *
 * Animation stages:
 * - initial: Overlay covers the screen (top: 0%)
 * - animate: Overlay slides up and out of view (top: -100%)
 * - exit: Overlay slides down from top, covering screen again (top: 100% -> 0%)
 *
 * This creates a smooth page transition effect when navigating between routes
 */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// variants
// Animation configuration object for Framer Motion variants prop
const animation = {
  initial: {
    top: "0%", // Starts covering the entire screen
  },
  animate: {
    top: "-100%", // Moves completely above the viewport
  },
  exit: {
    top: ["100%", "0%"], // Slides down from bottom to cover screen again
  },
};

const Transition = () => {
  // usePathname provides the current route, used as key for AnimatePresence
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {/* 
          Transition overlay container
          pointer-events-none allows clicks to pass through
          z-50 ensures it appears above page content
          Fixed positioning covers entire viewport
        */}
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50">
          {/* 
            Animated overlay div
            Uses variants for cleaner animation definition
            bg-[#e2cfdb] matches the site's color scheme
          */}
          <motion.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.6, // Animation duration in seconds
              ease: "easeInOut", // Smooth acceleration and deceleration
              delay: 0.2, // Slight delay before animation starts
            }}
            className="w-full h-full bg-[#e2cfdb] relative"
          />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Transition;
