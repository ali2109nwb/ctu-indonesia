"use client";

import MotionDiv from '@/components/MotionDiv';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  "/assets/product/display/Untitled-2.png",
  "/assets/product/display/led-indoor2.png",
  "/assets/product/display/outled.jpg",
  "/assets/product/display/ledoutdoor587.jpg",
  "/assets/product/display/outdoorleeddd.jpg",
];

// Path file brosur
const brosurFile: Record<string, string> = {
  "P2": "/assets/product/display/brosur/MT100-240922-compressed.pdf",
  "P4": "/assets/product/display/brosur/EASYTALK-T13Z_240920_144736.pdf",
  "P5": "/assets/product/display/brosur/EASYTALK-T13Z_240920_144736.pdf",
  "P6": "/assets/product/display/brosur/EASYTALK-T13Z_240920_144736.pdf",
  "P8": "/assets/product/display/brosur/EASYTALK-T13Z_240920_144736.pdf",
  "P10": "/assets/product/display/brosur/EASYTALK-T13Z_240920_144736.pdf",
};

// Mapping bezel yang tersedia berdasarkan ukuran
const availableBezels: Record<string, string[]> = {
  "P2": ["3.5"],
  "P4": ["2.5"],
  "P5": ["2.5"],
  "P6": ["0.8", "3.5"],
  "P8": ["0.8", "3.5"],
  "P10": ["0.8", "3.5"],
};

// Mapping spesifikasi berdasarkan ukuran
const specifications: Record<string, { label: string; value: string }[]> = {
  "P2": [
    { label: "Pixel Pitch", value: "P2" },
    { label: "Module Size:", value: "320x160mm" },
    { label: "Cabinet Size", value: "960x960mm" },
    { label: "Lifetime", value: "100.000 Hours" },
    { label: "Refresh Rate", value: "3840Hz" },
    { label: "Brightness", value: "5000 cd/m²" },
    { label: "Gray Scale", value: "14-16 Bit" },
    { label: "IP Grade", value: "IP65" },
  ],
  "P4": [
    { label: "Pixel Pitch", value: "P4" },
    { label: "Module Size:", value: "320x160mm" },
    { label: "Cabinet Size", value: "960x960mm" },
    { label: "Lifetime", value: "100.000 Hours" },
    { label: "Refresh Rate", value: "3840Hz" },
    { label: "Brightness", value: "5000 cd/m²" },
    { label: "Gray Scale", value: "14-16 Bit" },
    { label: "IP Grade", value: "IP65" },
  ],
  "P5": [
    { label: "Pixel Pitch", value: "P5" },
    { label: "Module Size:", value: "320x160mm" },
    { label: "Cabinet Size", value: "960x960mm" },
    { label: "Lifetime", value: "100.000 Hours" },
    { label: "Refresh Rate", value: "3840Hz" },
    { label: "Brightness", value: "5000 cd/m²" },
    { label: "Gray Scale", value: "14-16 Bit" },
    { label: "IP Grade", value: "IP65" },
  ],
  "P6": [
    { label: "Pixel Pitch", value: "P6" },
    { label: "Module Size:", value: "320x160mm" },
    { label: "Cabinet Size", value: "960x960mm" },
    { label: "Lifetime", value: "100.000 Hours" },
    { label: "Refresh Rate", value: "3840Hz" },
    { label: "Brightness", value: "5000 cd/m²" },
    { label: "Gray Scale", value: "14-16 Bit" },
    { label: "IP Grade", value: "IP65" },
  ],
  "P8": [
    { label: "Pixel Pitch", value: "P8" },
    { label: "Module Size:", value: "320x160mm" },
    { label: "Cabinet Size", value: "960x960mm" },
    { label: "Lifetime", value: "100.000 Hours" },
    { label: "Refresh Rate", value: "3840Hz" },
    { label: "Brightness", value: "5000 cd/m²" },
    { label: "Gray Scale", value: "14-16 Bit" },
    { label: "IP Grade", value: "IP65" },
  ],
  "P10": [
    { label: "Pixel Pitch", value: "P10" },
    { label: "Module Size:", value: "320x160mm" },
    { label: "Cabinet Size", value: "960x960mm" },
    { label: "Lifetime", value: "100.000 Hours" },
    { label: "Refresh Rate", value: "3840Hz" },
    { label: "Brightness", value: "5000 cd/m²" },
    { label: "Gray Scale", value: "14-16 Bit" },
    { label: "IP Grade", value: "IP65" },
  ],
};

