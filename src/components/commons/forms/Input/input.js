import React from "react";
import { bool, func, string } from "prop-types";
import "./styles.scss";

const propTypes = {
  name: string,
  onChangeHandler: func,
  placeHolder: string,
  required: bool,
  text: string,
  type: string,
  value: string,
};

const defaultProps = {
  name: "",
  onChangeHandler: () => {},
  placeHolder: "",
  required: false,
  text: "",
  type: "text",
  value: "",
};

const Input = ({
  name,
  onChangeHandler,
  placeHolder,
  required,
  text,
  type,
  value,
}) => {
  const labelInput = (
    <div className="input-label-container">
      <label name={name} className="input-label" htmlFor={name}>
        {text}
        {required ? "*" : ""}
      </label>
    </div>
  );

  return (
    <div className="input-container">
      {text ? labelInput : null}
      <div className="input-field">
        <input
          id={name}
          className="input-field-value"
          name={name}
          onChange={(event) => onChangeHandler(event.target.value, name)}
          placeholder={placeHolder}
          value={value}
          type={type}
        />
      </div>
    </div>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
