"use client";
import { motion } from "motion/react";

const Services = () => {
  return (
    <div id="services">
      {/* Services Section */}
      <div className="relative z-20 min-h-screen w-full overflow-x-clip">
        <div className="rounded-t-3xl bg-gray-800 text-white">
          {/* Header Section */}
          <div>
            <motion.h2
              className="text-[60px] md:text-7xl lg:text-8xl xl:text-9xl text-wrap font-semibold mb-4 md:mb-8 lg:mb-12 xl:mb-16 -tracking-wider w-full text-[#d1d1c7]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              What <span className="px-1">I</span> Do /
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
              <div className="col-span-1"></div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-12 lg:gap-14 xl:gap-16 col-span-2">
                <motion.h3
                  className="font-medium text-lg text-[#7e766c]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  (SERVICES)
                </motion.h3>
                <motion.div
                  className="text-wrap text-[#a29e9a] max-w-sm text-lg font-medium"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <p>
                    I specialize in building full-stack web applications that
                    are fast, reliable, and user-friendly. With a solid
                    foundation in both frontend and backend technologies, I help
                    bring ideas to life whether it's for a business, a startup,
                    or a product team.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Service Lists */}
          <div className="container mx-auto px-4 pt-8 lg:pt-12">
            <div className="flex flex-col gap-16 bg-gray-800">
              {/* Service 1 */}
              <div className="sticky border-t border-gray-600 bg-gray-800 mb-[135px] top-[20px] md:mb-[222px] md:top-[30px] lg:mb-[200px] lg:top-[25px] xl:mb-[200px] xl:top-[50px] left-0 right-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="md:grid grid-cols-12 flex items-center gap-6 mt-2 md:mt-0 text-3xl md:text-5xl lg:text-6xl font-bold"
                >
                  <motion.span
                    className=" text-[#666] -tracking-wider md:col-span-2"
                    whileHover={{ scale: 1.05, color: "#999" }}
                    transition={{ duration: 0.3 }}
                  >
                    (01)
                  </motion.span>
                  <motion.h3
                    whileHover={{ x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#d1d1c7] tracking-tighter md:col-span-10 md:text-right md:py-4"
                  >
                    Full-Stack Development
                  </motion.h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="md:grid grid-cols-12 min-h-40 pt-4 md:pt-2"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="md:col-span-7 md:col-start-6 md:flex w-full flex-col gap-4 xl:pt-4 text-lg xl:text-xl"
                  >
                    <p className="text-[#999] max-w-md text-sm md:text-base md:font-normal xl:font-medium">
                      I build complete web applications using modern
                      technologies. With hands-on experience in both frontend
                      and backend development, I create functional and
                      responsive solutions that meet user needs.
                    </p>
                    <div className="flex flex-col divide-y divide-gray-500 font-medium text-lg xl:text-xl text-[#777]">
                      <p className="flex gap-3 py-2">
                        <span className="font-mono text-gray-400">01</span>
                        React, Node.js, Express.js
                      </p>
                      <p className="flex gap-3 py-2">
                        <span className="font-mono text-gray-400">02</span>
                        REST APIs, Firebase
                      </p>
                      <p className="flex gap-3 py-2">
                        <span className="font-mono text-gray-400">03</span>
                        Git, GitHub, Postman
                      </p>
                      <p className="flex gap-3 py-2">
                        <span className="font-mono text-gray-400">04</span>
                        JavaScript, TypeScript
                      </p>
                      <p className="flex gap-3 py-2">
                        <span className="font-mono text-gray-400">05</span>
                        Vercel, Netlify deployment
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Service 2 */}
              <div className="sticky border-t border-gray-600 bg-gray-800 mb-[90px] top-[110px] md:mb-[185px] md:top-[112px] lg:mb-[150px] lg:top-[120px] xl:mb-[170px] xl:top-[149px] left-0 right-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="md:grid grid-cols-12 flex items-center gap-6 mt-2 md:mt-0 
text-3xl md:text-5xl lg:text-6xl font-bold "
                >
                  <motion.span
                    className="text-[#666] -tracking-wider md:col-span-2"
                    whileHover={{ scale: 1.05, color: "#999" }}
                    transition={{ duration: 0.3 }}
                  >
                    (02)
                  </motion.span>
                  <motion.h3
                    whileHover={{ x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#d1d1c7] tracking-tighter md:col-span-10 md:text-right md:py-4"
                  >
                    Frontend Development
                  </motion.h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="md:grid grid-cols-12 min-h-40 pt-4 md:pt-2"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="md:col-span-7 md:col-start-6 md:flex w-full flex-col gap-4 xl:pt-4 text-lg xl:text-xl"
                  >
                    <p className="text-[#999] max-w-md text-sm md:text-base md:font-normal xl:font-medium">
                      I create clean, responsive interfaces with a focus on
                      usability. My approach combines technical skills with
                      attention to design principles to deliver intuitive user
                      experiences across all devices.
                    </p>
                    <div className="flex flex-col divide-y divide-gray-500 font-medium text-lg xl:text-xl text-[#777]">
                      <p className="flex gap-3 py-2">
                        <span className="font-mono text-gray-400">01</span>
                        HTML5, CSS3, JavaScript
                      </p>
                      <p className="flex gap-3 py-2">
                        <span className="font-mono text-gray-400">02</span>
                        React, Next.js
                      </p>
                      <p className="flex gap-3 py-2">
                        <span className="font-mono text-gray-400">03</span>
                        TailwindCSS, Responsive Design
                      </p>
                      <p className="flex gap-3 py-2">
                        <span className="font-mono text-gray-400">04</span>
                        Figma to Code
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Service 3 */}
              <div className="sticky border-t border-gray-600 bg-gray-800 top-[150px] md:top-[120px] lg:top-[200px] xl:top-[170px] left-0 right-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="md:grid grid-cols-12 flex items-center gap-6 mt-2 md:mt-0 
text-3xl md:text-5xl lg:text-6xl font-bold "
                >
                  <motion.span
                    className="text-[#666] -tracking-wider md:col-span-2"
                    whileHover={{ scale: 1.05, color: "#999" }}
                    transition={{ duration: 0.3 }}
                  >
                    (03)
                  </motion.span>
                  <motion.h3
                    whileHover={{ x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#d1d1c7] tracking-tighter md:col-span-10 md:text-right md:py-4"
                  >
                    Backend & API Development
                  </motion.h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="md:grid grid-cols-12 min-h-40 pt-4 md:pt-2"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="md:col-span-7 md:col-start-6 md:flex w-full flex-col gap-4 xl:pt-4 text-lg xl:text-xl"
                  >
                    <p className="text-[#999] max-w-md text-sm md:text-base md:font-normal xl:font-medium">
                      I develop server-side functionality and APIs that power
                      web applications. With practical experience in building
                      database-driven solutions, I create efficient backend
                      systems for various use cases.
                    </p>
                    <div className="flex flex-col divide-y divide-gray-500 font-medium text-lg xl:text-xl text-[#777]">
                      <p className="flex gap-3 py-2">
                        <span className="font-mono text-gray-400">01</span>
                        Node.js, Express.js
                      </p>
                      <p className="flex gap-3 py-2">
                        <span className="font-mono text-gray-400">02</span>
                        MongoDB, Databases
                      </p>
                      <p className="flex gap-3 py-2">
                        <span className="font-mono text-gray-400">03</span>
                        REST API development
                      </p>
                      <p className="flex gap-3 py-2">
                        <span className="font-mono text-gray-400">04</span>
                        Authentication implementation
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
