"use client";

import tablet, { default as desktop, default as mobile } from "@/assets-ctu/background/hero-back.jpg";
import bg from "@/assets-ctu/background/featured-back.jpeg";
import Background from "@/components/Background";
import MotionDiv from "@/components/MotionDiv";
import { SLIDE_LEFT, SLIDE_RIGHT } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Carousel from '@/components/Carausel'


export default function Home() {


  return (
    <div>
      <MotionDiv>
      <Background mobile={mobile.src} tablet={tablet.src} desktop={desktop.src} />
      <main className="relative z-10 flex flex-col-reverse p-10 md:px-24 lg:pt-16 mt-16 mb-40">
        <div>
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
          </motion.div>
          <motion.div variants={SLIDE_RIGHT}>
            <Link href={"/news"}>
            <Carousel/>
            </Link>
          </motion.div>
        </div>
      </main>
      
    </MotionDiv>
    <div className="relative z-0">
      <img src={bg.src} className="object-cover" alt="" />
    
      <div className="absolute z-10 top-0 left-0 ml-8 mt-20 ">
         <div className="absolute inset-0 bg-black rounded-xl py-80 hover:bg-opacity-40 hover:bg-blue-500 backdrop-blur-sm opacity-40 z-0  px-[750px] "></div>
         <div className="relative pl-5 z-10 mt-5 grid grid-cols-2  ">
          <div className="">
            <h3 className="text-2xl font-bold">Featured Solution</h3>
            <h6> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem error eius modi incidunt suscipit eum doloribus, quibusdam explicabo nostrum dignissimos nihil omnis ex quae iusto assumenda quo totam quis sequi?</h6>
          </div>
          <div className="grid grid-cols-11 gap-4 ">
            <div className=" mt-5 col-span-5">
              <div className="bg-white rounded-lg mb-10 flex flex-col">
                <span className="font-semibold mx-5">Lorem ipsum dolor sit amet</span>
                <span className="mx-5">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="bg-white px-20 py-36 rounded-lg"></div>
            </div>
            <div></div>
            <div className=" mt-5 col-span-5">
              <div className="bg-white px-20 py-32 rounded-lg mb-10 -mt-20"></div>
              <div className="bg-white px-20 py-32 rounded-lg"></div>
            </div>
          </div>
         </div>
         </div> 
      
      </div>
    </div>

  
    

  );
}

