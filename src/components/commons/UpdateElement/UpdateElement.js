import React from "react";
import { bool, func } from "prop-types";
import MyModal from "components/commons/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Button from "components/commons/forms/Button";
import "./styles.scss";

const propTypes = {
  modalHandler: func,
  modalIsOpen: bool,
};

const defaultProps = {
  modalHandler: () => {},
  modalIsOpen: false,
};
const UpdateElement = ({ modalIsOpen, modalHandler, children }) => {
  return (
    <div className="update-button">
      <Button onClickHandler={() => modalHandler(true)}>
        <FontAwesomeIcon icon={faPen} />
      </Button>

      <MyModal isOpen={modalIsOpen}>
        {children}
        <div className="buttons-container close-modal">
          <Button onClickHandler={() => modalHandler(false)} text="Close" />
        </div>
      </MyModal>
    </div>
  );
};

UpdateElement.propTypes = propTypes;
UpdateElement.defaultProps = defaultProps;

export default UpdateElement;
