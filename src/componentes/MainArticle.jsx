import image1 from "../assets/images/1.webp";
import image2 from "../assets/images/2.webp";
import image3 from "../assets/images/3.webp";
import image4 from "../assets/images/4.webp";
import { MainArticleText } from "./MainArticleText";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export const MainArticle = () => {
  const images = [image1, image2, image3, image4];

  return (
    <section className="mb-12 flex-col lg:flex lg:flex-row-reverse items-center justify-center lg:justify-between">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper lg:w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <MainArticleText />

      
    </section>
  );
};
