import "swiper/css";
import ImageCarousel from "../sections/Shared/ImageCarousel";
import {
  NewProducts,
  ProductInfo,
  RecommendedProducts,
  Services,
  Statistics,
} from "sections/Home";

import BackImg1 from "images/Home/artel-bg-1.png";
import BackImg2 from "images/Home/artel-bg-2.png";
import BackImg3 from "images/Home/artel-bg-3.png";
import BackImg4 from "images/Home/artel-bg-4.png";
import Frame1 from "images/Home/Frame-1.svg";
import Frame2 from "images/Home/Frame-2.svg";
import Frame3 from "images/Home/Frame-3.svg";
import Frame4 from "images/Home/Frame-4.svg";

const homeData = [
  {
    backgroundImage: BackImg1,
    svgContent: Frame1,
    blurButtonLabel: "Узнать больше",
    whiteButtonLabel: "Выбрать технику",
  },
  {
    backgroundImage: BackImg2,
    svgContent: Frame2,
    blurButtonLabel: "Узнать больше",
    whiteButtonLabel: "Выбрать технику",
  },
  {
    backgroundImage: BackImg3,
    svgContent: Frame3,
    blurButtonLabel: "Узнать больше",
    whiteButtonLabel: "Выбрать технику",
  },
  {
    backgroundImage: BackImg4,
    svgContent: Frame4,
    blurButtonLabel: "Узнать больше",
    whiteButtonLabel: "Выбрать технику",
  },
];

function Home() {
  return (
    <>
      <ImageCarousel asdfhlakjsdfhkjlahsdljkfhalskdjfh={homeData} />
      <Statistics />
      <ProductInfo />
      <RecommendedProducts />
      <NewProducts />
      <Services />
    </>
  );
}

export default Home;
