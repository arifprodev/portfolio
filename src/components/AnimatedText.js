"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedText = ({ 
  text, 
  delay = 0, 
  className = "", 
  onComplete,
  animateOnLoad = true
}) => {
  const textRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!textRef.current || !animateOnLoad || hasAnimated.current) return;

    const chars = textRef.current.querySelectorAll('.char');
    
    // Set initial state
    gsap.set(chars, { 
      opacity: 0, 
      y: 50,
      rotationX: -90,
      transformOrigin: "center bottom"
    });

    const timer = setTimeout(() => {
      hasAnimated.current = true;
      
      // GSAP timeline for smoother animation
      const tl = gsap.timeline({
        onComplete: () => onComplete && onComplete()
      });
      
      tl.to(chars, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: {
          amount: 0.6,
          from: "start"
        }
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, text, onComplete, animateOnLoad]);

  return (
    <div className={`overflow-hidden ${className}`} ref={textRef}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char inline-block"
          style={{ display: 'inline-block' }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;