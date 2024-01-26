/* eslint-disable react/prop-types */
import "./style.css";
import Characteristics from "../../../assets/images/characteristics-product.svg";
import ProductScroll from "../../../components/ProductScroll";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const MAXIUM_CAPACITIES = [
  {
    id: "max-cap-1",
    title: "5 kg",
  },
  {
    id: "max-cap-2",
    title: "6 kg",
  },
  {
    id: "max-cap-3",
    title: "7kg",
  },
  {
    id: "max-cap-4",
    title: "8kg",
  },
];

const ENGINE_TYPES = [
  {
    id: uuid(),
    title: "Инверторный",
  },
  {
    id: uuid(),
    title: "Стандартный",
  },
];

const WASHING__TYPE = [
  {
    id: "washing-type-1",
    title: "Стирка с паром",
  },
  {
    id: "washing-type-2",
    title: "Стирка без пара",
  },
];

const MAIN__CHARACTER = [
  {
    image: Characteristics,
    title: "AndroidTV",
  },
  {
    image: Characteristics,
    title: "Подключение Wi-Fi, LAN",
  },
  {
    image: Characteristics,
    title: "LED подсветка",
  },
];

function ReviewImage() {
  const [maxCapacity, setMaxCapacity] = useState(MAXIUM_CAPACITIES[0].id); // maxCapacity = "max-cap-2"
  const [engineType, setEngineType] = useState(ENGINE_TYPES[0].id);

  console.log("maxCapacity", maxCapacity);
  console.log("engineType", engineType);
  console.log(ENGINE_TYPES);
  console.log(MAXIUM_CAPACITIES);

  console.log(maxCapacity);

  return (
    <div className="product-section">
      <div className="product__gallery">
        <ProductScroll />
      </div>
      <div className="product__details">
        <h3 className="product__title">
          Автоматическая стиральная <br /> машина Artel Grand Inverter
        </h3>
        <p className="product__code">Код товара: 400135845</p>

        <div className="product__color-container">
          <div className="product__color-info">
            <h3 className="product__secondary-title">Цвет товара:</h3>
            <span className="product__color">Золотой</span>
          </div>
          <div className="product__color-wrapper">
            <input type="radio" name="product-color" id={"product-color"} />
            <label htmlFor={"product-color"}></label>
            <input type="radio" name="product-color" id={"product-color"} />
            <label htmlFor={"product-color"}></label>
          </div>
        </div>

        <div className="product__load">
          <h3 className="product__secondary-title">Максимальная загрузка</h3>
          <div className="product__wrapper">
            {MAXIUM_CAPACITIES.map((item, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="maximum_capacity"
                  id={"maximum_capacity" + "-" + item.id}
                  defaultChecked={maxCapacity == item.id}
                  onChange={function () {
                    setMaxCapacity(maxCapacity);
                  }}
                />
                <label
                  htmlFor={"maximum_capacity" + "-" + item.id}
                  className="product__characteristics-box"
                >
                  {item.title}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="product__engine">
          <h3 className="product__secondary-title">Тип двигателя </h3>
          <div className="product__wrapper">
            {ENGINE_TYPES.map((item, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="engine"
                  id={"engine" + "-" + item.id}
                  hidden
                  onChange={function () {
                    setEngineType(item.id);
                  }}
                />
                <label
                  htmlFor={"engine" + "-" + item.id}
                  className="product__characteristics-box"
                >
                  {item.title}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="product__type">
          <h3 className="product__secondary-title">Тип стрирки </h3>
          <div className="product__wrapper">
            {WASHING__TYPE.map((item, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="washing_type"
                  id={"washing_type" + "-" + item.id}
                  hidden
                />
                <label
                  htmlFor={"washing_type" + "-" + item.id}
                  className="product__characteristics-box"
                >
                  {item.title}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="product__characteristics">
          <h3 className="product__secondary-title">Основные характеристики</h3>
          <div className="product__characteristics-container">
            {MAIN__CHARACTER.map((item, index) => (
              <div className="product__characteristics-wrapper" key={index}>
                <img src={item.image} alt="" />
                <span className="product__wrapper-title">{item.title}</span>
              </div>
            ))}
          </div>
          <div className="product__characteristics-wrapper">
            <span className="product__wrapper-more">
              + Больше характеристик
            </span>
          </div>
        </div>

        <div className="product__actions">
          <button className="product__actions-watch product__actions-btn">
            Посмотреть видео
          </button>
          <button
            className="product__actions-buy product__actions-btn"
            onClick={function () {
              console.log();
            }}
          >
            Где купить?
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewImage;
