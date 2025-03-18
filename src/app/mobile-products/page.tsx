"use client";

// import mobileBackground from "@/assets-ctu/background/mobile-back.png";
import tablet, { default as desktop, default as mobile } from "@/assets-ctu/background/mobile-back.png";
import agmM7 from "@/assets-ctu/product/mobile/Rugged-Technology-930.png";
import Background from "@/components/Background";
import MotionDiv from "@/components/MotionDiv";
import MobileItems from "@/data/MobileItems";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  specs: { name: string; value: string; icon: string }[];
}


const MobilePage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // const sizeStyles = {
  //   1: { width: 250, height: 250, mt: "mt-6" }, // ID 2 lebih besar
  //   2: { width: 220, height: 220, mt: "mt-4" }, // ID 3 sedikit lebih besar
  //   3: { width: 260, height: 260, mt: "mt-8" }, // Misalnya, ID 4 juga ingin diperbesar
  // };

  console.log("MobileItems:", MobileItems); 

  return (
    <MotionDiv>
      {/* Banner Section */}
      <div className="relative w-full h-[60vh]">
        <div className="absolute inset-0 w-full h-full">
          <Background
            mobile={mobile.src}
            tablet={tablet.src}
            desktop={desktop.src}
          />
        </div>

        {/* Content in Center */}
        <div className="relative z-10 flex w-full max-w-6xl px-6 md:px-24 items-center">
          {/* Text Section */}
          <div className="text-white md:w-1/2 text-center md:text-left font-clash md:mb-8">
            <h3 className="md:whitespace-nowrap text-4xl md:text-5xl font-bold">Rugged Technology</h3>
            <h3 className="md:whitespace-nowrap text-4xl md:text-5xl font-bold py-4">Ready for Any Challenge</h3>
          </div>

          {/* Product Image */}
          <motion.div 
            className="relative z-10 md:w-1/2 md:justify-end mt-6 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={agmM7}
              width={380}
              height={380}
              className="max-w-xs md:max-w-md md:mt-28 md:ml-80 drop-shadow-2xl"
              alt="AGM M7"
            />
          </motion.div>
        </div>
      </div>


      {/* Quick Menu Section */}
      <section className="py-10 bg-white text-center font-clash font-bold text-sm">
        <h3 className="text-2xl font-semibold text-gray-900">Quick Menu</h3>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">I.SAFE MOBILE</button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">EMDOOR</button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">BARTEC</button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">AGM</button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">CONQUEST</button>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="font-clash py-16 text-center bg-white">
        <h3 className="text-3xl font-bold text-gray-900">Core Features</h3>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Meet the future of productivity and efficiency with us. Maximize productivity and competitiveness with solutions tailor-made to address your needs.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[{
            icon: "/assets/icons/consulting.png",
            title: "Swift dialogue via Push-to-Talk (PTT) feature",
            description: "At the press of a button, instant PTT calls can be performed either one-on-one or in a group, via 3G/4G LTE and Wi-Fi."
          }, {
            icon: "/assets/icons/design.png",
            title: "Directed Control Board",
            description: "A single management platform simplifies both PTT dialogues and alerts, while user access levels are managed via channel configurations - all protected through sign-in information."
          }, {
            icon: "/assets/icons/integration.png",
            title: "Multi-media Messaging",
            description: "Dispatch not only text, but voice notes and more for individuals and work groups. Unlimited work groups can be created to send specific messages to target audience."
          }].map((feature, index) => (
            <motion.div 
            key={index} 
            className="w-72 p-6 rounded-lg shadow-lg text-left border-[#00A1EA] border-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image src={feature.icon} width={40} height={40} alt={feature.title} />
            <h4 className="font-semibold mt-4 font-clash text-base">
              {feature.title}
            </h4>
            <p className="text-gray-600 text-sm mt-2 font-clash">{feature.description}</p>
            <motion.div 
                className="w-full h-1 bg-blue-600 mt-2" 
                initial={{ scaleX: 0 }} 
                whileInView={{ scaleX: 1 }} 
                transition={{ duration: 1, ease: "easeOut" }} 
                viewport={{ once: true }}
              />
          </motion.div>
          ))}
        </div>
      </section>
      
      {/* Product Cards isafe */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#EABFB9] to-[#F5F5F5] text-center relative">
        <h3 className="text-2xl font-bold text-gray-900 text-left max-w-6xl mx-auto">I.SAFE MOBILE</h3>
        <div className="h-[2px] w-full bg-orange-500 my-2"></div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {MobileItems.map((product) => (
            <motion.div
              key={product.id}
              className="relative w-72 p-6 rounded-2xl shadow-lg cursor-pointer overflow-hidden bg-white"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProduct(product)}
            >
              {/* <div className="absolute inset-0 bg-orange-500 rounded-lg transform scale-105 z-[-1]"></div> */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-orange-500 rounded-full"></div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mx-auto relative z-10" 

                // className={`mx-auto ${product.id === 1 ? 'mt-10': product.id === 3 ? 'mt-10' : '' }`}
              >
                <Image src={product.image}
                width={ [3,1].includes(product.id) ? 400 : 200 }
                height={ [3,1].includes(product.id) ? 400 : 200 }
                alt={product.name} 
                className={`mx-auto ${product.id === 1 ? 'mt-10 pl-8' : product.id === 3 ? 'mt-10 pl-8' : '' }`}

                />
              </motion.div>
              <div className="absolute bottom-[-0] left-0 right-0 bg-orange-500 text-white font-bold text-sm rounded-b-lg w-[100%] px-4 py-2">Rugged Devices {product.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Cards conquest */}
      <section className="py-16 px-6 bg-gradient-to-b from-blue-300 to-blue-200 text-center relative">
        <h3 className="text-2xl font-bold text-gray-900 text-left max-w-6xl mx-auto">EMDOOR</h3>
        <div className="h-[2px] w-full bg-blue-500 my-2"></div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {MobileItems.map((product) => (
            <motion.div
              key={product.id}
              className="relative w-72 p-6 rounded-2xl shadow-lg cursor-pointer overflow-hidden bg-white"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProduct(product)}
            >
              {/* <div className="absolute inset-0 bg-orange-500 rounded-lg transform scale-105 z-[-1]"></div> */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-blue-800 rounded-full"></div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mx-auto relative z-10" 

                // className={`mx-auto ${product.id === 1 ? 'mt-10': product.id === 3 ? 'mt-10' : '' }`}
              >
                <Image src={product.image}
                width={ [3,1].includes(product.id) ? 400 : 200 }
                height={ [3,1].includes(product.id) ? 400 : 200 }
                alt={product.name} 
                className={`mx-auto ${product.id === 1 ? 'mt-10 pl-8' : product.id === 3 ? 'mt-10 pl-8' : '' }`}

                />
              </motion.div>
              <div className="font-clash absolute bottom-[-0] left-0 right-0 bg-blue-800 text-white font-bold text-sm rounded-b-lg w-[100%] px-4 py-2">Rugged Devices {product.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div 
            className="bg-gradient-to-b from-black to-gray-900 p-6 rounded-3xl shadow-lg max-w-4xl flex flex-col relative items-center ml-4 mr-4 ms:mr-4 ms:ml-4 md:mr-0 md:ml-0"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Judul dan Deskripsi */}
            <div className="flex justify-between items-center w-full mb-4">
              <h4 className="text-2xl font-bold text-white text-left w-1/2 font-clash">
                {selectedProduct.name}
              </h4>
              {/* <p className="text-sm text-gray-300 text-right w-1/2 font-clash">
                {selectedProduct.description}
              </p> */}
            </div>

            <div className="rounded-3xl bg-gradient-to-b from-gray-200 to-gray-100 flex w-full items-center shadow-lg p-6">
              {/* Bagian Teks & Spesifikasi */}
              <div className="w-1/1 text-gray-900 p-6 flex flex-col justify-between">
                <div className="bg-gradient-to-b from-gray-900 to-gray-600 text-white p-4 rounded-xl shadow-md w-fit max-w-md">
                  <p className="text-sm text-white font-clash">{selectedProduct.description}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {Array.isArray(selectedProduct?.specs) &&
                    selectedProduct.specs.map((spec, index) => (

                      <div key={index} className="bg-white p-2 rounded-lg shadow flex flex-col items-center">
                        <Image 
                          src={spec.icon} 
                          width={17} 
                          height={17} 
                          alt={spec.name} 
                          unoptimized 
                        />
                        <span className="text-sm text-black mt-2 ">{spec.value}</span>
                        <span className="text-xs text-gray-600">{spec.name}</span>
                      </div>
                    ))}
                </div>
                <button className="mt-4 bg-white text-gray-900 px-4 py-2 rounded">Contact</button>
              </div>

              {/* Bagian Gambar */}
              <div className="w-1/2 flex justify-end p-6">
                <Image 
                  src={selectedProduct.image} 
                  width={350} 
                  height={350} 
                  alt={selectedProduct.name} 
                  className="drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Tombol Close */}
            <button 
              className="absolute top-2 right-2 bg-orange-500 text-black rounded-full px-2 py-1"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

    
    </MotionDiv>
  );
};

export default MobilePage;
