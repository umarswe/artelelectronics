import "./style.css";
import Arrow from "../../../assets/images/Arrow.svg";
import PlusIcon from "../../../assets/images/plus-icon.svg";
import AdvantagesImage1 from "../../../assets/images/benefits-image-1.png";
import AdvantagesImage2 from "../../../assets/images/benefits-image-2.png";
import AdvantagesImage3 from "../../../assets/images/benefits-image-3.png";
import AdvantagesImage4 from "../../../assets/images/benefits-image-4.png";
import { useState } from "react";
import Modal from "../../../components/Modal";

function Advantages() {
  const advantages = [
    {
      image: AdvantagesImage1,
    },
    {
      image: AdvantagesImage2,
    },
    {
      image: AdvantagesImage3,
    },
    {
      image: AdvantagesImage4,
    },
  ];
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="advantages">
      <div className="advantages__heading">
        <h2 className="advantages__heading-title">Преимущества продукта</h2>

        <div className="advantages__heading-navigation">
          <img src={Arrow} alt="Arrow" />
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>

      <div className="advantages__box">
        {advantages.map((item, index) => (
          <div className="advantages__box-wrapper" key={index}>
            <img
              className="advantages__box-image"
              src={item.image}
              alt="Advantages"
              onClick={handleModal}
            />

            <div className="advantages__box-title">
              <h3 className="advantages__box-header">
                Гипоаллергенная <br /> стирка
              </h3>
              <img src={PlusIcon} alt="Plus Icon" />
            </div>
          </div>
        ))}
      </div>

      {showModal && <Modal />}
    </div>
  );
}

export default Advantages;
