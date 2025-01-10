import React from 'react'
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';
// import { auth } from '../../firebase'; // Import the 'auth' object from your firebase.js file
import {auth} from '../Shared/firebase'
// import auth from '../..'
// import { auth } from '../../Shared/firebase'; // Import the 'auth' object from your firebase.js file

// import {auth} from "../Shared/firebase";
import {db} from "../Shared/firebase";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate, useLocation } from "react-router-dom";
// E:\WEB\Practice2\src\component\Shared\firebase.js
import "./Signup.css"
const Signup = () => {
  // LOGIN
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // User logged in successfully
        const user = userCredential.user;
        console.log('User logged in successfully:', user);
        // Redirect to the desired page, e.g., "/Records"
      navigate("/Records");
      })
      .catch(error => {
        // Handle errors (e.g., incorrect email or password)
        setError("Incorrect Email and Password");
      });
  };
  return (
    <div className='signupp appropriate'>
      <Container fluid>
        <Row>
          <Col sm={6} className="mt-5 d-flex align-items-center">
            <h1> Welcome Back! Log in <br/> to  <span className="startedd"> Continue. </span></h1>
          </Col>
          <Col sm={6} className="">
            <div className="BOXSL">
              <img className="logosll" src="./Images/logo48.png" alt="" />
              <h2 style={{ textAlign: "center" }}>Login</h2>
              <img className="barll" src="./Images/Rectangle15.png" alt="" />

              <form onSubmit={handleLogin} className='mt-5'>
        <div class="row">
          <div class="col-sm-10 mt-3 ms-5 me-2">
            <input
              type="email"
              name="email"
              className="form-control inp"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div class="col-sm-10 mt-3 ms-5 me-2">
            <input
              type="password"
              name="password"
              className="form-control inp"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
        <Link to="/Records" onClick={handleLogin} className="btn btn-primary mt-5">
          Log In
        </Link>
      </form>
            <h6><Link to="/login" className="signuppl">SignUp To Account?</Link></h6>
            </div>
            {/* <img className="BOXSL" src="./Images/Sign_loginRec.png" alt="" />
            <img className="logosll" src="./Images/logo48.png" alt="" />
            <img className="barll" src="./Images/Rectangle15.png" alt="" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
