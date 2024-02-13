import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import deg360 from "../../assets/images/image-360deg.mp4";
// import deg360Thumb from "../../assets/images/360deg.svg";
// import middle from "../../assets/images/scrool-image-middle.png";
// import left from "../../assets/images/scroll-image-left.png";
// import right from "../../assets/images/scroll-image-right.png";
import reviewImage from "../../assets/images/review_image.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="swiper-container">
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={15}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-thumbs"
        direction="vertical"
      >
        {/* <SwiperSlide>
          <img className="image-scroll" src={deg360Thumb} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-scroll" src={middle} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-scroll" src={left} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-scroll" src={right} />
        </SwiperSlide> */}
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-main"
      >
        <SwiperSlide>
          <video loop muted autoPlay={true} width={800}>
            <source src={deg360} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-main" src={reviewImage} alt="Image Review" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-main" src={reviewImage} alt="Image Review" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-main" src={reviewImage} alt="Image Review" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
