import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given username
  loginUser: function(loginData) {
    let { username, password } = loginData;
    // console.log(username, password)
    return axios.get(`/api/login/?username=${username}&password=${password}`);
  },

  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};