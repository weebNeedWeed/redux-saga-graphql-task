import React from "react";

import TaskForm from "./Index";

import { useDispatch } from "react-redux";

import * as modalActions from "./../../actions/modal";
import PropTypes from "prop-types";

function TaskFormContainer({ onSubmitForm, initialValues }) {
  const dispatch = useDispatch();

  const onCloseForm = () => {
    dispatch(modalActions.changeDisplayStatus(false));
  };

  return (
    <TaskForm
      initialValues={initialValues}
      onCloseForm={onCloseForm}
      onSubmitForm={onSubmitForm}
    />
  );
}

TaskFormContainer.propTypes = {
  initialValues: PropTypes.object,
  onSubmitForm: PropTypes.func,
};

export default TaskFormContainer;
