import "./style.css";
import DownloadFile from "../../../assets/images/Catalog/donwload-file.svg";
import DownloadIcon from "../../../assets/images/Catalog/download-icon.svg";
import Arrow from "../../../assets/images/Shared/Arrow.svg";

const DOWNLOAD__INFO = [
  {
    fileIcon: DownloadFile,
    fileName: "Каталог/Холодильник RT62K7000S9/WT",
    date: "20/07/2023",
    size: 2.3,
  },
  {
    fileIcon: DownloadFile,
    fileName: "Каталог/Холодильник RT62K7000S9/WT",
    date: "20/07/2023",
    size: 2.3,
  },
  {
    fileIcon: DownloadFile,
    fileName: "Каталог/Холодильник RT62K7000S9/WT",
    date: "20/07/2023",
    size: 2.3,
  },
  {
    fileIcon: DownloadFile,
    fileName: "Каталог/Холодильник RT62K7000S9/WT",
    date: "20/07/2023",
    size: 2.3,
  },
  {
    fileIcon: DownloadFile,
    fileName: "Каталог/Холодильник RT62K7000S9/WT",
    date: "20/07/2023",
    size: 2.3,
  },
  {
    fileIcon: DownloadFile,
    fileName: "Каталог/Холодильник RT62K7000S9/WT",
    date: "20/07/2023",
    size: 2.3,
  },
  {
    fileIcon: DownloadFile,
    fileName: "Каталог/Холодильник RT62K7000S9/WT",
    date: "20/07/2023",
    size: 2.3,
  },
  {
    fileIcon: DownloadFile,
    fileName: "Каталог/Холодильник RT62K7000S9/WT",
    date: "20/07/2023",
    size: 2.3,
  },
];

function Download() {
  const handleScroll = () => {
    document.querySelector("body").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="download">
      {DOWNLOAD__INFO.map((item, index) => (
        <div className="download__box" key={index}>
          <div className="download__box-name">
            <img src={item.fileIcon} alt="file icon" />
            <span className="download__box-name-title">{item.fileName}</span>
          </div>
          <div className="download__box-action">
            <div className="download__action-info">
              <span className="download__action-date">{item.date}</span>
              <span className="download__action-stick"></span>
              <span className="download__action-size">
                PDF <span>{item.size}</span> MB
              </span>
            </div>

            <a href="#" className="download__button">
              <span className="download__button-title">Скачать</span>
              <img
                className="download__button-icon"
                src={DownloadIcon}
                alt="download icon"
              />
            </a>
          </div>
        </div>
      ))}

      <div className="catalog__scroll-top" onClick={handleScroll}>
        <img className="catalog__scroll-icon_top" src={Arrow} alt="Arrow" />
      </div>
    </div>
  );
}

export default Download;
