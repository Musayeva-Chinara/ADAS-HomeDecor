import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../product/productSlice";

const useProductFetch = (initialData = {}) => {
  const dispatch = useDispatch();
  const apiURL = "http://localhost:3000";

  const [products, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [collections, setCollections] = useState([]);

  const getAllData = () => {
    const getProducts = async () => {
      fetch(`${apiURL}/products`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("HTTP Error Code: " + response.status);
          }
        })
        .then((data) => {
          setAllProducts(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const getCategories = async () => {
      fetch(`${apiURL}/categories`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("HTTP Error Code: " + response.status);
          }
        })
        .then((data) => {
          setCategories(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const getCollections = async () => {
      fetch(`${apiURL}/collections`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("HTTP Error Code: " + response.status);
          }
        })
        .then((data) => {
          setCollections(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCollections();
    getCategories();
    getProducts();
  };

  useEffect(() => {
    dispatch(setProducts({ products, categories, collections }));
  }, [products, categories, collections]);

  return { getAllData };
};

export default useProductFetch;
