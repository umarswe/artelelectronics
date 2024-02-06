import "./style.css";

import Warranty1 from "../../../assets/images/Warranty-1.png";
import Warranty2 from "../../../assets/images/Warranty-2.png";
import Warranty3 from "../../../assets/images/Warranty-3.png";

const warrantyInfo = [
  {
    image: Warranty1,
    heading: "Информация о гарантии",
    description:
      "Чтобы гарантировать ваше спокойствие, мы предлагаем гарантию производителя на все наши продукты. Если вам нужно воспользоваться гарантией, свяжитесь с нами, и мы окажем вам поддержку. Нижеприведен краткий обзор того, что включено в гарантию.",
  },
  {
    image: Warranty2,
    heading: "Заявка на ремонт",
    description: "Оформите заявку на ремонт онлайн",
  },
  {
    image: Warranty3,
    heading: "Аксессуары и запчасти",
    description: "Подберите аксессуары к своим продуктам",
  },
];

function Warranty() {
  return (
    <div className="warranty__wrapper">
      {warrantyInfo.map((item, index) => (
        <div
          className={`warranty__box ${index === 0 ? "full-width" : ""}`}
          key={index}
        >
          <div className="warranty__box-image">
            <img src={item.image} alt="" />
          </div>

          <div className="warranty__info">
            <h3 className="warranty__info-heading">{item.heading}</h3>
            <p className="warranty__info-description">{item.description}</p>
            <button className="warranty__info-button">Узнать больше</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Warranty;
