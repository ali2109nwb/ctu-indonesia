/* eslint-disable import/no-anonymous-default-export */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import 'swiper/css/autoplay';

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function createSlide(text1: string, text2: string) {
  return (
    <SwiperSlide>      
         <div  className="cursor-pointer  flex  lg:justify-center lg:items-center z-10 
         lg:grid lg:grid-cols-9 gap-2 
          hover:bg-slate-500 hover:bg-opacity-60 hover:backdrop-blur-xl text-white 
          bg-black backdrop-blur-x1 w-full p-4 bg-opacity-70 rounded-xl ">
            <div className="text-3xl ml-10 mr-5 flex col-span-5" >
              {text1}
            <div className="hidden lg:block md:block border-l-2 border-white h-40"></div>
            </div>
            <div className="text-xl ml-10 mr-10 col-span-4">
              {text2}
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
    >
     
      {createSlide("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat sed nam quasi magnam ad eum, labore nisi modi tenetur necessitatibus pariatur quo saepe maxime magni dolore rerum voluptatum totam!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat sed nam quasi magnam ad eum, labore nisi modi tenetur necessitatibus pariatur quo saepe maxime magni dolore rerum voluptatum totam!")}
      {createSlide("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat sed nam quasi magnam ad eum, labore nisi modi tenetur necessitatibus pariatur quo saepe maxime magni dolore rerum voluptatum totam!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat sed nam quasi magnam ad eum, labore nisi modi tenetur necessitatibus pariatur quo saepe maxime magni dolore rerum voluptatum totam!")}
      {createSlide("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat sed nam quasi magnam ad eum, labore nisi modi tenetur necessitatibus pariatur quo saepe maxime magni dolore rerum voluptatum totam!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat sed nam quasi magnam ad eum, labore nisi modi tenetur necessitatibus pariatur quo saepe maxime magni dolore rerum voluptatum totam!")}
      

    </Swiper>
  );
};