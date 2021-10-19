import { makeAutoObservable } from "mobx";
import api from "./api";


class JamiyaStore {
  constructor() {
    makeAutoObservable(this);
  }

  jamiyat = [];

  fetchJamiya = async () => {
    const response = await api.get("/jam3ya");
    this.jamiyat = response.data;
  };
}

const jamiyaStore = new JamiyaStore();
jamiyaStore.fetchJamiya();
export default JamiyaStore;
