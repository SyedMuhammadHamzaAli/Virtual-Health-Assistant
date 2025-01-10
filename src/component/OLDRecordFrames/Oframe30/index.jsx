// import React from "react";
// import { Card, Col, Container, Row, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./frame30.css";
// import NavbarFrames from '../../Shared/NavbarFrames';
// import { useLocation } from "react-router-dom";
// const OLDFrame30 = () => {
//   const location = useLocation();
//   const stateData = location.state;
//   return (
//     <div>
//       <NavbarFrames/>
//       <div className="Frameee">
//         <Container>
//           <Row className="d-flex justify-content-center">
//             <Col sm={6} className="cc">
//               <h4 className="headingss mt-2">Patient Medical History</h4>
//               <form action="">
//                 <Form>
//                   <Form.Group
//                     className="mb-3 mt-5"
//                     controlId="exampleForm.ControlTextarea1"
//                   >
//                     <Form.Label>Previous Diagnosed Disease</Form.Label>
//                     <Form.Control className="Formcontroll" as="textarea" rows={3} 
//                     // value={stateData.patientDiagnosis || ''}
//                     />
//                   </Form.Group>
//                   <Form.Group
//                     className="mb-3"
//                     controlId="exampleForm.ControlTextarea1"
//                   >
//                     <Form.Label>Previous Medications</Form.Label>
//                     <Form.Control className="Formcontroll" as="textarea" rows={3}
//                     // value={stateData.medicinePrescription || ''}
//                      />
//                   </Form.Group>
//                 </Form>
//               </form>
//               {/* <div className="move">
//             <Link to="/OFrame29" className=" ali-gbtn btn btn-primary mr-2">Proceed</Link>
//             <Link to="/Records" className="btn btn-primary">Back</Link>
//             </div> */}
//               <div className="d-flex flex-column">
//                 <div className="d-flex mb-2">
//                   <Link to="/OFrame29" className="btn btn-primary exc2">
//                     Go Back
//                   </Link>
//                   <Link to="/OFrame31" className="btn btn-primary exc1">
//                     Proceed
//                   </Link>
//                 </div>
//                 <div>{/* Other content */}</div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default OLDFrame30;
import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./frame30.css";
import NavbarFrames from '../../Shared/NavbarFrames';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OLDFrame30 = () => {
  const location = useLocation();
  const stateData = location.state || " ";
  const navigate = useNavigate(); // Use useNavigate to get the navigation function
  const handleProceed = () => {
    // Send the state data to OFrame30 and navigate to it
    navigate("/OFrame31", { state: stateData });
    console.log(stateData);
  };
  const handleBack = () => {
    // Send the state data to OFrame30 and navigate to it
    navigate("/OFrame29", { state: stateData });
    console.log(stateData);
  };

  return (
    <div>
      <NavbarFrames/>
      <div className="Frameee">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col sm={6} className="cc">
              <h4 className="headingss mt-2">Patient Medical History</h4>
              <form action="">
                <Form>
                  <Form.Group
                    className="mb-3 mt-5"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Previous Diagnosed Disease</Form.Label>
                    <Form.Control
                      className="Formcontroll"
                      as="textarea"
                      rows={3}
                      value={stateData.patientDiagnosis || " "} // Display patientDiagnosis
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Previous Medications</Form.Label>
                    <Form.Control
                      className="Formcontroll"
                      as="textarea"
                      rows={3}
                      value={stateData.medicinePrescription || " "} // Display medicinePrescription
                      // readOnly
                    />
                  </Form.Group>
                </Form>
              </form>
              <div className="d-flex flex-column">
                <div className="d-flex mb-2">
                  {/* <Link to="/OFrame29" className="btn btn-primary exc2">
                    Go Back
                  </Link> */}
                  <button  onClick={handleBack} className="btn btn-primary exc2">
                    Go Back
                  </button>
                  
                  {/*  onClick={handleProceed}*/}
                  {/* <Link to="/OFrame31"  className="btn btn-primary exc1">
                    Proceed
                  </Link> */}
                  <button  onClick={handleProceed} className="btn btn-primary exc1">
                    Proceed
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

export default OLDFrame30;
