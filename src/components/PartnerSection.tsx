'use client';

import Image from 'next/image';
import { useState } from 'react';

const clientLogos = [
  '/assets/clients/agille.png',
  '/assets/clients/bartec.png',
  '/assets/clients/basarnas.png',
  '/assets/clients/bms.png',
  '/assets/clients/client-1.png',
  '/assets/clients/client-4.png',
  '/assets/clients/client-5.png',
  '/assets/clients/gbi.png',
  '/assets/clients/jasamarga.png',
  '/assets/clients/kemensos.png',
  '/assets/clients/pertamina.png',
  '/assets/clients/telkom.png'
];

export default function PartnerSection() {
  const [logos] = useState([...clientLogos, ...clientLogos]);

  return (
    <section className="py-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">OUR PARTNERS</h2>
      <div className="overflow-hidden w-full space-y-4">
        {/* Baris pertama: Slider dari kanan ke kiri */}
        <div className="flex space-x-6 min-w-max animate-marquee">
          {logos.map((logo, index) => (
            <div key={index} className="w-40 h-24 bg-white shadow-lg rounded-lg flex items-center justify-center p-4">
              <Image 
                src={logo} 
                alt="Client Logo" 
                width={120} 
                height={60} 
                style={{ objectFit: "contain" }} 
              />
            </div>
          ))}
        </div>
        {/* Baris kedua: Slider dari kiri ke kanan */}
        <div className="flex space-x-6 min-w-max animate-marquee-reverse">
          {logos.map((logo, index) => (
            <div key={index} className="w-40 h-24 bg-white shadow-lg rounded-lg flex items-center justify-center p-4">
              <Image 
                src={logo} 
                alt="Client Logo" 
                width={120} 
                height={60} 
                style={{ objectFit: "contain" }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
