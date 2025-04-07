"use client";

// import mobileBackground from "@/assets-ctu/background/mobile-back.png";
import tablet, { default as desktop, default as mobile } from "@/assets-ctu/background/mobile-back.png";
import agmM7 from "@/assets-ctu/product/mobile/Rugged-Technology-930.png";
import Background from "@/components/Background";
import MotionDiv from "@/components/MotionDiv";
import AgmItems from "@/data/AgmItems";
import ConquestItems from "@/data/ConquestItems";
import EmdoorItems from "@/data/EmdoorItems";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  specs: { name: string; value: string; icon: string }[];
  brosur: string;
}


const MobilePage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // const sizeStyles = {
  //   1: { width: 250, height: 250, mt: "mt-6" }, // ID 2 lebih besar
  //   2: { width: 220, height: 220, mt: "mt-4" }, // ID 3 sedikit lebih besar
  //   3: { width: 260, height: 260, mt: "mt-8" }, // Misalnya, ID 4 juga ingin diperbesar
  // };


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
          <div className="text-white md:w-1/2 text-left md:text-left font-clash md:mb-8">
            <h3 className="md:whitespace-nowrap text-3xl ml-2 md:ml-0 mt-1 md:mt-0 md:text-5xl font-bold">Rugged Technology</h3>
            <h3 className="md:whitespace-nowrap text-3xl ml-2 md:ml-0 md:text-5xl font-bold py-4">Ready for Any Challenge</h3>
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
              // width={380}
              // height={380}
              className="max-w-xs md:max-w-md mt-24 md:mt-28 md:ml-80 drop-shadow-2xl w-[380px] h-[380px] md:w-[400] md:h-[450px]"
              alt="AGM M7"
            />
          </motion.div>
        </div>
      </div>


      {/* Quick Menu Section */}
      <section className="py-10 bg-white text-center font-clash font-bold text-sm">
        <h3 className="text-2xl font-semibold text-gray-900">Quick Menu</h3>

        <div className="mt-4 flex flex-wrap justify-center gap-4 ">
        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              const section = document.getElementById("conquest");
              if (section) {
                window.history.replaceState(null, "", "#conquest"); // Update URL tanpa refresh
                const yOffset = -95; // Atur offset biar judulnya ikut terlihat
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

                setTimeout(() => {
                  window.scrollTo({ top: y, behavior: "smooth" });
                }, 150); // Delay kecil biar smooth
              }
            }
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-full z-10 font-sans"
        >
          CONQUEST
        </button>

        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              const section = document.getElementById("emdoor");
              if (section) {
                window.history.replaceState(null, "", "#emdoor"); // Update URL tanpa refresh
                const yOffset = -95; // Atur offset biar judulnya ikut terlihat
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

                setTimeout(() => {
                  window.scrollTo({ top: y, behavior: "smooth" });
                }, 150); // Delay kecil biar smooth
              }
            }
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-full z-10 font-sans"
        >
          EMDOOR
        </button>

        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              const section = document.getElementById("agm");
              if (section) {
                window.history.replaceState(null, "", "#agm"); // Update URL tanpa refresh
                const yOffset = -95; // Atur offset biar judulnya ikut terlihat
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

                setTimeout(() => {
                  window.scrollTo({ top: y, behavior: "smooth" });
                }, 150); // Delay kecil biar smooth
              }
            }
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-full z-10 font-sans"
        >
          AGM
        </button>


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
      
      {/* Product Cards conquest */}
      <section id="conquest" className="py-16 px-6 bg-gradient-to-b from-[#EABFB9] to-[#F5F5F5] text-center relative">
        <h3 className="text-2xl font-bold text-gray-900 text-left max-w-6xl mx-auto font-sans">CONQUEST</h3>
        <div className="h-[2px] w-full bg-orange-500 my-2"></div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {ConquestItems.map((product) => (
            <motion.div
              key={product.id}
              className="relative w-72 p-6 rounded-2xl shadow-lg cursor-pointer overflow-hidden bg-white"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProduct(product)}
            >
              {/* <div className="absolute inset-0 bg-orange-500 rounded-lg transform scale-105 z-[-1]"></div> */}
              <div className="absolute top-2 right-2 w-4 h-4 bg-orange-500 rounded-full"></div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mx-auto relative z-10" 

                // className={`mx-auto ${product.id === 1 ? 'mt-10': product.id === 3 ? 'mt-10' : '' }`}
              >
                <Image src={product.image}
                width={ [3,1].includes(product.id) ? 250 : 200 }
                height={ [3,1].includes(product.id) ? 250 : 200 }
                alt={product.name} 
                className={`mx-auto ${product.id === 1 ? 'mt-2 pl-8 pb-8' : product.id === 3 ? 'mt-4 pl-8 pb-2' : '' }`}

                />
              </motion.div>
              <div className="font-sans font-bold absolute bottom-[-0] left-0 right-0 bg-orange-500 text-white text-sm rounded-b-lg w-[100%] px-4 py-2">{product.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Cards emdoor */}
      <section id="emdoor" className="py-16 px-6 bg-gradient-to-b from-blue-300 to-blue-200 text-center relative">
        <h3 className="font-sans text-2xl font-bold text-gray-900 text-left max-w-6xl mx-auto">EMDOOR</h3>
        <div className="h-[2px] w-full bg-blue-500 my-2"></div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {EmdoorItems.map((product) => (
            <motion.div
              key={product.id}
              className="relative w-72 p-6 rounded-2xl shadow-lg cursor-pointer overflow-hidden bg-white"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProduct(product)}
            >
              {/* <div className="absolute inset-0 bg-orange-500 rounded-lg transform scale-105 z-[-1]"></div> */}
              <div className="absolute top-2 right-2 w-4 h-4 bg-blue-800 rounded-full"></div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mx-auto relative z-10" 

                // className={`mx-auto ${product.id === 1 ? 'mt-10': product.id === 3 ? 'mt-10' : '' }`}
              >
                <Image src={product.image}
                width={ [3,1].includes(product.id) ? 150 : 150 }
                height={ [3,1].includes(product.id) ? 150 : 150 }
                alt={product.name} 
                className={`mx-auto ${product.id === 1 ? 'mb-6' : product.id === 3 ? 'mt-0' : '' }`}

                />
              </motion.div>
              <div className="font-sans absolute bottom-[-0] left-0 right-0 bg-blue-800 text-white font-bold text-sm rounded-b-lg w-[100%] px-4 py-2">{product.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Cards agm */}
      <section id="agm" className="py-16 px-6 bg-gradient-to-b from-blue-300 to-blue-200 text-center relative">
        <h3 className="font-sans text-2xl font-bold text-gray-900 text-left max-w-6xl mx-auto">AGM</h3>
        <div className="h-[2px] w-full bg-blue-500 my-2"></div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {AgmItems.map((product) => (
            <motion.div
              key={product.id}
              className="relative w-72 p-6 rounded-2xl shadow-lg cursor-pointer overflow-hidden bg-white"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProduct(product)}
            >
              {/* <div className="absolute inset-0 bg-orange-500 rounded-lg transform scale-105 z-[-1]"></div> */}
              <div className="absolute top-2 right-2 w-4 h-4 bg-blue-800 rounded-full"></div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mx-auto relative z-10" 

                // className={`mx-auto ${product.id === 1 ? 'mt-10': product.id === 3 ? 'mt-10' : '' }`}
              >
                <Image src={product.image}
                width={ [1].includes(product.id) ? 250 : 190 }
                height={ [1].includes(product.id) ? 250 : 190 }
                alt={product.name} 
                className={`mx-auto ${product.id === 1 ? 'mt-0 pl-0' : product.id === 2 ? 'mt-0 pl-0' : '' }`}
                />
              </motion.div>
              <div className="font-sans absolute bottom-[-0] left-0 right-0 bg-blue-800 text-white font-bold text-sm rounded-b-lg w-[100%] px-4 py-2">{product.name}</div>
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
            className="bg-gradient-to-b from-black to-gray-900 p-6 rounded-3xl shadow-lg max-w-4xl md:max-w-[90%] flex flex-col relative items-center ml-4 mr-4 ms:mr-4 ms:ml-4 md:mr-0 md:ml-0"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Judul dan Deskripsi */}
            <div className="flex flex-wrap justify-center md:justify-between items-center w-full mb-4">
              <h4 className="text-2xl font-bold text-white text-left w-1/2 font-clash">
                {selectedProduct.name}
              </h4>
              {/* <p className="text-sm text-gray-300 text-right w-1/2 font-clash">
                {selectedProduct.description}
              </p> */}
            </div>

            <div className="rounded-3xl bg-gradient-to-b from-gray-200 to-gray-100 flex flex-col md:flex-row max-h-[550px] md:max-h-none max-w-[370px] md:max-w-none items-center shadow-lg p-6">
              {/* Bagian Teks & Spesifikasi */}
              <div className="w-full md:w-1/2 text-gray-900 p-6 flex flex-col justify-between mt-0">
                {/* <div className="bg-gradient-to-b from-gray-900 to-gray-600 text-white p-3 rounded-xl shadow-md w-fit max-w-md">
                  <p className="text-sm text-white font-clash">{selectedProduct.description}</p>
                </div> */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {Array.isArray(selectedProduct?.specs) &&
                    selectedProduct.specs.map((spec, index) => (

                      <div key={index} className="bg-white p-1 md:p-2 rounded-lg shadow flex flex-col items-center max-w-none">
                        <Image
                          src={spec.icon}
                          width={18}
                          height={18}
                          alt={spec.name}
                          unoptimized
                        />
                        <span className="text-xs text-black mt-2 font-clash text-center">{spec.value}</span>
                        <span 
                          className={`text-[10px] text-gray-600 font-clash text-center ${
                            index === 1 ? "mt-0" : ""
                          }`}
                        >
                          {spec.name}
                        </span>
                      </div>
                    ))}
                </div>
                  <a
                  href={selectedProduct.brosur}
                  target="blank"
                  className="font-clash mt-2 bg-gradient-to-b from-gray-900 to-gray-600 text-white px-4 py-2 text-sm rounded text-center">
                  Download Brosur
                </a>
              </div>

              {/* Bagian Gambar */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-0 md:mb-0 order-first md:order-none">
                <Image 
                  src={selectedProduct.image} 
                  width={200} 
                  height={200} 
                  alt={selectedProduct.name} 
                  className="drop-shadow-2xl max-w-[170px] md:max-w-[300px] object-contain"
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
