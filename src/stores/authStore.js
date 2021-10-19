import { makeAutoObservable } from "mobx";
import axios from "axios";
import api from "./api";
import decode from "jwt-decode";

class AuthStore {
user = null;

    constructor() {
      makeAutoObservable(this, {
     
      });
    }
  
    setUser = (token) => {
      localStorage.setItem("myToken", token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.user = decode(token);
    };
  
    signup = async (userDate) => {
      try {
        const response = await api.post("/signup", userDate);
        this.setUser(response.data.token);
      } catch (error) {
        console.log(error);
      }
    };

    signin = async (userData) => {
      try {
        const response = await api.post("/signin", userData);
        this.setUser(response.data.token);
        console.log("authStore -> signin -> response.data", response.data);
      } catch (error) {
        console.log("authStore -> signin -> error", error);
      }
    };
  
    logout = () => {
      delete api.defaults.headers.common.Authorization;
      localStorage.removeItem("myToken");
      this.user = null;
    };
  
    checkForToken = () => {
      // this.user = null
      const token = localStorage.getItem("myToken");
      if (token) {
        const currentTime = Date.now(); // give us the current time
        let tempUser = decode(token);
        if (tempUser.exp >= currentTime) {
          this.setUser(token);
        } else {
          this.logout();
        }
      }
    };
  }
  
  const authStore = new AuthStore();
  authStore.checkForToken();
  export default authStore;