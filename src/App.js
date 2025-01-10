import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import {format} from "date-fns";
// import {db} from "./firebase";
// import {uid} from "uid";
// import NavbarHome from "./component/Shared/Navbar";
// import Login from "./component/Loginpage/logincontent";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpagee";
import Signuppage from "./pages/signup";
import Recordpage from "./pages/Records";
import OLDFrame28 from "./component/OLDRecordFrames/Oframe28";
import OLDFrame29 from "./component/OLDRecordFrames/Oframe29";
import OLDFrame30 from "./component/OLDRecordFrames/Oframe30";
import OLDFrame31 from "./component/OLDRecordFrames/Oframe31";
import OLDFrame32 from "./component/OLDRecordFrames/Oframe32";
import OLDFrame33 from "./component/OLDRecordFrames/Oframe33";
import NEWFrame3 from "./component/NEWrecordFrames/Nframe3";
import NEWFrame4 from "./component/NEWrecordFrames/Nframe4";
import NEWFrame5 from "./component/NEWrecordFrames/Nframe5";
import NEWFrame6 from "./component/NEWrecordFrames/Nframe6";
import About from "./component/Home/About";
import Healthcare from "./component/Home/Healthcare";
import Footerr from "./component/Home/Footer";
import {BrowserRouter,Route,Routes} from "react-router-dom";
// import Hero from "./component/Home/Hero";
const basUrl = "http//localhost:5000";

// const express = require('express')
// App = express()
// App.listen(3000, () =>{
//   console.log('Listning')
// })

function App() {
  const [patientData, setPatientDataa] = useState({});
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/login" element = {<Loginpage />} />
      <Route path="/signup" element = {<Signuppage />} />
      <Route path="/Records" element = {<Recordpage />} />
      <Route path="/OFrame28" element = {<OLDFrame28 />} />
      <Route path="/OFrame29" element = {<OLDFrame29 />} />
      <Route path="/OFrame30" element = {<OLDFrame30 />} />
      <Route path="/OFrame31" element = {<OLDFrame31 />} />
      <Route path="/OFrame32" element = {<OLDFrame32 />} />
      <Route path="/OFrame33" element = {<OLDFrame33 />} />
      <Route path="/NFramee3" element = {<NEWFrame3 setPatientDataa={setPatientDataa}/>} />
      <Route path="/NFrame4" element = {<NEWFrame4 patientData={patientData} />} />
      <Route path="/NFrame5" element = {<NEWFrame5 patientData={patientData}/>} />
      <Route path="/NFrame6" element = {<NEWFrame6 />} />
      <Route path="/about" element = {< About/>} />
      <Route path="/health" element = {< Healthcare/>} />
      <Route path="/contact" element = {< Footerr/>} />



    </Routes>

    </BrowserRouter>
      {/* <BrowserRouter> */}
      {/* <main> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Home/>}/> */}
      {/* <NavbarHome /> */}
      {/* <Home /> */}
      {/* </Routes> */}
      {/* </main> */}
      {/* </BrowserRouter> */}
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Loginpage} />
        </Switch>
      </Router> */}
      {/* <Router>
      <main>
        <Hero />
        <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      </Router> */}
    </>
  );
}

export default App;
