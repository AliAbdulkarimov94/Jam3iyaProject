// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
// import SignUpModal from './Components/SignUpModal';
import JamiyaList from "./Components/JamiyaList";
// import SigninModal from './Components/SigninModal';
import { useState } from 'react';
// import { Modal } from 'react-bootstrap';
import Profile from './Components/Profile';
import { observer } from 'mobx-react-lite';
import JamiyaStore from './stores/JamiyaStore';


function App() {

  const [isopen, setIsOpen] = useState(false);

  // const openModal = () => setIsOpen(true)
  // const closeModal =  () => setIsOpen(false)
  return (
    <div className="App">
      <NavBar />
      <Profile />;

      {/* <button className="btn-info" onClick={openModal}>
        Open Sign Up Modal
        </button>
        <Modal>

          </Modal> */}
        <JamiyaList />
     
    {/* <header className="header">
        <img src={logo} className="img" alt="logo" />
        <p> Welcome, User. </p>
        <h1 className="title"> WELCOME </h1>
        </header> */}
      </div> 
      
   
  );
}
        

export default observer(App);
