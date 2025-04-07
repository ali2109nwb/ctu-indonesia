'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const devices = [
  { id: 1, name: 'I.SAFE IS930.2', image: '/assets/product/mobile/IS930.1.png', category: 'Explosion Proof', link: '/I.SAFE IS930.2' },
  { id: 2, name: 'CONQUEST EX201', image: '/assets/product/mobile/conquest-x201.png', category: 'Thermal Phone', link: '/CONQUEST EX201' },
  { id: 3, name: 'CONQUEST EX201', image: '/assets/product/mobile/conquestf2new.png', category: 'Satellite Phone', link: '/emdoor-s30' },
  { id: 4, name: 'EMDOOR T50', image: '/assets/product/mobile/Emdoor T-50.png', category: 'Scanner Phone', link: '/emdoor-z40' }
];

export default function MobileSection() {
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);

  return (
    <section className="relative w-full h-[600px] font-clash flex items-center justify-center text-center bg-gradient-to-r from-blue-900 via-black to-purple-950">
    <Image 
        src="/assets/background/back-industrial-mobile.jpg"
        alt="Background"
        fill
        className="object-cover"
    />
        <div className="mt-28 relative z-10 w-full max-w-3xl p-4 text-white">
        <h2 className="text-3xl font-extrabold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white drop-shadow-[2px_2px_4px_black]">MOBILE SOLUTIONS</h2>
        <div className="flex justify-center space-x-4 my-4">
          {devices.map((device) => (
            <button
              key={device.id}
              className={`text-sm px-3 py-1 ${selectedDevice.id === device.id ? 'font-bold bg-orange-400 shadow-md rounded-lg shadow-orange-300' : 'bg-orange-500  hover:bg-orange-500 shadow-md rounded-lg shadow-orange-300 text-white transition duration-300'}`}
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
          width={270}
          height={300}
          />
          <h3 className="text-xl font-extrabold mt-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white drop-shadow-[2px_2px_4px_black]">{selectedDevice.name}</h3>
          <Link href="/mobile-products" className="mt-4 bg-orange-500 hover:bg-orange-400 shadow-md shadow-orange-300 transition duration-300 text-white px-4 py-2 rounded-lg mb-28">
            More Info →
          </Link>
        </div>
      </div>
    </section>
  );
}
