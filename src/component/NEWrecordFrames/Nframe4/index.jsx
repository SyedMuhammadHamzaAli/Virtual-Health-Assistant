// // import React from 'react'
// import React, { useState } from "react";
// import { Card, Col, Container, Row, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "font-awesome/css/font-awesome.min.css";
// import { ArrowRight } from "lucide-react";
// import NavbarFrames from '../../Shared/NavbarFrames';
// import { useLocation, useNavigate } from "react-router-dom";
// const NEWFrame4 = () => {
//     const navigate = useNavigate();
//   const location = useLocation();
//   const { patientData } = location.state || {}; // Retrieve patientData from state
//   const handleNavigateToNEWFrame5 = () => {
//     navigate("/NFrame5", {
//       state: { patientData }, // Pass patient data to NFrame5
//     });

//     const [isAllergiesChecked, setAllergiesChecked] = useState(false);
//   const [allergyInfo, setAllergyInfo] = useState("");

//   const handleCheckboxChange = (event) => {
//     setAllergiesChecked(event.target.checked);
//     if (!event.target.checked) {
//       setAllergyInfo("");
//     }
//   };
// };
//   return (
//     <div>
//           <NavbarFrames/>
//       <div className="Frameee">
//         <Container>
//           <Row className="d-flex justify-content-center">
//             <Col sm={6} className="cc">
//               <h4 className="headingss mt-2">Patient Diagnosis</h4>
//               <form action="">
//                 <div className="form-group">
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       checked={isAllergiesChecked}
//                       onChange={handleCheckboxChange}
//                       id="allergiesCheckbox"
//                     />
//                     <label
//                       className="form-check-label"
//                       htmlFor="allergiesCheckbox"
//                     >
//                       Allergies
//                     </label>
//                   </div>
//                   {/* <input
//                     type="text"
//                     className={`form-control ${
//                       isAllergiesChecked ? "" : "disabled"
//                     }`}
//                     placeholder="Enter allergy information"
//                     value={allergyInfo}
//                     onChange={(event) => setAllergyInfo(event.target.value)}
//                     disabled={!isAllergiesChecked}
//                   /> */}
//                   <textarea
//                     className={`form-control ${
//                       isAllergiesChecked ? "" : "disabled"
//                     }`}
//                     rows="4" // You can adjust the number of rows as needed
//                     placeholder="Check to Enter allergy information"
//                     value={allergyInfo}
//                     onChange={(event) => setAllergyInfo(event.target.value)}
//                     disabled={!isAllergiesChecked}
//                   ></textarea>
//                 </div>
//                 <div className="input-group mb-3 mt-4">
//                   <input
//                     type="text"
//                     className="form-control Formcontroll"
//                     placeholder="Input Symptoms."
//                     aria-label="Search"
//                     aria-describedby="searchButton"
//                   />
//                   <button
//                     className="btn btn-success"
//                     type="button"
//                     id="searchButton"
//                   >
//                     <i>
//                       <ArrowRight />
//                     </i>
//                   </button>
//                 </div>
//                 <Form.Group controlId="dropdownTextbox">
//                   <Form.Label>Select an option:</Form.Label>
//                   <Form.Control as="select">
//                     <option>Option 1</option>
//                     <option>Option 2</option>
//                     <option>Option 3</option>
//                   </Form.Control>
                  
//                 </Form.Group>
//                 <Form.Group
//                   className="mb-1"
//                   controlId="exampleForm.ControlTextarea1"
//                 >
//                   <Form.Label>Recomended Medicines</Form.Label>
//                   <Form.Control
//                     className="Formcontroll"
//                     as="textarea"
//                     rows={3}
//                   />
//                 </Form.Group>
                
