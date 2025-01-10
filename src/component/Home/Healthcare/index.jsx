import { Card, Col, Container, Row } from "react-bootstrap";
import "./Healthcare.css";
import ExpandableParagraph from './ExpandableParagraph';
const Healthcare = () => {
  const longText = "This is a long text that you want to expand when clicking 'See More'...";
  return (
    <section>
      {/* <Container>
        <Row>
          <Col md={12}>
            <Card bg="success">
              <Card.Body>Healthcare</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
      <div className="div1">
        <h3 className="health"> <strong>Healthcare Assistance Services</strong></h3>
        <img className="barimg" src="./Images/Rectanglhealth.png" alt="" />
      </div>

      <div className="div2">
        <Container>
          <Row className="d-flex justify-content-around">
          <Col sm={4} className="Hcol1 rounded"  >
           <div style={{display:"flex"}}>

            <div className="imageplacer">
              <img className="imageic" src="./Images/img1.png" alt="" />
            </div>
              <div style={{marginTop:"69px", marginLeft:"10px", color:"white"}}>
              <h5> <strong> Symptom Analysis </strong></h5>
              </div>
           </div>
           <p style={{color:"white"}}>Through advanced AI algorithms, the Virtual Health Assistant thoroughly evaluates...<ExpandableParagraph
        initialText=""
        expandedText="user-provided symptoms to identify potential health issues, enabling accurate and personalized guidance."
      /></p>
          </Col>
          <Col sm={4} className="Hcol2 rounded">
          <div style={{display:"flex"}}>

<div className="imageplacer1">
  <img className="imageic" src="./Images/BLUEVEC.png" alt="" />
</div>
  <div style={{marginTop:"69px", marginLeft:"10px", color:"black"}}>
  <h5> <strong> Disease Prediction </strong></h5>
  </div>
</div>
<p style={{color:"black"}}>Leveraging machine learning, the Virtual Health Assistant... <ExpandableParagraph
initialText=""
expandedText="predicts probable diseases based on symptom inputs, empowering users with early insights and informed healthcare decisions."
/></p>
          </Col>

          </Row>
          <Row className="d-flex justify-content-around mt-5">
          <Col sm={4} className="Hcol2 rounded">
          <div style={{display:"flex"}}>

<div className="imageplacer1">
  <img className="imageic" src="./Images/injection.png" alt="" />
</div>
  <div style={{marginTop:"69px", marginLeft:"10px", color:"black"}}>
  <h5> <strong> Self-Diagnosis </strong></h5>
  </div>
</div>
<p style={{color:"black"}}>Enable users to perform initial self-diagnosis for minor health issues, potentially...<ExpandableParagraph
initialText=""
expandedText=" reducing unnecessary visits to healthcare facilities, spending
excess amount and paperwork's."
/></p>
          </Col>
          <Col sm={4} className="Hcol2 rounded">
          <div style={{display:"flex"}}>

            <div className="imageplacer1">
              <img className="imageic" src="./Images/document.png" alt="" />
            </div>
              <div style={{marginTop:"69px", marginLeft:"10px", color:"black"}}>
              <h5> <strong> Profile Management </strong></h5>
              </div>
           </div>
           <p style={{color:"black"}}>We help you managing asset, provide financial advise. Leave money issue with us and...<ExpandableParagraph
        initialText=""
        expandedText="  focus on your core business. We help you managing asset, provide financial advise."
      /></p>
          </Col>
          </Row>
          <br />
          <div>
          <a className="btn btn-primary" href="">Learn More</a>
        </div>
        </Container>

       
      </div>
    </section>
  );
};

export default Healthcare;
