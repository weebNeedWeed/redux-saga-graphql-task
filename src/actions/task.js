import taskConstants from "./../constants/task";

/*
 * dispatch fetchListTaskReset action to reset state data
 * then call fetchListTaskFromApi to fetch data from server
 * then dispatch fetchListTaskSuccess action to approve data
 * or dispatch fetchListTaskFailed action when error
 */
export const fetchListTaskRequest = function (keyword = "") {
  return {
    type: taskConstants.FETCH_TASK_REQUEST,
    payload: {
      keyword,
    },
  };
};

export const fetchListTaskSuccess = function (data) {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFailed = function (error) {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

// filter task

/*
 * Filter task saga
 * filterTaskRequest -> filterTaskSuccess
 */

export const filterTaskRequest = function (filterKeyword) {
  return {
    type: taskConstants.FILTER_TASK_REQUEST,
    payload: {
      filterKeyword,
    },
  };
};
export const filterTaskSuccess = function (data) {
  return {
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addTaskRequest = function (data) {
  return {
    type: taskConstants.ADD_TASK_REQUEST,
    payload: {
      data,
    },
  };
};
export const addTaskSuccess = function (data) {
  return {
    type: taskConstants.ADD_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const addTaskFailed = function () {
  return {
    type: taskConstants.ADD_TASK_FAILED,
  };
};

export const editTaskRequest = function (data) {
  return {
    type: taskConstants.EDIT_TASK_REQUEST,
    payload: {
      data,
    },
  };
};
export const editTaskSuccess = function (data) {
  return {
    type: taskConstants.EDIT_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteTaskRequest = function (data) {
  return {
    type: taskConstants.DELETE_TASK_REQUEST,
    payload: {
      data,
    },
  };
};

export const deleteTaskSuccess = function (data) {
  return {
    type: taskConstants.DELETE_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
