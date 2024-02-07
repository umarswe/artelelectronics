import "./style.css";
import StrategyImage from "../../../assets/images/strategy-image.png";

const STRATEGY__INFO = [
  {
    order: "01",
    title: "Ведущая позиция на рынке",
    description:
      "Сохранение и расширение нашей лидирующей позиции на внутреннем рынке, предлагая более широкий ассортимент продукции во всех сегментах.",
  },
  {
    order: "02",
    title: "Сервисные центры",
    description:
      "Расширение количества сервисных центров для повышения уровня удовлетворенности клиентов на протяжении всего жизненного цикла продукта.",
  },
  {
    order: "03",
    title: "Наука и инновации",
    description:
      "Улучшение нашего научно-исследовательского потенциала для расширения возможностей технологий SMART и Искусственного Интеллекта, а также для повышения энергоэффективности наших продуктов.",
  },
  {
    order: "04",
    title: "Расширение границ  экспорта",
    description:
      "Стремление продолжить увеличение экспорта и выйти на большее количества рынков, включая страны СНГ, Ближнего Востока и Северной Африки и за их пределами.",
  },
];

function Strategy() {
  return (
    <div className="strategy">
      <div className="strategy__heading-wrapper">
        <h2 className="strategy__heading">стратегия</h2>
        <p className="strategy__description">
          Стратегия компании и направление роста Artel обеспечит долгосрочный
          устойчивый рост за счет следующих действий:
        </p>
      </div>

      <div className="strategy__info-wrapper">
        <div className="strategy__image-wrapper">
          <img src={StrategyImage} alt="" />
        </div>

        <div className="strategy__info">
          {STRATEGY__INFO.map((item) => (
            <div className="strategy__info-box" key={item.order}>
              <div className="strategy__box-title">
                <span className="strategy__box-title_order">{item.order}.</span>
                <h3 className="strategy__box-title">{item.title}</h3>
              </div>
              <p className="strategy__box-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Strategy;
