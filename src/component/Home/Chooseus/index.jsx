import { Card, Col, Container, Row } from "react-bootstrap";
import "./Chooseus.css";
const ChooseUs = () => {
  return (
    <section>
      {/* <Container>
        <Row>
          <Col md={12}>
            <Card bg="primary">
              <Card.Body>Choose-US</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
       <div className="div1">
        <h3 className="health"> <strong>Why Choose Us</strong></h3>
        <img className="barimg" src="./Images/Rectanglhealth.png" alt="" />
      </div>

      <div className="choose">
        <Container fluid>
          <Row className="ms-5">
        <Col sm={6} className="">
          <Row>
          <Col sm={12} className=" mt-5">
          <h2>We offer innovative, personalized, and effective healthcare <br />
            solutions!</h2>
            <p className="mt-4">We assist in health management, offer medical guidance. Entrust health matters to us and prioritize your well-being. We assist in health management, offer medical guidance.</p>

          </Col>
          </Row>

          <Row className="mt-5 d-flex justify-content-evenly">
        <Col sm={3} className="">
          <img className="substract" src="./Images/Subtract.png" alt="" />
          <img className="substract1" src="./Images/confedential.png" alt="" />
          <h6 className="choosetext">Confedential</h6>
          <img className="line" src="./Images/chooseusline.png" alt="" />
          <p className="choosetext">our health data is treated with utmost privacy and security, ensuring confidentiality.</p>
          

        </Col>

        <Col sm={3} className="">
        <img className="substract" src="./Images/Subtract.png" alt="" />
          <img className="substract1" src="./Images/flexible.png" alt="" />
          <h6 className="choosetext">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flexible</h6>
          <img className="line" src="./Images/chooseusline.png" alt="" />
          <p className="choosetext">Adapts to your schedule and needs, offering on-demand assistance and support.</p>

        </Col>

        <Col sm={3} className="">
        <img className="substract" src="./Images/Subtract.png" alt="" />
          <img className="substract1" src="./Images/affordable.png" alt="" />
          <h6 className="choosetext">&nbsp;&nbsp;&nbsp;Affordable</h6>
          <img className="line" src="./Images/chooseusline.png" alt="" />
          <p className="choosetext">Cost-effective healthcare solutions, making quality medical guidance accessible.</p>
        </Col>
        

          </Row>

        </Col>



        <Col sm={6} className="">
          <img className="chooseresiz" src="./Images/choosee1image.png" alt="" />
        </Col>
          </Row>

        </Container>
      </div>
    </section>
  );
};

export default ChooseUs;
