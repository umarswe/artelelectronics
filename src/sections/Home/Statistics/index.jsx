import CountUp from "react-countup";
import ButtonMoreSvg from "images/Home/button-more.svg";
import StatisticsImage from "images/Home/statistics-img.png";
import "./style.css";

function Statistics() {
  return (
    <div className="statistics">
      <section className="scroll__reveal">
        <div className="statistics__description-wrapper">
          <h2 className="statistics__description">
            <span>
              Artel Electronics – лидер по производству <br /> бытовой техники и
              электроники в Центрально- <br />
              Азиатском регионе.
            </span>
          </h2>

          <button className="statistics__description-action">
            О нашей компании
            <img src={ButtonMoreSvg} alt="more" />
          </button>
        </div>

        <p className="statistics__info">
          <span>
            Под брендом Artel производится 22 товарные категории бытовой
            техники, <br /> включая решения для кухни, гостиной и уборки.
          </span>
        </p>

        <div className="statistics__image-wrapper">
          <img
            className="statistics__image"
            src={StatisticsImage}
            alt="statistics image"
          />
        </div>
      </section>

      <div className="statistics__wrapper">
        <h3 className="statistics__wrapper-title">
          Почему выбирают Artel Electronics?
        </h3>
        <div className="statistics__container">
          <div className="statistics__container-box">
            <span className="statistics__container-info">На рынке</span>
            <p className="statistics__container-numbers">
              <CountUp end={22} duration={5} />
            </p>
          </div>
          <div className="statistics__container-box">
            <span className="statistics__container-info">
              Товарные категории
            </span>
            <p className="statistics__container-numbers">
              <CountUp end={14} duration={5} />
            </p>
          </div>
          <div className="statistics__container-box">
            <span className="statistics__container-info">Количество SKU</span>
            <p className="statistics__container-numbers">
              <CountUp end={95} duration={5} />
            </p>
          </div>
          <div className="statistics__container-box">
            <span className="statistics__container-info">
              Количество заводов
            </span>
            <p className="statistics__container-numbers">
              <CountUp end={12} duration={5} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
