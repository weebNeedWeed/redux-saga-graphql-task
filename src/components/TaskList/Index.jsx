import React from "react";

import TaskItemContainer from "./../TaskItem/Container";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import PropTypes from "prop-types";

import useStyle from "./styles";

// @prop status: one status element in STATUSES const
function TaskList({ status, tasks }) {
  const classes = useStyle();

  const renderTaskItem = function () {
    let xhtml = tasks.map((task) => {
      return <TaskItemContainer task={task} status={status} key={task.id} />;
    });
    return xhtml;
  };
  return (
    <Grid key={status.value} item md={4} xs={12}>
      <Box mb={2} mt={2}>
        <strong>{status.label}</strong>
      </Box>
      <div className={classes.taskList}>{renderTaskItem()}</div>
    </Grid>
  );
}

TaskList.propTypes = {
  status: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }),

  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

export default TaskList;
