import AnimatedButton from "@/utils/AnimationButton";

export default function Home() {
  return (
    <div className=" px-4 md:px-6 lg:px-8 py-12 flex items-center justify-center min-h-screen bg-black space-y-5 md:space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-300">
          Explore my projects and skills
        </p>
      </div>
      <AnimatedButton
        text="Get Started"
        bgColor="#302f2d"
        hoverBgColor="#fcedc0"
        hoverOpacity={0.8}
        textColor="#ffffff"
        hoverTextColor="#302f2d"
        className="px-6 py-3 rounded-full"
        variant="default"
        size="lg"
      />
    </div>
  );
}