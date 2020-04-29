import React from "react";

import useStyles from "./styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import renderTextField from "./../FormHelpers/TextField/Index";
import renderSelectField from "./../FormHelpers/SelectField/Index";

import { Field, reduxForm } from "redux-form";

import validate from "./validate";

import PropTypes from "prop-types";

function TaskForm({
  onCloseForm,
  handleSubmit,
  submitting,
  invalid,
  onSubmitForm,
}) {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.inputWrapper}>
          <Field
            component={renderTextField}
            name="title"
            label="title"
            type="text"
            autoComplete="aabbc"
            className={classes.input}
          />
        </Grid>
        <Grid item xs={12} className={classes.inputWrapper}>
          <Field
            component={renderTextField}
            name="description"
            label="description"
            type="text"
            autoComplete="aabbc"
            className={classes.input}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12} className={classes.inputWrapper}>
          <Field
            name="status"
            component={renderSelectField}
            label="task status"
            value={0}
          >
            <option value={0}>READY</option>
            <option value={1}>IN PRORESS</option>
            <option value={2}>COMPLETED</option>
          </Field>
        </Grid>
      </Grid>
      <Box mt={2}>
        <Grid container spacing={2} justify="flex-end">
          <Grid item>
            <Button
              variant="contained"
              disabled={submitting || invalid}
              type="submit"
            >
              Submit
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={onCloseForm}>
              cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}

TaskForm.propTypes = {
  onCloseForm: PropTypes.func,
  onSubmitForm: PropTypes.func,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
};

const formName = "TASK_FORM";

const formOption = {
  validate,
  form: formName,
};

export default reduxForm(formOption)(TaskForm);
