// import tablet, { default as desktop, default as mobile } from "@/assets-ctu/background/display-product.jpg";
// import Background from '@/components/Background';
import ReferenceItems from "@/data/ReferenceItems";
import Link from 'next/link';

const ReferencePage = () => {
  
  return (
    <div className="min-h-screen font-clash flex flex-col justify-between">
        <main className="font-clash pt-36 p-6 md:px-24 lg:min-h-[80vh]">
          <h3 className="text-4xl text-white font-bold text-center mb-6">REFERENCES</h3>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-xs font-clash">
            Welcome to our comprehensive references section—a curated collection of resources, inspirations, and tools to guide you in your journey.
          </p>
          
          {/* Grid Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ReferenceItems.map((ref) => (
              <div key={ref.id} 
              className="relative overflow-hidden rounded-md shadow-md md:h-80 w-full aspect-[4/3] sm:aspect-[16/9]  border-blue-500 border-2">
                <img 
                  src={ref.image} 
                  alt={ref.title} 
                  className="w-full object-cover h-full"
                />
                <div className="absolute bottom-0 w-full bg-[#003366] text-white py-0 font-clash flex justify-between">
                  <span className="text-left font-semibold pt-1 px-2">{ref.title}</span>
                  <span className="font- font-semibold text-sm text-gray-300 py-2 pr-2">{ref.pb}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20 mb-8 font-clash">
            <h3 className="text-3xl font-bold text-white mb-4">READY TO TRANSFORM YOUR ROOM?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6 font-clash text-sm">
              Welcome to your one-stop destination for room transformation! Whether you're looking to create a cozy sanctuary, a modern workspace, or a vibrant living area, we're here to help you turn your vision into reality.
            </p>
            <Link href="/contact">
              <button className="bg-blue-500 text-white text-lg font-semibold px-6 py-2 rounded-full hover:bg-blue-600 transition-all">
                Contact Sales
              </button>
            </Link>
          </div>
        </main>
      </div>
  );
}

export default ReferencePage;