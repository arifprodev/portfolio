import { motion } from "motion/react"
const Works = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="py-12 md:py-14 lg:py-16">
                <motion.h2
                    className="text-[60px] md:text-[68px] lg:text-6xl xl:text-8xl text-wrap font-semibold mb-4 md:mb-8 lg:mb-12 xl:mb-16 -tracking-wider w-full text-[#d1d1c7]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    SELECTED WORKS /
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
                            (PROJECTS)
                        </motion.h3>
                        <motion.div
                            className="text-wrap text-[#a29e9a] max-w-sm text-lg font-medium"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <p>
                                Thought fully crafted digital experiences that blend utility and aesthetics into something functional, memorable, and refined.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Works;