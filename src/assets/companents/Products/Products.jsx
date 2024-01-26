import { Link } from "react-router-dom";
import style from "./Products.module.css";
import ProductCard from "../productCard/productCard";

const Products = () => {
  return (
    <section className="container">
      <div className={style.products}>
        <div className={style.products1}>
          <h3>Products</h3>
          <Link to="">Seel All</Link>
        </div>
        <div className={style.product__grid}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default Products;
