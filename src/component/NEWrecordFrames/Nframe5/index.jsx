// import React from 'react'
// import { Card, Col, Container, Row, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import NavbarFrames from '../../Shared/NavbarFrames';
// const NEWFrame5 = () => {
    //   return (
        //     <div>
//       <NavbarFrames/>
//        <div className="Frameee">
//         <Container>
//           <Row className="d-flex justify-content-center">
//             <Col sm={6} className="cc">
//               <h4 className="headingss mt-2">Patient Health Record</h4>
//               <form action="">
//                 <Form>
//                   <Form.Group
//                     className="mb-3 mt-5"
//                     controlId="exampleForm.ControlTextarea1"
//                   >
//                     <Form.Label> <strong>Clinical Diagnosis </strong>of Patient Condition</Form.Label>
//                     <Form.Control className="Formcontroll" as="textarea" rows={3} />
//                   </Form.Group>
//                   <Form.Group
//                     className="mb-3"
//                     controlId="exampleForm.ControlTextarea1"
//                   >
//                     <Form.Label> <strong>Prescribed Medications</strong> to patient</Form.Label>
//                     <Form.Control className="Formcontroll" as="textarea" rows={3} />
//                   </Form.Group>
//                 </Form>
//               </form>
//               {/* <div className="move">
//             <Link to="/OFrame29" className=" ali-gbtn btn btn-primary mr-2">Proceed</Link>
//             <Link to="/Records" className="btn btn-primary">Back</Link>
//             </div> */}
//               <div className="d-flex flex-column">
//                 <div className="d-flex mb-2">
//                   <Link to="/NFrame4" className="btn btn-primary exc2">
//                     Go Back
//                   </Link>
//                   <Link to="/NFrame6" className="btn btn-primary exc1">
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

