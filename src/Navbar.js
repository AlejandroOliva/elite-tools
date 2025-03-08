import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand href="#" className="mx-auto">
            Elite in-game tools
          </Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="bg-dark text-white"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
