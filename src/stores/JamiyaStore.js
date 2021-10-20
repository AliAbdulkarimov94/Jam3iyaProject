import { makeAutoObservable } from "mobx";
import api from "./api";

class JamiyaStore {
  jamiyat = [];

  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchJamiya = async () => {
    try {
      const response = await api.get("/jam3ya");
      
    this.jamiyat = response.data;
    this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };
}

const jamiyaStore = new JamiyaStore();
jamiyaStore.fetchJamiya();
export default jamiyaStore;
