import "./style.css";
import Arrow from "../../../assets/images/arrow-white.svg";
import { useRef } from "react";

function Hero() {
  const openIconRef = useRef(null);
  const modalOpenRef = useRef(null);

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

  const handleOpen = () => {
    openIconRef.current.classList.toggle("rotate");
    modalOpenRef.current.classList.toggle("visibility");
  };

  return (
    <div className="hero">
      <div className="hero__contact">
        <h1 className="contact__title">Контакты</h1>

        <div className="hero__contact-information">
          <div className="contact__information-select">
            <label className="contact__select-label" htmlFor="select-countries">
              Выберите регион
            </label>
            <div className="select__input-wrapper">
              <input
                className="select__input"
                type="text"
                id="select-countries"
              />
              <span
                className="select__input-icon"
                ref={openIconRef}
                onClick={handleOpen}
              >
                <img src={Arrow} alt="" />
              </span>

              <div className="select__modal-options" ref={modalOpenRef}>
                <ul className="select__modal-lists">
                  <li className="modal__list-option">Uzbekistan</li>
                  <li className="modal__list-option">Kazakhstan</li>
                  <li className="modal__list-option">Krgyzstan</li>
                  <li className="modal__list-option">Russia</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hero__contact-row">
            <div className="hero__contact-box">
              <p className="hero__contact-phone">+998 (78) 148-88-88</p>
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
