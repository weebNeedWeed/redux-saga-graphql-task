const validate = (values) => {
  const error = {};
  if (!values.title) {
    error.title = "required";
  } else if (values.title.length < 5) {
    error.title = ">= 5";
  }
  if (!values.status) {
    error.status = "required";
  }
  return error;
};

export default validate;