// export default NEWFrame5;
////hereeeee
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarFrames from "../../Shared/NavbarFrames";
import { HeartPulse, PersonStanding } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NFrame5.css";
const NEWFrame5 = ({ patientData }) => 
{
  const location = useLocation();
  // const patientData = location.state || "";
  const navigate = useNavigate();
  const [medicinePrescription, setMedicinePrescription] = useState('');
  const [patientDiagnosis, setPatientDiagnosis] = useState('');
  const [fullNameInput, setFullNameInput] = useState('');
  const [phoneNumberInput, setPhoneNumberInput] = useState('');

  console.log("Received1 stateData:", patientData);
  const updateRecord = () => {
    // Prepare the data for the update
    const data = {
      Fname: fullNameInput, // Assuming Fname is part of stateData
      Phnumber: phoneNumberInput, // Assuming Phnumber is part of stateData
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
        // alert("Record-Stored Sucessfully");
        alert(data.message);
        console.log(data.message);
        // You can navigate to the next page here if needed
        navigate('/Records');
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
      });
  }
  // const [patientDiagnosis, setPatientDiagnosis] = useState('');
  // const [diagnosisData, setDiagnosisData] = useState({
  //   fullName: location.state.patientData.fullName || "",
  //   phoneNumber: location.state.patientData.phoneNumber || "",
  //   address: location.state.patientData.address || "",
  //   bloodGroup: location.state.patientData.bloodGroup || "",
  //   gender: location.state.patientData.gender || "",
  //   dateOfBirth: location.state.patientData.dateOfBirth || "",
  //   patientDiagnosis: "" ,
  //   medicinePrescription: "",
  // });

  // // const [data] = useState({
  // //   fullName: location.state.patientData.fullName || "",
  // //   phoneNumber: location.state.patientData.phoneNumber || "",
  // //   address: location.state.patientData.address || "",
  // //   bloodGroup: location.state.patientData.bloodGroup || "",
  // //   gender: location.state.patientData.gender || "",
  // //   dateOfBirth: location.state.patientData.dateOfBirth || "",
  // // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setDiagnosisData({ ...diagnosisData, [name]: value });
  // };

  // const handleSubmit = (e) => 
  // {
  //   e.preventDefault();

  //   if (diagnosisData.patientDiagnosis && diagnosisData.medicinePrescription) 
  //   {
  //     const databaseEndpoint = "patients"; // Update the path to the patients collection

  //     const patientDiagnosisObject = {
  //       ...diagnosisData, // Include existing patient data
  //     };

  //     // Fetch POST request to add the diagnosis data to the database
  //     // fetch(
  //     //   // `https://vhadb-c09b4-default-rtdb.firebaseio.com/${databaseEndpoint}.json`,
  //     //   "http://localhost:5000/insert",
  //     //   {
  //     //     method: "POST", // Use POST to add new data
  //     //     headers: {
  //     //       "Content-Type": "application/json",
  //     //     },
  //     //     // body: JSON.stringify(patientDiagnosisObject),
  //     //     body: JSON.stringify({
  //     //       Fname: diagnosisData.fullName || "",
  //     //       adress: diagnosisData.address || "",
  //     //       BloodGroup: diagnosisData.bloodGroup || "",
  //     //       gender: diagnosisData.gender || "",
  //     //       DOB: diagnosisData.dateOfBirth || "",
  //     //       Phnumber: diagnosisData.phoneNumber || "",
  //     //       medicinePrescription: diagnosisData.medicinePrescription || "",
  //     //       patientDiagnosis: diagnosisData.patientDiagnosis || "",
  //     //     }),
  //     //   })
  //   //     .then((response) => {
  //   //       if (response.ok) {
  //   //         console.log("Diagnosis data successfully stored in Firebase.");
  //   //         // Redirect to the next page
  //   //         // Replace "/NFrame6" with your desired destination
  //   //         window.location.href = "/NFrame6";
  //   //       } else {
  //   //         console.error("Failed to store diagnosis data in Firebase.");
  //   //       }
  //   //     })
  //   //     .catch((error) => {
  //   //       console.error(
  //   //         "Error sending diagnosis data to Firebase:",
  //   //         error
  //   //       );
  //   //     });
  //   // } else {
  //   //   alert("Please fill in all required fields.");
  //   // }
  //   // .then((response) => response.json())
  //   //     .then((data) => {
  //   //       alert(data.message);
  //   //       // Redirect or navigate to the next page upon success
  //   //       // Replace "/NFrame6" with your desired destination
  //   //       window.location.href = "/Records";
  //   //     })
  //   //     .catch((error) => {
  //   //       console.error("Error sending data to Flask:", error);
  //   //     });

  //   // 
  // } 
  //   else 
  //   {
  //     alert("Please fill in all required fields.");
  //   }
    
  // };

  return (
    <div>
      <NavbarFrames/>
       <div className="Frameeee1">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col sm={6} className="cccc"> 
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
              <h4 className="headingss mt-2">Patient Health Record</h4>
              <form action="">
                <Form>
                  <Form.Group
                    className="mb-3 mt-5"
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
                  <Link to="/NFrame4"  className="btn btn-primary exc2">
                    Go Back
                  </Link>
                  {/* <Link to="/OFrame33" className="btn btn-primary exc1">
                    Proceed
                  </Link> */}
                   <button onClick={updateRecord} className="btn btn-primary exc1">
                    Submitt
                  </button>
                </div>
                <div>{/* Other content */}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    {/* //   <NavbarFrames />
    //   <div className="Frameee">
    //     <Container>
    //       <Row className="d-flex justify-content-center">
    //         <Col sm={6} className="cc">
    //           <h4 className="headingss mt-2">Patient Health Record</h4>
    //           <form onSubmit={handleSubmit}>
    //             <Form>
    //               <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1">
    //                 <Form.Label>
    //                   <strong>Clinical Diagnosis</strong> of Patient Condition
    //                 </Form.Label>
    //                 <Form.Control
    //                   className="Formcontroll"
    //                   as="textarea"
    //                   rows={3}
    //                   name="patientDiagnosis"
    //                   value={diagnosisData.patientDiagnosis}
    //                   onChange={(e) => setPatientDiagnosis(e.target.value)}
    //                   // onChange={handleInputChange}
    //                   required
    //                 />
    //               </Form.Group>
    //               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    //                 <Form.Label>
    //                   <strong>Prescribed Medications</strong> to patient
    //                 </Form.Label>
    //                 <Form.Control
    //                   className="Formcontroll"
    //                   as="textarea"
    //                   rows={3}
    //                   name="medicinePrescription"
    //                   value={diagnosisData.medicinePrescription}
    //                   // onChange={handleInputChange}
    //                   onChange={(e) => setMedicinePrescription(e.target.value)}
    //                   required
    //                 />
    //               </Form.Group>
    //             </Form>
    //             <div className="d-flex mb-2">
    //               <Link to="/NFrame4" className="btn btn-primary exc2">
    //                 Go Back
    //               </Link>
    //               <button type="submit" className="btn btn-primary exc1">
    //                 Proceed
    //               </button>
    //             </div>
    //           </form>
    //         </Col>
    //       </Row>
    //     </Container>
    //   </div> */}
    </div>
  );
};
export default NEWFrame5;
