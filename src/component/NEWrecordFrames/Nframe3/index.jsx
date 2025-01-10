// import React from "react";
// import { Card, Col, Container, Row, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import NavbarFrames from "../../Shared/NavbarFrames";
// import { HeartPulse } from 'lucide-react';
// import { PersonStanding } from 'lucide-react';
// chat


// const NEWFrame3 = () => {
//   return (
//     <div>
//       <NavbarFrames />
//       <div className="Frameee">
//         <Container>
//           <Row className="d-flex justify-content-center">
//             <Col sm={6} className="cc">
//               <h4 className="headingss mt-2">Clinical Patient Entry</h4>
//               <form action="">
//                 <div class="row">
//                   <div class="col-sm-10 mt-3 ms-5 me-2">
//                     <input
//                       type="text"
//                       class="form-control inp"
//                       placeholder=" Full Name of Patient "
//                     />
//                   </div>
//                   <div class="col-sm-10 mt-3 ms-5 me-2">
//                     <input
//                       type="text"
//                       class="form-control inp"
//                       placeholder="Phone Number of Patient"
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
//                   {/* <Form.Label column sm="3">
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
//                   </Col> */}
//                   <Form.Label column sm="1">
//                   <HeartPulse />
//                   </Form.Label>
//                   <Col sm="4">
//                     <Form.Select
//                       className="Formcontroll"
//                       aria-label="Blood Group"
//                     >
//                       <option>Blood Group </option>
//   <option value="A+">A+</option>
//   <option value="A-">A-</option>
//   <option value="B+">B+</option>
//   <option value="B-">B-</option>
//   <option value="O+">O+</option>
//   <option value="O-">O-</option>
//   <option value="AB+">AB+</option>
//   <option value="AB-">AB-</option>
//                     </Form.Select>
//                   </Col>
//                   <Form.Label column sm="1">
//                   <PersonStanding />
//                   </Form.Label>
//                   <Col sm="4">
//                     <Form.Select className="Formcontroll" aria-label="Gender">
//                       <option>Selct Gender </option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </Form.Select>
//                   </Col>
//                 </Form.Group>

//                 {/* <Form.Control type="email" placeholder="name@example.com" /> */}
//                 <div class="col-sm-10 mt-3 ms-5 me-2">
//                   <input
//                     type="text"
//                     class="form-control inp"
//                     placeholder="Date of Birth"
//                   />
//                 </div>
//               </form>
//               {/* <div className="move">
//             <Link to="/OFrame29" className=" ali-gbtn btn btn-primary mr-2">Proceed</Link>
//             <Link to="/Records" className="btn btn-primary">Back</Link>
//             </div> */}
//               <div className="d-flex flex-column">
//                 <div className="d-flex mb-2">
//                   <Link to="/Records" className="btn btn-primary exc2">
//                     Go Back
//                   </Link>
//                   <Link to="/NFrame4" className="btn btn-primary exc1">
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

// export default NEWFrame3;

// firebase
// import { db } from './firebase'; // Import your Firebase database instance
// import { db } from "./src/firebase";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NavbarFrames from "../../Shared/NavbarFrames";
import { HeartPulse, PersonStanding } from "lucide-react";


const NEWFrame3 = ({setPatientDataa}) => {
  const [medicinePrescription, setMedicinePrescription] = useState('');
  const [patientDiagnosis, setPatientDiagnosis] = useState('');
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
    setPatientDataa({ ...patientData, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      patientData.fullName &&
      patientData.phoneNumber &&
      patientData.address &&
      patientData.bloodGroup !== "Blood Group" &&
      patientData.gender !== "Select Gender" &&
      patientData.dateOfBirth
    ) 
    {
      const databaseEndpoint = "patients";

      const patientObject = {
        fullName: patientData.fullName,
        phoneNumber: patientData.phoneNumber,
        address: patientData.address,
        bloodGroup: patientData.bloodGroup,
        gender: patientData.gender,
        dateOfBirth: patientData.dateOfBirth,
      };
      fetch(
        // `https://vhadb-c09b4-default-rtdb.firebaseio.com/${databaseEndpoint}.json`,
        "http://localhost:5000/insert",
        {
          method: "POST", // Use POST to add new data
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(patientDiagnosisObject),
          body: JSON.stringify({
            Fname: patientData.fullName,
            adress: patientData.address,
            BloodGroup: patientData.bloodGroup,
            gender: patientData.gender,
            DOB: patientData.dateOfBirth,
            Phnumber: patientData.phoneNumber,
            medicinePrescription: " /",
            patientDiagnosis: " /",
          }),
        })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
          // Redirect or navigate to the next page upon success
          console.log(patientData)
          navigate(`/NFrame4`, {
            state: { patientData }, // Pass patient data to NFrame4
          });
          // Replace "/NFrame6" with your desired destination
          // window.location.href = "/Records";
        })
        .catch((error) => {
          console.error("Error sending data to Flask:", error);
        });


      fetch(
        `https://vhadb-c09b4-default-rtdb.firebaseio.com/${databaseEndpoint}.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(patientObject),
        }
      )
        .then((response) => {
          if (response.ok) {
            console.log("Data successfully stored in Firebase.");
            // history.push(`/NFrame5`, { patientData });
            navigate(`/NFrame4`, {
                state: { patientData }, // Pass patient data to NFrame4
            });
          } else {
            console.error("Failed to store data in Firebase.");
          }
        })
        .catch((error) => {
          console.error("Error sending data to Firebase:", error);
        });
    }
     else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div>
      <NavbarFrames />
      <div className="Frameee">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col sm={6} className="cc">
              <h4 className="headingss mt-2">Clinicall Patient Entry</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-10 mt-3 ms-5 me-2">
                    <input
                      type="text"
                      className="form-control inp"
                      placeholder="Full Name of Patient"
                      name="fullName"
                      value={patientData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-10 mt-3 ms-5 me-2">
                    <input
                      type="number"
                      className="form-control inp"
                      placeholder="Phone Number of Patient"
                      name="phoneNumber"
                      value={patientData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-10 mt-3 ms-5 me-2">
                    <input
                      type="text"
                      className="form-control inp"
                      placeholder="Physical Address of patient"
                      name="address"
                      value={patientData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <Form.Group
                  as={Row}
                  className="mb-3 mt-4 ms-4"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="1">
                    <HeartPulse />
                  </Form.Label>
                  <Col sm="4">
                    <Form.Select
                      className="Formcontroll"
                      aria-label="Blood Group"
                      name="bloodGroup"
                      value={patientData.bloodGroup}
                      onChange={handleInputChange}
                      required
                    >
                      <option>Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </Form.Select>
                  </Col>
                  <Form.Label column sm="1">
                    <PersonStanding />
                  </Form.Label>
                  <Col sm="4">
                    <Form.Select
                      className="Formcontroll"
                      aria-label="Gender"
                      name="gender"
                      value={patientData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Select>
                  </Col>
                </Form.Group>

                <div className="col-sm-10 mt-3 ms-5 me-2">
                  <input
                    type="text"
                    className="form-control inp"
                    placeholder="Date of Birth"
                    name="dateOfBirth"
                    value={patientData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="d-flex mb-2">
                  <Link to="/Records" className="btn btn-primary exc2">
                    Go Back
                  </Link>
                  <button type="submit" className="btn btn-primary exc1">
                    Proceed
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NEWFrame3;