//               </form>
//               {/* Buttons */}
//               <div className="d-flex flex-column">
//                 <div className="d-flex mb-2">
//                   <Link to="/Nframee3" className="btn btn-primary exc22">
//                     Go Back
//                   </Link>
//                   <Link to="/NFrame5" className="btn btn-primary exc11" onClick={handleNavigateToNEWFrame5}>
//                     Proceed
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default NEWFrame4;

import React, { useState } from "react";
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { ArrowRight } from "lucide-react";
import NavbarFrames from '../../Shared/NavbarFrames';
import { useLocation, useNavigate } from "react-router-dom";

const NEWFrame4 = ({ patientData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const patientDataa  = location.state ; // Retrieve patientData from state
  // const patientData = location.state || {};
  const [isAllergiesChecked, setAllergiesChecked] = useState(false);
  const [allergyInfo, setAllergyInfo] = useState("");

  const handleCheckboxChange = (event) => {
    setAllergiesChecked(event.target.checked);
    if (!event.target.checked) {
      setAllergyInfo("");
    }
  };
  const [SearchResults, setSearchResults] = useState("");
  const handleNavigateToNEWFrame5 = () => {
    console.log(patientDataa);
    navigate("/NFrame5", {
      state: { SearchResults }, // Pass patient data to NFrame5
    });
  };
  ////////////////////////MEDICINE CODE//////////////////////////////////////////////


  ////////////////////////CODE ENDS HERE/////////////////////////////////////////////
// code starts here
// Disease pridiction
const [recommendedMedicines, setRecommendedMedicines] = useState("");
const [precautions, setPrecautions] = useState("");
const sendSymptomsToBackend = async () => {
  // Store patientData before making the POST request
  // const patientDataa = location.state || {};
 //getdata
 try {
  // Make a GET request to the Flask server
  const response = await fetch(`http://localhost:5000/search?Fname=${patientData.fullName}&Phnumber=${patientData.phoneNumber}`);
  // console.log(patientDataa)
  if (response.ok) {
    const data = await response.json();
    setSearchResults(data);
    // navigate("/OFrame29", {
    //   state: { data }, // Pass patient data to NFrame5
    // });
    // navigate('/OFrame29', { state: data });
  } else {
    setSearchResults({ message: 'Record not found' });
  }
} catch (error) {
  console.error('Error searching for patient:', error);
}

  // console.log("Current patientData n4:", patientDataa);

  // Extract selected symptoms from inputValues array
  const selectedSymptoms = inputValues.filter((symptom) => symptom !== "");
  console.log("Selected symptoms:", selectedSymptoms);
  if (selectedSymptoms.length === 0) {
    alert("Please select at least one symptom.");
    return;
  }
  try {
    // Send an HTTP POST request to your Flask backend
    const response = await fetch("http://localhost:5000/predict_disease", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symptoms: selectedSymptoms }),
    });

    if (response.ok) {
      const data = await response.json();
      setRecommendedMedicines(data.predicted_disease);
        if (data.predicted_disease.toLowerCase() === "allergy") 
        {setPrecautions("Paracetamol (Acetaminophen), \nDexamethasone,\nfluticasone furoate, \nloratadine");} 
        else if (data.predicted_disease.toLowerCase() === "gerd") 
        {setPrecautions("Metoclopramid, \nDexamethasone, \nHydrocortisone, \nPrednisone, \nOmeprazole, \nRanitidine");} 
        else if (data.predicted_disease.toLowerCase() === "fungal infection") 
        {setPrecautions("Ceftriaxone, \nCefixime, \nAzithromycin, \nTrimethoprim, \nOxygen");} 
        else if (data.predicted_disease.toLowerCase() === "chronic cholestasis") 
        {setPrecautions("Ondansetron, \n Dolasetron, \n Tropisetron, \n Dexamethasone, \n Cetirizine");} 
        else if (data.predicted_disease.toLowerCase() === "Drug Reaction") 
        {setPrecautions("Niclosamide, \n Oxygen");} 
        else if (data.predicted_disease.toLowerCase() === "peptic ulcer diseae") 
        {setPrecautions("Atropine, \n Amoxicillin, \nGlycopyrronium");} 
        else if (data.predicted_disease.toLowerCase() === "aids")
        {setPrecautions("Methadone, \n Clarithromycin, \n Efavirenz");} 
        else if (data.predicted_disease.toLowerCase() === "diabetes ") 
        {setPrecautions("Hydrochlorothiazide, \n Telmisartan");} 
        else if (data.predicted_disease.toLowerCase() === "gastroenteritis") 
        {setPrecautions("Rotavirus vaccine, \n Erythromycin");} 
        else if (data.predicted_disease.toLowerCase() === "bronchial asthma") 
        {setPrecautions("Formoterol, \n Salbutamol, \n Epinephrine");} 
        else if (data.predicted_disease.toLowerCase() === "hypertension ") 
        {setPrecautions("Enalapril, \n Hydrochlorothiazide, \n Chlorothiazide, \n Indapamide, \n Lisinopril, \n Losartan, \n Methyldopa, \n Telmisartan (condition), \n Sodium nitroprusside (Severe Condition)");} 
        else if (data.predicted_disease.toLowerCase() === "migraine") 
        {setPrecautions("Acetylsalicylic acid, \n Timolol, \n Ibuprofen, \n Amitriptyline, \n Valproic Acid, \n Riboflavin, \n Oxygen");}
        else if (data.predicted_disease.toLowerCase() === "cervical spondylosis") 
        {setPrecautions("Ibuprofen, \n naproxen sodium, \n acetaminophen");} 
        else if (data.predicted_disease.toLowerCase() === "paralysis (brain hemorrhage)") 
        {setPrecautions("Openion of doctor recomended for treatment");} 
        else if (data.predicted_disease.toLowerCase() === "Jaundice") 
        {setPrecautions("Lcterene, \n vitamin C, \n glucose, \n hydrates");}
        else if (data.predicted_disease.toLowerCase() === "malaria") 
        {setPrecautions("Amodiaquine, \n Artesunate, \n Chloroquine, \n Doxycycline");}
        else if (data.predicted_disease.toLowerCase() === "chicken pox") 
        {setPrecautions("Varicella zoster vaccine (live/attenuated), \n Aciclovir, \n Valaciclovir");}
        else if (data.predicted_disease.toLowerCase() === "dengue") 
        {setPrecautions("Dengue tetravalent vaccine, live");}
        else if (data.predicted_disease.toLowerCase() === "typhoid") 
        {setPrecautions("Typhoid Vaccine Live");}
        else if (data.predicted_disease.toLowerCase() === "hepatitis a") 
        {setPrecautions("Hepatitis B Vaccine (Recombinant), \n Hepatitis A vaccine (live, attenuated)");}
        else if (data.predicted_disease.toLowerCase() === "hepatitis b") 
        {setPrecautions("Hepatitis B Vaccine (Recombinant), \n Lamivudine (Hepatitis B (HBV)), \n Entecavir (Hepatitis B Virus infection)");}
        else if (data.predicted_disease.toLowerCase() === "hepatitis c") 
        {setPrecautions("Sofosbuvir (Virus (HCV) infection), \n Ribavirin (Virus (HCV) infection)");}
        else if (data.predicted_disease.toLowerCase() === "hepatitis d") 
        {setPrecautions("Treatment on behalf of doctor advice");}
        else if (data.predicted_disease.toLowerCase() === "hepatitis d") 
        {setPrecautions("Treatment on behalf of doctor advice");}
        else if (data.predicted_disease.toLowerCase() === "hepatitis e") 
        {setPrecautions("Treatment on behalf of doctor advice");}
        else if (data.predicted_disease.toLowerCase() === "alcoholic hepatitis") 
        {setPrecautions("Prednisolone 40mg,\nTreatment on behalf of doctor advice");}
        else if (data.predicted_disease.toLowerCase() === "tuberculosis") 
        {setPrecautions("Amikacin, \n Dexamethasone, \n Rifampicin, \n Ethambutol, \n Isoniazid, \n Cycloserine, \n delamanida, \n Ethionamide, \n Protionamide, \n P-Aminosalicylic Acid, \n Tuberculin purified protein derivative (PPD)");}
        else if (data.predicted_disease.toLowerCase() === "common cold") 
        {setPrecautions("caffeine citrate , \n Ipratropium , \n Ascorbic Acid, \n Acetylsalicylic acid, \n Ibuprofen, \n Paracetamol (Acetaminophen), \n Codeine");}
        else if (data.predicted_disease.toLowerCase() === "pneumonia") 
        {setPrecautions("Fluorescein, \n Azithromycin , \n Amikacin, \n Kanamycin (Bacterial Infection caused by Pneumonia), \n Ofloxacin, \n Dexamethasone");}
        else if (data.predicted_disease.toLowerCase() === "dimorphic hemmorhoids(piles)") 
        {setPrecautions("Lactulose for piles, \n doxycycline");}
        else if (data.predicted_disease.toLowerCase() === "heart attack") 
        {setPrecautions("Doctor Consultancy, \n Bisoprolol");}
        else if (data.predicted_disease.toLowerCase() === "varicose veins") 
        {setPrecautions("polidocanol, \n Varithena, \n Sotradecol, \n Asclera");}  
        else if (data.predicted_disease.toLowerCase() === "hypothyroidism") 
        {setPrecautions("levothyroxine, \n Synthroid, \n Levoxyl, \n Tirosint");}
        else if (data.predicted_disease.toLowerCase() === "hyperthyroidism") 
        {setPrecautions("Potassium Iodide, \n Carbimazole, \n Propylthiouracil, \n Methimazole");}
        else if (data.predicted_disease.toLowerCase() === "hypoglycemia") 
        {setPrecautions("Glucose, \n Glucagon");}
        else if (data.predicted_disease.toLowerCase() === "osteoarthristis") 
        {setPrecautions("Ibuprofen, \n indomethacin");}
        else if (data.predicted_disease.toLowerCase() === "arthritis") 
        {setPrecautions("Paracetamol (Acetaminophen), \n Fentanyl, \nDexamethasone (Acute Gouty Arthritis), \nAcetylsalicylic acid");}
        else if (data.predicted_disease.toLowerCase() === "(vertigo) paroymsal  positional vertigo") 
        {setPrecautions("diazepam (Valium), \n dimenhydrinate (Dramamine), \n promethazine (Phenergan)");}
        else if (data.predicted_disease.toLowerCase() === "acne") 
        {setPrecautions("Salicylic acid, \n Miconazole, \n Benzoyl peroxide, \n Metronidazole, \n Erythromycin, \n Doxycycline, \n Clindamycin, \nDexamethasone");}
        else if (data.predicted_disease.toLowerCase() === "urinary tract infection") 
        {setPrecautions("Gentamicin, \n Amikacin, \n Netilmicin, \n Tobramycin, \n Ofloxacin, \n ciprofloxacin");}
        else if (data.predicted_disease.toLowerCase() === "psoriasis") 
        {setPrecautions("Azathioprine, \n Coal tar, \n Urea, \n Salicylic acid, \n Gentamicin(Pustular Psoriasis (PP)), \n Dexamethasone (Severe Psoriasis), \n Methotrexate(Severe Psoriasis), \n Betamethasone (Plaque Psoriasis)");}
        else if (data.predicted_disease.toLowerCase() === "impetigo") 
        {setPrecautions("Mupirocin, \n Gentamicin");}
        else 
        {
          setPrecautions("");
        }
      

    } else {
      alert("Failed to get recommended medicines.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while connecting to the backend.");
  }

};

