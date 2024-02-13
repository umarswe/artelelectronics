import { useRef } from "react";
import "./style.css";

function AdvantagesInfo() {
  const advantages = [
    {
      title: "Общий тип плиты",
      result: "Есть",
    },
    {
      title: "Общий тип плиты",
      result: "Есть",
    },
    {
      title: "Общий тип плиты",
      result: "Есть",
    },
    {
      title: "Общий тип плиты",
      result: "Есть",
    },
    {
      title: "Общий тип плиты",
      result: "Есть",
    },
    {
      title: "Общий тип плиты",
      result: "Есть",
    },
    {
      title: "Общий тип плиты",
      result: "Есть",
    },
    {
      title: "Общий тип плиты",
      result: "Есть",
    },
  ];

  const descriptionRef = useRef(null);

  const handleAction = () => {
    descriptionRef.current.classList.toggle("hidden");
  };

  return (
    <div className="advantages__info">
      <div className="advantages__info-container">
        <h3 className="advantages__info-title">ПРЕИМУЩЕСТВА</h3>

        <div className="advantages__info-wrapper">
          {advantages.map((item, index) => (
            <ul className="advantages__info-list" key={index}>
              <li>
                {item.title} <span>{item.result}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="advantages__action">
        <a className="advantages__action-title" onClick={handleAction}>
          Узнать больше +
        </a>
        <p
          className="advantages__action-description hidden"
          ref={descriptionRef}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit
          excepturi ipsa molestiae iure voluptatibus aliquam? Odio, fugiat omnis
          deserunt mollitia facere eligendi est officiis iste natus sed rem
          quisquam laudantium quaerat dolores numquam? Aliquid nobis fugiat
          totam, distinctio perspiciatis explicabo debitis eaque? Totam, earum!
          Possimus ab maiores blanditiis, earum molestias reprehenderit
          perferendis corrupti aspernatur? Veniam qui fugiat odit, voluptatibus
          perspiciatis similique doloribus ab, delectus suscipit quae dolorum
          debitis assumenda nulla, ut error ratione id vel recusandae minus
          rerum sed? Praesentium sequi quam sed saepe reiciendis sapiente
          dolorum assumenda, officia, illum consequuntur distinctio magni
          voluptatum dignissimos quasi, ullam corporis sit mollitia! Officiis
          pariatur vitae quisquam quam nesciunt consequatur nostrum repudiandae
          harum esse, temporibus molestias voluptatum doloremque impedit, illo
          deserunt, suscipit animi. Ipsam quasi dolorum, repellendus explicabo
          quia pariatur harum voluptatum repudiandae sed nostrum voluptatibus
          esse, odio, est veniam ad hic perferendis? Ratione doloremque quam
          rerum velit, inventore corrupti corporis consequatur nesciunt, nam
          voluptatibus eveniet aut ducimus, placeat neque at aspernatur
          consequuntur vero incidunt iure laborum tempora sint earum? Eligendi
          minima sit numquam quod perferendis tenetur quae hic aspernatur, eius
          illum reprehenderit laborum, ipsa aliquid? Enim dolore similique iure
          voluptas delectus fugiat autem inventore deserunt magnam nisi libero
          sunt, odio iste!
        </p>
      </div>
    </div>
  );
}

export default AdvantagesInfo;
