"use client";

import MotionDiv from '@/components/MotionDiv';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  "/assets/product/display/led-indoor8999.png",
  "/assets/product/display/LED.png",
  "/assets/product/display/indoorvideotronn.png",
  "/assets/product/display/leeedindoooor2.jpg",
  "/assets/product/display/leeeeeedindooor.jpg",
];

// Path file brosur
const brosurFile: Record<string, string> = {
  "P0.9": "/assets/product/display/brosur/MT100-240922-compressed.pdf",
  "P1.25": "/assets/product/display/brosur/EASYTALK-T13Z_240920_144736.pdf",
  "P1.86": "/assets/product/display/brosur/EASYTALK-T13Z_240920_144736.pdf",
  "P2": "/assets/product/display/brosur/EASYTALK-T13Z_240920_144736.pdf",
  "P2.5": "/assets/product/display/brosur/EASYTALK-T13Z_240920_144736.pdf",
  "P3.91": "/assets/product/display/brosur/EASYTALK-T13Z_240920_144736.pdf",
  "P4": "/assets/product/display/brosur/EASYTALK-T13Z_240920_144736.pdf",
};

// Mapping bezel yang tersedia berdasarkan ukuran
const availableBezels: Record<string, string[]> = {
  "P0.9": ["3.5"],
  "P1.25": ["2.5"],
  "P1.86": ["0.8", "3.5"],
  "P2": ["0.8", "3.5"],
  "P2.5": ["0.8", "3.5"],
  "P3.91": ["0.8", "3.5"],
  "P4": ["0.8", "3.5"],
};

// Mapping spesifikasi berdasarkan ukuran
const specifications: Record<string, { label: string; value: string }[]> = {
  "P0.9": [
    { label: "Pixel Pitch", value: "P0.9" },
    { label: "Module Size", value: " 320x160mm" },
    { label: "Cabinet Size", value: "640x480mm" },
    { label: "Contras Ratio", value: "5000:1" },
    { label: "Refresh Rate", value: "3840Hz" },
    { label: "Brightness", value: "600 cd/m²" },
    { label: "Gray Scale", value: "14-16 Bit" },
    { label: "Frame Rate", value: " 60Hz" },
  ],
  "P1.25": [
    { label: "Pixel Pitch", value: "P1.25" },
    { label: "Module Size", value: " 320x160mm" },
    { label: "Cabinet Size", value: "640x480mm" },
    { label: "Contras Ratio", value: "5000:1" },
    { label: "Refresh Rate", value: "3840Hz" },
    { label: "Brightness", value: "600 cd/m²" },
    { label: "Gray Scale", value: "14-16 Bit" },
    { label: "Frame Rate", value: " 60Hz" },
  ],
  "P1.86": [
    { label: "Pixel Pitch", value: "P1.86" },
    { label: "Module Size", value: " 320x160mm" },
    { label: "Cabinet Size", value: "640x480mm" },
    { label: "Contras Ratio", value: "5000:1" },
    { label: "Refresh Rate", value: "3840Hz" },
    { label: "Brightness", value: "600 cd/m²" },
    { label: "Gray Scale", value: "14-16 Bit" },
    { label: "Frame Rate", value: " 60Hz" },
  ],
  "P2": [
    { label: "Pixel Pitch", value: "P2" },
    { label: "Module Size", value: " 320x160mm" },
    { label: "Cabinet Size", value: "640x480mm" },
    { label: "Contras Ratio", value: "5000:1" },
    { label: "Refresh Rate", value: "3840Hz" },
    { label: "Brightness", value: "600 cd/m²" },
    { label: "Gray Scale", value: "14-16 Bit" },
    { label: "Frame Rate", value: " 60Hz" },
  ],
  "P2.5": [
    { label: "Pixel Pitch", value: "P2.5" },
    { label: "Module Size", value: " 320x160mm" },
    { label: "Cabinet Size", value: "640x480mm" },
    { label: "Contras Ratio", value: "5000:1" },
    { label: "Refresh Rate", value: "3840Hz" },
    { label: "Brightness", value: "600 cd/m²" },
    { label: "Gray Scale", value: "14-16 Bit" },
    { label: "Frame Rate", value: " 60Hz" },
  ],
  "P3.91": [
    { label: "Pixel Pitch", value: "P3.91" },
    { label: "Module Size", value: " 320x160mm" },
    { label: "Cabinet Size", value: "640x480mm" },
    { label: "Contras Ratio", value: "5000:1" },
    { label: "Refresh Rate", value: "3840Hz" },
    { label: "Brightness", value: "600 cd/m²" },
    { label: "Gray Scale", value: "14-16 Bit" },
    { label: "Frame Rate", value: " 60Hz" },
  ],
  "P4": [
    { label: "Pixel Pitch", value: "P4" },
    { label: "Module Size", value: " 320x160mm" },
    { label: "Cabinet Size", value: "640x480mm" },
    { label: "Contras Ratio", value: "5000:1" },
    { label: "Refresh Rate", value: "3840Hz" },
    { label: "Brightness", value: "600 cd/m²" },
    { label: "Gray Scale", value: "14-16 Bit" },
    { label: "Frame Rate", value: " 60Hz" },
  ],
};

const page = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("P0.9");
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
    "P0.9": "VW43",
    "P1.25": "VW50",
    "P1.86": "VW55",
    "P2": "VW65",
    "P2.5": "VW75",
    "P3.91": "VW85",
    "P4": "VW85",
  };

  return (
    <MotionDiv>
      <div className="min-h-screen flex flex-col justify-between  bg-gradient-to-br from-purple-700 via-blue-500 to-indigo-800 text-white">
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
          <div className="mb-8 min-h-screen flex flex-col justify-between bg-gray-700/60 backdrop-blur-md rounded-lg shadow-md shadow-indigo-400/50 text-white px-6 py-6 md:px-24">
            <main className="font-clash pt-10 w-full max-w-screen-sm mx-auto">
              {/* Judul yang berubah sesuai ukuran TV */}
              <h3 className="text-3xl font-bold text-center md:text-left">
                INDOOR LED SCREEN {selectedSize}
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

