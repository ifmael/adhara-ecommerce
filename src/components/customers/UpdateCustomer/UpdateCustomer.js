import React from "react";
import { string } from "prop-types";
import { FormCustomer } from "components/customers";
import { useUpdateCustomer } from "components/customers/hooks";
import UpdateElement from "components/commons/UpdateElement";

const propTypes = {
  id: string,
  name: string,
  lastName: string,
  email: string,
  phone: string,
  address: string,
};

const defaultProps = {
  id: "",
  name: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
};

const UpdateCustomer = ({ id, name, lastName, email, phone, address }) => {
  const {
    modalIsOpen,
    modalHandler,
    updateCustomerFields,
    setUpdateCustomerField,
    updateCustomerSubmitHandler,
  } = useUpdateCustomer({ id, name, lastName, email, phone, address });

  return (
    <UpdateElement modalIsOpen={modalIsOpen} modalHandler={modalHandler}>
      <FormCustomer
        customerFields={updateCustomerFields}
        onChangeHanlder={setUpdateCustomerField}
        onSubmitHandler={updateCustomerSubmitHandler}
        textButton="Uptate Customer"
      />
    </UpdateElement>
  );
};

UpdateCustomer.propTypes = propTypes;
UpdateCustomer.defaultProps = defaultProps;

export default UpdateCustomer;
