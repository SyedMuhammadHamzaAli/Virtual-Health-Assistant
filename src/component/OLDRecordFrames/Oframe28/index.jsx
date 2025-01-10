// import React from "react";
// import "./frame28.css";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import NavbarFrames from '../../Shared/NavbarFrames';
// import { getDatabase, orderByChild, ref, query, equalTo, get } from 'firebase/database';
// import { useState } from 'react';
// // import {db} from "../../Shared/firebase"; 
// // import { useNavigate } from "react-router-dom";

// const OLDFrame28 = () => {
//   // const [searchResults, setSearchResults] = useState({});
//   // const [patientName, setPatientName] = useState('');
//   // const [phoneNumber, setPhoneNumber] = useState('');
//   // const data = [];

// //   const customDatabaseURL = 'https://vhadb-c09b4-default-rtdb.firebaseio.com';
// //   const database = getDatabase(customDatabaseURL);
// //   const history = useNavigate;

//   const handleSearch = async () => {
// //       try {
// //           const database = getDatabase('https://vhadb-c09b4-default-rtdb.firebaseio.com');
// //           const patientsRef = ref(database, 'patients');
// //           const nameQuery = query(patientsRef, orderByChild('fullName'), equalTo(patientName));
// //           const numberQuery = query(patientsRef, orderByChild('phoneNumber'), equalTo(phoneNumber));
          
// //           const nameSnapshot = await get(nameQuery);
// //           const numberSnapshot = await get(numberQuery);
// //           if (nameSnapshot.exists()) {
// //               // Data found based on name
// //         const nameData = nameSnapshot.val();
// //         setSearchResults(nameData);
// //       } else if (numberSnapshot.exists()) {
// //         // Data found based on phone number
// //         const numberData = numberSnapshot.val();
// //         setSearchResults(numberData);
// //       } else {
// //         // No data found
// //         setSearchResults([]);
// //       }
// // }     catch (error) {
// //       console.error('Error searching for patient:', error);
// //     }
//   };
//   return (
//     <>
//     <NavbarFrames/>
//     <div className="Frameee">
//       <Container>
//         <Row className="d-flex justify-content-center">
//           <Col sm={6} className="cc">
//             <h4 className="headingss mt-2">Search Patient</h4>
//             <form action="">
//               <div class="row">
//                 <div class="col-sm-10 mt-3 ms-5 me-2">
//                   <input
//                     type="text"
//                     class="form-control inp"
//                     placeholder="Patient Name"
//                     value={patientName}
//                     onChange={(e) => setPatientName(e.target.value)}
//                   />
//                 </div>
//                 <div class="col-sm-10 mt-3 ms-5 me-2">
//                   <input
//                     type="text"
//                     class="form-control inp"
//                     placeholder="Patient Phone Number"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="ms-5 mt-4">
//                 <div class="form-check form-check-inline rad ms-5">
//                   <input
//                     class="form-check-input"
//                     type="radio"
//                     name="inlineRadioOptions"
//                     id="inlineRadio1"
//                     value="option1 "
//                   />
//                   <label class="form-check-label" for="inlineRadio1">
//                     Male
//                   </label>
//                 </div>
//                 <div class="form-check form-check-inline ms-5">
//                   <input
//                     class="form-check-input"
//                     type="radio"
//                     name="inlineRadioOptions"
//                     id="inlineRadio2"
//                     value="option2"
//                   />
//                   <label class="form-check-label" for="inlineRadio2">
//                     Female
//                   </label>
//                 </div>
//                 <div class="form-check form-check-inline ms-5">
//                   <input
//                     class="form-check-input"
//                     type="radio"
//                     name="inlineRadioOptions"
//                     id="inlineRadio3"
//                     value="option3"
//                   />
//                   <label class="form-check-label" for="inlineRadio3">
//                     Others
//                   </label>
//                 </div>
//               </div>
//             </form>
//             {/* <div className="move">
//             <Link to="/OFrame29" className=" ali-gbtn btn btn-primary mr-2">Proceed</Link>
//             <Link to="/Records" className="btn btn-primary">Back</Link>
//             </div> */}
//             <div className="d-flex flex-column">
//               <div className="d-flex mb-2">
//                 <Link to="/Records" className="btn btn-primary exc2">
//                   Go Back
//                 </Link>
//                 {/* to="/OFrame29" */}
//                 <Link onClick={handleSearch} className="btn btn-primary exc1">
//                   Proceed
//                 </Link>
//               </div>
//               <div>
//               <h4>Search Results:</h4>
//               {searchResults.length > 0 ? (
//   <ul>
//     {Object.keys(searchResults).map((key) => (
//         <p>No results found.</p> 
//     ))}
//   </ul>
// ) : (
//     <li>
//         <strong>Full Name:</strong> {searchResults.fullName}
//         <br />
//         <strong>Phone Number:</strong> {searchResults.phoneNumber}
//         <br />
//         <strong>Address:</strong> {searchResults.address}
//         <br />
//         <strong>Medicine Prescription:</strong> {searchResults.medicinePrescription}
//         <br />
//         <strong>Patient Diagnosis:</strong> {searchResults.patientDiagnosis}
//         <br />
//         {/* Include other patient information */}
//       </li>
// )}
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//     </>
//   );
// };

