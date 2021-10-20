import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Profile.css";
import SigninModal from "./SigninModal";
import SignUpModal from "./SignUpModal";
import Profileimage from "./assets/Elon_Musk_Royal_Society_(crop1).jpg"


const Profile = () => {
  const user = localStorage.getItem("user");
//   const [loginPreview, setloginPreview] = useState(false);
//   const [registerPreview, setregisterPreview] = useState(false);
//   const loginPreviewToggle = () => {
//     setloginPreview(!loginPreview);
//   };
//   const registerPreviewToggle = () => {
//     setregisterPreview(!registerPreview);
//   };
//   const Logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("email");
//     localStorage.removeItem("password");
//     alert("logout Successfully");
//     window.location.reload();
//   };
  return (
    <div>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={Profileimage} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <a href="#l">{user ? user : "Elon Musk"}</a>
            </h1>
            {/* <div className="social-links mt-3 text-center">
              <a href="#" className="twitter"></a>
              <a href="#" className="facebook"></a>
              <a href="#" className="instagram"></a>
              <a href="#" className="google-plus"></a>
              <a href="#" className="linkedin"></a>
            </div> */}
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <span>List of Jamiyat</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link scrollto">
                  {" "}
                  <span>Add Jamiya</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link scrollto">
                  {" "}
                  <span>Join Jamiya</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link scrollto">
                  <span>Balance: 100 KWD</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link scrollto">
                  <span></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        {/* <div className="top-bar">
          {!user ? (
            <>
              <button onClick={loginPreviewToggle}>Login</button>
              <button onClick={registerPreviewToggle}>Signup</button>
            </>
          ) : (
            <button onClick={Logout}>Logout</button>
          )}
        </div> */}
        <div className="hero-container">
          <h1>{user ? user : "Welcome"}</h1>
          <p>to  Jamiya</p>
        </div>
      </section>
      {/* {loginPreview && <Login hideToggle={loginPreviewToggle} />}
      {registerPreview && <Signup hideToggle={registerPreviewToggle} />} */}
    </div>
  );
};

export default Profile;
