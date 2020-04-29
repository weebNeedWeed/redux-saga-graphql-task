import React from "react";

import TaskItem from "./Index";

import PropTypes from "prop-types";

import { useDispatch } from "react-redux";

import * as modalActions from "./../../actions/modal";
import * as taskActions from "./../../actions/task";

import TaskFormContainer from "./../TaskForm/Container";

import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

function TaskItemContainer(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const onHandleEdit = function () {
    const { task } = props;

    const onSubmitForm = function (data) {
      const cloneData = {
        ...data,
        status: parseInt(data.status, 10),
      };

      dispatch(taskActions.editTaskRequest(cloneData));
    };

    dispatch(modalActions.changeDisplayStatus(true));
    dispatch(modalActions.changeModalTitle("on editing"));
    dispatch(
      modalActions.changeModalContent(
        <TaskFormContainer initialValues={task} onSubmitForm={onSubmitForm} />,
      ),
    );
  };

  const onHandleDelete = function () {
    const { task } = props;

    dispatch(modalActions.changeDisplayStatus(true));
    dispatch(modalActions.changeModalTitle("Delete"));

    const handleCloseForm = function () {
      dispatch(modalActions.changeDisplayStatus(false));
    };

    const handleSubmitForm = function (event) {
      event.preventDefault();

      dispatch(taskActions.deleteTaskRequest(task));
    };

    const deleteForm = (
      <form onSubmit={handleSubmitForm}>
        <div className={classes.deleteFormText}>
          u want to delete <b>{`"${task.title}"`}</b>?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={1}>
          <Box>
            <Button variant="contained" onClick={handleCloseForm}>
              Cancel
            </Button>
          </Box>
          <Box mr={1}>
            <Button variant="contained" color="secondary" type="submit">
              Yes
            </Button>
          </Box>
        </Box>
      </form>
    );

    dispatch(modalActions.changeModalContent(deleteForm));
  };

  return (
    <TaskItem
      onHandleEdit={onHandleEdit}
      onHandleDelete={onHandleDelete}
      {...props}
    />
  );
}

TaskItemContainer.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default TaskItemContainer;
