"use client";

import { motion } from "motion/react";

interface AnimatedButtonProps {
  text: string;
  bgColor?: string;
  hoverBgColor?: string;
  hoverOpacity?: number;
  textColor?: string;
  hoverTextColor?: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function AnimatedButton({
  text,
  bgColor = "#302f2d",
  hoverBgColor = "#fcedc0",
  hoverOpacity = 0.8,
  textColor = "#ffffff",
  hoverTextColor = "#302f2d",
  className = "",
  icon
}: AnimatedButtonProps) {
  
  // Function to convert hex to rgba with opacity
  const hexToRgba = (hex: string, alpha: number) => {
    // Handle shorthand hex (like #fff)
    const fullHex = hex.length === 4 
      ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
      : hex;
    
    const r = parseInt(fullHex.slice(1, 3), 16);
    const g = parseInt(fullHex.slice(3, 5), 16);
    const b = parseInt(fullHex.slice(5, 7), 16);
    
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <motion.button
      className={`group relative flex items-center justify-center overflow-hidden rounded-full px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 font-bold uppercase tracking-wide text-xs md:text-sm lg:text-lg ${className}`}
      style={{ backgroundColor: bgColor }}
      whileHover="hover"
      initial="initial"
    >
      {/* Background fill animation with opacity */}
      <motion.span
        className="absolute inset-0 z-0"
        style={{ backgroundColor: hexToRgba(hoverBgColor, hoverOpacity) }}
        variants={{
          initial: { y: "100%", borderRadius: "9999px" },
          hover: {
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          },
        }}
      />

      {/* Text container with overflow hidden */}
      <span className="relative z-10 flex items-center overflow-hidden">
        {/* Original text */}
        <motion.span
          className="flex items-center"
          style={{ color: textColor }}
          variants={{
            initial: { y: 0 },
            hover: { 
              y: -30,
              transition: { duration: 0.3, ease: "easeOut" }
            },
          }}
        >
          {text} {icon}
        </motion.span>
        
        {/* Swipe-in text */}
        <motion.span
          className="absolute flex items-center"
          style={{ color: hoverTextColor }}
          variants={{
            initial: { y: 30 },
            hover: { 
              y: 0,
              transition: { duration: 0.3, ease: "easeOut", delay: 0.05 }
            },
          }}
        >
          {text} {icon}
        </motion.span>
      </span>
    </motion.button>
  );
}