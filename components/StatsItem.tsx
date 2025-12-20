/**
 * StatsItem Component
 *
 * Displays an animated counter statistic
 * Used on About page to show key metrics
 *
 * Features:
 * - CountUp animation numbers increment from 0 to target value
 * - Optional countText for units (%, k+, etc.)
 * - Descriptive text below the number
 *
 * @param countNum - The target number to count up to
 * @param countText - Optional text to display after the number (e.g., "k+", "%")
 * @param text - Description text displayed below the number
 */
import CountUp from "react-countup";

type PropsType = {
  countNum: number;
  countText?: string; // Optional suffix (%, k+, etc.)
  text: string;
};

const StatsItem = ({ countNum, countText, text }: PropsType) => {
  return (
    <div className="text-center font-primary">
      {/* 
        Number display with CountUp animation
        delay: 2.4s syncs with page transition timing
        duration: 6s creates smooth counting animation
      */}
      <div className="text-[40px] text-accent mb-4">
        <CountUp end={countNum} delay={2.4} duration={6} />
        {/* Optional text suffix (e.g., "k+" for thousands, "%" for percentage) */}
        <span>{countText}</span>
      </div>
      {/* Description text */}
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default StatsItem;
