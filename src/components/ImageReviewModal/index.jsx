/* eslint-disable react/prop-types */
import "./style.css";
import ReviewImage from "../../sections/Shared/ReviewImage";
import { Link } from "react-router-dom";

function ImageReviewModal({ imageReviewRef }) {
  return (
    <div className="image__review-modal" ref={imageReviewRef}>
      <div className="image__review-wrapper">
        <div
          className="image__review-close"
          onClick={() => {
            imageReviewRef.current.style.visibility = "hidden";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M22.4922 43.124C33.8359 43.124 43.1172 33.8428 43.1172 22.499C43.1172 11.1553 33.8359 1.87402 22.4922 1.87402C11.1484 1.87402 1.86719 11.1553 1.86719 22.499C1.86719 33.8428 11.1484 43.124 22.4922 43.124ZM29.4238 15.5683C30.0279 16.1724 30.0279 17.1518 29.4238 17.7559L24.6807 22.499L29.4238 27.2421C30.0279 27.8461 30.0279 28.8256 29.4238 29.4297C28.8197 30.0338 27.8403 30.0338 27.2362 29.4297L22.4931 24.6866L17.7501 29.4297C17.146 30.0338 16.1665 30.0338 15.5624 29.4297C14.9584 28.8256 14.9584 27.8461 15.5624 27.2421L20.3055 22.499L15.5624 17.7559C14.9584 17.1518 14.9584 16.1724 15.5624 15.5683C16.1665 14.9642 17.146 14.9642 17.7501 15.5683L22.4931 20.3114L27.2362 15.5683C27.8403 14.9642 28.8197 14.9642 29.4238 15.5683Z"
              fill="#4F5359"
            />
          </svg>
        </div>
        <ReviewImage />
        <Link to="/review">
          <button className="image__revie-full">Подробнее о товаре</button>
        </Link>
      </div>
    </div>
  );
}

export default ImageReviewModal;
