"use client";

import MotionDiv from '@/components/MotionDiv';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  "/assets/product/display/walldis12-removebg-preview.png",
  "/assets/product/display/walldis3-removebg-preview.png",
  "/assets/product/display/videowall.jpg",
  "/assets/product/display/89ddc04a0873a7218927cc213c38b2fa.jpg",
];

// Path file brosur
const brosurFile: Record<string, string> = {
  "49": "/assets/product/display/brosur/MT100-240922-compressed.pdf",
  "55": "/assets/product/display/brosur/EASYTALK-T13Z_240920_144736.pdf",
  // "46": "/assets/product/display/brosur/EASYTALK-T13Z_240920_144736.pdf",
};

// Mapping bezel yang tersedia berdasarkan ukuran
const availableBezels: Record<string, string[]> = {
  "49": ["3.5"],
  // "46": ["2.5"],
  "55": ["1.8", "3.5"],
};

// Mapping spesifikasi berdasarkan ukuran
const specifications: Record<string, { label: string; value: string }[]> = {
  "49": [
    { label: "Display Size", value: "49" },
    { label: "Bazel to Bezel", value: "3.5mm" },
    { label: "Screen Resolution", value: "1920x1080" },
    { label: "Response", value: "8ms" },
    { label: "Interface parameter", value: "HDMI, DVI,VGA, RS232,USB" },
    { label: "Frame Color", value: "Black" },
    { label: "Contras Ratio", value: "1300:1/4000:1" },
    { label: "Viewing Angle", value: " 170° CR≥10" },
  ],
  "55": [
    { label: "Display Size", value: "55" },
    { label: "Bazel to Bezel", value: "1.8mm, 3.5mm" },
    { label: "Screen Resolution", value: "1920x1080" },
    { label: "Response", value: "8ms" },
    { label: "Interface parameter", value: "HDMI, DVI,VGA, RS232,USB" },
    { label: "Frame Color", value: "Black" },
    { label: "Contras Ratio", value: "1300:1/4000:1" },
    { label: "Viewing Angle", value: " 170° CR≥10" },
  ],
  // "46": [
  //   { label: "Display Size", value: "46" },
  //   { label: "Bazel to Bezel", value: "3.5mm, 0.8mm" },
  //   { label: "Screen Resolution", value: "1920x1080" },
  //   { label: "Response", value: "8ms" },
  //   { label: "Interface parameter", value: "HDMI, DVI,VGA, RS232,USB" },
  //   { label: "Frame Color", value: "Black" },
  //   { label: "Contras Ratio", value: "1300:1/4000:1" },
  //   { label: "Viewing Angle", value: " 170° CR≥10" },
  // ],
};

const page = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("49");
  const [selectedBezel, setSelectedBezel] = useState("3.5");

  const selectedBrosur = brosurFile[selectedSize] || "#";

  const bezelsForSize = availableBezels[selectedSize] || [];

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    if (!bezelsForSize.includes(selectedBezel)) {
      setSelectedBezel(availableBezels[size][0]);
    }
  };

  const productCodes: Record<string, string> = {
    "43": "VW43",
    "50": "VW50",
    "55": "VW55",
    "65": "VW65",
    "75": "VW75",
    "85": "VW85",
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
          <div className="mb-8 min-h-screen flex flex-col justify-between bg-gray-700/60 backdrop-blur-md rounded-lg shadow-md shadow-indigo-400/50 text-white p-0">
            <main className="font-clash pt-10 p-6 md:px-24 lg:min-h-[80vh]">
              {/* Judul yang berubah sesuai ukuran TV */}
              <h3 className="text-3xl font-bold md:text-left">
                {selectedSize}" TILED VIDEOWALL BEZEL TO BEZEL {selectedBezel}
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
              <div className="mt-6">
                <h4 className="text-lg font-semibold font-clash">Bezel</h4>
                <div className="mt-2 flex gap-2">
                  {bezelsForSize.map((bezel) => (
                    <button
                      key={bezel}
                      onClick={() => setSelectedBezel(bezel)} // Mengubah bezel
                      className={`px-4 py-2 border border-gray-400 rounded-md transition-all duration-300 ${
                        selectedBezel === bezel ? "bg-white text-black font-bold shadow-md shadow-cyan-400/50" : "hover:bg-gray-700"
                      }`}
                    >
                      {bezel}
                    </button>
                  ))}
                </div>
              </div>

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
