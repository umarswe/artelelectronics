import "./style.css";
import Next from "../../../assets/images/Shared/chevron-left.svg";

function Pagination() {
  return (
    <div className="shop__pagination">
      <ul className="shop__pagination-list">
        <li>
          <button>
            <img className="shop__pagination-left" src={Next} alt="Next" />
          </button>
        </li>
        <li>
          <button>1</button>
        </li>
        <li>
          <button>2</button>
        </li>
        <li>
          <button>3</button>
        </li>
        <li>
          <button>
            <img className="shop__pagination-right" src={Next} alt="Next" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
