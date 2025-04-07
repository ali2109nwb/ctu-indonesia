'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const devices = [
  { id: 1, name: 'Walldisplay', image: '/assets/product/display/walldis3-removebg-preview.png', category: 'Walldisplay', bgImage: '/assets/product/display/walldis3.png' },
  { id: 2, name: 'LED Indoor', image: '/assets/product/display/LED.png', category: 'LED Indoor', bgImage: '/assets/background/back-indoor-led-screen.png' },
  { id: 3, name: 'LED Outdoor', image: '/assets/product/display/led-screen-out.png', category: 'LED Outdoor', bgImage: '/assets/background/back-mobile-display.jpeg' },
  { id: 4, name: 'Signage', image: '/assets/product/display/Standing Kioksnm,.png', category: 'Signage', bgImage: '/assets/background/back-mobile-display.jpeg' }
];

export default function DisplaySections() {
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);

  return (
    <section className="font-clash relative w-full min-h-[80vh] flex items-center justify-center text-center py-10  bg-gradient-to-r from-blue-900 via-black to-purple-950">
      <Image 
        src="/assets/background/display-product.jpg"
        alt="Background"
        fill
        className="object-cover"
      />
      {/* Background Layer with Smooth Transition */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out bg-cover bg-center" 
        style={{ backgroundImage: `url(${selectedDevice})`, opacity: 1 }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl p-4 text-white">
        <h2 className="text-3xl font-extrabold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white drop-shadow-[2px_2px_4px_black]">DISPLAY & LED SOLUTIONS</h2>
        <div className="flex justify-center space-x-4 mb-6">
          {devices.map((device) => (
            <button
              key={device.id}
              className={`text-sm px-3 py-1 rounded-md transition duration-300 ${selectedDevice.id === device.id ? 'font-bold bg-blue-500 shadow-md rounded-lg shadow-blue-400/50' : 'bg-blue-600 hover:bg-blue-500 shadow-md rounded-lg shadow-blue-400/50 text-white transition duration-300'}`}
              onClick={() => setSelectedDevice(device)}
            >
              {device.category}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <Image 
          src={selectedDevice.image}
          alt={selectedDevice.name}
          width={selectedDevice.id === 1 ? 300 : selectedDevice.id === 2 ? 350 : 270}
          height={selectedDevice.id === 1 ? 300 : selectedDevice.id === 2 ? 350 : 300}
          />
          <h3 className="text-2xl font-extrabold mt-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white drop-shadow-[2px_2px_4px_black]">{selectedDevice.name}</h3>
          <Link href="/display-products" className="mt-6 bg-blue-500 hover:bg-blue-600 shadow-md shadow-blue-400/50 transition duration-300 text-white px-4 py-2 rounded-lg">
            More Info →
          </Link>
        </div>
      </div>
    </section>
  );
}
