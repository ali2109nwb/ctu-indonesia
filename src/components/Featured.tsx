import bg from "@/assets-ctu/background/featured-back.jpeg";
import Image from "next/image";

const Featured = () => {
  const services = [
    {
      title: "Consulting",
      description: "Our devices are engineered to withstand harsh environments, ensuring safety and performance wherever you work.",
      icon: "/assets/icons/consulting.png",
    },
    {
      title: "Design",
      description: "Experience swift and efficient communication with extensive network coverage and reliability.",
      icon: "/assets/icons/design.png",
    },
    {
      title: "Integration",
      description: "Easily integrate our rugged devices into your digital infrastructure for enhanced productivity.",
      icon: "/assets/icons/integration.png",
    },
    {
      title: "Maintenance",
      description: "Monitor your team with real-time location tracking and centralized management tools.",
      icon: "/assets/icons/maintenance.png",
    },
  ];

  return (
    <div className="relative z-0">
      <img src={bg.src} className="object-cover w-full h-full absolute top-0 left-0" alt="Background" />

      <div className="absolute z-10 top-0 left-0 ml-8 mt-20">
        <div className="absolute inset-0 bg-black rounded-xl py-80 hover:bg-opacity-40 hover:bg-blue-500 backdrop-blur-sm opacity-40 z-0 px-[750px]"></div>

        <div className="relative pl-5 z-10 mt-5 grid grid-cols-2">
          <div className="">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center leading-tight sm:leading-normal">Featured Solution</h3>
            <p className="text-white">
              Discover the emerging age of competency and talent via innovative methods.
            </p>
          </div>

          {/* Card Container */}
          <div className="grid grid-cols-11 gap-4 md:pr-0 pr-38">
            {/* Kiri Atas & Bawah */}
            <div className="mt-5 col-span-5">
              {services.slice(0, 2).map((service, index) => (
                <div key={index} className="bg-white rounded-lg mb-10 flex flex-col p-6 shadow-lg">
                  <Image src={service.icon} alt={service.title} width={50} height={50} className="mb-2" />
                  <span className="font-semibold text-gray-900">{service.title}</span>
                  <span className="text-gray-600 text-sm">{service.description}</span>
                </div>
              ))}
            </div>

            <div></div>

            {/* Kanan Atas & Bawah */}
            <div className="mt-5 col-span-5">
              {services.slice(2, 4).map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg mb-10">
                  <Image src={service.icon} alt={service.title} width={50} height={50} className="mb-2" />
                  <span className="font-semibold text-gray-900">{service.title}</span>
                  <span className="text-gray-600 text-sm">{service.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Featured;
