"use client"
import Background from '@/components/Background'
import mobile from "@/assets/crew/background-crew-mobile.jpg";
import tablet from "@/assets/crew/background-crew-tablet.jpg";
import desktop from "@/assets-ctu/background/hero-back.jpg";
import MotionDiv from '@/components/MotionDiv'
import React from 'react'
import Slider from '@/components/Slider';

const Reference = () => {
  return (
    <MotionDiv>
      <Background
      mobile={mobile.src}
      tablet={tablet.src}
      desktop={desktop.src}
      />
      <div className="container mx-auto py-20">
        <Slider/>
      </div>
      <main className='relative z-10 flex flex-col-reverse p-6 md:px-24 lg:pt-12 lg:min-h-[80vh] lg:grid lg:grid-cols-2 mt-10'>
        <h3 className='text-white'>Reference</h3>
      <div className="flex flex-col-reverse relative z-10 lg:flex-col lg:justify-between">
      </div>
      </main>
    </MotionDiv>
  )
}

export default Reference