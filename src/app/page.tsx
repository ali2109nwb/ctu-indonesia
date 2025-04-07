"use client";

// import bg from "@/assets-ctu/background/featured-back.jpeg";
import tablet, { default as desktop, default as mobile } from "@/assets-ctu/background/hero-back.jpg";
import Background from "@/components/Background";
import Carousel from '@/components/Carausel';
// import Featured from "@/components/Featured";
import DisplaySections from "@/components/DisplaySections";
import FeaturedSolutions from "@/components/FeaturedSolutions/FeaturedSolutions";
import MobileSection from "@/components/MobileSection";
import MotionDiv from "@/components/MotionDiv";
import NewSection from "@/components/NewSection";
import PartnerSection from "@/components/PartnerSection";
import RecentProjects from "@/components/RecentProjects";
import { SLIDE_LEFT, SLIDE_RIGHT } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Home() {


  return (
    <div>
      <MotionDiv>
        <Background 
          mobile={mobile.src} 
          tablet={tablet.src} 
          desktop={desktop.src} 
          // className="absolute top-0 left-0 w-full h-screen"
        />
        <main className="relative z-10 flex flex-col-reverse p-10 md:px-24 lg:pt-16 mt-32 mb-18">
          <div>
              <motion.div
            variants={SLIDE_LEFT}
          >

            <div className="space-y-2  mb-14">
              
              <h2 className=" text-white text-3xl sm:text-3xl md:text-3xl lg:text-5xl ">Your Device, Our protection.</h2>
              <h2 className=" text-white text-3xl sm:text-3xl md:text-3xl lg:text-5xl">Protecting What Matters</h2>
              <h2 className=" text-white text-3xl sm:text-3xl md:text-3xl lg:text-5xl">Most</h2>
            </div>
            </motion.div>
            <motion.div variants={SLIDE_RIGHT}>
              <Link href={"/news"}>
              <Carousel/>
              </Link>
            </motion.div>
          </div>
        </main>
        {/* <Featured/> */}
        <FeaturedSolutions/>
        <RecentProjects/>
        <MobileSection/>
        <DisplaySections/>
        <PartnerSection/>
        <NewSection/>
      </MotionDiv>
    </div>

  
    

  );
}