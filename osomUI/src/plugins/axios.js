import axios from "axios";
export default (app, instance) => {
  const axInstance = axios.create(instance);
  app.provide("axios", axInstance);
};
