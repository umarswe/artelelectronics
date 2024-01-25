import { useRef, useState } from "react";
import FormSubmitModal from "../../../components/FormSubmitModal";
import Input from "../../../components/Input";
import "./style.css";

function ContactUs() {
  const formSubmit = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    messageSubject: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    formSubmit.current.classList.toggle("visibility");
  };

  return (
    <div className="contact__container" id="contact-container">
      <h1 className="contactUs__title">Свяжитесь с нами</h1>

      <div className="contact__form">
        <h5 className="contact__form-title">
          Заполните форму и мы обязательно с вами свяжемся
        </h5>

        <form className="contact__form-items">
          <Input
            label="Имя"
            onChange={(value) => handleChange("name", value)}
          />
          <Input
            label="Телефон"
            onChange={(value) => handleChange("phone", value)}
          />
          <Input
            label="Email"
            onChange={(value) => handleChange("email", value)}
          />
          <Input
            label="Тема сообщения"
            onChange={(value) => handleChange("messageSubject", value)}
          />
          <Input
            label="Сообщение"
            column="span 2"
            onChange={(value) => handleChange("message", value)}
          />
        </form>

        <div className="contact__form-submit">
          <p className="form__submit-description">
            Нажимая кнопку отправить вы даете согласие по установленной форме на
            обработку моих персональных данных в порядке, установленном законом
            Республики Узбекистан от 02.07.2019 № ЗРУ-547 о персональных данных.
          </p>

          <button
            className="form__submit-button"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <FormSubmitModal formSubmit={formSubmit} />
      </div>
    </div>
  );
}

export default ContactUs;
