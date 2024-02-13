import "./style.css";
import serviceHero from "../../../assets/images/Service/service-hero.png";
import ArrowBottom from "../../../assets/images/Shared/Arrow-bottom.svg";

function Hero() {
  return (
    <div className="service__hero">
      <div className="service__hero-text">
        <h1 className="service__hero-heading">
          Качественное обслуживание <br /> начинается здесь
        </h1>
        <p className="service__hero-description">
          Получите помощь, найдите ответы, драйверы, <br /> руководства и
          другое.
        </p>
      </div>

      <div className="service__hero-image">
        <img src={serviceHero} alt="service" />
      </div>

      <div className="service__hero-arrow">
        <img src={ArrowBottom} alt="Arrow" />
      </div>
    </div>
  );
}

export default Hero;
