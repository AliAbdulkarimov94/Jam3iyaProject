import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import SignUpModal from './Components/SignUpModal';
import Home from "./Components/Home";
import JamiyaList from "./Components/JamiyaList";
import { Route, Switch } from "react-router";


function App() {
  return (
    <div className="App">
      <NavBar />
      <SignUpModal />

      
  

    <header className="header">
        <img src={logo} className="img" alt="logo" />
        <p> Ghadah Bu Dhhair</p>
        <h1 className="title"> Ghadah Bu Dhhair </h1>
      </header>
      </div>
      
   
  );
}

export default App;
