import newsItems from "@/data/NewsItems";
import Image from "next/image";
import Link from "next/link";

const duplicatedNewsItems = [...newsItems, ...newsItems, ...newsItems];

export default function NewsSlider() {
  return (
    <div className="mt-8 w-full overflow-hidden">
      <div className="pt-20 mb-8 font-clash">
        <h1 className="text-center text-4xl text-white font-bold">NEWS</h1>
        <p className="text-center text-white">Exploring Update News About</p>
      </div>

      {/* Wrapper untuk marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex flex-nowrap space-x-4  min-w-max animate-marquee"> 
          {duplicatedNewsItems.map((news, index) => (
            <Link href={news.link} key={index} passHref>
              <div className="relative w-[500px] h-[350px] rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition">
                <Image
                  src={news.image}
                  alt={news.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white px-3 py-2">
                  <h3 className="text-lg font-semibold font-clash">{news.title}</h3>
                  <p className="text-sm opacity-80 font-clash">{news.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
