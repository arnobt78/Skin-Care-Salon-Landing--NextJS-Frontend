/**
 * Header Component
 *
 * Main navigation header that appears on all pages with:
 * - Top bar with contact information (phone, email) and social links
 * - Logo linking to home page
 * - Desktop navigation menu
 * - Mobile hamburger menu trigger
 * - Slide-out mobile navigation panel
 *
 * Uses fixed positioning to stay visible while scrolling
 */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useCursor } from "@/context/CursorContext";
// components
import MobileNav from "./Nav/MobileNav";
import Nav from "./Nav/Nav";
import Socials from "./Socials";

const Header = () => {
  // Get cursor handlers for interactive hover effects
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  // State to control mobile navigation visibility
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      {/* 
        Fixed header that stays at top while scrolling
        z-40 ensures it's above page content but below mobile nav (z-50)
        Background color on mobile, transparent on desktop
      */}
      <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
        {/* top-bar */}
        {/* 
          Top contact bar with background color
          Contains phone, email, and social media links
        */}
        <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
          <div className="container mx-auto h-full">
            <div className="flex items-center justify-between h-full">
              {/* phone & email */}
              {/* 
                Contact information section
                Stacks vertically on mobile, horizontal on desktop
                Responsive layout with gap adjustments
              */}
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal"
              >
                {/* phone */}
                <div className="flex items-center gap-2 text-white">
                  <FaPhoneAlt />
                  <span>+99(0) 993 333 667</span>
                </div>
                {/* email */}
                <div className="flex items-center gap-2 text-white">
                  <IoMdMail />
                  <span>info@youremail.com</span>
                </div>
              </motion.div>
              {/* socials */}
              {/* Social media icons - hidden on mobile, visible on desktop */}
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="hidden xl:block"
              >
                <Socials containerStyle="flex gap-6 text-white" />
              </motion.div>
            </div>
          </div>
        </div>
        {/* 
          Main header section with logo and navigation
          Contains logo, mobile menu button, and desktop navigation
        */}
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* logo */}
          {/* Logo linking to home page - priority loading for performance */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                width={120}
                height={44}
                priority
                alt=""
              />
            </Link>
          </motion.div>
          {/* mobile nav trigger */}
          {/* 
            Hamburger menu button for mobile
            Toggles mobile navigation panel visibility
            Only visible on mobile/tablet (xl:hidden)
          */}
          <div
            className="xl:hidden cursor-pointer"
            onClick={() => setMobileNav(!mobileNav)}
          >
            <AiOutlineMenu className="text-3xl text-primary" />
          </div>
          {/* desktop nav */}
          {/* Desktop navigation menu - hidden on mobile, visible on desktop */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="hidden xl:block"
          >
            <Nav />
          </motion.div>
        </div>
      </header>
      {/* mobile nav */}
      {/* 
        Mobile navigation panel
        Slides in from right when mobileNav state is true
        Uses Framer Motion for smooth slide animation
        Fixed positioning covers entire viewport height
        z-50 ensures it appears above header (z-40)
      */}
      <motion.div
        initial={{ right: "-100%" }}
        animate={{ right: mobileNav ? 0 : "-100%" }}
        className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50"
      >
        {/* Pass setMobileNav function to allow closing from inside MobileNav component */}
        <MobileNav setMobileNav={setMobileNav} />
      </motion.div>
    </>
  );
};

export default Header;
