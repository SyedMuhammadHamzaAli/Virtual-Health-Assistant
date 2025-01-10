import React, { useState } from 'react'
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./frame32.css";
import NavbarFrames from '../../Shared/NavbarFrames';
import { useNavigate, useLocation } from "react-router-dom";

const OLDFrame32 = () => {
  const location = useLocation();
  const stateData = location.state || " ";
  const navigate = useNavigate();
  const [medicinePrescription, setMedicinePrescription] = useState('');
  const [patientDiagnosis, setPatientDiagnosis] = useState('');
  const [fullNameInput, setFullNameInput] = useState('');
  const [phoneNumberInput, setPhoneNumberInput] = useState('');
  console.log("Received1 stateData:", stateData);
  const handleBack = () => {
    // Send the state data to OFrame30 and navigate to it
    navigate("/OFrame31", { state: stateData });
    console.log(stateData);
  };
  const updateRecord = () => {
    // Prepare the data for the update
    const data = {
      Fname: stateData.Fname || fullNameInput, // Assuming Fname is part of stateData
      Phnumber: stateData.Phnumber || phoneNumberInput, // Assuming Phnumber is part of stateData
      medicinePrescription,
      patientDiagnosis,
    };
    console.log('Update Data:', data); 
    
    // Send a POST request to your Flask server to update the record
    fetch('http://localhost:5000/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server (e.g., show a success message)
        alert(data.message);
        console.log(data.message);
        // You can navigate to the next page here if needed
        navigate('/Records');
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
      });
  };
  return (
    <div>
        <NavbarFrames/>
       <div className="Frameee">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col sm={6} className="cc11">
              <h4 className="headingss mt-2" style={{ color: 'rgb(0, 179, 0)' }}>Verify Patient</h4>
            <div className="col ms-1 mt-3 mb-4 d-flex">
                    <Col sm={5} className="ms-4 me-5">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control inp"
                      placeholder="FullName"
                      // value={}
                      // onChange={}
                      value={fullNameInput}
                      onChange={(e) => setFullNameInput(e.target.value)}
                      required
                      />
                      </Col>
                    <Col sm={5}>
                    <input
                      type="number"
                      name="firstName"
                      className="form-control inp "
                      placeholder="Phone number"
                      // value={}
                      // onChange={}
                      value={phoneNumberInput}
                      onChange={(e) => setPhoneNumberInput(e.target.value)}
                      required
                      />
                      </Col>
            </div>
              <form action="">
              <h4 className="headingss mt-2">Revised Patient Health Record</h4>
                <Form>
                  <Form.Group
                    className="mb-3 mt-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label> <strong>Clinical Diagnosis</strong> of Patient</Form.Label>
                    <Form.Control className="Formcontroll" 
                    as="textarea" 
                    rows={3}
                    value={patientDiagnosis}
                    onChange={(e) => setPatientDiagnosis(e.target.value)} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label> <strong> New Recommended</strong> Medicines</Form.Label>
                    <Form.Control className="Formcontroll"
                     as="textarea"
                      rows={3}
                      value={medicinePrescription}
                    onChange={(e) => setMedicinePrescription(e.target.value)} />
                  </Form.Group>
                </Form>
              </form>
              {/* <div className="move">
            <Link to="/OFrame29" className=" ali-gbtn btn btn-primary mr-2">Proceed</Link>
            <Link to="/Records" className="btn btn-primary">Back</Link>
            </div> */}
              <div className="d-flex flex-column">
                <div className="d-flex mb-2">
                  {/* <Link to="/OFrame31" className="btn btn-primary exc2">
                    Go Back
                  </Link> */}
                  <button  onClick={handleBack} className="btn btn-primary exc2">
                    Go Back
                  </button>
                  {/* <Link to="/OFrame33" className="btn btn-primary exc1">
                    Proceed
                  </Link> */}
                   <button onClick={updateRecord} className="btn btn-primary exc1">
                    Submit
                  </button>
                </div>
                <div>{/* Other content */}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OLDFrame32;
