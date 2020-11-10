import React from "react";
import { string } from "prop-types";
import { useDeleteProduct } from "components/products/hooks";
import DeleteElement from "components/commons/DeleteElement";

const propTypes = {
  id: string,
};

const defaultProps = {
  id: "",
};

const DeleteProduct = ({ id }) => {
  const { deleteProductHandler, modalIsOpen, modalHandler } = useDeleteProduct(
    id
  );

  return (
    <DeleteElement
      modalHandler={modalHandler}
      modalIsOpen={modalIsOpen}
      deleteHandler={deleteProductHandler}
    />
  );
};

DeleteProduct.propTypes = propTypes;
DeleteProduct.defaultProps = defaultProps;

export default DeleteProduct;
