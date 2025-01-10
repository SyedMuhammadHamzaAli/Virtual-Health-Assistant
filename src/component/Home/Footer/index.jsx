import { Card, Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footerr = () => {
  return (
    <section>
      {/* <Container>
        <Row>
          <Col md={12}>
            <Card bg="primary">
              <Card.Body>Footer</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
      <div className="footer mt-5">
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="footer-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#footer-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
          <use xlinkHref="#footer-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#footer-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#footer-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
      <div className="inner-footer mt-3">
        <Container>
            <Row>
          <Col sm={4} className="">
            <img className="" src="./Images/LogoSlice1.png" alt="" />
            Virtual Health Assistant

          </Col>
          <Col sm={2} className="">
          <p>Help & Support</p>
          </Col>
          <Col sm={2} className="">
            <p>About</p>
          </Col>
          <Col sm={2} className="">
            <p>Services</p>
          </Col>
          <Col sm={2} className="">
            <p>Get the latest news</p>
          </Col>
            </Row>
            <Row className="justify-content-between">
          <Col sm={2} className="ms-5">
            <span className="me-3"><Facebook /></span>
            <span className="me-3"><Instagram /></span>
            <span className="me-3"><Twitter /></span>
          </Col>
          <Col sm={2} className="ms-5">
          {/* <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input> */}
          <input type="email" className="form-control vvd ms-3" id="exampleFormControlInput1" placeholder="Email"></input>
          <button className="btn btn-light mt-1 ms-4">Subscribe</button>
          </Col>
            </Row>
        </Container>
      </div>
        <hr />
        <p style={{textAlign:"center"}}>All Rights Reserved</p>
    </div>
    </section>
  );
};

export default Footerr;
