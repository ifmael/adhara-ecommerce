import React from "react";
import { string } from "prop-types";
import { FormProduct } from "components/products";
import { useUpdateProduct } from "components/products/hooks";
import UpdateElement from "components/commons/UpdateElement";

const propTypes = {
  id: string,
  name: string,
  department: string,
};

const defaultProps = {
  id: "",
  name: "",
  department: "",
};

const UpdateProduct = ({ id, name, department }) => {
  const {
    updateProductSubmitHandler,
    modalIsOpen,
    modalHandler,
    updateProductFields,
    setUpdateCustomerField,
  } = useUpdateProduct({ id, name, department });

  return (
    <UpdateElement modalIsOpen={modalIsOpen} modalHandler={modalHandler}>
      <FormProduct
        productFields={updateProductFields}
        onChangeHanlder={setUpdateCustomerField}
        onSubmitHandler={updateProductSubmitHandler}
        textButton="Uptate Product"
      />
    </UpdateElement>
  );
};

UpdateProduct.propTypes = propTypes;
UpdateProduct.defaultProps = defaultProps;

export default UpdateProduct;
