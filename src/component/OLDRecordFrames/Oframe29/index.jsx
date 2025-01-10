// import React from "react";
// import "./frame29.css";
// import { Card, Col, Container, Row, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import NavbarFrames from '../../Shared/NavbarFrames';

// const OLDFrame29 = () => {
//   return (
//     <div>
//       <NavbarFrames/>
//       <div className="Frameee">
//         <Container>
//           <Row className="d-flex justify-content-center">
//             <Col sm={6} className="cc">
//               <h4 className="headingss mt-2">Patient Information</h4>
//               <form action="">
//                 <div class="row">
//                   <div class="col-sm-10 mt-3 ms-5 me-2">
//                     <input
//                       type="text"
//                       class="form-control inp"
//                       placeholder="Name of Patient "
//                     />
//                   </div>
//                   <div class="col-sm-10 mt-3 ms-5 me-2">
//                     <input
//                       type="text"
//                       class="form-control inp"
//                       placeholder="Phone Number Patient"
//                     />
//                   </div>
//                   <div class="col-sm-10 mt-3 ms-5 me-2">
//                     <input
//                       type="text"
//                       class="form-control inp"
//                       placeholder="Physical Address of patient"
//                     />
//                   </div>
//                 </div>
//                 <Form.Group
//                   as={Row}
//                   className="mb-3 mt-4 ms-4"
//                   controlId="formPlaintextPassword"
//                 >
//                   <Form.Label column sm="3">
//                     Blood Group
//                   </Form.Label>
//                   <Col sm="3">
//                     <Form.Control className="Formcontroll" type="text" placeholder="Blood" />
//                   </Col>
//                   <Form.Label column sm="2">
//                     Gender
//                   </Form.Label>
//                   <Col sm="3">
//                     <Form.Control className="Formcontroll" type="text" placeholder="Male" />
//                   </Col>
//                 </Form.Group>
//                 {/* <Form.Control type="email" placeholder="name@example.com" /> */}
//                 <div class="col-sm-10 mt-3 ms-5 me-2">
//                     <input
//                       type="text"
//                       class="form-control inp"
//                       placeholder="Date of Birth"
//                     />
//                   </div>
//               </form>
//               {/* <div className="move">
//             <Link to="/OFrame29" className=" ali-gbtn btn btn-primary mr-2">Proceed</Link>
//             <Link to="/Records" className="btn btn-primary">Back</Link>
//             </div> */}
//               <div className="d-flex flex-column">
//                 <div className="d-flex mb-2">
//                   <Link  to="/OFrame28" className="btn btn-primary exc2">
//                     Go Back
//                   </Link>
//                   <Link to="/OFrame30" className="btn btn-primary exc1">
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

// export default OLDFrame29;
import React from "react";
import "./frame29.css";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import NavbarFrames from '../../Shared/NavbarFrames';
import { useNavigate } from "react-router-dom";

const OLDFrame29 = () => {
  // Use useLocation to access the state data
  const location = useLocation();
  const stateData = location.state || " ";
  // const stateData2 =  location.state;
  const navigate = useNavigate(); // Use useNavigate to get the navigation function
  const handleProceed = () => {
    // Send the state data to OFrame30 and navigate to it
    navigate("/OFrame30", { state: stateData });
    console.log(stateData);
  };
  return (
    <div>
      <NavbarFrames/>
      <div className="Frameee">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col sm={6} className="cc">
              <h4 className="headingss mt-2">Patient Information</h4>
              <form action="">
                <div class="row">
                  <div class="col-sm-10 mt-3 ms-5 me-2">
                    {/* Display the name of the patient */}
                    <input
                      type="text"
                      class="form-control inp"
                      placeholder="Name of Patient"
                      value={stateData.Fname || ' '} // Access the Fname from stateData
                      readOnly // Make it read-only
                    />
                  </div>
                  <div class="col-sm-10 mt-3 ms-5 me-2">
                    {/* Display the phone number of the patient */}
                    <input
                      type="text"
                      class="form-control inp"
                      placeholder="Phone Number Patient"
                      value={stateData.Phnumber || ' '} // Access the Phnumber from stateData
                      readOnly // Make it read-only
                    />
                  </div>
                  <div class="col-sm-10 mt-3 ms-5 me-2">
                    {/* Display the physical address of the patient */}
                    <input
                      type="text"
                      class="form-control inp"
                      placeholder="Physical Address of patient"
                      value={stateData.adress || ' '} // Access the adress from stateData
                      readOnly // Make it read-only
                    />
                  </div>
                </div>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-4 ms-4"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="3">
                    Blood Group
                  </Form.Label>
                  <Col sm="3">
                    {/* Display the blood group of the patient */}
                    <Form.Control
                      className="Formcontroll"
                      type="text"
                      placeholder="Blood"
                      value={stateData.BloodGroup || ' '} // Access the BloodGroup from stateData
                      readOnly // Make it read-only
                    />
                  </Col>
                  <Form.Label column sm="2">
                    Gender
                  </Form.Label>
                  <Col sm="3">
                    {/* Display the gender of the patient */}
                    <Form.Control
                      className="Formcontroll"
                      type="text"
                      placeholder="Male"
                      value={stateData.gender || ' '} // Access the gender from stateData
                      readOnly // Make it read-only
                    />
                  </Col>
                </Form.Group>
                <div class="col-sm-10 mt-3 ms-5 me-2">
                  {/* Display the date of birth of the patient */}
                  <input
                    type="text"
                    class="form-control inp"
                    placeholder="Date of Birth"
                    value={stateData.DOB} // Access the DOB from stateData
                    readOnly // Make it read-only
                  />
                </div>
              </form>
              <div className="d-flex flex-column">
                <div className="d-flex mb-2">
                  <Link to="/OFrame28" className="btn btn-primary exc2">
                    Go Back
                  </Link>
                  {/* to="/OFrame30" */}
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

export default OLDFrame29;
