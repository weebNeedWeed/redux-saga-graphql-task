import {
  takeLatest,
  call,
  put,
  delay,
  all,
  select,
  retry,
  takeEvery,
} from "redux-saga/effects";

import taskConstants from "./../constants/task";

import * as taskApiCall from "./../callApi/task";

import * as taskActions from "./../actions/task";
import * as uiActions from "./../actions/ui";
import * as modalActions from "./../actions/modal";

import {
  showErrorMessage,
  showSuccessMessage,
} from "./../commons/utils/showToastMessage";

function* fetchListTaskRequest() {
  yield put(uiActions.setGlobalLoading(true));
  try {
    const response = yield call(taskApiCall.fetchListTaskFromApi);
    const filterKeyword = yield select((state) => state.task.filterKeyword);
    const filteredTask = response.data.filter((task) =>
      task.title.includes(filterKeyword),
    );

    yield put(taskActions.fetchListTaskSuccess(filteredTask));
  } catch (error) {
    showErrorMessage(error.message);
    yield delay(5000);
    yield retry(1, 0, fetchListTaskRequest);
    yield put(taskActions.fetchListTaskFailed(error));
  }

  yield delay(1000);
  yield put(uiActions.setGlobalLoading(false));
}

function* filterTaskRequest() {
  yield delay(500);

  yield put(taskActions.fetchListTaskRequest());
}

function* addTaskRequest({ payload }) {
  yield put(uiActions.setGlobalLoading(true));

  const { data } = payload;
  try {
    yield call(taskApiCall.addNewTask, data);
    showSuccessMessage("success");

    yield put(taskActions.addTaskSuccess(data));
  } catch (error) {
    showErrorMessage(error.message);
    yield put(taskActions.addTaskFailed());
  }
  yield put(modalActions.changeDisplayStatus(false));
  yield delay(500);
  yield put(uiActions.setGlobalLoading(false));
}

function* editTaskRequest({ payload }) {
  const { data } = payload;

  yield put(uiActions.setGlobalLoading(true));

  try {
    yield call(taskApiCall.updateTask, data);
    showSuccessMessage("edit success");
    yield put(taskActions.editTaskSuccess(data));
  } catch (error) {
    showErrorMessage(error.message);
  }

  yield put(modalActions.changeDisplayStatus(false));
  yield delay(500);
  yield put(uiActions.setGlobalLoading(false));
}

function* deleteTaskRequest({ payload }) {
  const { data } = payload;

  yield put(uiActions.setGlobalLoading(true));

  try {
    yield call(taskApiCall.deleteTask, data);
    showSuccessMessage("delete success");
    yield put(taskActions.deleteTaskSuccess(data));
  } catch (error) {
    showErrorMessage(error.message);
  }

  yield put(modalActions.changeDisplayStatus(false));
  yield delay(500);
  yield put(uiActions.setGlobalLoading(false));
}

function* taskSaga() {
  yield all([
    takeEvery(taskConstants.FETCH_TASK_REQUEST, fetchListTaskRequest),
    takeLatest(taskConstants.FILTER_TASK_REQUEST, filterTaskRequest),
    takeLatest(taskConstants.ADD_TASK_REQUEST, addTaskRequest),
    takeLatest(taskConstants.EDIT_TASK_REQUEST, editTaskRequest),
    takeLatest(taskConstants.DELETE_TASK_REQUEST, deleteTaskRequest),
  ]);
}

export default taskSaga;
