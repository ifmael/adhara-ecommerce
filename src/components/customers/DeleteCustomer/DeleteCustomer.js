import React from "react";
import { string } from "prop-types";
import { useDeleteCustomer } from "components/customers/hooks";
import DeleteElement from "components/commons/DeleteElement";

const propTypes = {
  id: string,
};

const defaultProps = {
  id: "",
};

const DeleteCustomer = ({ id }) => {
  const {
    deleteCustomerHandler,
    modalIsOpen,
    modalHandler,
  } = useDeleteCustomer(id);

  return (
    <DeleteElement
      modalHandler={modalHandler}
      modalIsOpen={modalIsOpen}
      deleteHandler={deleteCustomerHandler}
    />
  );
};

DeleteCustomer.propTypes = propTypes;
DeleteCustomer.defaultProps = defaultProps;

export default DeleteCustomer;
