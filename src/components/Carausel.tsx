/* eslint-disable import/no-anonymous-default-export */
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

function createSlide(imageSrc: string, text: string) {
  return (
    <SwiperSlide>
      <div className="cursor-pointer flex flex-col md:flex-row lg:justify-center lg:items-center z-10 
      lg:grid lg:grid-cols-9 gap-2
      hover:bg-slate-500 hover:bg-opacity-60 hover:backdrop-blur-xl text-white 
      bg-black backdrop-blur-x1 w-full md:p-2 bg-opacity-70 rounded-xl max-h-[300px] max-w-[80%] mx-auto">
        
        {/* Bagian kiri - Gambar */}
        <div className="w-full md:w-auto col-span-5 flex justify-between items-center">
          <img src={imageSrc} alt="News Image" className="w-full md:w-2/3 h-auto rounded-xl" />
        </div>

        {/* Bagian kanan - Teks */}
        <div className="text-xl ml-2 mr-10 col-span-4 flex text-left items-center mt-2 md:mt-0  ">
          {text}
        </div>
      </div>
    </SwiperSlide>
  );
}

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      className="mt-38"
    >
      {createSlide("/assets/news/videotron-news.png", "Sambar Videotron api dari lantai 7 gedung K-Link . . .")}
      {createSlide("/assets/news/newsiphone16-back.jpg", "Pemerintah melalui Kementerian Perindustrian (Kemenperin) berencana memblokir atau menonaktifkan nomor seri International Mobile Equipment Identity (IMEI) iPhone 16 . . .")}
      {createSlide("/assets/news/digital-news.png", "Pemerintah terus mempercepat transformasi digital untuk mendukung kemandirian ekonomi, penguasaan teknologi, dan pengembangan sumber daya manusia (SDM) unggul . . . ")}
    </Swiper>
  );
};