// import tablet, { default as desktop, default as mobile } from "@/assets-ctu/background/display-product.jpg";
// import Background from '@/components/Background';
import ReferenceItems from "@/data/ReferenceItems";
// import Link from 'next/link';

const ReferencePage = () => {
  
  return (
    <div className="min-h-screen font-clash flex flex-col justify-between">
        <main className="font-clash pt-36 p-6 md:px-24 lg:min-h-[80vh]">
          <h3 className="text-4xl text-white font-bold text-center mb-6">REFERENCES</h3>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Welcome to our comprehensive references section—a curated collection of resources, inspirations, and tools to guide you in your journey.
          </p>
          
          {/* Grid Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ReferenceItems.map((ref) => (
              <div key={ref.id} 
              className="relative overflow-hidden rounded-md shadow-md md:h-80 w-full aspect-[4/3] sm:aspect-[16/9]  border-blue-500 border-2 cursor-pointer">
                <img 
                  src={ref.image} 
                  alt={ref.title} 
                  className="w-full object-cover h-full"
                />
                <div className="absolute bottom-0 w-full bg-[#003366] text-white text-center py-1 font-clash font-semibold">
                  {ref.title}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
  );
}

export default ReferencePage;
