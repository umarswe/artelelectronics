import "./style.css";
import Manager from "../../../assets/images/Management/manager.png";
import Email from "../../../assets/images/Management/email.svg";
import Line from "../../../assets/images/Management/Line.png";
import Line2 from "../../../assets/images/Management/line-2.png";
import Manager1 from "../../../assets/images/Management/manager-1.png";
import Manager2 from "../../../assets/images/Management/manager-2.png";
import Manager3 from "../../../assets/images/Management/manager-3.png";

const MANAGERS = [
  {
    image: Manager1,
    name: "Муродов Бектемир Эргашевич",
    profession: "Заместитель председателя по финансам",
    email: "bektemir.murodov@artelelectronics.com",
  },
  {
    image: Manager2,
    name: "Ахадов Элдор Саиджахонович",
    profession: "Заместитель председателя по производству",
    email: "eldor.akhadov@artelelectronics.com",
  },
  {
    image: Manager3,
    name: "Муродов Бектемир Эргашевич",
    profession: "Заместитель председателя по финансам",
    email: "bektemir.murodov@artelelectronics.com",
  },
  {
    image: Manager3,
    name: "Муродов Бектемир Эргашевич",
    profession: "Заместитель председателя по финансам",
    email: "bektemir.murodov@artelelectronics.com",
  },
  {
    image: Manager3,
    name: "Муродов Бектемир Эргашевич",
    profession: "Заместитель председателя по финансам",
    email: "bektemir.murodov@artelelectronics.com",
  },
  {
    image: Manager3,
    name: "Муродов Бектемир Эргашевич",
    profession: "Заместитель председателя по финансам",
    email: "bektemir.murodov@artelelectronics.com",
  },
];

function Hero() {
  return (
    <div className="management">
      <div className="management__hero">
        <h1 className="management__hero-heading">Руководство</h1>

        <div className="manager__wrapper">
          <div className="manager__image-container">
            <div className="manager__image-wrapper">
              <img src={Manager} alt="Manager photo" />
            </div>
          </div>

          <div className="manager__info-wrapper">
            <h6 className="manager__name">
              Рузикулов Шохрух <br /> Тохирович
            </h6>
            <p className="manager__profession">
              Председатель правления <br /> ООО «Artel Electronics»
            </p>
            <p className="manager__profession-desc">
              Artel Electronics гордится своей репутацией надёжного <br />{" "}
              национального бренда, целью которого является <br /> создание
              качественных и доступных продуктов, <br /> улучшающих жизнь
              потребителей.
            </p>

            <div className="manager__email">
              <img src={Email} alt="Email" />
              <span>shohruh.ruzikulov@artelelectronics.com</span>
            </div>
          </div>

          <div className="line">
            <img src={Line} alt="Line" />
          </div>
        </div>
      </div>

      <div className="managers">
        <h2 className="managers__title">Топ менеджмент</h2>

        <div className="managers__box-wrapper">
          {MANAGERS.map((item, index) => (
            <div className="managers__box" key={index}>
              <div className="managers__image">
                <img src={item.image} alt="managers photo" />
              </div>

              <h6 className="managers__name">{item.name}</h6>
              <p className="managers__profession">{item.profession}</p>

              <div className="managers__email">
                <img className="managers__email-icon" src={Email} alt="Email" />
                <span className="managers__email-address">{item.email}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="managers__line-wrapper">
          <img src={Line2} alt="second line" />
        </div>
      </div>

      <div className="managers">
        <h2 className="managers__title">Топ менеджмент</h2>

        <div className="managers__box-wrapper">
          {MANAGERS.map((item, index) => (
            <div className="managers__box" key={index}>
              <div className="managers__image">
                <img src={item.image} alt="managers photo" />
              </div>

              <h6 className="managers__name">{item.name}</h6>
              <p className="managers__profession">{item.profession}</p>

              <div className="managers__email">
                <img className="managers__email-icon" src={Email} alt="Email" />
                <span className="managers__email-address">{item.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
