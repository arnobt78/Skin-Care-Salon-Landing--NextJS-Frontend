/**
 * CursorContext - Custom Cursor Provider
 *
 * Provides a custom animated cursor that replaces the default browser cursor
 * Features:
 * - Smooth spring-based animation following mouse movement
 * - Size change on hover (expands when hovering interactive elements)
 * - Color change on hover (mix-blend-mode for visual effect)
 * - Disabled on smaller viewports (mobile/tablet)
 * - Context API for easy access throughout the app
 *
 * Note: For Tailwind CSS to work in this file, add the context directory
 * to the content array in tailwind.config.ts
 */
"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

// tailwindCSS効くにはtailwind.config.tsのcontentの方に"./context/**/*.{ts,tsx}"を追加する必要があります

// create context
// TypeScript type definition for context value
type CursorContextType = {
  mouseEnterHandler: () => void; // Function to call when cursor enters interactive element
  mouseLeaveHandler: () => void; // Function to call when cursor leaves interactive element
};
const CursorContext = createContext({} as CursorContextType);

const CursorProvider = ({ children }: { children: React.ReactNode[] }) => {
  // Cursor state - size and background color
  const [cursor, setCursor] = useState({ size: 30, background: "#473936" });
  // Track if cursor is hovering over an interactive element
  const [isHovering, setIsHovering] = useState(false);
  // Detect if viewport is smaller than 1200px (mobile/tablet)
  // Custom cursor is disabled on smaller screens where touch is primary input
  const smallViewportIsActive = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  // useMotionValue creates reactive values that can be animated
  // These track the raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animation configuration for smooth cursor movement
  // Higher stiffness = faster response, lower damping = more bounce
  const springConfig = { damping: 20, stiffness: 290, mass: 0.45 };
  // useSpring creates smooth spring animations from motion values
  // This creates the lag/smooth following effect for the cursor
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Mouse move handler - updates cursor position
  const handleMouseMove = (e: MouseEvent) => {
    if (!smallViewportIsActive) {
      // Set cursor position centered on mouse (subtract half cursor size)
      mouseX.set(e.clientX - cursor.size / 2);
      mouseY.set(e.clientY - cursor.size / 2);
    } else {
      // Hide cursor on small viewports
      setCursor({ size: 0, background: "none" });
    }
  };

  // Set up mouse move event listener
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursor]); // Re-run if cursor size changes

  // Handler called when mouse enters an interactive element
  const mouseEnterHandler = () => {
    setCursor({ size: 90, background: "#00423a" }); // Larger size and different color
    setIsHovering(true);
  };

  // Handler called when mouse leaves an interactive element
  const mouseLeaveHandler = () => {
    setCursor({ size: 30, background: "#473936" }); // Reset to default size and color
    setIsHovering(false);
  };

  return (
    <CursorContext.Provider value={{ mouseEnterHandler, mouseLeaveHandler }}>
      {/* 
        Custom cursor element
        - Fixed positioning with spring-animated coordinates
        - Rounded full creates circular cursor
        - pointer-events-none prevents cursor from blocking interactions
        - mixBlendMode: "difference" creates inversion effect on hover
        - z-[99] ensures cursor appears above all content
      */}
      <motion.div
        className="fixed z-[99] rounded-full pointer-events-none transition-all duration-300"
        style={{
          left: springX, // Spring-animated X position
          top: springY, // Spring-animated Y position
          width: cursor.size, // Dynamic size based on hover state
          height: cursor.size,
          backgroundColor: cursor.background, // Dynamic color based on hover state
          mixBlendMode: isHovering ? "difference" : "normal", // Color inversion effect on hover
          transition: "width 0.2s ease-in-out, height 0.2s ease-in-out", // Smooth size transitions
        }}
      />
      {children}
    </CursorContext.Provider>
  );
};

/**
 * useCursor Hook
 *
 * Custom hook to access cursor context
 * Returns mouseEnterHandler and mouseLeaveHandler functions
 * Use this hook in components that need cursor interaction
 */
const useCursor = () => {
  return useContext(CursorContext);
};

export { CursorProvider, useCursor };
