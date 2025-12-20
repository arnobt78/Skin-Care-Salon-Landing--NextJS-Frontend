/**
 * About Page Component
 * 
 * Displays information about the skincare salon including:
 * - Company image
 * - Mission statement
 * - Statistics (Years on Market, Happy Clients, Natural Ingredients)
 * - Call-to-action button
 */
"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Image from "next/image";
import StatsItem from "@/components/StatsItem";

const About = () => {
  // Get cursor handlers from context for interactive hover effects
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      {/* Container with responsive padding - accounts for fixed header on mobile */}
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        {/* 
          Responsive layout: 
          - Stacks vertically on mobile (flex-col)
          - Side-by-side on desktop (xl:flex-row)
          - justify-between creates space between image and text on desktop
        */}
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
          {/* image */}
          {/* 
            Image container with slide-in animation from left
            Uses Next.js Image with fill prop for responsive sizing
            priority flag ensures image loads immediately (above the fold)
          */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8 xl:mb-0"
          >
            {/* 
              Next.js Image with fill prop:
              - fill: Makes image fill its parent container
              - object-contain: Ensures image maintains aspect ratio within container
              - priority: Preloads image for better performance (LCP optimization)
            */}
            <Image
              src="/assets/about/img.jpg"
              fill
              alt=""
              quality={100}
              priority
              className="object-contain"
            />
          </motion.div>
          {/* text */}
          {/* 
            Text content with slide-in animation from right
            Slightly delayed (2.4s) to create staggered effect after image
          */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0"
          >
            {/* Main heading - responsive text alignment */}
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Committed to Your Skin&apos;s Health and Beauty
            </h2>
            {/* Description text */}
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Tailored skincare solutions for a healthy complexion, offering customized
              care for radiant skin
            </p>
            {/* items */}
            {/* 
              Statistics grid - 3 columns displaying key metrics
              Each StatsItem component uses CountUp for animated number counting
            */}
            <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
              <div>
                <StatsItem countNum={13} text="Years On Market" />
              </div>
              <div>
                {/* countText prop allows adding unit (k+ for thousands) */}
                <StatsItem countNum={35} countText="k+" text="Happy Clients" />
              </div>
              <div>
                {/* countText prop adds percentage symbol */}
                <StatsItem countNum={97} countText="%" text="Natural Ingredients" />
              </div>
            </div>
            {/* btn */}
            {/* Call-to-action button - centered on mobile, left-aligned on desktop */}
            <button className="btn mx-auto xl:mx-0">Contact Us</button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
