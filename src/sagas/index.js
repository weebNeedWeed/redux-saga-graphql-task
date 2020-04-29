import { all, fork } from "redux-saga/effects";

import taskSaga from "./task";

function* rootSaga() {
  yield all([fork(taskSaga)]);
}

export default rootSaga;
