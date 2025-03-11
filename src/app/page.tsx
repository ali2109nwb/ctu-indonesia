"use client";

import tablet, { default as desktop, default as mobile } from "@/assets-ctu/background/hero-back.jpg";
import Background from "@/components/Background";
import MotionDiv from "@/components/MotionDiv";
import { SLIDE_LEFT } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Carousel from '@/components/Carausel'


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
   
        
          <div className="space-y-2  mb-20">
            
            <h2 className=" text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl ">Your Device, Our protection.</h2>
            <h2 className=" text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl">Protecting What Matters</h2>
            <h2 className=" text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl">Most</h2>
          </div>
            <div className="relative z-10 mb-2">
              <Link href="/news" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
              font-medium rounded-xl text-2xl px-10 py-3 me-2 opacity-100 
              dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                More News
              </Link>
            </div>
              
            <div className="z-10 lg:grid lg:grid-cols-2 gap-2 hover:bg-slate-500 hover:bg-opacity-60 hover:backdrop-blur-xl text-white bg-black backdrop-blur-x1 w-full p-4 bg-opacity-70 rounded-xl ">
            <div className="text-xl" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat sed nam quasi magnam ad eum, labore nisi modi tenetur necessitatibus pariatur quo saepe maxime magni dolore rerum voluptatum totam!
              <div className="bar bg-white w-1"></div>
            </div>
            <div className="text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut odit molestiae, ipsa doloremque deserunt natus dicta fuga architecto mollitia dignissimos molestias impedit, fugit voluptatum dolores distinctio temporibus exercitationem ut. Eaque!
            </div>
          </div>
        <Carousel/>
          </motion.div>
      </main>
    </MotionDiv>
  );
}

