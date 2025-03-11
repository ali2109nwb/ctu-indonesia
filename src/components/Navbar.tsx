"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import logo from "@/assets-ctu/logoCTU.png";

import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";

const pages = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Product", href: "/product", dropdown: true },
  { title: "Reference", href: "/reference" },
  { title: "News", href: "/news" },
  { title: "Contact", href: "/contact" },
];

const productDropdown = [
  {
    category: "DISPLAY",
    links: [
      { title: "Best Product", href: "/product/display/best-product" },
      { title: "Wall Display", href: "/product/display/wall-display" },
      { title: "Flexible Display", href: "/product/display/flexible-display" },
      { title: "Kiosk", href: "/product/display/kiosk" },
    ],
  },
  {
    category: "MOBILE",
    links: [
      { title: "Best Product", href: "/product/mobile/best-product" },
      { title: "Explosion Proof", href: "/product/mobile/explosion-proof" },
      { title: "Thermal", href: "/product/mobile/thermal" },
      { title: "Barcode", href: "/product/mobile/barcode" },
    ],
  },
];

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--barlow-font",
});

function Navbar() {
  const [opened, setOpened] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false); 
  // const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
   // ✅ Perubahan: Gunakan angka untuk menentukan dropdown yang terbuka

  const path = usePathname();
  // const isActive = useCallback((href: string) => path === href, [path]);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`${barlow.variable} fixed top-0 bg-white z-50 flex justify-between w-full items-center px-6 md:px-0 md:pl-10`}
    >
      <div className="flex items-center py-2 md:py-0 ml-4 md:ml-14">
        <Image src={logo} alt="logo image" className="w-20 h-auto md:w-28" />
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setOpened(!opened)} className="relative z-50 w-6 h-6 md:hidden">
        <Bars4Icon className={`transition ${opened ? "opacity-0" : "opacity-100"} size-18 absolute top-1/2 right-0 -translate-y-1/2 w-full h-full`} />
        <XMarkIcon className={`transition ${opened ? "opacity-100" : "opacity-0"} absolute top-1/2 right-0 -translate-y-1/2 w-full h-full`} />
      </button>

      {/* Navbar Menu */}
      <ul
        className={`list-none bg-white transition rounded-l-md backdrop-blur-xl 
        fixed top-0 right-0 h-screen w-64 z-40 pt-28 pl-8 md:relative md:h-24 md:w-fit 
        md:px-12 md:pt-0 md:translate-x-0 md:flex md:items-center md:gap-x-12
        lg:min-w-[50vw] ${opened ? "translate-x-0" : "translate-x-full"}`} // ✅ Perubahan: `translate-x-80` diubah jadi `translate-x-full`
      >
        {pages.map(({ title, href, dropdown }, index) => (
          <li key={index} className="relative group py-3 md:py-0">
            {dropdown ? (
              <div className="relative">
                {/* ✅ Klik untuk toggle dropdown */}
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) setDropdownOpen(true); // Hover hanya untuk desktop
                    setIsHovered(true); // ✅ Hover efek aktif di semua ukuran layar
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false); // ✅ Hover efek hilang
                  }}
                  className="w-full text-left relative group"
                >
                  <span className="nav-font text-gray-950 font-semibold uppercase transition hover:text-blue-600">
                    Product
                  </span>

                  {/* Garis biru hanya muncul saat hover di tablet & mobile */}
                  <span
                    className={`absolute left-0 bottom-0 h-1 bg-blue-500 transition-all duration-300 
                    ${isHovered ? "w-full" : "w-0"} md:group-hover:w-full`}
                  ></span>
                </button>

                {/* Dropdown Menu */}
                <div
                  ref={dropdownRef}
                  className={`dropdown-menu bg-white shadow-lg border rounded-lg transition-all duration-300
                  md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 md:w-64 md:opacity-0 md:invisible md:scale-95 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:scale-100
                  ${dropdownOpen ? "block mt-2 md:mt-0 opacity-100 visible scale-100" : "hidden md:group-hover:block"}`}
                >
                  <div className="flex justify-between gap-4 p-6 relative">
                    {productDropdown.map((category, catIndex) => (
                      <div key={catIndex}>
                        <h4 className="dropDown-disMob font-semibold text-blue-600 text-sm">
                          {category.category}
                        </h4>
                        <ul className="dropDown-ul mt-1 space-y-1 text-xs">
                          {category.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <Link
                                href={link.href}
                                className="hover:text-blue-500 block py-1"
                              >
                                {link.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-300"></div>
                      </div>
                    ))}
                    <div className="absolute hidden md:block left-1/2 top-4 bottom-4 w-[1px] bg-gray-300 transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                onClick={() => setOpened(false)} // ✅ Perubahan: Menu ditutup setelah klik link
                href={href}
                className="nav-font relative text-gray-950 font-semibold uppercase transition hover:text-blue-600"
              >
                <span className="block">{title}</span>
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full hover:w-full"></span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
