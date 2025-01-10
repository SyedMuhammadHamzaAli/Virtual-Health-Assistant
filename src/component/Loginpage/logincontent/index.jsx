// import React from "react";
// import "./login.css";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="Loginn">
//       <Container fluid>
//         <Row>
//           <Col sm={6} className="mt-5 d-flex align-items-center">
//             <h1> Welcome to Virtual <br/> Health Assist! <br/> <span className="startedd"> Get Started. </span></h1>
//           </Col>
//           <Col sm={6} className="">
//             <div className="BOXSL">
//               <img className="logosll" src="./Images/logo48.png" alt="" />
//               <h2 style={{ textAlign: "center" }}>Signup</h2>
//               <img className="barll" src="./Images/Rectangle15.png" alt="" />

//               <form action="">
//                 <div class="row">
//                   <div class="col ms-5 ">
//                     <input
//                       type="text"
//                       class="form-control inp"
//                       placeholder="First name"
//                     />
//                   </div>
//                   <div class="col me-5">
//                     <input
//                       type="text"
//                       class="form-control inp"
//                       placeholder="Last name"
//                     />
//                   </div>
//                   <div class="col-sm-10 mt-3 ms-5 me-2">
//                     <input
//                       type="text"
//                       class="form-control inp"
//                       placeholder="Email Adress"
//                     />
//                   </div>
//                   <div class="col-sm-10 mt-3 ms-5 me-2">
//                     <input
//                       type="password"
//                       class="form-control inp"
//                       placeholder="Password"
//                     />
//                   </div>
//                   <div class="col-sm-10 mt-3 ms-5 me-2">
//                     <input
//                       type="password"
//                       class="form-control inp"
//                       placeholder="Confirm Password"
//                     />
//                   </div>
//                 </div>
//                 {/* Radio Buttons */}
//                 <div className="ms-5 mt-4">
//                 <div class="form-check form-check-inline rad">
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
//                     />
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
//                     />
//                   <label class="form-check-label" for="inlineRadio3">
//                     Others
//                   </label>
//                 </div>
//             </div>
//             {/* <button className="btn btn-primary mt-5">Signup</button> */}
//             <Link to="/Records" className="btn btn-primary mt-5">Signup</Link> <br /><br />
//              <br /><br />
//             <h6><Link to="/signup" className="loginnn">Continue To Login?</Link></h6>
            
