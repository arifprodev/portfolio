"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Loading = ({ onComplete }) => {
  const containerRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const titleRef = useRef(null);
  const dotsRef = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Loading useEffect triggered");
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set([firstNameRef.current, lastNameRef.current], {
        opacity: 0,
        y: 60,
      });
      gsap.set(titleRef.current, { opacity: 0, y: 20 });
      gsap.set(dotsRef.current, { opacity: 0, scale: 0.5 });

      const masterTl = gsap.timeline({
        onComplete: () => {
          console.log("Loading animation completed");
          setIsLoading(false);
          if (onComplete) onComplete();
        },
      });

      masterTl.to(firstNameRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "back.out(1.4)",
      });

      masterTl.to(
        lastNameRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "back.out(1.4)",
        },
        "-=0.7"
      );

      masterTl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

      masterTl.to(
        dotsRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.3"
      );

      masterTl.to({}, { duration: 0.8 });

      masterTl.to(
        [firstNameRef.current, lastNameRef.current, titleRef.current, dotsRef.current],
        {
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.inOut",
        }
      );

      masterTl.to(
        containerRef.current,
        {
          y: "-100%",
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.4"
      );
    }, containerRef);

    return () => {
      console.log("Cleaning up Loading GSAP context");
      ctx.revert();
    };
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-br from-gray-950 to-black z-50 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-700/10 to-purple-700/10"
            style={{
              width: `${80 + i * 70}px`,
              height: `${80 + i * 70}px`,
              top: `${15 + i * 15}%`,
              left: `${i * 15}%`,
              animation: `pulse ${4 + i}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <div
            key={i + 4}
            className="absolute rounded-full bg-gradient-to-r from-blue-800/10 to-purple-800/10"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              bottom: `${10 + i * 10}%`,
              right: `${i * 18}%`,
              animation: `pulse ${5 + i}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.5 + 0.7}s`,
            }}
          />
        ))}
        <style jsx>{`
          @keyframes pulse {
            0% {
              transform: scale(1) rotate(0deg);
              opacity: 0.1;
            }
            50% {
              transform: scale(1.05) rotate(5deg);
              opacity: 0.15;
            }
            100% {
              transform: scale(1.1) rotate(10deg);
              opacity: 0.2;
            }
          }
        `}</style>
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="overflow-hidden mb-1">
          <h1
            ref={firstNameRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white -tracking-widest"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              background: "linear-gradient(to right, #ffffff, #e5e7eb)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 0.9,
            }}
          >
            ARIF
          </h1>
        </div>

        <div className="overflow-hidden -mt-2">
          <h2
            ref={lastNameRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white -tracking-widest"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              background: "linear-gradient(to right, #e5e7eb, #d1d5db)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}
          >
            HOSSEN
          </h2>
        </div>

        <div className="overflow-hidden mt-3 md:mt-4">
          <p
            ref={titleRef}
            className="text-lg md:text-xl text-gray-300 font-medium tracking-wider"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            WEB DEVELOPER & UI/UX DESIGNER
          </p>
        </div>

        <div className="flex justify-center space-x-2 mt-6 md:mt-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (dotsRef.current[i] = el)}
              className="w-2 h-2 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full opacity-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;