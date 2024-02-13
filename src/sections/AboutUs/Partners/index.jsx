import "./style.css";
import AboutUs from "../../../assets/images/aboutUs.png";
import Artel_Logo from "../../../assets/images/Artel_Logo.svg";
import Shivaki_Logo from "../../../assets/images/Shivaki_Logo.svg";
import Avalon_Logo from "../../../assets/images/Avalon_Logo.svg";
import Royal_Logo from "../../../assets/images/Royal_Logo.svg";
import Vesta_Logo from "../../../assets/images/Vesta_Logo.svg";
import Samsung_Logo from "../../../assets/images/Samsung_Logo.svg";

const PARTNERS = [
  {
    img: Shivaki_Logo,
  },
  {
    img: Avalon_Logo,
  },
  {
    img: Royal_Logo,
  },
  {
    img: Vesta_Logo,
  },
  {
    img: Samsung_Logo,
  },
];

function Partners() {
  return (
    <div className="partners">
      <section className="partners__description">
        <h3 className="partners__description-heading">
          <span>
            ARTEL - молодой и амбициозный бренд бытовой техники провозглашенный
            лидером по надежности и эффективности среди конечных пользователей.
          </span>
        </h3>
        <p className="partners__description-text">
          <span>
            Ключевая особенность бренда Artel является мультикатегорийность с
            более 16 категорий включая решения бытовой техники для кухни,
            гостинной и уборки, что позволит полностью укомплектовать Ваш дом
            современной техникой.
          </span>
        </p>
      </section>

      <div className="partners__image">
        <img src={AboutUs} alt="logo" />
      </div>

      <div className="partners__heading-wrapper">
        <h2 className="partners__heading">
          <span>Бренд</span>
          <span className="partners__heading-second">портфель</span>
        </h2>

        <p className="partners__info">
          Artel предлагает продукцию под собственной торговой маркой, является
          партнёром Shivaki, Avalon, Vesta и Royal, а также является официальным
          региональным партнером Samsung и Viessmann в Узбекистане.
        </p>
      </div>

      <div className="partners__icons">
        <div className="partners__main">
          <img src={Artel_Logo} alt="artel logo" />
        </div>

        <div className="partners__icons-wrapper">
          {PARTNERS.map((item, index) => (
            <div className="partners__icon" key={index}>
              <img src={item.img} alt="image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
