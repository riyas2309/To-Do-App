import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:3000", // Replace with your server's base URL
  withCredentials: true, // This will include cookies in every request
});

export default Axios;
