import Maps from "../../../components/Map";
import "./style.css";
import branchesImage1 from "../../../assets/images/branches-image-1.png";
import branchesImage2 from "../../../assets/images/branches-image-2.png";
import branchesImage3 from "../../../assets/images/branches-image-3.png";
import branchesImage4 from "../../../assets/images/branches-image-4.png";
import branchesImage5 from "../../../assets/images/branches-image-5.png";
import location from "../../../assets/images/location.svg";

function Branches() {
  const branchesName = [
    {
      image: branchesImage1,
      title: "Artel brandshop",
      location: "ул. Шарафа Рашидова, 16А",
      condition: "Закрыто до завтра",
    },
    {
      image: branchesImage2,
      title: "Artel premium store",
      location: "ул. Шарафа Рашидова, 16А",
      condition: "Круглосуточно",
    },
    {
      image: branchesImage3,
      title: "Artel marketplace",
      location: "ул. Шарафа Рашидова, 16А",
      condition: "Открыто до 21:00",
    },
    {
      image: branchesImage4,
      title: "Artel premium store",
      location: "ул. Шарафа Рашидова, 16А",
      condition: "Круглосуточно",
    },
    {
      image: branchesImage5,
      title: "Artel brandshop",
      location: "ул. Шарафа Рашидова, 16А",
      condition: "Закрыто до завтра",
    },
  ];

  return (
    <div className="branches">
      <div className="branches__container">
        <div className="branches__container-search">
          <img src={location} alt="Location" />
          <p>Выбрать страну</p>
        </div>

        {branchesName.map((item, index) => (
          <div className="branches__box" key={index}>
            <img src={item.image} alt="branches" />

            <div className="branches__info">
              <h6 className="branches__info-title">{item.title}</h6>
              <p className="branches__info-location">{item.location}</p>
              <p className={"branches__info-condition"}>{item.condition}</p>
            </div>
          </div>
        ))}
      </div>
      <Maps />
    </div>
  );
}

export default Branches;
