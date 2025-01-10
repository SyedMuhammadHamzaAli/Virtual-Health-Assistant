import React from 'react'
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarFrames from '../../Shared/NavbarFrames';
import "./frame33.css"
const OLDFrame33 = () => {
  return (
      <div>
        <NavbarFrames/>
      <div className="Frameee">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col sm={6} className="cc">
              <h4 className="headingss mt-2">Verification</h4>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default OLDFrame33
