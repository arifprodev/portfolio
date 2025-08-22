"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  text: string;
  bgColor?: string;
  hoverBgColor?: string;
  hoverOpacity?: number;
  textColor?: string;
  hoverTextColor?: string;
  className?: string;
  icon?: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
  disabled?: boolean;
}

export default function AnimatedButton({
  text,
  bgColor = "#302f2d",
  hoverBgColor = "#fcedc0",
  hoverOpacity = 0.8,
  textColor = "#ffffff",
  hoverTextColor = "#302f2d",
  className = "",
  icon,
  variant = "default",
  size = "default",
  onClick,
  disabled = false
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
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      asChild
      className={cn("relative overflow-hidden font-bold uppercase tracking-wide", className)}
    >
      <motion.button
        style={{ backgroundColor: bgColor }}
        whileHover="hover"
        initial="initial"
      >
        {/* Background fill animation - waterfall from bottom middle */}
        <motion.span
          className="absolute z-0"
          style={{
            backgroundColor: hexToRgba(hoverBgColor, hoverOpacity),
            transformOrigin: "bottom center",
            left: "50%",
            bottom: "-10%", // Extended bottom part further
            x: "-50%",
            y: "0%",
            borderRadius: "50px 50px 50% 50%" // Left and right sides rounded
          }}
          variants={{
            initial: {
              width: "0%",
              height: "0%"
            },
            hover: {
              width: "140%", // Increased width to cover all corners
              height: "160%", // Increased height to ensure full coverage
              transition: {
                duration: 1.2, // Much slower animation
                ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for waterfall effect
                times: [0, 1] // Ensures smooth progression
              },
            },
          }}
        />
                        
        {/* Text container with overflow hidden */}
        <span className="relative z-10 flex items-center overflow-hidden">
          {/* Original text */}
          <motion.span
            className="flex items-center gap-2"
            style={{ color: textColor }}
            variants={{
              initial: { y: 0 },
              hover: {
                y: -30,
                transition: { duration: 0.3, ease: "easeOut", delay: 0.1 }
              },
            }}
          >
            {text} {icon}
          </motion.span>
                            
          {/* Swipe-in text */}
          <motion.span
            className="absolute flex items-center gap-2"
            style={{ color: hoverTextColor }}
            variants={{
              initial: { y: 30 },
              hover: {
                y: 0,
                transition: { duration: 0.4, ease: "easeOut", delay: 0.2 }
              },
            }}
          >
            {text} {icon}
          </motion.span>
        </span>
      </motion.button>
    </Button>
  );
}