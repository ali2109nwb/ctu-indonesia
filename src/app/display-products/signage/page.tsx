"use client";

import MotionDiv from '@/components/MotionDiv';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  "/assets/product/display/digital-signage3-removebg-preview.png",
  "/assets/product/display/signage-digital4.jpg",
  "/assets/product/display/signage-dig5.jpg",
  "/assets/product/display/digital-signage-3.jpg",
  // "/assets/product/display/led-indoor2.png",
];

// Path file brosur
const brosurFile: Record<string, string> = {
  "32": "/assets/product/display/brosur/Vewel Wallmounted Digital Signage.pdf",
  "49": "/assets/product/display/brosur/Vewel Wallmounted Digital Signage.pdf",
  "55": "/assets/product/display/brosur/Vewel Wallmounted Digital Signage.pdf",
  "65": "/assets/product/display/brosur/Vewel Wallmounted Digital Signage.pdf",
  "75": "/assets/product/display/brosur/Vewel Wallmounted Digital Signage.pdf",
  "86": "/assets/product/display/brosur/Vewel Wallmounted Digital Signage.pdf",
  "98": "/assets/product/display/brosur/Vewel Wallmounted Digital Signage.pdf",
};

// Mapping bezel yang tersedia berdasarkan ukuran
const availableBezels: Record<string, string[]> = {
  "32": ["3.5"],
  "49": ["2.5"],
  "55": ["0.8", "3.5"],
  "65": ["0.8", "3.5"],
  "75": ["0.8", "3.5"],
  "86": ["0.8", "3.5"],
  "98": ["0.8", "3.5"],
};

// Mapping spesifikasi berdasarkan ukuran
const specifications: Record<string, { label: string; value: string }[]> = {
  "32": [
    { label: "Display Size", value: '32"' },
    { label: "Operating System", value: "Android" },
    { label: "Display Resolution", value: "1920x1080/3840x2160 (4K)" },
    { label: "Contras Ratio", value: "1920x1080/3840x2160 (4K)" },
    { label: "Brightness", value: "350 up to 500 cd/m²" },
    { label: "Orientation", value: "Landscape and Potrait" },
    { label: "Lifetime", value: "1920x1080/3840x2160 (4K)" },
  ],
  "49": [
    { label: "Display Size", value: '49"' },
    { label: "Operating System", value: "Android" },
    { label: "Display Resolution", value: "1920x1080/3840x2160 (4K)" },
    { label: "Contras Ratio", value: "1920x1080/3840x2160 (4K)" },
    { label: "Brightness", value: "350 up to 500 cd/m²" },
    { label: "Orientation", value: "Landscape and Potrait" },
    { label: "Lifetime", value: "1920x1080/3840x2160 (4K)" },
  ],
  "55": [
    { label: "Display Size", value: '55"' },
    { label: "Operating System", value: "Android" },
    { label: "Display Resolution", value: "1920x1080/3840x2160 (4K)" },
    { label: "Contras Ratio", value: "1920x1080/3840x2160 (4K)" },
    { label: "Brightness", value: "350 up to 500 cd/m²" },
    { label: "Orientation", value: "Landscape and Potrait" },
    { label: "Lifetime", value: "1920x1080/3840x2160 (4K)" },
  ],
  "65": [
    { label: "Display Size", value: '65"' },
    { label: "Operating System", value: "Android" },
    { label: "Display Resolution", value: "1920x1080/3840x2160 (4K)" },
    { label: "Contras Ratio", value: "1920x1080/3840x2160 (4K)" },
    { label: "Brightness", value: "350 up to 500 cd/m²" },
    { label: "Orientation", value: "Landscape and Potrait" },
    { label: "Lifetime", value: "1920x1080/3840x2160 (4K)" },
  ],
  "75": [
    { label: "Display Size", value: '75"' },
    { label: "Operating System", value: "Android" },
    { label: "Display Resolution", value: "1920x1080/3840x2160 (4K)" },
    { label: "Contras Ratio", value: "1920x1080/3840x2160 (4K)" },
    { label: "Brightness", value: "350 up to 500 cd/m²" },
    { label: "Orientation", value: "Landscape and Potrait" },
    { label: "Lifetime", value: "1920x1080/3840x2160 (4K)" },
  ],
  "86": [
    { label: "Display Size", value: '86"' },
    { label: "Operating System", value: "Android" },
    { label: "Display Resolution", value: "1920x1080/3840x2160 (4K)" },
    { label: "Contras Ratio", value: "1920x1080/3840x2160 (4K)" },
    { label: "Brightness", value: "350 up to 500 cd/m²" },
    { label: "Orientation", value: "Landscape and Potrait" },
    { label: "Lifetime", value: "1920x1080/3840x2160 (4K)" },
  ],
  "98": [
    { label: "Display Size", value: '98"' },
    { label: "Operating System", value: "Android" },
    { label: "Display Resolution", value: "1920x1080/3840x2160 (4K)" },
    { label: "Contras Ratio", value: "1920x1080/3840x2160 (4K)" },
    { label: "Brightness", value: "350 up to 500 cd/m²" },
    { label: "Orientation", value: "Landscape and Potrait" },
    { label: "Lifetime", value: "1920x1080/3840x2160 (4K)" },
  ],
};

