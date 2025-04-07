import tablet, { default as desktop, default as mobile } from "@/assets-ctu/background/display-product.jpg";
import Background from '@/components/Background';
import DisplayItems from '@/data/DisplayItems';
import Link from 'next/link';

const DisplayCard = () => {

  const largeImageIds = [1,2,4,5];

  const mtLargeIds = [1];

  return (
    <div className="relative min-h-screen">
        {/* Banner Section */}
        {/* <div className="relative z-10 h-[60vh] bg-cover bg-center flex items-start justify-start text-white" */}
          {/* // style={{ backgroundImage: `url('/assets/background/display-product.jpg')` }}> */}
          <div className="relative z-10 text-white font-clash pl-10 pt-28 sm:pl-10 sm:pt-24 md:pl-24 md:pt-36 max-w-[600px]">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold">DISPLAY AND LED</h1>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold py-2 md:py-4">SOLUTION</h1>
          </div>
        {/* </div> */}

      {/* Background Section */}
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />

      {/* Content Section */}
      <main className="relative z-10 font-clash pt-20 p-6 md:px-24 lg:min-h-[80vh]">
        {/* <h3 className="text-center text-white text-3xl font-bold mb-4">All Category</h3> */}
        {/* <p className="text-center text-lg text-white mb-10">Meet the future of productivity and efficiency with us. Maximize productivity and competitiveness with solutions tailor-made to address your needs</p> */}

        {/* Card Section */}
        <div className="flex justify-center gap-10 flex-wrap mb-24">
          {DisplayItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-4">
              <Link href={item.path}>
                <div 
                  className="group w-[280px] h-[280px] rounded-2xl bg-cover bg-center shadow-lg transition duration-300 cursor-pointer relative border-2 border-white"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-2xl">

                <img
                    src={item.hoverImage}
                    alt={item.title}
                    style={{
                      width: largeImageIds.includes(item.id) ? "400px" : "280px",
                      height: largeImageIds.includes(item.id) ? "400px" : "280px",
                    }}
                    className={`absolute inset-0 m-auto transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-2 ${
                      mtLargeIds.includes(item.id) ? "items-center" : ""
                    }`}
                />

                  <h3 className="font-clash absolute bottom-6 left-0 right-0 text-center text-white text-lg font-bold group-hover:scale-140 group-hover:rotate-1">{item.title}</h3>
                </div>
                  
                </div>
              </Link>
              {/* <h3 className="text-white text-center text-xl font-bold">{item.title}</h3> */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default DisplayCard;
