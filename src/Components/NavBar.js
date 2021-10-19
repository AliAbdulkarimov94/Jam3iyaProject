import React from "react";
import { Navbar, Nav, Container,Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import authStore from "../stores/authStore";
import SigninModal from "./SigninModal";
import SignUpModal from "./SignUpModal";


function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {authStore.user ? (
            <Navbar.Text>
              Signed in as: <a href="#login">{authStore.user.username}</a>
              <Button onClick = {( ) => {authStore.logout()}} variant="outline-primary"> Sign Out </Button>

            </Navbar.Text>

          ) : (
            <>
              <Nav.Link>
                
                <SignUpModal />
              </Nav.Link>
              <Nav.Link>
                
                <SigninModal />
              </Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default observer(NavBar);
