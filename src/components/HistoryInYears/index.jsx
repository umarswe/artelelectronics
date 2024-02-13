/* eslint-disable react/prop-types */
import "./style.scss";

function HistoryInYears({
  heading,
  subheading,
  text,
  image,
  width,
  height,
  reverse,
  column,
}) {
  return (
    <div
      className={`history__box ${reverse ? "history__box-reverse" : ""} ${
        column ? "history__box-column" : ""
      }`}
    >
      <div className="history__box-info_wrapper">
        <h2 className="history__box-info_heading">{heading}</h2>
        <p className="history__box-info-subheading">{subheading}</p>
        <p className="history__box-info-text">{text}</p>
      </div>
      <div className="history__box-photo_wrapper">
        <img
          src={image}
          alt="history"
          style={{ width: width, height: height }}
        />
      </div>
    </div>
  );
}

export default HistoryInYears;
