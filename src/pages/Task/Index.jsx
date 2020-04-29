import React from "react";

import TaskBoardContainer from "./../../components/TaskBoard/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoadingContainer from "./../../components/GlobalLoading/Container";
import CommonModalContainer from "./../../components/CommonModal/Container";

function TaskPage() {
  return (
    <div>
      <TaskBoardContainer />
      <ToastContainer />
      <GlobalLoadingContainer />
      <CommonModalContainer />
    </div>
  );
}

export default TaskPage;
