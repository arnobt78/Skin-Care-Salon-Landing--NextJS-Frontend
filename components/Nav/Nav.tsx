/**
 * Nav Component - Desktop Navigation
 *
 * Renders navigation links horizontally
 * Highlights the active page based on current pathname
 * Uses Next.js Link for client-side navigation
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/utils/links";

const Nav = () => {
  // usePathname hook gets the current route pathname
  // Used to highlight active navigation link
  const pathname = usePathname();

  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {/* 
          Map through links array and render each as a Link component
          Active link is highlighted with bottom border (border-b-2 border-accent)
          Conditional className applies active styles when pathname matches link href
        */}
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`${
              pathname === link.href && "border-b-2 border-accent"
            } uppercase`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
