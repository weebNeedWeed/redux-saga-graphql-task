import { API_ENDPOINT } from "./../constants/index";

import apiCaller from "./../commons/utils/apiCaller";

export const fetchListTaskFromApi = async () => {
  const queryString = "{tasks {id description title status}}";

  const apiEntity = {
    name: "",
    url: API_ENDPOINT,
  };
  const taskFetcher = new apiCaller(apiEntity);
  taskFetcher.createEntity();

  const req = await taskFetcher.endpoints[apiEntity.name].query({
    query: queryString,
  });

  const res = req.data.data.tasks;
  return res;
};

export const addNewTask = (data) => {
  const descQuery = data.description ?? "";
  const queryString = `
    mutation {
      addTask(title: "${data.title}",description: "${descQuery}",status: ${data.status}){
        id,
      }
    }
  `;

  const apiEntity = {
    name: "",
    url: API_ENDPOINT,
  };
  const taskPoster = new apiCaller(apiEntity);
  taskPoster.createEntity();
  taskPoster.endpoints[apiEntity.name].query({
    query: queryString,
  });
  return;
};

export const updateTask = (data) => {
  const descQuery = data.description ?? "";
  const queryString = `
    mutation {
      updateTask(id: "${data.id}",title: "${data.title}",description: "${descQuery}",status: ${data.status}){
        id,
      }
    }
  `;

  const apiEntity = {
    name: "",
    url: API_ENDPOINT,
  };
  const taskPoster = new apiCaller(apiEntity);
  taskPoster.createEntity();
  taskPoster.endpoints[apiEntity.name].query({
    query: queryString,
  });
  return;
};

export const deleteTask = ({ id }) => {
  const queryString = `
    mutation {
      deleteTask(id: "${id}"){
        id
      }
    }
  `;

  const apiEntity = {
    name: "",
    url: API_ENDPOINT,
  };
  const taskPoster = new apiCaller(apiEntity);
  taskPoster.createEntity();
  taskPoster.endpoints[apiEntity.name].query({
    query: queryString,
  });
  return;
};
