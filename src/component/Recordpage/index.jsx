import React from 'react'
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./recorde.css";


const Record = () => {
  return (
    <div className='appropriate'>
        {/* <Container>
            <Row>
            <Col sm={6} className="">

          </Col>
          <Col sm={6} className="">

          </Col>
            </Row>
        </Container> */}
        <Container fluid>
      <Row>
        {/* Left Column */}
        <Col sm={6} className="background-left">
          <div className="content">
            <h2 style={{textAlign:"center", marginTop:"200px" }}>Enter</h2>
            <h2 style={{textAlign:"center"}}> <strong> NEW RECORD</strong></h2>
            {/* <Button variant="primary">Button 1</Button> */}
            <Link to="/NFramee3" className='btn btn-outline-light buton'>Enter</Link>
          </div>
        </Col>

        {/* Right Column */}
        <Col sm={6} className="background-right">
          <div className="content">
            <h2 style={{textAlign:"center", marginTop:"200px"}}>Enter</h2>
            <h2 style={{textAlign:"center"}}> <strong> OLD RECORD</strong></h2>
            <Link to="/OFrame28" className='btn btn-outline-light buton'>Enter</Link>
            {/* <Button variant="primary">Button 2</Button> */}
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Record;
