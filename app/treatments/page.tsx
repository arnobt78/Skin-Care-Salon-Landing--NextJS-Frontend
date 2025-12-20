/**
 * Treatments Page Component
 * 
 * Displays available skincare treatments in a grid layout:
 * - Classic Facial
 * - Chemical Peel
 * - Eyebrow Waxing/Shaping
 * - HydraFacial
 * 
 * Includes treatment image and call-to-action button
 */
"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Image from "next/image";
import TreatmentsItem from "@/components/TreatmentsItem";

const Treatments = () => {
  // Get cursor handlers for interactive hover effects
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex  items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex items-center justify-between">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto"
          >
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Indulge in our Luxurious Treatments
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Tailored skincare solutions for a healthy complexion, offering customized
              care for radiant skin
            </p>
            {/* items */}
            {/* 
              Treatments grid layout:
              - 1 column on mobile (grid-cols-1)
              - 2 columns on medium screens and up (md:grid-cols-2)
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
              {/* item */}
              {/* Each TreatmentsItem displays a treatment name and description */}
              <TreatmentsItem
                title="Classic Facial"
                description="Deep cleansing, exfoliation and hydration for a refreshed complexion"
              />
              <TreatmentsItem
                title="Chemical Peel"
                description="Exfoliating treatment to improve skin texture and tone"
              />
              <TreatmentsItem
                title="Eyebrow Waxing/Shaping"
                description="Deep cleansing, exfoliation and hydration for a refreshed complexion"
              />
              <TreatmentsItem
                title="HydraFacial"
                description="Multi-step treatment for instant hydration and glow"
              />
            </div>
            {/* btn */}
            {/* Call-to-action button */}
            <button className="btn mx-auto xl:mx-0">Discover more</button>
          </motion.div>
          {/* image */}
          {/* 
            Treatment image - hidden on mobile, visible on desktop
            Animates from right (x: 60) to center on load
          */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="hidden xl:flex w-[384px] h-[534px] relative"
          >
            {/* 
              Next.js Image with fill prop for responsive sizing
              Hidden on mobile (hidden xl:flex) to prioritize content
            */}
            <Image
              src="/assets/treatments/img.jpg"
              fill
              alt=""
              quality={100}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Treatments;
