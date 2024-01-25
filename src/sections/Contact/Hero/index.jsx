import "./style.scss";
import Select from "../../../components/Select";

function Hero() {
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
            onSelect={(option) => console.log(option)}
          />

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