// more
// Symptoms selector
const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);
const [isDropdownsVisible, setDropdownsVisible] = useState([
  false,
  false,
  false,
  false,
  false,
  false,
]);

const symptoms = [
  "itching",
  // "skin_rash",
  "nodal_skin_eruptions",
  "continuous_sneezing",
  "shivering",
  "chills",
  "joint_pain",
  "stomach_pain",
  "acidity",
  "ulcers_on_tongue",
  "muscle_wasting",
  "vomiting",
  "burning_micturition",
  "spotting_ urination",
  "fatigue",
  "weight_gain",
  "anxiety",
  "cold_hands_and_feets",
  "mood_swings",
  "weight_loss",
  "restlessness",
  "lethargy",
  "patches_in_throat",
  "irregular_sugar_level",
  "cough",
  "high_fever",
  "sunken_eyes",
  "breathlessness",
  "sweating",
  "dehydration",
  "indigestion",
  "headache",
  "yellowish_skin",
  "dark_urine",
  "nausea",
  "loss_of_appetite",
  "pain_behind_the_eyes",
  "back_pain",
  "constipation",
  "abdominal_pain",
  "diarrhoea",
  "mild_fever",
  "yellow_urine",
  "yellowing_of_eyes",
  "acute_liver_failure",
  "fluid_overload",
  "swelling_of_stomach",
  "swelled_lymph_nodes",
  "malaise",
  "blurred_and_distorted_vision",
  "phlegm",
  "throat_irritation",
  "redness_of_eyes",
  "sinus_pressure",
  "runny_nose",
  "congestion",
  "chest_pain",
  "weakness_in_limbs",
  "fast_heart_rate",
  "pain_during_bowel_movements",
  "pain_in_anal_region",
  "bloody_stool",
  "irritation_in_anus",
  "neck_pain",
  "dizziness",
  "cramps",
  "bruising",
  "obesity",
  "swollen_legs",
  "swollen_blood_vessels",
  "puffy_face_and_eyes",
  "enlarged_thyroid",
  "brittle_nails",
  "swollen_extremeties",
  "excessive_hunger",
  "extra_marital_contacts",
  "drying_and_tingling_lips",
  "slurred_speech",
  "knee_pain",
  "hip_joint_pain",
  "muscle_weakness",
  "stiff_neck",
  "swelling_joints",
  "movement_stiffness",
  "spinning_movements",
  "loss_of_balance",
  "unsteadiness",
  "weakness_of_one_body_side",
  "loss_of_smell",
  "bladder_discomfort",
  "foul_smell_of urine",
  "continuous_feel_of_urine",
  "passage_of_gases",
  "internal_itching",
  "toxic_look_(typhos)",
  "depression",
  "irritability",
  "muscle_pain",
  "altered_sensorium",
  "red_spots_over_body",
  "belly_pain",
  "abnormal_menstruation",
  "dischromic _patches",
  "watering_from_eyes",
  "increased_appetite",
  "polyuria",
  "family_history",
  "mucoid_sputum",
  "rusty_sputum",
  "lack_of_concentration",
  "visual_disturbances",
  "receiving_blood_transfusion",
  "receiving_unsterile_injections",
  "coma",
  "stomach_bleeding",
  "distention_of_abdomen",
  "history_of_alcohol_consumption",
  "fluid_overload",
  "blood_in_sputum",
  "prominent_veins_on_calf",
  "palpitations",
  "painful_walking",
  "pus_filled_pimples",
  "blackheads",
  "scurring",
  "skin_peeling",
  "silver_like_dusting",
  "small_dents_in_nails",
  "inflammatory_nails",
  "blister",
  "red_sore_around_nose",
  "yellow_crust_ooze",
];

