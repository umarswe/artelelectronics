import "./style.css";
import Phone from "../../../assets/images/Phone.svg";

const SUPPORT__DATA = [
  {
    image: Phone,
    service: "Единая служба поддержки",
    phone: "+998 (78) 148-88-88",
  },
  {
    image: Phone,
    service: "Единая служба поддержки",
    phone: "+998 (78) 148-88-88",
  },
  {
    image: Phone,
    service: "Единая служба поддержки",
    phone: "+998 (78) 148-88-88",
  },
];

function Support() {
  return (
    <div className="support">
      <h2 className="support__heading">Обратная связь</h2>
      <div className="support__container">
        {SUPPORT__DATA.map((item, index) => (
          <div className="support__wrapper" key={index}>
            <img className="support__wrapper-image" src={Phone} alt="" />
            <p className="support__wrapper-service">Единая служба поддержки</p>
            <p className="support__wrapper-phone">+998 (78) 148-88-88</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Support;
