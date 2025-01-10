import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AlignJustify } from 'lucide-react';
import "./Navbarframes.css";
const NavbarFrames = () => {
  return (
    <div>
      <Navbar bg="" data-bs-theme="light">
        {/* logo */}
        <Navbar className="">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="./Images/LOGO-VHA.png"
                width="40"
                height="30"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ marginLeft: "-50px", color: "white" }}
          >
            Virtual Health Assistant
          </Navbar.Brand>
          <Nav className="me-auto" style={{ marginLeft: "171px" }}>
            {/* <Nav.Link href="#home"><b>About</b></Nav.Link>
          <Nav.Link href="#features">Contact us</Nav.Link>
          <Nav.Link href="#pricing">Services</Nav.Link> */}
            {/* <Link to="" className="btn btn-outline-light" style={{marginLeft:"640px"}}>Get Quote</Link> */}
            <Dropdown>
              <Dropdown.Toggle variant="outline-light" id="quoteDropdown" style={{marginLeft:"680px"}}>
              <AlignJustify />
              </Dropdown.Toggle>

              <Dropdown.Menu style={{marginLeft:"630px"}}>
                <Dropdown.Item as={Link} to="/Records">
                  Record Page
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/login">
                  Log out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarFrames;
