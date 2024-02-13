import "./style.scss";
import Select from "../../../components/Select";
import { useState } from "react";

function Hero() {
  const [selectedRegion, setSelectedRegion] = useState("Uzbekistan");

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };
  const EMAILS = [
    {
      email: "info@artelelectronics.com",
      department: "Для партнеров",
    },
    {
      email: "export@artelelectronics.com",
      department: "Департамент продаж",
    },
    {
      email: "hr@artelelectronics.com",
      department: "Департамент HR",
    },
    {
      email: "info@artelelectronics.com",
      department: "Департамент аналитики",
    },
    {
      email: "info@artelelectronics.com",
      department: "Департамент закупок",
    },
    {
      email: "marketing@artelelectronics.com",
      department: "Департамент маркетинга",
    },
  ];

  const handleClick = () => {
    document
      .querySelector("#contact-container")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="hero__contact">
        <h1 className="contact__title">Контакты</h1>

        <div className="hero__contact-information">
          <Select
            label="Select Region"
            options={["Uzbekistan", "Kazakhstan", "Krgyzstan", "Russia"]}
            onSelect={handleSelectRegion}
            updatePhoneNumber={handleSelectRegion}
          />

          <div className="hero__contact-row">
            <div className="hero__contact-box">
              {selectedRegion === "Uzbekistan" && (
                <p className="hero__contact-phone">+998 (78) 148-88-88</p>
              )}
              {selectedRegion === "Kazakhstan" && (
                <p className="hero__contact-phone">+997 (78) 147-77-77</p>
              )}
              {selectedRegion === "Krgyzstan" && (
                <p className="hero__contact-phone">+996 (78) 146-66-66</p>
              )}
              {selectedRegion === "Russia" && (
                <p className="hero__contact-phone">+995 (78) 145-55-55</p>
              )}
              <p className="hero__contact-name">Единая служба поддержки</p>
            </div>
            <div className="hero__contact-box">
              <button
                className="hero__contact-cooperation"
                onClick={handleClick}
              >
                <span>По вопросам сотрудничества</span>
                <svg className="hero__cooperation-icon">
                  <path
                    d="M7.29963 7.68474L17.3288 17.7139M17.3288 17.7139L17.3288 7.15689M17.3288 17.7139L6.77178 17.7139"
                    stroke="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hero__contact-row">
            {EMAILS.map((item, index) => (
              <div className="hero__contact-box" key={index}>
                <p className="hero__contact-email">{item.email}</p>
                <p className="hero__contact-name">{item.department}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
