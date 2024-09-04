import axios from "axios";

const Axios = axios.create({
  baseURL: "https://to-do-app-aulw.onrender.com/", // Replace with your server's base URL
  withCredentials: true, // This will include cookies in every request
});

export default Axios;
