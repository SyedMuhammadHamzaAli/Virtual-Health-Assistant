import { Card, Col, Container, Row } from "react-bootstrap";
import "./AboutUs.css";
const About = () => {
  return (
    <section>
      {/* <Container>
        <Row>
          <Col md={12}>
            <Card bg="primary">
              <Card.Body>About</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
      <div className="div1 mt-5 mb-5">
        <h3 className="health"> <strong>About Us</strong></h3>
        <img className="barimgg" src="./Images/Rectanglhealth.png" alt="" />
      </div>
      <Container className="mb-5">
        <Row>
        <Col sm={6} className=""  >
          <Container className="mt-3">
            <Row>
              <Col sm={12} className=""  >
                <h3>
                  <strong>Discover Excellence in About Us for 
                  Your Healthcare Needs</strong> </h3>
                  <p>We help to elevate your experience  to top-tier Virtual Health Assistance: symptom analysis, disease prediction, and <br /> personalized recommendations. Your reliable companion to a <br /> healthier tomorrow..</p>

              </Col>
            </Row>
            <Row>
        <Col sm={6} className=""  >
          <h3><strong>Mission</strong></h3>
          <p>
          The mission of the project is to assist clinical doctors by providing an AI-powered virtual health assistant for accurate disease prediction, medication recommendations, and preventive care.

          </p>

        </Col>
        <Col sm={6} className=""  >
          <h3><strong>Vision</strong></h3>
          <p>
          Our vision is to lead the way in revolutionizing healthcare through innovative AI technology, making high-quality medical support accessible to all, and shaping a future where well-being knows no bounds.
          </p>
        </Col>
            </Row>

       </Container>

        </Col>
        <Col sm={6} className="">
          <div>
            {/* <img className="img1" src="./Images/hollowsquare.png" alt="" />
            <img className="img2" src="./Images/bluesquare.png" alt="" /> */}
            <img className="resizeimg" src="./Images/Slice1img.png" alt="" />
          </div>
        </Col>
        </Row>
      </Container>
      {/* Blow is rectangle long */}
      <div className="long mt-5">
        <Container>
          <Row className="d-flex justify-content-around">
          <Col sm={2} className="bg-light rounded">
            <div className="imgborder border border-2 mt-2 mb-2">
              <img className="imagesincircle" src="./Images/arcticons_my-brain.png" alt="" />
              </div>
              <h6 className="texttt"><strong>Powered</strong></h6>
              <p className="textt">Artificial Intellengence</p>
          </Col>
          <Col sm={2} className="bg-light rounded">
          <div className="imgborder border border-2 mt-2 mb-2">
              <img className="imagesincircle1" src="./Images/mobile.png" alt="" />
              {/* <h2><strong></strong></h2> */}


            </div>
            <h6 className="texttt"><strong>Mobile</strong></h6>
              <p className="textt">Avalible on App</p>

          </Col>
          <Col sm={2} className="bg-light rounded">
          <div className="imgborder border border-2 mt-2 mb-2">
              <img className="imagesincircle" src="./Images/pc.png" alt="" />
              {/* <h2><strong></strong></h2> */}

            </div>
            <h6 className="texttt"><strong>WEB</strong></h6>
              <p className="textt">Avalible on web</p>

          </Col>
          <Col sm={2} className="bg-light rounded">
          <div className="imgborder border border-2 mt-2 mb-2">
              <img className="imagesincircle1" src="./Images/_Group_.png" alt="" />
              {/* <h2><strong></strong></h2> */}
            </div>
            <h6 className="texttt"><strong>Use</strong></h6>
              <p className="textt">User-Friendly</p>
          </Col>
          </Row>

        </Container>

      </div>
    </section>
  );
};

export default About;
