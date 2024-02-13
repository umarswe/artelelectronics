import "./style.css";
import Valuation1 from "../../../assets/images/valuation-1.png";
import Valuation2 from "../../../assets/images/valuation-2.png";
import Valuation3 from "../../../assets/images/valuation-3.png";

const valuations = [
  {
    image: Valuation1,
    heading: "Открытость",
    text: "Мы открыты к взаимовыгодному сотрудничеству и партнерству. Наши бизнес-процессы открыты для клиентов и партнеров. Мы обеспечиваем финансовую транспарентность в нашей работе.",
  },
  {
    image: Valuation2,
    heading: "Надежность",
    text: "Наша компания на протяжении 12 лет является надежным партнером, надежным производителем и надежным работодателем. Мы считаем, что надежность - это фундаментальное качество, которое должно присутствовать во всех наших продуктах, услугах и взаимоотношениях с клиентами и партнерами.",
  },
  {
    image: Valuation3,
    heading: "Инновационность",
    text: "Мы постоянно ищем новые и инновационные подходы, идеологии и технологии, которые могут быть применены в нашей работе. Мы постоянно улучшаем наш конечный продукт, чтобы соответствовать самым высоким стандартам качества.",
  },
];

function Valuation() {
  return (
    <div className="valuation">
      <h1 className="valuation__heading">Ценности</h1>

      {valuations.map((valuation, index) => (
        <div
          className={`valuation-container ${
            index % 2 !== 0 ? "reversed-row" : ""
          }`}
          key={index}
        >
          <div className="valuation__box">
            <img src={valuation.image} alt="image" />
          </div>
          <div className="valuation__info">
            <div className="valuation__info-wrapper">
              <h3 className="valuation__info-heading">{valuation.heading}</h3>
              <p className="valuation__info-text">{valuation.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Valuation;
