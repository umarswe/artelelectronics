import "./style.css";
import Year2014_2 from "../../assets/images/AboutUS/Year2014-2.png";
import Year2014_3 from "../../assets/images/AboutUS/Year2014-3.png";

function HistoryInYearsColumns() {
  return (
    <div className="HistoryInYearsColumns">
      <div className="HistoryInYearsColumns-right">
        <img src={Year2014_3} alt="YearImage" />
        <p>
          Сервисные центры Artel приступают к работе во всех регионах
          Узбекистана. Компания старается делать все, чтобы потребителям было
          максимально удобно в вопросах эксплуатации и обслуживания техники.
          Сервисный центр - один из важных аспектов для осуществления этих
          целей.
        </p>
      </div>
      <div className="HistoryInYearsColumns-left">
        <img src={Year2014_2} alt="YearImage" />
        <p>
          Запускается производство SMT - плат, а также под брендом Vesta
          Electonics выпускаются Led-лампы и освитительне приборы.
        </p>
      </div>
    </div>
  );
}

export default HistoryInYearsColumns;
