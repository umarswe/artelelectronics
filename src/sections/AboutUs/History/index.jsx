import HistoryInYears from "../../../components/HistoryInYears";
import Year2011 from "../../../assets/images/Year2011.png";
import Year2012 from "../../../assets/images/Year2012.png";
import AirCon from "../../../assets/images/AirConditioner.png";
import Year2013_2 from "../../../assets/images/Year2013-2.png";
import Year2013 from "../../../assets/images/Year2013.png";
import Year2014 from "../../../assets/images/Year2014.png";
import Year2015 from "../../../assets/images/Year2015.png";
import Year2015_2 from "../../../assets/images/Year2015-2.png";
import Year2016 from "../../../assets/images/Year2016.png";
import Year2017 from "../../../assets/images/Year2017.png";
import Year2018 from "../../../assets/images/Year2018.png";
import Year2018_2 from "../../../assets/images/Year2018-2.png";
import Year2019 from "../../../assets/images/Year2019.png";
import Year2020 from "../../../assets/images/Year2020.png";
import Year2021 from "../../../assets/images/Year2021.png";
import Year2022 from "../../../assets/images/Year2022.png";
import "./style.css";
import HistoryInYearsColumns from "../../../components/HistoryInYearsColums";

function History() {
  return (
    <div className="history">
      <h1 className="history__heading">
        <span className="history__heading-first-line">История </span>
        <span className="history__heading-second-line">компании </span>
      </h1>

      <div className="history__wrapper">
        <HistoryInYears
          heading="2011"
          subheading="Компания Artel начинает свою деятельность с производства газовых плит и пылесосов в городе Ташкенте. В этом же году Artel подписывает партнерское соглашение с Samsung."
          image={Year2011}
          width={970}
          height={690}
        />
        <HistoryInYears
          heading="2012"
          subheading="Для компании было принципиально важно расширить продукцию от классической бытовой техники до смарт - электроники, выйти на совершенно новый уровень и открывать все более широкие горизонты для развития."
          text="Запуск производства телевизоров стал значительным шагом для компании 
          и прорывом в национальной индустрии. Изначально производственная линия включала в себя сборку комплектующих, но сегодня даже один из самых 
          сложных компонентов, SMT - материнские платы, производятся на заводах. "
          image={Year2012}
          reverse={true}
          width={690}
          height={655}
        />
        <HistoryInYears
          heading=""
          subheading="Компания Artel в сотрудничестве с компанией Midea в 2012 году начали производить кондиционеры. Ассортимент кондиционеров Artel включает в себя модели для жилых домов и офисов.  Кондиционеры, которые не только спасают от жары, но и очищают воздух. "
          image={AirCon}
          width={826}
          height={680}
        />
        <HistoryInYears
          heading="2013"
          subheading="В начале 2012 года компания Artel провела крупное маркетинговое исследование рынка Узбекистана, в ходе которого был выявлен большой интерес населения к стиральным машинам. "
          text="После проведения экономических расчетов, тщательного изучения рынка и потребностей покупателей, началась кропотливая работа над cозданием техники, которая способна облегчить жизнь женщинам и взять на себя часть домашних хлопот. В первый год запуска производственная мощь завода составляла 50 000 SKU. "
          image={Year2013}
          reverse={true}
          width={700}
          height={740}
        />
        <HistoryInYears
          heading=""
          subheading="Artel запускает завод по производству холодильников и электрических мини-печей в Ташкенте. Свой путь компания начинала исключительно с производства холодильников DeFrost, и выпускали 40 единиц техники в день."
          text="Сейчас же в холодильники Artel внедрены технологии Ultracooling и 3D равномерное охлождение. В ассортименте можно найти компактные однокамерные модели и вместительные двухкамерные."
          image={Year2013_2}
          width={700}
          height={740}
        />
        <HistoryInYears
          heading="2014"
          subheading="Artel экспортирует в 12 стран более 1 000 000 единиц бытовой техники в год. Газовые плиты Artel занимают более 50% рынка Казахстана, в то время как наши стиральные машины пользуются большим спросом среди населения Таджикистана и охватили 70% рынка. С каждым годом эти цифры стремительно растут вместе с доверием потребителей."
          image={Year2014}
          reverse={true}
          width={674}
          height={780}
        />

        <HistoryInYearsColumns />

        <HistoryInYears
          heading="2015"
          subheading="Открытие флагманского производственного комплекса «Рохат» в Ташкенте, включающий в себя производство холодильников и комплектующих."
          image={Year2015}
          width={825}
          height={780}
        />

        <HistoryInYears
          subheading="Налажено производство электрических водонагревателей Royal, запустилась линия по производству Ж/К панелей LCM.  "
          image={Year2015_2}
          reverse={true}
          width={683}
          height={820}
        />

        <HistoryInYears
          heading="2016"
          subheading=" В июле 2016 года Samsung Electronics запустила на производственных площадках Artel полномасштабное производство холодильников под брендом Samsung."
          text=" Наличие современного оборудования и испытательных климатических лабораторий на заводах Artel дает хорошую базу для создания продуктов, соответствующих высоким нормам и стандартам такого мирового гиганта, как Samsung. Следует отметить, что на производстве Artel внедрен жесткий контроль качества, позволяющий исключить малейшие дефекты. Это в свою очередь обеспечивает достойное качество производимой продукции, которая ничем не уступает своим зарубежным аналогам."
          image={Year2016}
          reverse={true}
          column={true}
          width={1395}
          height={980}
        />
        <HistoryInYears
          heading="2017"
          subheading=" Компания начинает производство автоматических стиральных машин в сотрудничестве с Samsung. "
          text="В начале 2017 года представителями компаний Samsung и Artel были начаты переговоры по совместному производству стиральных машин Samsung на производственных базах Artel. В марте был подписан контракт на выпуск пяти новых моделей стиральных машин Samsung. В то же время были начаты подготовительные работы по наладке производственного процесса."
          image={Year2017}
          width={825}
          height={820}
        />
        <HistoryInYears
          heading="2018"
          subheading=" Запустилась линия по производству двухконтурных газовых котлов под брендом Royal."
          image={Year2018}
          reverse={true}
          width={820}
          height={480}
        />
        <HistoryInYears
          heading=""
          subheading=" Начал свою деятльность завод в городе Ангрен по производству мониторов, микроволновых печей и телевизоров. "
          image={Year2018_2}
          width={820}
          height={870}
        />
        <HistoryInYears
          heading="2019"
          subheading="  Artel становится партнером немецкой компании Viessmann  по производству газовых котлов. Компания апустила на своем заводе линию по производству настенных двухконтурных газовых котлов Viessmann и комплектующих к ним."
          text="Результатом совместной деятельности двух крупных компаний является производство двухконтурных газовых котлов Vitopend 100-W A1JB с мощностью 12, 24, 30 и 34 кВт."
          image={Year2019}
          reverse={true}
          width={680}
          height={680}
        />
        <HistoryInYears
          heading="2020"
          subheading=" Создается управляющая компания OOO “Artel Electronics” и начинает консолидация всей Группы компаний."
          image={Year2020}
          column={true}
          width={1395}
          height={740}
        />
        <HistoryInYears
          heading="2021"
          subheading=" Fitch Ratings присвоило ООО «Artel Electronics» рейтинг «В» со стабильным прогнозом. Artel стала первой частной производственной компанией в Узбекистане, получившей международный кредитный рейтинг."
          image={Year2021}
          width={680}
          height={740}
        />
        <HistoryInYears
          heading="2022"
          subheading=" Artel Electronics подтверждает международный кредитный рейтинг Fitch Ratings на уровне 'B' со стабильным прогнозом и становится первой частной компанией Узбекистана, выпустившей облигации на Республиканской фондовой бирже «Тошкент»."
          image={Year2022}
          column={true}
          width={1395}
          height={740}
        />
      </div>
    </div>
  );
}

export default History;
