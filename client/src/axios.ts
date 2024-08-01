import axios from "axios";

const API = axios.create({
  baseURL: "https://x5k25nvwrm.ap-south-1.awsapprunner.com/api/v1",
  timeout: 10000,
});

export default API;
