/**
 * PageTransition Component
 *
 * Wraps page content to create fade-out effect during route transitions
 * Creates a white overlay that fades in, covering the page content
 * This works in conjunction with Transition component for smooth page changes
 *
 * @param children - Page content to wrap and transition
 */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  // Get current pathname to trigger transitions on route changes
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {/* 
        Fade-out overlay that covers page content during transition
        Starts at opacity 1 (invisible white), fades to opacity 0 (visible white overlay)
        delay: 1s syncs with page transition timing
        pointer-events-none allows clicks to pass through
      */}
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 1, ease: "easeIn" },
        }}
        className="w-screen h-screen fixed z-40 bg-white top-0 pointer-events-none"
      />
      {/* Page content - wrapped for transition effects */}
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
