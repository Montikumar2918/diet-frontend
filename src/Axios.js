import axios from "axios";

let SERVER_URL = "https://monti-diet.herokuapp.com/";

const authaxios = axios.create({
  baseURL: SERVER_URL,
});

export default authaxios;
