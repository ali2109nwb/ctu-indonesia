"use client";

import tablet, { default as desktop, default as mobile } from "@/assets-ctu/background/about-back.png";
import Background from '@/components/Background';
import MotionDiv from '@/components/MotionDiv';

const About = () => {
  return (
    <MotionDiv>
      <div className="relative min-h-screen">
        <Background
          mobile={mobile.src}
          tablet={tablet.src}
          desktop={desktop.src}
        />
        <main className="relative z-10 pt-36 p-6 md:px-24 lg:min-h-[80vh] text-left">
          <h3 className="text-white text-3xl font-bold font-clash ">ABOUT CTU</h3>
          <div className="mt-10 max-w-2xl text-white">
            <p className="text-gray-300 text-lg md:text-lg leading-relaxed  font-clash ">
              PT Cipta Teknik Utama is a full-service IT and Safety Contractor providing supply, design, and built services for our clients. We commit to building our client's vision by providing excellent quality and services that exceed your expectations.
            </p>
            <p className="text-gray-300 text-lg md:text-lg leading-relaxed mt-4  font-clash ">
              We also engage with reliable partners and principals who will give valuable insights and services. Our experts and engineers, who have more than 10 years of experience, have built a good record of integrity, expertise, and customer satisfaction in South East Asia (Indonesia).
            </p>
          </div>
        </main>
      </div>
    </MotionDiv>
  );
}

export default About;
