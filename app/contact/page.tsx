/**
 * Contact Page Component
 * 
 * Two-column layout displaying:
 * - Left: Contact information (address, phone, email) with icons
 * - Right: Contact form for users to send messages
 */
"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Form from "@/components/Form";
import Image from "next/image";
import InfoItem from "@/components/InfoItem";

const Contact = () => {
  // Get cursor handlers for interactive hover effects
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex  items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        {/* 
          Responsive layout: 
          - Stacks vertically on mobile with gap
          - Side-by-side on desktop (xl:flex-row)
        */}
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          {/* text */}
          {/* 
            Contact information section
            Animates from left (x: -60) to center on load
            flex-1 allows it to take equal space with form on desktop
          */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex-1 flex flex-col justify-center"
          >
            <h3 className="h3 mb-3 text-center xl:text-left">Contact Info</h3>
            {/* items */}
            {/* 
              Contact information items (address, phone, email)
              Centered on mobile, left-aligned on desktop
            */}
            <div className="flex flex-col items-center xl:items-start gap-12">
              {/* item */}
              {/* 
                InfoItem components display contact information with icons
                description prop accepts ReactNode, allowing custom HTML structure
              */}
              <InfoItem
                imgSrc="/assets/contact/pin.svg"
                title="Address"
                description={
                  <p className="leading-relaxed">
                    123/45 Elm St, Suite 800 <br />
                    Los Angels, CA 90012
                  </p>
                }
              />
              {/* Phone information with multiple lines */}
              <InfoItem
                imgSrc="/assets/contact/phone.svg"
                title="Phone number"
                description={
                  <div className="pt-1 flex-1">
                    <p>Phone: +99(0) 999 333 667</p>
                    <p>Fax: +99(0) 999 322 678</p>
                  </div>
                }
              />
              {/* Email addresses displayed in a column */}
              <InfoItem
                imgSrc="/assets/contact/email.svg"
                title="Email address"
                description={
                  <div className="flex flex-col gap-1">
                    <p>info@youremail.com</p>
                    <p>support@youremail.com</p>
                  </div>
                }
              />
            </div>
          </motion.div>
          {/* form */}
          {/* 
            Contact form section
            Animates from right (x: 60) to center on load
            Slightly delayed (2.4s) to create staggered effect
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
            className="flex-1"
          >
            {/* Form container with background color and padding */}
            <div className="bg-[#f0cfbc] w-full max-w-[580px] gap-4 p-10 mx-auto xl:mx-0">
              <h3 className="h3 mb-8 text-center">Get in touch</h3>
              {/* Contact form component */}
              <Form />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
