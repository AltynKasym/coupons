import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Thumbs,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "./productSlider.scss";

import slideMain from "../../../../assets/images/detail-product/slide-main.png";
import { IProductInfo } from "../../../../types/app.interface";
import noImage from "../../../../assets/images/noImage/no-image.jpg";

const ProductSlider: FC<IProductInfo> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  let slider = [slideMain, slideMain, slideMain];

  return (
    <div className="product-slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs, FreeMode]}
        spaceBetween={50}
        navigation
        pagination={{ type: "fraction" }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {data.images.length !== 0 ? (
          data.images?.map((slide: any, index: number) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <img
                className="product-slider-img"
                src={slide.image}
                alt="slide"
              />
              <span className="product-slider-discount">
                {data.discount_percent}%
              </span>
            </SwiperSlide>
          ))
        ) : data.preview_image !== null ? (
          <SwiperSlide>
            <img
              className="product-slider-img"
              src={data.preview_image}
              alt="slide"
            />
            <span className="product-slider-discount">
              {data.discount_percent}%
            </span>
          </SwiperSlide>
        ) : (
          <SwiperSlide>
            <img className="product-slider-img" src={noImage} alt="slide" />
            <span className="product-slider-discount">
              {data.discount_percent}%
            </span>
          </SwiperSlide>
        )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="my-swiper"
      >
        {data.images?.map((slide: any, index: number) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <img
              className="product-slider-bottomImg"
              src={slide.image}
              alt="slide"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
