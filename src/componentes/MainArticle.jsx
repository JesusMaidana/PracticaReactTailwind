import imageMobile from "../assets/images/1.webp";
import imageDesktop from "../assets/images/1.webp";
import { MainArticleText } from "./MainArticleText";

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import {FreeMode, Pagination} from 'swiper/modules'
import {RxArrowTopRight} from 'react-icons/rx'

export const MainArticle = () => {
  return (
    <section className="mb-12">
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Articulo principal imagen" />
      </picture>

      <MainArticleText/>
    </section>
  );
};
