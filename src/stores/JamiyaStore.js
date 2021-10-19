import { makeAutoObservable } from "mobx";
import axios from "axios";

class JamiyaStore {
  constructor() {
    makeAutoObservable(this);
  }

  jamiya = [];

  fetchJamiya = async () => {
    const response = await axios.get(
      "https://coded-miniproject-jam3ya-be.herokuapp.com/jam3ya%22"
    );
    this.jamiya = response.data;
  };
}

const jamiyaStore = new JamiyaStore();
jamiyaStore.fetchJamiya();
export default JamiyaStore;
