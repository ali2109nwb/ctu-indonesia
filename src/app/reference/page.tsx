"use client"
import Background from '@/components/Background'
import mobile from "@/assets/crew/background-crew-mobile.jpg";
import tablet from "@/assets/crew/background-crew-tablet.jpg";
import desktop from "@/assets/crew/background-crew-desktop.jpg";
import MotionDiv from '@/components/MotionDiv'
import React from 'react'

const Reference = () => {
  return (
    <MotionDiv>
      <Background
      mobile={mobile.src}
      tablet={tablet.src}
      desktop={desktop.src}
      />
      <main className='elative z-10 flex flex-col-reverse p-6 md:px-24 lg:pt-12 lg:min-h-[80vh] lg:grid lg:grid-cols-2'>
      <div className="flex flex-col-reverse relative z-10 lg:flex-col lg:justify-between">
      <div className="w-fit mx-auto mb-8 md:mx-0 md:-ml-10 hidden lg:block">

        <h1 className='text-white'>Reference</h1>
      </div>
      </div>
      </main>
    </MotionDiv>
  )
}

export default Reference