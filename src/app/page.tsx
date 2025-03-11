"use client";

import Background from "@/components/Background";
import MotionDiv from "@/components/MotionDiv"
import { motion } from "framer-motion";
import mobile from "@/assets/home/background-home-mobile.jpg";
import tablet from "@/assets/home/background-home-tablet.jpg";
import desktop from "@/assets-ctu/background/hero-back.jpg";
import { SCALE_UP, SLIDE_LEFT } from "@/lib/data";
import { ArrowLongRightIcon} from '@heroicons/react/24/solid'
import { NavbarLink } from "flowbite-react";
import Link from "next/link";

export default function Home() {


  return (
    <MotionDiv>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />
      <main className="relative z-10 flex flex-col-reverse p-10 md:px-24 lg:pt-16 mt-16">
        <motion.div
          variants={SLIDE_LEFT}
        >
   
        
          <div className="space-y-2  mb-8">
            <h2 className=" text-white text-4xl  lg:text-7xl ">Your Device, Our protection.</h2>
            <h2 className=" text-white text-4xl  lg:text-7xl">Protecting What Matters</h2>
            <h2 className=" text-white text-4xl  lg:text-7xl">Most</h2>
          </div>
            <div className="relative z-10">
              <Link href="/news" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
              font-medium rounded-xl text-2xl px-10 py-3 me-2 opacity-100 
              dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                More Info
              </Link>
            </div>
          <div className="z-10 lg:grid lg:grid-cols-2 gap-2 hover:bg-slate-500 hover:bg-opacity-60 hover:backdrop-blur-xl text-white bg-white backdrop-blur-xl w-full p-4 bg-opacity-30 rounded-xl ">
            <div className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi modi fugit optio itaque ducimus consequatur accusamus repellendus qui. Sed quod ducimus perferendis expedita! Adipisci impedit libero repudiandae laudantium at.
              <div className="bar bg-white w-1"></div>
            </div>
            <div className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi modi fugit optio itaque ducimus consequatur accusamus repellendus qui. Sed quod ducimus perferendis expedita! Adipisci impedit libero repudiandae laudantium at.
            </div>
  

          </div>
          </motion.div>
      </main>
    </MotionDiv>
  );
}

