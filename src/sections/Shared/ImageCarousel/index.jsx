/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ImageCarousel = ({ asdfhlakjsdfhkjlahsdljkfhalskdjfh }) => {
  const swiperRef = useRef(null);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const slideToIndexUmar = (index) => {
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <div className="swiper__wrapper">
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        pagination={pagination}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="imageCarouselSwiper"
      >
        {asdfhlakjsdfhkjlahsdljkfhalskdjfh.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className="background__image"
              src={item.backgroundImage}
              alt="background"
            />

            <div className="item__container">
              {item.svgContent && (
                <img className="swiper__image-text" src={item.svgContent} />
              )}

              {item.newsContent && (
                <h3 className="hero__section-title">{item.newsContent}</h3>
              )}

              {item.textContent && (
                <h3 className="hero__section-desc">{item.textContent}</h3>
              )}

              <div className="home__buttons">
                {item.blurButtonLabel && (
                  <button className="home__buttons-more">
                    <a href="/news">{item.blurButtonLabel}</a>
                  </button>
                )}
                {item.whiteButtonLabel && (
                  <Link to="/shop">
                    <button className="home__buttons-choose">
                      {item.whiteButtonLabel}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pagination">
        <span className="pagination__page" onClick={() => slideToIndexUmar(0)}>
          01
        </span>
        <span className="pagination__page" onClick={() => slideToIndexUmar(1)}>
          02
        </span>
        <span className="pagination__page" onClick={() => slideToIndexUmar(2)}>
          03
        </span>
        <span className="pagination__page" onClick={() => slideToIndexUmar(3)}>
          04
        </span>
      </div>
    </div>
  );
};

export default ImageCarousel;
