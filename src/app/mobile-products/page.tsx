"use client";

import tablet, { default as desktop, default as mobile } from "@/assets-ctu/background/mobile-back.png";
import Background from '@/components/Background';
import MotionDiv from '@/components/MotionDiv';

const mobilePage = () => {
  return (
    <MotionDiv>
      <div className="relative min-h-screen">
        <Background
          mobile={mobile.src}
          tablet={tablet.src}
          desktop={desktop.src}
        />
        <main className="relative z-10 font-clash pt-36 p-6 md:px-24 lg:min-h-[80vh]">
          <h3 className="text-white text-3xl font-bold">Mobile Product</h3>
          <div className="mt-10">
            <p className="text-gray-300">
              Ini adalah halaman Mobile Product.
            </p>
          </div>
        </main>
      </div>
    </MotionDiv>
  );
}

export default mobilePage;