//               </form>
//             </div>
//             {/* <img className="BOXSL" src="./Images/Sign_loginRec.png" alt="" />
//             <img className="logosll" src="./Images/logo48.png" alt="" />
//             <img className="barll" src="./Images/Rectangle15.png" alt="" /> */}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./login.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {db} from "../../Shared/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from '../../Shared/firebase'; // Import the 'auth' object from your firebase.js file

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
const location = useLocation();

  const { password, confirmPassword, email } = formData;
  const [isFormValid, setIsFormValid] = useState(false);

  const isFormComplete = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password !== "" &&
      formData.confirmPassword !== "" &&
      formData.gender !== ""
    );
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   setIsFormValid(isFormComplete());
  //   // Regular expression to check for a valid email format
  // let updatedValue = value;
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // // Check if the entered value is a valid email format
  // const isValidEmail = emailRegex.test(value);

  // // Update the formData state and check if the email is valid
  // // setFormData({ ...formData, [name]: value });
  // // setIsFormValid(isFormComplete() && isValidEmail);

  // // If the email is not in a valid format, apply visual feedback
  // const emailInput = document.getElementsByName('email')[0];
  // if (!isValidEmail) {
  //   emailInput.classList.add('invalid'); // Add a CSS class for visual feedback (e.g., red border)
  // } else {
  //   emailInput.classList.remove('invalid'); // Remove the CSS class if email format is valid
  // }
  // // validation for name///////////////////////////////
  // // let updatedValue = value;

  // // Regular expression to allow only alphabetic characters
  // if (name === 'firstName' || name === 'lastName') {
  //   updatedValue = value.replace(/[^A-Za-z]/gi, ''); // Remove characters other than alphabets
  // }

  // // Update the formData state
  // setFormData({ ...formData, [name]: updatedValue });

  // // Check form completeness
  // setIsFormValid(isFormComplete() && isValidEmail);

  // // Apply visual feedback for invalid input (if needed)
  // const inputElement = document.getElementsByName(name)[0];
  // if (updatedValue !== value) {
  //   inputElement.classList.add('invalid');
  // } else {
  //   inputElement.classList.remove('invalid');
  // }
  // };

  //// NEW
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
    let isValidEmail = true;
  
    // Update the formData state for email and check its validity
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValidEmail = emailRegex.test(value);
  
      // Apply visual feedback for the email input
      const emailInput = document.getElementsByName('email')[0];
      if (!isValidEmail) {
        emailInput.classList.add('invalid'); // Add a CSS class for visual feedback (e.g., red border)
      } else {
        emailInput.classList.remove('invalid'); // Remove the CSS class if email format is valid
      }
    }
  
    // Validation for name fields (firstName and lastName)
    if (name === 'firstName' || name === 'lastName') {
      updatedValue = value.replace(/[^A-Za-z]/gi, ''); // Remove characters other than alphabets
  
      // Apply visual feedback for invalid name input
      const inputElement = document.getElementsByName(name)[0];
      if (updatedValue !== value) {
        inputElement.classList.add('invalid');
      } else {
        inputElement.classList.remove('invalid');
      }
    }
  
    // Update the formData state after validation
    setFormData({ ...formData, [name]: updatedValue });
  
    // Check form completeness considering both email and general form completion
    setIsFormValid(isFormComplete() && isValidEmail);
  };

  ///END

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        console.log('User signed up successfully:', user);
      })
      .catch((error) => {
        // Handle errors (e.g., email already in use)
        console.error('Error signing up:', error.message);
      });
      // Passwords match, proceed with signup
      console.log("Passwords match. Proceed with signup.");
      navigate("/Records");
    } else {
      // Passwords do not match, show an error message
      alert("Passwords do not match. Please try again.");
    }

  };

  return (
    <div className="Loginn">
      <Container fluid>
        <Row>
          <Col sm={6} className="mt-5 d-flex align-items-center">
            <h1>
              Welcome to Virtual <br /> Health Assist! <br />{" "}
              <span className="startedd"> Get Started. </span>
            </h1>
          </Col>
          <Col sm={6} className="">
            <div className="BOXSL">
            <img className="logosll" src="./Images/logo48.png" alt="" />
              <h2 style={{ textAlign: "center" }}>Signup</h2>
              <img className="barll" src="./Images/Rectangle15.png" alt="" />

              <form onSubmit={handleSignup}>
                <div className="row">
                  <div className="col ms-5">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control inp"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col me-5">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control inp"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-10 mt-3 ms-5 me-2">
                    <input
                      type="text"
                      name="email"
                      className="form-control inp"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-10 mt-3 ms-5 me-2">
                    <input
                      type="password"
                      name="password"
                      className="form-control inp"
                      placeholder="Password"
                      value={password}
                      onChange={handleInputChange}
                      required

                    />
                  </div>
                  <div className="col-sm-10 mt-3 ms-5 me-2">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control inp"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={handleInputChange}
                      required

                    />
                  </div>
                </div>
                {/* Radio Buttons */}
                <div className="ms-5 mt-4">
                  <div className="form-check form-check-inline rad">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="maleRadio"
                      value="Male"
                      onChange={handleInputChange}
                      required

                    />
                    <label className="form-check-label" htmlFor="maleRadio">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline ms-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="femaleRadio"
                      value="Female"
                      onChange={handleInputChange}
                      required

                    />
                    <label className="form-check-label" htmlFor="femaleRadio">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline ms-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="otherRadio"
                      value="Other"
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="otherRadio">
                      Others
                    </label>
                  </div>
                </div>
                <Link to="/Records" onClick={handleSignup}  className={`btn btn-primary mt-5 ${isFormValid ? "" : "disabled"}`}>
                  Signup
                </Link>
                <br />
                <br />
                <br />
                <br />
                <h6>
                  <Link to="/signup" className="loginnn">
                    Continue To Login?
                  </Link>
                </h6>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
