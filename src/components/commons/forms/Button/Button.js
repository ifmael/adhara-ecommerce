import React from "react";
import { bool, func, string } from "prop-types";
import "./styles.scss";

const propTypes = {
  disabled: bool,
  onClickHandler: func,
  text: string,
};

const defaultProps = {
  disabled: false,
  onClickHandler: () => {},
  text: "",
};

const Button = ({ text, onClickHandler, disabled, children }) => {
  return (
    <button
      onClick={onClickHandler}
      className="custom-button"
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
