import "./style.css";
import Help1 from "../../../assets/images/help-1.png";
import Help2 from "../../../assets/images/help-2.png";
import Help3 from "../../../assets/images/help-3.png";
import Help4 from "../../../assets/images/help-4.png";
import Help5 from "../../../assets/images/help-5.png";

const HELP__DATA = [
  {
    image: Help1,
    description: "Единая служба поддержки",
  },
  {
    image: Help2,
    description: "Информация о гарантии",
  },
  {
    image: Help3,
    description: "Аксессуары и запчасти",
  },
  {
    image: Help4,
    description: "Найти сервисный центр",
  },
  {
    image: Help5,
    description: "Заявка на ремонт",
  },
];

function Help() {
  return (
    <div className="service__help">
      <h2 className="service__help-heading">Чем мы можем вам помочь?</h2>

      <div className="help__box-wrapper">
        {HELP__DATA.map((item, index) => (
          <div className="help__box" key={index}>
            <div className="help__box-image">
              <img src={item.image} alt="Help" />
              <p className="help__box-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Help;
