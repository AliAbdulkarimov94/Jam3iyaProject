import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import SignUpModal from "./SignUpModal";
import authStore from "../stores/authStore";
import { observer} from "mobx-react";
import { Link, NavLink } from "react-router-dom";


function NavBar() {
    const [signIn, setSignIn] = useState(false);

    return (
       <>
       <button 
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        </button>
    
        <div
        class="collapse navbar-collapse sub-menu-bar"
        id="navbarSupportedContent"
                  >
        <ul id="nav" class="navbar-nav ml-auto">
        <li class="nav-item">
        <Link to="/">Home</Link>
    </li>
    <li class="nav-item">
    <NavLink to="/courses">Courses</NavLink>
    </li>
        
        {authStore.user ? (
        <>
        <li class="nav-item">
            Welcome {authStore.user.username}
            </li>
            <li class="nav-item">
                <Button onClick={() => authStore.logout()}>
                    Logout
                    </Button>{" "}
        </li>
    </>
) : (
<>
<li class="nav-item">
    <SignUpModal/>
      </li>
      <li>
        
        

        
      </li>
      </>
)}
</ul>
</div>
    </>                       
                 
    )
}

export default observer(NavBar);