import "./style.css";
import Arrow from "../../../assets/images/Arrow.svg";

function Hero() {
  const handleScroll = () => {
    document
      .querySelector("#catalog-brands")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="catalog__hero">
      <div className="catalog__hero-wrapper">
        <h1 className="catalog__wrapper-title">
          Материалы <br /> для загрузки
        </h1>
        <p className="catalog__wrapper-description">
          Скачайте руководства пользователя <br /> и другие полезные документы
          для вашего <br /> продукта
        </p>
      </div>
      <div className="catalog__scroll-bottom" onClick={handleScroll}>
        <img className="catalog__scroll-icon_bottom" src={Arrow} alt="Arrow" />
      </div>
    </div>
  );
}

export default Hero;
