import { Link } from "react-router-dom";
import style from "./Products.module.css";
import { useSelector } from "react-redux";
import ProductCard from "../productCard/ProductCard";

const Products = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <section className="container">
      <div className={style.products}>
        <div className={style.products1}>
          <h3>Products</h3>
          <Link to="">Seel All</Link>
        </div>
        <div className={style.product__grid}>
          {products.slice(0, 8).map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.title}
                img={product.image}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
