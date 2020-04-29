import { API_ENDPOINT } from "./../constants/index";

import apiCaller from "./../commons/utils/apiCaller";

export const fetchListTaskFromApi = () => {
  const apiEntity = {
    name: "tasks",
    url: API_ENDPOINT,
  };
  const taskFetcher = new apiCaller(apiEntity);
  taskFetcher.createEntity();
  return taskFetcher.endpoints[apiEntity.name].getAll();
};

export const addNewTask = (data) => {
  const apiEntity = {
    name: "tasks",
    url: API_ENDPOINT,
  };
  const taskPoster = new apiCaller(apiEntity);
  taskPoster.createEntity();
  taskPoster.endpoints[apiEntity.name].post({ query: data });
  return;
};

export const updateTask = (data) => {
  const apiEntity = {
    name: "tasks/" + data.id,
    url: API_ENDPOINT,
  };
  const taskPoster = new apiCaller(apiEntity);
  taskPoster.createEntity();
  taskPoster.endpoints[apiEntity.name].update({ query: data });
  return;
};

export const deleteTask = (data) => {
  const apiEntity = {
    name: "tasks/" + data.id,
    url: API_ENDPOINT,
  };
  const taskPoster = new apiCaller(apiEntity);
  taskPoster.createEntity();
  taskPoster.endpoints[apiEntity.name].delete();
  return;
};
