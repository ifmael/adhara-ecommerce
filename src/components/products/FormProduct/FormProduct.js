import React from "react";
import { string, func, object } from "prop-types";
import Input from "components/commons/forms/Input";
import Button from "components/commons/forms/Button";

const propTypes = {
  productFields: object,
  onChangeHanlder: func,
  onSubmitHandler: func,
  textButton: string,
};

const defaultProps = {
  productFields: {},
  onChangeHanlder: () => {},
  onSubmitHandler: () => {},
  textButton: "",
};

const FormProduct = ({
  productFields,
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
        value={productFields.name}
      />
      <Input
        name="department"
        onChangeHandler={onChangeHanlder}
        required={true}
        text="Department"
        type="text"
        value={productFields.department}
      />

      <div className="buttons-container">
        <Button
          disabled={!productFields.name || !productFields.department}
          text={textButton}
        />
      </div>
    </form>
  );
};

FormProduct.propTypes = propTypes;
FormProduct.defaultProps = defaultProps;

export default FormProduct;
