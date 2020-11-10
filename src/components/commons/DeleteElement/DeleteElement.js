import React from "react";
import { bool, func } from "prop-types";
import MyModal from "components/commons/Modal";
import Button from "components/commons/forms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const propTypes = {
  modalHandler: func,
  modalIsOpen: bool,
  deleteHandler: func,
};

const defaultProps = {
  modalHandler: () => {},
  modalIsOpen: false,
  deleteHandler: () => {},
};

const DeleteElement = ({ modalHandler, modalIsOpen, deleteHandler }) => {
  return (
    <div className="delete-button">
      <Button onClickHandler={() => modalHandler(true)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>

      <MyModal isOpen={modalIsOpen}>
        <div className="buttons-container">
          <Button onClickHandler={() => modalHandler(false)} text="Close" />
          <Button onClickHandler={deleteHandler} text="Confirm" />
        </div>
      </MyModal>
    </div>
  );
};

DeleteElement.propTypes = propTypes;
DeleteElement.defaultProps = defaultProps;

export default DeleteElement;
