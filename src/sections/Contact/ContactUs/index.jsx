import Input from "../../../components/Input";
import "./style.css";

function ContactUs() {
  return (
    <div className="contact__container" id="contact-container">
      <h1 className="contactUs__title">Свяжитесь с нами</h1>

      <div className="contact__form">
        <h5 className="contact__form-title">
          Заполните форму и мы обязательно с вами свяжемся
        </h5>

        <div className="contact__form-items">
          <Input label="Имя" column="span 1" />
          <Input label="Телефон" column="span 1" />
          <Input label="Email" column="span 1" />
          <Input label="Тема сообщения" column="span 1" />
          <Input label="Сообщение" column="span 2" />
        </div>

        <div className="contact__form-submit">
          <p className="form__submit-description">
            Нажимая кнопку отправить вы даете согласие по установленной форме на
            обработку моих персональных данных в порядке, установленном законом
            Республики Узбекистан от 02.07.2019 № ЗРУ-547 о персональных данных.
          </p>

          <button className="form__submit-button" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
