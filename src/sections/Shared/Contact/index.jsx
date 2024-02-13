import "./style.css";

function Contact() {
  return (
    <div className="shop__contact">
      <h3 className="shop__contact-title">
        Обслуживание и <br /> поддержка продуктов
      </h3>

      <div className="shop__contact-buttons">
        <button className="shop__contact-buttons_white">Бизнес контакт</button>
        <button className="shop__contact-buttons_green">Написать нам</button>
      </div>
    </div>
  );
}

export default Contact;
