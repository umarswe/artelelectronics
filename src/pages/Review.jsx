import Advantages from "../sections/Review/Advantages";
import AdvantagesInfo from "../sections/Review/AdvantagesInfo";
import Branches from "../sections/Review/Branches";

import ProductView from "../sections/Review/ProductView";
import ReviewImage from "../sections/Shared/ReviewImage";
import Contact from "../sections/Shared/Contact";

function Review() {
  return (
    <>
      <div style={{ paddingTop: "200px" }}>
        <ReviewImage />
      </div>
      <Advantages />
      <AdvantagesInfo />
      <ProductView />
      <Branches />
      <Contact />
    </>
  );
}

export default Review;
