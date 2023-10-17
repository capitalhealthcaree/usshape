import axios from "axios";
const BASE_URL = "https://usshape-api.vercel.app/";
const LOCAL_URL = "http://localhost:7500";
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  },
};
const api = axios.create({
  baseURL: BASE_URL,
  config,
});
export default api;
//For Nagy Loan
//https://usshape.org/nagy-loan-forms
//For Externship Form
//https://usshape.org/externship-forms