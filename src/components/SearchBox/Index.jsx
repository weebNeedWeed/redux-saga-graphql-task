import React from "react";

import TextField from "@material-ui/core/TextField";

import PropTypes from "prop-types";

function SearchBox({ filterKeyword, onHandleChangeKeyword }) {
  return (
    <TextField
      onChange={onHandleChangeKeyword}
      variant="standard"
      type="search"
      name="search-box"
      label="Search"
      value={filterKeyword}
    />
  );
}

SearchBox.propTypes = {
  filterKeyword: PropTypes.string,
  onHandleChangeKeyword: PropTypes.func,
};

export default SearchBox;
