'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow,Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'


interface Slider {
  id: number;
  image: string;
}

interface Props {
  sliders: Slider[];
 
}

const Sliders = ({ sliders}: Props) => {
  return ( 
    <>
   
    
    <Swiper
     effect={'coverflow'}
     grabCursor={true}
     centeredSlides={true}
     slidesPerView={3}
     spaceBetween={30}
     coverflowEffect={{
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows: true,
     }}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="text-main"
      >
     
  
  {sliders.map((item) => {
    return (
    
    <SwiperSlide key={item.id}> 
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image
          className="rounded-md w-full h-400 object-cover"
          
          src={item.image}
          alt="image"
          width={300}
          height={200}
         
        />
        
</div>

    </SwiperSlide>)
  })}

   
    </Swiper> </>);
};

export default Sliders;
