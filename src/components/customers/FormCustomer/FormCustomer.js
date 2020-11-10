import React from "react";
import { string, func, object } from "prop-types";
import Input from "components/commons/forms/Input";
import Button from "components/commons/forms/Button";

const propTypes = {
  customerFields: object,
  onChangeHanlder: func,
  onSubmitHandler: func,
  textButton: string,
};

const defaultProps = {
  customerFields: {},
  onChangeHanlder: () => {},
  onSubmitHandler: () => {},
  textButton: "",
};

const FormCustomer = ({
  customerFields,
  onChangeHanlder,
  onSubmitHandler,
  textButton,
}) => {
  return (
    <form className="form-add-element" onSubmit={onSubmitHandler}>
      <Input
        name="name"
        onChangeHandler={onChangeHanlder}
        required={true}
        text="Name"
        type="text"
        value={customerFields.name}
      />
      <Input
        name="lastName"
        onChangeHandler={onChangeHanlder}
        required={true}
        text="Last Name"
        type="text"
        value={customerFields.lastName}
      />
      <Input
        name="email"
        onChangeHandler={onChangeHanlder}
        required={true}
        text="Email"
        type="text"
        value={customerFields.email}
      />
      <Input
        name="phone"
        onChangeHandler={onChangeHanlder}
        required={true}
        text="phone"
        type="text"
        value={customerFields.phone}
      />
      <Input
        name="address"
        onChangeHandler={onChangeHanlder}
        required={true}
        text="Address"
        type="text"
        value={customerFields.address}
      />
      <div className="buttons-container">
        <Button
          disabled={
            !customerFields.name ||
            !customerFields.lastName ||
            !customerFields.email ||
            !customerFields.phone ||
            !customerFields.address
          }
          text={textButton}
        />
      </div>
    </form>
  );
};

FormCustomer.propTypes = propTypes;
FormCustomer.defaultProps = defaultProps;

export default FormCustomer;
