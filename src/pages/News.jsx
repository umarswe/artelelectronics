import ImageCarousel from "../sections/Shared/ImageCarousel";
import New from "../sections/News/New";
import Hero from "../assets/images/hero-bg.png";

const newsData = [
  {
    backgroundImage: Hero,
    newsContent:
      "Компания Artel подписала Меморандум о Сотрудничестве с европейским брендом Viessmann",
    textContent:
      "1 марта 2023 года, в рамках визита высокопоставленной узбекской государственной и деловой делегации в Берлин.",
    whiteButtonLabel: "Выбрать технику",
  },
  {
    backgroundImage: Hero,
    newsContent:
      "Компания Artel подписала Меморандум о Сотрудничестве с европейским брендом Viessmann",
    textContent:
      "1 марта 2023 года, в рамках визита высокопоставленной узбекской государственной и деловой делегации в Берлин.",
    whiteButtonLabel: "Выбрать технику",
  },
  {
    backgroundImage: Hero,
    newsContent:
      "Компания Artel подписала Меморандум о Сотрудничестве с европейским брендом Viessmann",
    textContent:
      "1 марта 2023 года, в рамках визита высокопоставленной узбекской государственной и деловой делегации в Берлин.",
    whiteButtonLabel: "Выбрать технику",
  },
];

function News() {
  return (
    <>
      <ImageCarousel asdfhlakjsdfhkjlahsdljkfhalskdjfh={newsData} />
      <New />
    </>
  );
}

export default News;
