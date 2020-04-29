import React from "react";

import TaskList from "./../TaskList/Index";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import AddIcon from "@material-ui/icons/Add";

import PropTypes from "prop-types";

import SearchBoxContainer from "./../SearchBox/Container";

import useStyles from "./styles";

function TaskBoard(props) {
  const classes = useStyles();

  const { statuses, tasks, openTaskCreator } = props;

  const renderBoard = function () {
    let xhtml = null;

    xhtml = (
      <Grid container spacing={0}>
        {statuses.map((status) => {
          let filteredTasks = tasks.filter(
            (task) => task.status === status.value,
          );

          return (
            <TaskList
              tasks={filteredTasks}
              status={status}
              key={status.value}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  const renderSearchBox = function () {
    let xhtml = <SearchBoxContainer />;
    return xhtml;
  };

  return (
    <div className={classes.taskBoard}>
      <Button variant="contained" color="primary" onClick={openTaskCreator}>
        <AddIcon /> Them moi
      </Button>
      {renderSearchBox()}
      {renderBoard()}
    </div>
  );
}

TaskBoard.propTypes = {
  statuses: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
    }),
  ),
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  openTaskCreator: PropTypes.func,
};

export default TaskBoard;
