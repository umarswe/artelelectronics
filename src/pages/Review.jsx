import Advantages from "../sections/Review/Advantages";
import AdvantagesInfo from "../sections/Review/AdvantagesInfo";
import Branches from "../sections/Review/Branches";

import ProductView from "../sections/Review/ProductView";
import ReviewImage from "../sections/Review/ReviewImage";
import Contact from "../sections/Shared/Contact";

function Review() {
  return (
    <>
      <ReviewImage />
      <Advantages />
      <AdvantagesInfo />
      <ProductView />
      <Branches />
      <Contact />
    </>
  );
}

export default Review;