// export default OLDFrame28;
import React, { useState } from "react";
import "./frame28.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarFrames from '../../Shared/NavbarFrames';
import { useNavigate } from "react-router-dom";
const OLDFrame28 = () => {
  const [searchResults, setSearchResults] = useState({});
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      // Make a GET request to the Flask server
      const response = await fetch(`http://localhost:5000/search?Fname=${patientName}&Phnumber=${phoneNumber}`);
      
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);

        // navigate("/OFrame29", {
        //   state: { data }, // Pass patient data to NFrame5
        // });

        navigate('/OFrame29', { state: data });
      } else {
        setSearchResults({ message: 'Record not found' });
      }
    } catch (error) {
      console.error('Error searching for patient:', error);
    }
  };

  return (
    <>
    <NavbarFrames/>
    <div className="Frameee">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col sm={6} className="cc">
            <h4 className="headingss mt-2">Search Patient</h4>
            <form action="">
              <div className="row">
                <div className="col-sm-10 mt-3 ms-5 me-2">
                  <input
                    type="text"
                    className="form-control inp"
                    placeholder="Patient Name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </div>
                <div className="col-sm-10 mt-3 ms-5 me-2">
                  <input
                    type="number"
                    className="form-control inp"
                    placeholder="Patient Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="ms-5 mt-4">
                <div className="form-check form-check-inline rad ms-5">
                  {/* Radio buttons for gender */}
                </div>
              </div>
            </form>
            <div className="d-flex flex-column">
              <div className="d-flex mb-2">
                <Link to="/Records" className="btn btn-primary exc2">
                  Go Back
                </Link>
                <button onClick={handleSearch} className="btn btn-primary exc1">
                  Proceed
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default OLDFrame28;

// {/* <div>
// {/* <h4>Search Results:</h4> */}
// {searchResults.message ? (
//   <p>{searchResults.message}</p>
// ) : (
//   <ul>
//     <li>
//       <strong>Full Name:</strong> {searchResults.Fname}
//     </li>
//     <li>
//       <strong>Address:</strong> {searchResults.adress}
//     </li>
//     <li>
//       <strong>Blood Group:</strong> {searchResults.BloodGroup}
//     </li>
//     <li>
//       <strong>Gender:</strong> {searchResults.gender}
//     </li>
//     <li>
//       <strong>Date of Birth:</strong> {searchResults.DOB}
//     </li>
//     <li>
//       <strong>Phone Number:</strong> {searchResults.Phnumber}
//     </li>
//     <li>
//       <strong>Medicine Prescription:</strong> {searchResults.medicinePrescription}
//     </li>
//     <li>
//       <strong>Patient Diagnosis:</strong> {searchResults.patientDiagnosis}
//     </li>
//     <li>
//       <strong>Created At:</strong> {searchResults.createdAT}
//     </li>
//     {/* Include other patient information */}
//   </ul>
// )}
// </div> */}