const page = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("32");
  const [selectedBezel, setSelectedBezel] = useState("0.8");

  const selectedBrosur = brosurFile[selectedSize] || "#";

  const bezelsForSize = availableBezels[selectedSize] || [];

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    if (!bezelsForSize.includes(selectedBezel)) {
      setSelectedBezel(availableBezels[size][0]);
    }
  };

  const productCodes: Record<string, string> = {
    "32": "VW43",
    "49": "VW50",
    "55": "VW55",
    "65": "VW65",
    "75": "VW75",
    "86": "VW85",
    "98": "VW85",
  };

  return (
    <MotionDiv>
      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-purple-700 via-blue-500 to-indigo-800 text-white">
        <main className="font-clash pt-36 p-6 md:px-24 lg:min-h-[80vh] flex flex-col lg:flex-row items-center lg:items-start gap-10">
          
          {/*Gambar Produk */}
          <div className="w-full lg:w-1/2">
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
          <div className="mb-8 md:pr-0 pr-4 md:pl-0 pl-4 min-h-screen flex flex-col justify-between bg-gray-700/60 backdrop-blur-md rounded-lg shadow-md shadow-indigo-400/50 text-white p-0">
            <main className="font-clash pt-10 p-1 md:px-24 lg:min-h-[80vh]">
              {/* Judul yang berubah sesuai ukuran TV */}
              <h3 className="text-3xl font-bold">
                {selectedSize}" DIGITAL SIGNAGE
                {/* {selectedBezel} */}
                {/* {productCodes[selectedSize]} */}
              </h3>

              {/* Rating */}
              <div className="flex items-center mt-2">
                <span className="text-yellow-400 text-xl">★</span>
                <span className="ml-2 text-lg">4.6</span>
              </div>

              {/* size */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold font-clash">Size</h4>
                <div className="mt-2 flex gap-2">
                  {Object.keys(availableBezels).map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeChange(size)} // Mengubah size & reset bezel jika perlu
                      className={`px-4 py-2 border border-gray-400 rounded-md transition-all duration-300 ${
                        selectedSize === size ? "bg-white text-black font-bold shadow-md shadow-cyan-400/50" : "hover:bg-gray-700"
                      }`}
                    >
                      {size}"
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
                <h4 className="text-lg font-bold mb-4 font-clash">Spesifikasi</h4>
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
                  className={`text-sm px-6 py-3 font-bold rounded-md transition-all duration-300 ${
                    selectedBrosur !== "#" ? "bg-blue-500 text-white hover:bg-blue-600 shadow-md shadow-blue-400/50" : "bg-gray-600 text-gray-400 cursor-not-allowed"
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

