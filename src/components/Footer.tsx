"use client"

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-[#0A2342] to-black text-white py-10 px-6">
      <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-20">
        {/* Logo dan Copyright */}
        <div className="mb-6 md:mb-0 text-center md:text-left w-full md:w-auto">
          <Image
            src="/assets/logoCTU.png"
            alt="Logo CTU"
            width={120}
            height={60}
            className="w-32 md:w-40 mx-auto md:mx-0 mb-3"
          />
          <p className="text-sm text-gray-400 font-clash">© 2025 All rights reserved</p>
        </div>

        {/* Navigasi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-6 text-center md:text-left w-full md:w-auto">
          <div>
            <h3 className="font-semibold text-2xl mb-3 font-clash">Company</h3>
            <ul className="space-y-2 text-gray-300 font-clash text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/references" className="hover:text-white">References</Link></li>
              <li><Link href="/mobile-products" className="hover:text-white">Product - Mobile</Link></li>
              <li><Link href="/display-products" className="hover:text-white">Product - Display & LED</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/news" className="hover:text-white">News</Link></li>
            </ul>
          </div>

          <div >
            <h3 className="font-semibold text-2xl mb-3 font-clash">Products</h3>
            <ul className="space-y-2 text-gray-300 font-clash text-sm">
              <li><Link href="/display-products/walldisplay" className="hover:text-white">Wall Display</Link></li>
              <li><Link href="/display-products/led-screen" className="hover:text-white">LED Screen</Link></li>
              <li><Link href="/display-products/kiosk" className="hover:text-white">Kiosk</Link></li>
              <li className="flex justify-center md:justify-start items-center">
                <Link href="/mobile-products" className="hover:text-white">Smart Phone</Link>
                <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">New</span>
              </li>
            </ul>
          </div>

          <div className="font-clash flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-2xl mb-3 font-clash">Social Media</h3>
            <ul className="space-y-3 text-gray-300 font-clash text-sm md:justify-start items-center">
              <li className="flex items-center space-x-2">
                <Image src="/assets/icon/IG.png" alt="LinkedIn" width={20} height={20} />
                <Link href="https://www.linkedin.com" target="_blank" className="hover:text-white">LinkedIn</Link>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/assets/icon/IG.png" alt="Instagram" width={20} height={20} />
                <Link href="https://www.instagram.com" target="_blank" className="hover:text-white">Instagram</Link>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/assets/icon/IG.png" alt="Gmail" width={20} height={20} />
                <Link href="mailto:nuraliali2109@gmail.com" target="_blank" className="hover:text-white">Gmail</Link>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/assets/icon/IG.png" alt="WhatsApp" width={20} height={20} />
                <Link href="https://wa.me/6281995038670" target="_blank" className="hover:text-white">Facebook</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
