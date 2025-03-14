
"use client";

import MotionDiv from '@/components/MotionDiv';

const About = () => {
  return (
    <MotionDiv>
      <div className="min-h-screen flex flex-col justify-between">
        <main className='font-clash pt-36 p-6 md:px-24 lg:min-h-[80vh]'>
          <h3 className='text-white text-3xl font-bold'>About</h3>
          <div className="mt-10">
            <p className="font-clash  text-gray-300">
              Ini adalah halaman About
            </p>
          </div>
        </main>
      </div>
    </MotionDiv>
  )
}

export default About;
