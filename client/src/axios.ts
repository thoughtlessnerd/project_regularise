import axios from "axios";

const API = axios.create({
  baseURL: "https://z7vr6hebgs.us-east-1.awsapprunner.com/api/v1",
  timeout: 10000,
});

export default API;
