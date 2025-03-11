"use client";

import React, { useCallback, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import logo from "@/assets-ctu/logoCTU.png";
import hamburger from "@/assets/shared/AlignJustify.svg";
import close from "@/assets/shared/icon-close.svg";
import Link from "next/link";
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Barlow_Condensed } from "next/font/google";


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
      <Image
        src={logo}
        alt="logo image"
        className=" my-4 w-16 h-10  md:w-12 md:h-12"
      />

      <button
        onClick={() => {
           setOpened((state) => !state);
        }}
        className="relative  z-20 w-6 h-6 md:hidden"
      >
        <Bars4Icon
          className={`transition ${
            opened && " opacity-0"
          }   size-18 absolute top-1/2 right-0 -translate-y-1/2 w-full h-full `}
        />
        <XMarkIcon
          
          className={`transition ${
            opened && " opacity-100"
          } opacity-0  absolute top-1/2 right-0 -translate-y-1/2 w-full h-full`}
        />
      </button>

      {/* <div className="bar grow hidden lg:block h-0.5  bg-white/70 translate-x-8 relative z-20"></div> */}

      <ul
        className={` list-none bg-white transition rounded-l-md backdrop-blur-xl  fixed top-0 right-0 h-screen w-64 z-0 pt-28 pl-8 md:relative md:h-24 md:w-fit md:px-12 md:pt-0 md:translate-x-0 md:flex md:justify-center md:items-center md:gap-x-12
          lg:min-w-[50vw] ${!opened ? "  translate-x-80" : opened ? "-translate-x-0" : "translate-x-0" }`}
      >
        {pages.map(({ title, href }, index) => (
          <Link
            onClick={() => {
               setOpened((state) => !state);
            }}
            key={index}
            href={href}
            className="nav-text uppercase relative text-gray-950 md:h-full"
          >
            <li
              className={`flex items-center mb-10 w-full transition border-r-2 border-transparent font-semibold gap-x-3 [&:not(.active)]:hover:border-gray-950 [&.active]:border-gray-950
                            md:mb-0 md:w-fit md:border-r-0 md:border-b-4 md:h-full ${
                              isActive(href) && "active"
                            } `}
            >
              
              <span className="block">{title}</span>
              {isActive(href) && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 right-0 h-full w-1 md:w-full md:h-1 bg-white"
                />
              )}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
