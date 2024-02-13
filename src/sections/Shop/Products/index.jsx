import "./style.scss";
import Brands from "../../../components/Filters/Brands";
import BigProducts from "../../../components/Filters/BigProducts";
import SmallProducts from "../../../components/Filters/SmallProducts";
import { bigProducts } from "../../../lib/bigProducts";
import { smallProducts } from "../../../lib/smallProducts.js";
import { brands } from "../../../lib/brands";
import Colors from "../../../components/Filters/Colors";
import { colors } from "../../../lib/colors";
import ShopItems from "../../../components/ShopItems";
import { shopItems } from "../../../lib/shopItems";
import Pagination from "../Pagination";

function Products() {
  return (
    <div className="products">
      <div className="products__filters-wrapper">
        <Brands brands={brands} />
        <BigProducts bigProducts={bigProducts} />
        <SmallProducts smallProducts={smallProducts} />
        <Colors colors={colors} />
      </div>
      <div className="products__container">
        <ShopItems shopItems={shopItems} />
        <Pagination />
      </div>
    </div>
  );
}

export default Products;
