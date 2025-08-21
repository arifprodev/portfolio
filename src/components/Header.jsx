"use client";

import Image from "next/image";
import AnimatedButton from "@/utils/AnimationButton";

export default function Header() {
  const month = new Date().toLocaleString("default", { month: "short" });
  const shortYear = new Date().getFullYear().toString().slice(-2);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-10 py-12">
      <div className="mt-24 lg:mt-36 flex flex-col md:flex-row items-stretch gap-8 md:gap-5 text-[#302f2d] justify-between w-full overflow-hidden">
        {/* Left Content - Aligned to top */}
        <div className="max-w-xs lg:max-w-lg flex flex-col justify-start">
          <div className="pt-4">
            <span>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.25"
                viewBox="6 6 12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="m-0 size-4 p-0 md:size-6"
                color="#8C8C73"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
            </span>
          </div>

          <p className="text-lg md:text-xl mt-4">
            Open to job opportunities worldwide. Passionate about building
            polished, intuitive, and thoughtful digital experiences that level
            up brands.
          </p>

          <div className="flex flex-wrap lg:max-w-xs gap-4 mt-6">
            <div>
              <AnimatedButton
                text="CONTACT"
                icon="↗"
                hoverOpacity={0.4}
                hoverTextColor="#e6e4dd"
                textColor="#e6e4dd"
                className="px-6 py-3"
              />
            </div>
            <div className="flex items-end justify-end w-full">
              <AnimatedButton
                text="RESUME"
                icon="↓"
                hoverOpacity={0.4}
                hoverTextColor="#e6e4dd"
                textColor="#302f2d"
                bgColor=""
                className="px-6 py-3 outline outline-[#302f2d] hover:bg-[#302f2d] hover:outline-none hover:text-[#302f2d] transition-colors duration-300"
              />
            </div>
          </div>
        </div>

        {/* Center Image - Vertically centered */}
        <div className="w-fit mx-auto flex items-center justify-center">
          <div className="rounded-md overflow-hidden shadow-lg max-w-xs lg:max-w-sm mx-auto">
            <div className="relative aspect-[3/4] w-full h-96 md:h-72 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e6e4dd] to-[#d1cec4] flex items-center justify-center saturate-0 hover:saturate-100 transition-all duration-500">
                <Image
                  src="/images/arifh.jpg"
                  alt="Arif Hossen"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Aligned to bottom */}
        <div className="w-full md:w-fit flex flex-col justify-end">
          <div className="text-right mt-auto -space-y-2">
            <h1 className="text-xl lg:text-2xl font-medium">
              Available for work
            </h1>
            <p className="text-5xl lg:text-7xl font-semibold">
              {month}'{shortYear}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
