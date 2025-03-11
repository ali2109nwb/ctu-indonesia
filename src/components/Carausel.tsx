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

const data = [
    {
        id: 1,
        text1 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci enim temporibus iste necessitatibus delectus, amet, placeat libero cumque facere cum error voluptatibus impedit nobis voluptas, ullam assumenda explicabo non?",
        text2: "lorem ipsum "
    },
]
function createSlide() {
  return (
    <SwiperSlide>
        {data.map((item) => (
            
         <div key={item.id} className="z-10 lg:grid lg:grid-cols-2 gap-2 hover:bg-slate-500 hover:bg-opacity-60 hover:backdrop-blur-xl text-white bg-black backdrop-blur-x1 w-full p-4 bg-opacity-70 rounded-xl ">
            <div className="text-xl" >
              {item.text1}
              <div className="bar bg-white w-1"></div>
            </div>
            <div className="text-xl">
              {item.text2}
            </div>
          </div>
        ))}
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
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
    </Swiper>
  );
};