const filterSymptoms = (value) => {
  return symptoms.filter((symptom) =>
    symptom.toLowerCase().includes(value.toLowerCase())
  );
};

const handleInputChange = (e, index) => {
  const newInputValues = [...inputValues];
  newInputValues[index] = e.target.value;
  setInputValues(newInputValues);
  if (e.target.value.length > 0) {
    const filteredSymptoms = filterSymptoms(e.target.value);
    if (filteredSymptoms.length > 0) {
      toggleDropdownVisibility(index);
    }
  } else {
    toggleDropdownVisibility(index, false);
  }
};

const handleOptionClick = (value, index) => {
  const newInputValues = [...inputValues];
  newInputValues[index] = value;
  setInputValues(newInputValues);
  toggleDropdownVisibility(index, false);
};

const toggleDropdownVisibility = (index, visible = true) => {
  const newDropdownsVisible = [...isDropdownsVisible];
  newDropdownsVisible[index] = visible;
  setDropdownsVisible(newDropdownsVisible);
};



  return (
    <div>
      <NavbarFrames />
      <div className="Frameeee">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col sm={6} className="ccc">
              <h4 className="headingss mt-2"> {} Patient Diagnosis</h4>
              <form action="">
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={isAllergiesChecked}
                      onChange={handleCheckboxChange}
                      id="allergiesCheckbox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="allergiesCheckbox"
                    >
                      Allergies
                    </label>
                  </div>
                  <textarea
                    className={`form-control ${
                      isAllergiesChecked ? "" : "disabled"
                    }`}
                    rows="4"
                    placeholder="Check to Enter allergy information"
                    value={allergyInfo}
                    onChange={(event) => setAllergyInfo(event.target.value)}
                    disabled={!isAllergiesChecked}
                  ></textarea>
                </div>
                {/* Input symptoms */}
                <div className="input-group mb-3 mt-4">
                  <Row>
                    {inputValues.map((inputValue, index) => (
                      <Col key={index} sm={6} className="mb-3">
                        <div
                          className={`dropdown ${
                            isDropdownsVisible[index] ? "show" : ""
                          }`}
                        >
                          <input
                            type="text"
                            className="form-control Formcontroll"
                            placeholder="Input Symptoms."
                            value={inputValue}
                            onChange={(e) => handleInputChange(e, index)}
                            onClick={() => toggleDropdownVisibility(index)}
                          />
                          {isDropdownsVisible[index] && (
                            <div className="dropdown-list">
                              {filterSymptoms(inputValue).map((symptom) => (
                                <div
                                  className="dropdown-list-item"
                                  key={symptom}
                                  onClick={() =>
                                    handleOptionClick(symptom, index)
                                  }
                                >
                                  {symptom}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                <Link
                  to=""
                  className="btn btn-outline-warning"
                  onClick={sendSymptomsToBackend}
                >
                  Diagnosis
                </Link>
                <Form.Group
                  className="mb-1"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label> <strong> Predicted Disease</strong></Form.Label>
                  <Form.Control
                    // className="Formcontroll"
                    as="textarea"
                    rows={3}
                    value={recommendedMedicines}
                    readOnly
                  />
                  <Form.Label> <strong> Recomended Medicines</strong></Form.Label>
                  <Form.Control
                    // className="Formcontroll"
                    as="textarea"
                    value={precautions}
                    rows={5}
                    readOnly
                  />
                </Form.Group>
              </form>
              {/* Buttons */}
              <div className="d-flex flex-column">
                <div className="d-flex mb-2">
                  {/* <Link to="/OFrame30" className="btn btn-primary exc22">
                    Go Back
                  </Link> */}
                  <Link to="/Nframee3" className="btn btn-primary exc22">
                    Go Back
                  </Link>
                  <button
                    className="btn btn-primary exc11"
                    onClick={handleNavigateToNEWFrame5}
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
/*<Link to="/Nframee3" className="btn btn-primary exc22">
                    Go Back
                  </Link>
                  <button
                    className="btn btn-primary exc11"
                    onClick={handleNavigateToNEWFrame5}
                  >
                    Proceed
                  </button>*/ 
export default NEWFrame4;