const page = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("P2");
  const [selectedBezel, setSelectedBezel] = useState("");

  const selectedBrosur = brosurFile[selectedSize] || "#";

  const bezelsForSize = availableBezels[selectedSize] || [];

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    if (!bezelsForSize.includes(selectedBezel)) {
      setSelectedBezel(availableBezels[size][0]);
    }
  };

  const productCodes: Record<string, string> = {
    "P2": "VW43",
    "P4": "VW50",
    "P5": "VW55",
    "P6": "VW65",
    "P8": "VW75",
    "P10": "VW85",
  };

  return (
    <MotionDiv>
      <div className="min-h-screen flex flex-col justify-between  bg-gradient-to-br from-purple-700 via-blue-500 to-indigo-800 text-white">
        <main className="font-clash pt-36 p-6 md:px-24 lg:min-h-[80vh] flex flex-col lg:flex-row items-center lg:items-start gap-10">
          
          {/*Gambar Produk */}
          <div className="w-full lg:w-1/2 sm:pl-2">
            <Image 
              src={selectedImage} 
              alt="QLED TV"
              width={500}
              height={400}
              className="rounded-lg shadow-lg shadow-blue-400/50"
            />

            {/* Thumbnail Gallery */}
            <div className="mt-4 flex gap-2 overflow-x-auto">
              {images.map((img, index) => (
                <button key={index} onClick={() => setSelectedImage(img)} className="focus:outline-none">
                  <Image 
                    src={img} 
                    alt={`Thumbnail ${index}`}
                    width={80}
                    height={50}
                    className={`rounded-lg border-2 ${selectedImage === img ? 'border-blue-400 shadow-md shadow-blue-400/50' : 'border-transparent'} hover:border-gray-400`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Detail Produk */}
          <div className="mb-8 min-h-screen flex flex-col justify-between bg-gray-700/60 backdrop-blur-md rounded-lg shadow-md shadow-indigo-400/50 text-white px-6 py-6 md:px-24">
            <main className="font-clash pt-10 w-full max-w-screen-sm mx-auto">
              {/* Judul yang berubah sesuai ukuran TV */}
              <h3 className="text-3xl font-bold text-center md:text-left">
                OUTDOOR LED SCREEN {selectedSize}
                {/* {selectedBezel} */}
                {/* {productCodes[selectedSize]} */}
              </h3>

              {/* Rating */}
              <div className="flex items-center justify-center md:justify-start mt-2">
                <span className="text-yellow-400 text-xl">★</span>
                <span className="ml-2 text-lg">4.6</span>
              </div>

              {/* Pixel */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold font-clash text-center md:text-left">Pixel</h4>
                <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                  {Object.keys(availableBezels).map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeChange(size)} // Mengubah size & reset bezel jika perlu
                      className={`px-4 py-2 border border-gray-400 rounded-md transition-all duration-300 ${
                        selectedSize === size ? "bg-white text-black font-bold shadow-md shadow-cyan-400/50" : "hover:bg-gray-700"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/*Bezel */}
              {/* <div className="mt-6">
                <h4 className="text-lg font-semibold font-clash">Bezel</h4>
                <div className="mt-2 flex gap-2">
                  {bezelsForSize.map((bezel) => (
                    <button
                      key={bezel}
                      onClick={() => setSelectedBezel(bezel)} // Mengubah bezel
                      className={`px-4 py-2 border border-gray-500 rounded-md transition ${
                        selectedBezel === bezel ? "bg-white text-black font-bold" : "hover:bg-gray-700"
                      }`}
                    >
                      {bezel}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* {Spesifikasi} */}
              <div className="mt-6">
                <h4 className="text-lg font-bold mb-4 font-clash">Specification</h4>
                <table className="w-full border-collapse border border-gray-400 bg-gray-700/60 backdrop-blur-md rounded-lg shadow-md shadow-indigo-400/50">
                  <tbody>
                    {specifications[selectedSize].map((spec, index) => (
                      <tr key={index} className="border border-gray-500">
                        <td className="px-4 py-2 text-sm bg-gray-800">{spec.label}</td>
                        <td className="px-4 py-2 text-sm">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

               {/*Download Brosur */}
               {/* <div className="mt-8">
                <a 
                  href={selectedBrosur}
                  target='blank'
                  className={`text-sm px-6 py-3 font-bold rounded-md transition ${
                    selectedBrosur !== "#" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  More Specification
                </a>
              </div> */}

            </main>
          </div>

        </main>
      </div>
    </MotionDiv>
  );
}

export default page;

