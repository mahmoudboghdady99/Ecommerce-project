import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";

export default function ProductsList() {
  let [products, setProducts] = useState([]);
  let [allCategory, setAllCategory] = useState([]);

  const url_api = "https://fakestoreapi.com/products";

  const getAllproducts = () => {
    fetch(url_api)
      .then((respons) => respons.json())
      .then((data) => setProducts(data));
  };

  const GetAllCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setAllCategory(data));
  };

  const getProductsInCategory = (categoryName) => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getAllproducts();
    GetAllCategories();
  }, []);

  return (
    <div className="text-center mt-4 ">
      <h2>Our Products</h2>
{      <button
            
            type="button"
            className="btn btn-primary button"
            onClick={() => {
              getAllproducts();
            }}
          >All Products
          </button>}
      {allCategory.map((el) => {
        return (
          <button
            key={el}
            type="button"
            className="btn btn-primary button"
            onClick={() => {
              getProductsInCategory(el);
            }}
          >
            {el}
          </button>
        );
      })}
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-4" key={product.id}>
              <Product product={product} showButton={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
