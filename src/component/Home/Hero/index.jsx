import { Card, Col, Container, Row, TabContainer } from "react-bootstrap";
import "./Hero.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";



const Hero = () => {
  // const handleLoginClick = () => {
  //   // Open the login page in a new tab
  //   window.open('/login', '_blank');
  // };
  return (
    // <section>
    //   {/* <Container>
    //     <Row>
    //       <Col md={12}>
    //         <Card bg="primary">
    //           <Card.Body>Hero</Card.Body>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container> */}
    // </section>

    <section>
        <img className="Heroclass" src="./Images/SliceBackground1.png" alt="" />
      <div>
      <Container fluid >
        <Row className="roww ">
          <Col sm={6} className="col1">
            <div className="coll">
            <img src="./Images/Rectangle15.png" alt="" />
            <h1 className="h11">Empowring Health, <br /> Guidance Care: Your <br /></h1>
            <h1 className="h12">Virtual Health Assistant.</h1>
            <p>
              <strong>
            "Welcome to Virtual Health Assist, your digital healthcare companion. We harness AI technology to predict diseases, offer personalized recommendations, and prioritize your well-being. Empowering you to make informed choices for a healthier tomorrow."
            </strong> </p>
            {/* <button className="btn btn-outline-primary mt-5">Get strated</button> */}
            <Link className="btn btn-outline-primary mt-5" to="/login">Get strated</Link>
            {/* <a href="/login" className="btn btn-outline-primary mt-5">Get strated</a> */}
            {/* <Link to="/login"  className="btn btn-outline-primary mt-5">Get strated</Link> */}
            {/* <button className="btn btn-outline-primary mt-5" onClick={handleLoginClick}>Login</button> */}
            </div>

          </Col>
          <Col sm={6} className="col2">
            <img className="img" src="./Images/Scockimage 11.jpg" alt="" />
            <img className="imgg2" src="./Images/Stocksidelines.png" alt="" />
          </Col>
        </Row>
      </Container>
      </div>
    </section>
  );
};

export default Hero;
