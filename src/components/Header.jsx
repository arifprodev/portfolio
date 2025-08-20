"use client";

import Image from "next/image";

export default function Header() {
  const month = new Date().toLocaleString("default", { month: "short" });
  const shortYear = new Date().getFullYear().toString().slice(-2);
  return (
    <>
      <div className="mt-32 px-4 space-y-10 flex items-end text-[#302f2d] justify-between flex-col md:flex-row">
        <div className="w-fit">
          <div>
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

          <div>
            Open to job opportunities worldwide. Passionate about building
            polished, intuitive,and thoughtful digital experiences that level
            mark.
          </div>
          <div>
            <button className="group relative flex items-center justify-center overflow-hidden rounded-full bg-[#302f2d] px-6 py-2 sm:py-3 font-bold uppercase tracking-wide text-white text-sm sm:text-base">
              <span className="absolute inset-0 z-10 overflow-hidden">
                <span className="block h-full w-full translate-y-full rounded-t-[15rem] bg-[#302f2d] btn-transition group-hover:translate-y-0 group-hover:rounded-none"></span>
              </span>

              <span className="relative z-20 overflow-hidden">
                <span className="block after:absolute after:left-0 after:block after:translate-y-0 btn-transition after:content-['CONTACT_↗'] group-hover:after:-translate-y-full">
                  <span className="flex btn-transition group-hover:-translate-y-full">
                    CONTACT ↗
                  </span>
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="w-full rounded-md overflow-hidden px-5 md:px-10">
          <figure className="w-60 h-80">
            <Image
              src="/images/arifh.jpg"
              alt="Arif Hossen"
              width={200}
              height={400}
              className="rounded-md w-full h-full object-cover"
              priority
            />
          </figure>
        </div>

        <div className="w-fit">
          <h1 className="text-end">Available for work</h1>
          <p className="text-6xl font-semibold">
            {/* {month}'{shortYear} */} JUN'25
          </p>
        </div>
      </div>
    </>
  );
}
