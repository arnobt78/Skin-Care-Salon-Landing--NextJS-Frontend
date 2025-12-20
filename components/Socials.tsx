/**
 * Socials Component
 *
 * Displays social media icon links
 * Reusable component with customizable container styling
 *
 * @param containerStyle - Tailwind CSS classes for styling the container
 */
import Link from "next/link";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

type PropsType = {
  containerStyle: string; // Allows parent to control layout (flex, gap, colors, etc.)
};

// Array of social media links with React Icons
// Note: hrefs currently point to "/" - should be updated with actual social media URLs
const socialLinks = [
  { href: "/", icon: <FaYoutube /> },
  { href: "/", icon: <FaFacebook /> },
  { href: "/", icon: <FaTwitter /> },
  { href: "/", icon: <FaInstagram /> },
];

const Socials = ({ containerStyle }: PropsType) => {
  return (
    <ul className={`${containerStyle}`}>
      {/* 
        Map through social links and render each as a list item
        Using index as key (acceptable here since list is static)
        For dynamic lists, use unique IDs instead
      */}
      {socialLinks.map((social, index) => (
        <li key={index}>
          <Link href={social.href}>{social.icon}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
