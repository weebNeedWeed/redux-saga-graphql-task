import React from "react";

import SearchBox from "./Index";

import { useDispatch, useSelector } from "react-redux";

import { filterTaskRequest } from "./../../actions/task";

function SearchBoxContainer() {
  const dispatch = useDispatch();

  const filterKeyword = useSelector((state) => state.task.filterKeyword);

  const handleChangeKeyword = function (event) {
    const inputValue = event.target.value;

    dispatch(filterTaskRequest(inputValue));
  };

  return (
    <SearchBox
      filterKeyword={filterKeyword}
      onHandleChangeKeyword={handleChangeKeyword}
    />
  );
}

export default SearchBoxContainer;
