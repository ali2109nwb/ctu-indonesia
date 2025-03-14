"use client"

import NewsSlider from "@/components/NewsSlider";
// import NewsList from "@/components/NewsList";
import MotionDiv from '@/components/MotionDiv';

export default function NewsPage() {
  return (
    <MotionDiv>
        <main className="bg-primary min-h-screen max-w-full w-screen overflow-x-hidden py-8">
          <NewsSlider />
        </main>
    </MotionDiv>
    
  );
}
