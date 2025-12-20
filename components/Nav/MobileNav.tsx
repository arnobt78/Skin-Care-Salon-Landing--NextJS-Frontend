/**
 * MobileNav Component - Mobile Navigation Panel
 *
 * Slide-out navigation panel for mobile devices
 * Features:
 * - Close button (X icon) to dismiss panel
 * - Vertical list of navigation links
 * - Active link highlighting
 * - Social media links at bottom
 *
 * @param setMobileNav - Function to close the mobile navigation panel
 */
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";
import { links } from "@/utils/links";
import Socials from "../Socials";

type PropsType = {
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>; // Function to update mobile nav visibility state
};

const MobileNav = ({ setMobileNav }: PropsType) => {
  // Get current pathname to highlight active link
  const pathname = usePathname();

  return (
    <nav className="relative flex flex-col justify-between h-full p-8">
      {/* Close button - clicking sets mobileNav to false, closing the panel */}
      <div
        className="cursor-pointer text-accent"
        onClick={() => setMobileNav(false)}
      >
        <IoCloseOutline className="text-4xl" />
      </div>
      {/* 
        Navigation links list
        Vertical layout with large gap between items
        Active link highlighted with bottom border
        max-w-max mx-auto centers each link horizontally
      */}
      <ul className="flex flex-col gap-10 text-white text-xl">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`${
              pathname === link.href && "border-b-2 border-accent-100"
            } uppercase max-w-max mx-auto`}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      {/* Social media links at bottom of navigation panel */}
      <Socials containerStyle="text-white text-lg flex gap-6 justify-center" />
    </nav>
  );
};

export default MobileNav;
