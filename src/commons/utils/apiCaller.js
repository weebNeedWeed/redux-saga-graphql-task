import axios from "axios";

class callApi {
  /*
   * @param {a entity object} entityObject {
   *  @prop {an api endpoint} url
   *  @prop {an api resoure} name
   *  @prop? {list of api resoures} names = []
   * }
   */
  constructor(entityObject) {
    this.url = entityObject.url;
    this.entityObject = entityObject;
    this.endpoints = {};
  }
  /*
   * Create and store a single entity's endpoints
   */
  createEntity() {
    const { name } = this.entityObject;
    this.endpoints[name] = this.createCRUDEndpoint(name);
  }
  /*
   * Create and store multiple entity's endpoints
   */
  createEntities() {
    const { names = [] } = this.entityObject;
    names.forEach(this.createEntity.bind(this));
  }

  /*
   * Create the endpoints handlers for CRUD operations
   * @param {a entity's name} name
   */
  createCRUDEndpoint(name) {
    let endpoints = {};

    let url = `${this.url}/${name}`;

    endpoints.getAll = ({ query } = {}) => axios.get(url, query);
    endpoints.post = ({ query } = {}) => axios.post(url, query);
    endpoints.update = ({ query } = {}) => axios.put(url, query);
    endpoints.delete = ({ query } = {}) => axios.delete(url, query);

    return endpoints;
  }
}

export default callApi;
