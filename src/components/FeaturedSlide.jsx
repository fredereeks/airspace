import {Swiper, SwiperSlide} from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import { houseData } from '../data/houseData'
import ProductCard from './ProductCard'

export default function FeaturedSlide() {
  return (
   <Swiper
        slidesPerView={3}
        modules={[Autoplay]}
        breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 15 },
            650: { slidesPerView: 3, spaceBetween: 15 },
            960: { slidesPerView: 4, spaceBetween: 15 },
        }}
        autoplay={{delay: 4000}}
        fadeEffect={{crossFade: true}}
        loop={true}
        direction='horizontal'
        className='overflow-x-hidden w-full py-5'
   >
    {

        houseData.filter(house => house.featured === true).map(house => (
            <SwiperSlide key={house.id}>
                <ProductCard key={house.id} {...house} full={false} />
            </SwiperSlide>
        ))
    }
   </Swiper>
  )
}
