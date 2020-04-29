import React from "react";

import Modal from "@material-ui/core/Modal";

import PropTypes from "prop-types";

import useStyles from "./styles";

import CancelIcon from "@material-ui/icons/Cancel";

const CommonModal = function (props) {
  const { open, handleCloseModal, component, title } = props;

  const classes = useStyles();

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <h2 className={classes.headerTitle}>{title}</h2>
          <CancelIcon
            className={classes.closeIcon}
            onClick={handleCloseModal}
          />
        </div>
        <div className={classes.content}>{component}</div>
      </div>
    </Modal>
  );
};

CommonModal.propTypes = {
  open: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  component: PropTypes.object,
  title: PropTypes.string,
};

export default CommonModal;
