/**
 * TreatmentsItem Component
 *
 * Displays a treatment/service item with decorative icon
 * Used on Treatments page in a grid layout
 *
 * Features:
 * - Decorative accent shape (diamond-like) next to title
 * - Treatment title
 * - Description text
 * - Responsive alignment (centered on mobile, left on desktop)
 *
 * @param title - Treatment/service name
 * @param description - Treatment/service description
 */
type PropsType = {
  title: string;
  description: string;
};

const TreatmentsItem = ({ title, description }: PropsType) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
      {/* Title row with decorative icon */}
      <div className="flex items-center gap-[12px] mb-2">
        {/* 
          Decorative accent shape
          Custom border-radius creates a diamond/rhombus-like shape
          Using Tailwind's arbitrary values for precise radius control
        */}
        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
        <h3 className="text-2xl">{title}</h3>
      </div>
      {/* Description text with left padding to align with title */}
      <p className="pl-6 text-[15px]">{description}</p>
    </div>
  );
};

export default TreatmentsItem;
