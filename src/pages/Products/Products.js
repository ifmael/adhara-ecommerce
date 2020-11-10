import React from "react";
import { AddProduct, ListOfProducts } from "components/products";

const Products = () => {
  return (
    <div className="products">
      <AddProduct />
      <ListOfProducts />
    </div>
  );
};

export default Products;
