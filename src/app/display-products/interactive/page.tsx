"use client";

import MotionDiv from '@/components/MotionDiv';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  "/assets/product/display/interactivev.png",
  "/assets/product/display/interactivee2.png",
  "/assets/product/display/ineractive-flat-panel-2.png",
  // "/assets/product/display/led-indoor2.png",
  // "/assets/product/display/kiosk2.png",
];

// Path file brosur
const brosurFile: Record<string, string> = {
  "55": "/assets/product/display/brosur/brosur-interactive-vewell.pdf",
  "65": "/assets/product/display/brosur/brosur-interactive-vewell.pdf",
  "75": "/assets/product/display/brosur/brosur-interactive-vewell.pdf",
  "86": "/assets/product/display/brosur/brosur-interactive-vewell.pdf",
  "98": "/assets/product/display/brosur/brosur-interactive-vewell.pdf",
};

// Mapping bezel yang tersedia berdasarkan ukuran
const availableBezels: Record<string, string[]> = {
  "55": ["3.5"],
  "65": ["2.5"],
  "75": ["0.8", "3.5"],
  "86": ["0.8", "3.5"],
  "98": ["0.8", "3.5"],
};

// Mapping spesifikasi berdasarkan ukuran
const specifications: Record<string, { label: string; value: string }[]> = {
  "55": [
    { label: "Display Size", value: '55"' },
    { label: "Operating System", value: "Android and Windows" },
    { label: "Display Resolution", value: "4000:1" },
    { label: "Touch Point", value: "178°/178°" },
    { label: "Brightness", value: "178°/178°" },
    { label: "Contras Ratio", value: "178°/178°" },
    { label: "Frame Rate", value: "178°/178°" },
    { label: "Viewing Angle", value: "178°/178°" },
  ],
  "65": [
    { label: "Display Size", value: '65"' },
    { label: "Operating System", value: "Android and Windows" },
    { label: "Display Resolution", value: "4000:1" },
    { label: "Touch Point", value: "178°/178°" },
    { label: "Brightness", value: "178°/178°" },
    { label: "Contras Ratio", value: "178°/178°" },
    { label: "Frame Rate", value: "178°/178°" },
    { label: "Viewing Angle", value: "178°/178°" },
  ],
  "75": [
    { label: "Display Size", value: '75"' },
    { label: "Operating System", value: "Android and Windows" },
    { label: "Display Resolution", value: "4000:1" },
    { label: "Touch Point", value: "178°/178°" },
    { label: "Brightness", value: "178°/178°" },
    { label: "Contras Ratio", value: "178°/178°" },
    { label: "Frame Rate", value: "178°/178°" },
    { label: "Viewing Angle", value: "178°/178°" },
  ],
  "86": [
    { label: "Display Size", value: '86"' },
    { label: "Operating System", value: "Android and Windows" },
    { label: "Display Resolution", value: "4000:1" },
    { label: "Touch Point", value: "178°/178°" },
    { label: "Brightness", value: "178°/178°" },
    { label: "Contras Ratio", value: "178°/178°" },
    { label: "Frame Rate", value: "178°/178°" },
    { label: "Viewing Angle", value: "178°/178°" },
  ],
  "98": [
    { label: "Display Size", value: '98" '},
    { label: "Operating System", value: "Android and Windows" },
    { label: "Display Resolution", value: "4000:1" },
    { label: "Touch Point", value: "178°/178°" },
    { label: "Brightness", value: "178°/178°" },
    { label: "Contras Ratio", value: "178°/178°" },
    { label: "Frame Rate", value: "178°/178°" },
    { label: "Viewing Angle", value: "178°/178°" },
  ],
};

const page = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("55");
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
    "55": "VW43",
    "65": "VW50",
    "75": "VW55",
    "86": "VW65",
    "98": "VW75",
  };

  return (
    <MotionDiv>
      <div className="min-h-screen flex flex-col justify-between  bg-gradient-to-br from-purple-700 via-blue-500 to-indigo-800 text-white">
        <main className="font-clash pt-36 p-6 md:px-24 lg:min-h-[80vh] flex flex-col lg:flex-row items-center lg:items-start gap-10">
          
          {/*Gambar Produk */}
          <div className="w-full lg:w-1/2 sm:pl-24 sm:pr-24">
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
          <div className="mb-8 min-h-screen flex flex-col justify-between bg-gray-700/60 backdrop-blur-md rounded-lg shadow-md shadow-indigo-400/50 text-white p-0">
            <main className="font-clash pt-10 p-6 md:px-24 lg:min-h-[80vh]">
              {/* Judul yang berubah sesuai ukuran TV */}
              <h3 className="text-3xl font-bold">
                {selectedSize}" INTERACTIVE FLAT PANEL
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
                        selectedSize === size ? "bg-white text-black font-bold shadow-md shadow-cyan-400/50" : "hover:bg-gray-600"
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
                    selectedBrosur !== "#" ? "bg-blue-500 text-white hover:bg-blue-600 shadow-md shadow-blue-400/50" : "bg-gray-500 text-gray-300 cursor-not-allowed"
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

