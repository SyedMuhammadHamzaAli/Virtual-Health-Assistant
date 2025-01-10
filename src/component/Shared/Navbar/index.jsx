import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './nav.css';
// import logo from "./AssetsImages/LOGO-VHA.png";

const NavbarHome = () => {
  return (
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
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Navbar.Brand href="#home" style={{marginLeft:"-50px" }} >Virtual Health Assistant</Navbar.Brand>
        <Nav className="me-auto"  style={{marginLeft:"171px"}}>
          <Nav.Link href="/about"><b>About</b></Nav.Link>
          <Nav.Link href="/contact">Contact us</Nav.Link>
          <Nav.Link href="/health">Services</Nav.Link>
          <button className="btn btn-primary" style={{marginLeft:"272px"}}>Get Quote</button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarHome;
