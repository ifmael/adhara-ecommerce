import React from "react";
import { func } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const propTypes = {
  handler: func,
};

const defaultProps = {
  handler: () => {},
};

const SignOut = ({ handler }) => {
  return (
    <div className="button-round">
      <div className="single-icon" data-testid="icon-container">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </div>
      <button onClick={handler} />
    </div>
  );
};

SignOut.propTypes = propTypes;
SignOut.defaultProps = defaultProps;

export default SignOut;
