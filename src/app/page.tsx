'use client';
import Services from '@/components/Services';
import Works from '@/components/Works';
export default function Home() {
  return (
    <div className="px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 rounded-3xl bg-gray-800 text-white space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24 2xl:space-y-28">
      {/* <Service /> */}
      <Services />
      {/* <Works /> */}
      <Works />
    </div>
  );
}