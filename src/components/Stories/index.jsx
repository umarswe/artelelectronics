import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import stories1 from "../../assets/images/benefits-image-1.png";
import stories2 from "../../assets/images/benefits-image-2.png";
import stories3 from "../../assets/images/benefits-image-3.png";
import stories4 from "../../assets/images/benefits-image-4.png";

const storiesImage = [
  {
    image: stories1,
  },
  {
    image: stories2,
  },
  {
    image: stories3,
  },
  {
    image: stories4,
  },
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="stories"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}

        {storiesImage.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt="Image" />
            <p className="modal__image-text">
              Холодильник Artel обеспечивается равномерное распространение
              холодной температуры от задней стенки к дверце холодильника, чтобы
              каждый продукт дольше оставался свежим.
            </p>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
