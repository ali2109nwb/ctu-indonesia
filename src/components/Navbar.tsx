"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import logo from "@/assets-ctu/logoCTU.png";

import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";


const pages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Product",
    href: "/product",
  },
  {
    title: "Reference",
    href: "/reference",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--barlow-font",
});

function Navbar() {
  const [opened, setOpened] = useState<boolean>(false);

  console.log(opened)

  const path = usePathname();

  const isActive = useCallback((href: string) => path === href, [path]);

  return (
        <header
      className={` ${barlow.variable} fixed top-0  bg-white z-30 flex justify-between w-full items-center px-6 md:px-0 md:pl-10`}
    >
      <div className="flex items-center py-2 md:py-0">
        <Image src={logo} alt="logo image" className="w-20 h-auto md:w-28" />
      </div>

      <button
        onClick={() => setOpened((state) => !state)}
        className="relative z-20 w-6 h-6 md:hidden"
      >
        <Bars4Icon
          className={`transition ${
            opened && "opacity-0"
          } size-18 absolute top-1/2 right-0 -translate-y-1/2 w-full h-full`}
        />
        <XMarkIcon
          className={`transition ${
            opened && "opacity-100"
          } opacity-0 absolute top-1/2 right-0 -translate-y-1/2 w-full h-full`}
        />
      </button>

      {/* <div className="bar grow hidden lg:block h-0.5  bg-white/70 translate-x-8 relative z-20"></div> */}

      <ul
        className={`list-none bg-white transition rounded-l-md backdrop-blur-xl 
        fixed top-0 right-0 h-screen w-64 z-0 pt-28 pl-8 md:relative md:h-24 md:w-fit 
        md:px-12 md:pt-0 md:translate-x-0 md:flex md:items-center md:gap-x-12
        lg:min-w-[50vw] ${!opened ? "translate-x-80" : "-translate-x-0"}`}
      >
        {pages.map(({ title, href }, index) => (
          <Link
          onClick={() => setOpened((state) => !state)}
          key={index}
          href={href}
          className="relative text-gray-950 font-semibold uppercase transition hover:text-blue-600"
        >
          <li className="relative group py-3 md:py-0">
            <span className="block">{title}</span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </Link>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
