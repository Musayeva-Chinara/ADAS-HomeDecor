import React from "react";
import style from "./ProductPage.module.css";
import { HiBarsArrowDown } from "react-icons/hi2";
import ProductCard from "../../assets/companents/productCard/ProductCard";

const ProductPage = () => {
  return (
    <div className="container">
      <div className={style.productPage}>
        <ul className={style.productUl}>
          <li>Home</li>
          <li>Collections</li>
          <li>Bedroom</li>
        </ul>
      </div>
      <div className={style.productH}>
        <h2>BEDROOM</h2>
        <div className={style.productP}>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime.
          </p>
          <div className={style.prodIcon}>
            <button>
              <HiBarsArrowDown />
              <p className={style.sortP}>SORT BY</p>
            </button>
          </div>
        </div>
      </div>

      <div className={style.ProductCardPage}>
        <div className={style.categor}>
          <button>CATEGORIES</button>
          <div className={style.categor1}>
            <label htmlFor="All">
              <input name="All" type="checkbox" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                  stroke="#B8926A"
                  stroke-width="1.5"
                />
                <path
                  d="M8.5 12.5L10.5 14.5L15.5 9.5"
                  stroke="#B8926A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              All
            </label>
            <label htmlFor="SOFAS">
              <input name="SOFAS" type="checkbox" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                  stroke="#B8926A"
                  stroke-width="1.5"
                />
              </svg>
              SOFAS
            </label>
            <label htmlFor="BEDS AND HEADBOARDS ">
              <input name="BEDS AND HEADBOARDS" type="checkbox" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                  stroke="#B8926A"
                  stroke-width="1.5"
                />
              </svg>
              BEDS AND HEADBOARDS
            </label>
            <label htmlFor="RUGS  ">
              <input name="RUGS " type="checkbox" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                  stroke="#B8926A"
                  stroke-width="1.5"
                />
              </svg>
              RUGS
            </label>
            <label htmlFor="CUSHIONS">
              <input name="CUSHIONS" type="checkbox" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                  stroke="#B8926A"
                  stroke-width="1.5"
                />
              </svg>
              CUSHIONS
            </label>
            <label htmlFor="SOFAS ">
              <input name="SOFAS" type="checkbox" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                  stroke="#B8926A"
                  stroke-width="1.5"
                />
              </svg>
              SOFAS
            </label>
            <label htmlFor="HEADBOARDS">
              <input name="HEADBOARDS" type="checkbox" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                  stroke="#B8926A"
                  stroke-width="1.5"
                />
              </svg>
              HEADBOARDS
            </label>
          </div>
        </div>

        <div className={style.ProductCard1}>
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
    </div>
  );
};

export default ProductPage;
