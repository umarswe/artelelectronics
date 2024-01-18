/* eslint-disable react/prop-types */
import "./style.css";

function NewsBox(props) {
  return (
    <div className="news__box">
      <div className="news__box-text_wrapper">
        <p className="news__box-date">{props.data.publish_date}</p>
        <p className="news__box-description">{props.data.introduction_text}</p>
      </div>
      <div className="image__wrapper">
        <img
          className="image__wrapper-img"
          src={props.data.image.file}
          alt="image"
        />
      </div>
    </div>
  );
}

export default NewsBox;
