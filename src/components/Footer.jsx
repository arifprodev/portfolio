"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full h-auto p-4 text-[#6b645c] text-xl font-medium">
      <div className="grid grid-cols-2 gap-4">
        <div className="colspan-1">
          <h1 className="font-bold text-[#393632] tracking-tight">
            Menu
          </h1>
          <hr className="bg-stone-400 my-2 h-0.5" />
          <ul className="mt-4 space-y-1">
            <li>
              <Link href={`#`}>Home</Link>
            </li>
            <li>
              <Link href={`#about`}>About</Link>
            </li>
            <li>
              <Link href={`#projects`}>Projects</Link>
            </li>
            <li>
              <Link href={`#contact`}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="colspan-1 flex flex-col">
          <div>
            <h1 className="font-bold text-[#393632] tracking-tight">
              Socials
            </h1>
            <hr className="bg-stone-400 my-2 h-0.5 max-w-xs" />
            <ul className="mt-4 space-y-1">
              <li>
                <Link href={`https://www.linkedin.com/in/arifprodev`} target="_blank">LinkedIn</Link>
              </li>
              <li>
                <Link href={`https://x.com/arifprodev`} target="_blank">Twitter</Link>
              </li>
              <li>
                <Link href={`https://github.com/arifprodev`} target="_blank">GitHub</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-24 md:mt-28 lg:mt-32 xl:mt-36 2xl:mt-40">
            <h1 className="font-bold uppercase text-[#393632] tracking-tight">
              Local Time
            </h1>{" "}
            <p className="font-mono font-normal text-sm mt-0.5">{currentTime.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
      <div className="text-xs font-normal mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14">&copy; {new Date().getFullYear() === 2025 ? new Date().getFullYear() : `2025 - ${new Date().getFullYear()}`} Arif H. All rights reserved.</div>
    </section>
  );
};

export default Footer;
