import CountUp from "react-countup";

import "./style.css";

function Statistics() {
  return (
    <div className="statistics">
      <section className="scroll__reveal">
        <h2 className="statistics__description">
          <span>
            Artel Electronics – крупнейший производитель бытовой <br />
            техники и электроники в Центральной Азии, и один <br />
            из самых популярных брендов в Узбекистане.
          </span>
        </h2>
        <p className="statistics__info">
          <span>
            Компания Artel была основана в 2011 году, начав свою историю <br />{" "}
            с производства кухонных плит и пылесосов. В настоящее время <br />{" "}
            бренд Artel производит 22 продуктовые категории, включая <br />
            решения для гостиной, для кухни, стирки и уборки.
          </span>
        </p>
      </section>

      <div className="statistics__container">
        <div className="statistics__container-box">
          <p className="statistics__container-numbers">
            <CountUp end={22} duration={5} />
          </p>
          <span className="statistics__container-info">
            Категорий <br /> электроприборов
          </span>
        </div>
        <div className="statistics__container-box">
          <p className="statistics__container-numbers">
            <CountUp end={14} duration={5} />
          </p>
          <span className="statistics__container-info">
            Стран <br /> экспорта
          </span>
        </div>
        <div className="statistics__container-box">
          <p className="statistics__container-numbers">
            <CountUp end={95} duration={5} />
          </p>
          <span className="statistics__container-info">
            Рыночной доли от общего <br /> объема рынка в 2023 году
          </span>
        </div>
        <div className="statistics__container-box">
          <p className="statistics__container-numbers">
            <CountUp end={12} duration={5} />
          </p>
          <span className="statistics__container-info">
            лет на <br /> рынке
          </span>
        </div>
        <div className="statistics__container-box">
          <p className="statistics__container-numbers">
            <CountUp end={9000} duration={2} />
          </p>
          <span className="statistics__container-info">
            Специалистов по всей <br /> Республике Узбекистан
          </span>
        </div>
      </div>

      <div className="statistics__button">
        <button className="statistics__button">Узнать больше</button>
      </div>
    </div>
  );
}

export default Statistics;
