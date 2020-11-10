import React from "react";
import { string } from "prop-types";
import Modal from "react-modal";

const propTypes = {
  isOpen: string,
};

const defaultProps = {
  isOpen: false,
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const MyModal = ({ children, isOpen }) => {
  return (
    <Modal ariaHideApp={false} isOpen={isOpen} style={customStyles}>
      {children}
    </Modal>
  );
};

MyModal.propTypes = propTypes;
MyModal.defaultProps = defaultProps;

export default MyModal;
