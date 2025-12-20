/**
 * InfoItem Component
 *
 * Reusable component for displaying information with an icon
 * Used on contact page for address, phone, and email sections
 *
 * @param imgSrc - Path to icon image (must start with /)
 * @param title - Heading text for the information item
 * @param description - ReactNode allows flexible content (text, HTML, components)
 */
import Image from "next/image";

type PropsType = {
  imgSrc: `/${string}`; // Template literal type ensures path starts with /
  title: string;
  description: React.ReactNode; // Allows any React content (text, JSX, components)
};

const InfoItem = ({ imgSrc, title, description }: PropsType) => {
  return (
    <div className="flex items-start gap-4">
      {/* icon */}
      {/* 
        Icon container - fixed size with Next.js Image using fill prop
        fill prop makes image fill its parent container (36x36px)
      */}
      <div className="relative w-[36px] h-[36px]">
        <Image src={imgSrc} fill alt="" />
      </div>
      {/* Content area with title and flexible description */}
      <div className="pt-1 flex-1">
        <h4 className="h4 mb-2">{title}</h4>
        {/* description accepts ReactNode, allowing custom HTML structure */}
        {description}
      </div>
    </div>
  );
};

export default InfoItem;
