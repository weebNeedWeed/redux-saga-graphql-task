import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import PropTypes from "prop-types";

import useStyles from "./styles";

function TaskItem({ task, status, onHandleEdit, onHandleDelete }) {
  const classes = useStyles();
  return (
    <Card className={classes.taskItem}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item md={8}>
            <Typography variant="h3" component="h2">
              {task.title}
            </Typography>
          </Grid>
          <Grid item md={4}>
            {status.label}
          </Grid>
        </Grid>
        <p>{task.description}</p>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Fab
          color="primary"
          aria-label="Edit"
          size="small"
          onClick={onHandleEdit}
        >
          <Icon fontSize="small">edit</Icon>
        </Fab>
        <Fab
          color="primary"
          aria-label="Delete"
          size="small"
          onClick={onHandleDelete}
        >
          <Icon fontSize="small">delete</Icon>
        </Fab>
      </CardActions>
    </Card>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  status: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }),
  onHandleEdit: PropTypes.func,
  onHandleDelete: PropTypes.func,
};

export default TaskItem;
