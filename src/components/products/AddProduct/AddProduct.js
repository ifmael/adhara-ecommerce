import React from "react";
import Button from "components/commons/forms/Button";
import { FormProduct } from "components/products";
import { useAddProduct } from "components/products/hooks";

const AddProduct = () => {
  const {
    addProductFields,
    showAddProduct,
    setShowAddProductHandler,
    setAddProductField,
    addProductSubmitHandler,
  } = useAddProduct();

  return (
    <div>
      <Button onClickHandler={setShowAddProductHandler} text="Add Product" />

      {showAddProduct ? (
        <FormProduct
          productFields={addProductFields}
          onChangeHanlder={setAddProductField}
          onSubmitHandler={addProductSubmitHandler}
          textButton="Save Product"
        />
      ) : null}
    </div>
  );
};

export default AddProduct;
