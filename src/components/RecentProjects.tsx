"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "WISMA TUGU LED",
    image: "/assets/recent-projects/Wisma-Tugu-LED.png",
    size: "P1.5"
  },
  {
    id: 2,
    title: "PELINDO LED FLEXIBLE",
    image: "/assets/recent-projects/Pelindo-LED-Flexible.png",
    size: "P4"
  },
  {
    id: 3,
    title: "BSI DANAREKSA WALLDISPLAY",
    image: "/assets/recent-projects/BSI-Danareksa-Walldisplay.png",
    size: "P5"
  },
];

export default function RecentProjects() {
  return (
    <section className="font-clash relative bg-gradient-to-b from-white via-blue-200/60 to-blue-900 py-16 px-6 lg:px-24 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-10">
        OUR RECENT PROJECTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
        <Link href="/reference">
            <div key={project.id} className="relative group cursor-pointer ">
                <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={400}
                className="object-cover w-full h-80 rounded-lg transform transition duration-300 border-blue-400 shadow-md shadow-blue-400/50 : border-transparent"
                />
                <div className="font-semibold absolute bottom-0 left-0 w-full bg-blue-700 text-white text-sm p-2 rounded-b-lg transform transition duration-300">
                    <span className="text-left font-semibold">{project.title}</span>
                    {/* <span className="font- font-semibold text-sm text-gray-300 text-right py-4 pr-8">{project.size}</span> */}
                </div>
            </div>
        </Link>
          
        ))}
      </div>

      <div className="flex justify-center mt-10 transition-all duration-300">
        <Link href="/reference">
          <button className="bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-400/50 text-white px-4 py-2 rounded-lg text-lg font-medium transition duration-300 flex items-center gap-2">
            View More →
          </button>
        </Link>
      </div>
    </section>
  );
}
