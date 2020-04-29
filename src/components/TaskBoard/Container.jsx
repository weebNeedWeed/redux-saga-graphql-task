import React, { useEffect } from "react";

import TaskBoard from "./Index";
import TaskFormContainer from "./../TaskForm/Container";

import { STATUSES } from "./../../constants/index";

import * as modalActions from "./../../actions/modal";
import * as taskActions from "./../../actions/task";

import { fetchListTaskRequest } from "./../../actions/task";

import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

function TaskBoardContainer() {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.task.listTask);

  useEffect(() => {
    dispatch(fetchListTaskRequest());
  }, [dispatch]);

  const openTaskCreator = () => {
    const onSubmitForm = (data) => {
      const postData = {
        ...data,
        id: uuidv4(),
        status: parseInt(data.status, 10),
      };
      dispatch(taskActions.addTaskRequest(postData));
    };

    dispatch(modalActions.changeDisplayStatus(true));
    dispatch(modalActions.changeModalTitle("Them moi"));
    dispatch(
      modalActions.changeModalContent(
        <TaskFormContainer onSubmitForm={onSubmitForm} />,
      ),
    );
  };

  return (
    <div>
      <TaskBoard
        statuses={STATUSES}
        tasks={tasks}
        openTaskCreator={openTaskCreator}
      />
    </div>
  );
}

export default TaskBoardContainer;
