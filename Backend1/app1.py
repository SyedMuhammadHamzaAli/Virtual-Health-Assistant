from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS
from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import GaussianNB
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder

app1 = Flask(__name__)

# Configure the SQLAlchemy database URI
app1.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:hamzaali@localhost/patientss'

# Initialize SQLAlchemy with the Flask app
db = SQLAlchemy(app1)
CORS(app1)
# Define your SQLAlchemy model
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Fname = db.Column(db.String(500), nullable=False)
    adress = db.Column(db.String(500), nullable=False)
    BloodGroup = db.Column(db.String(10), nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    DOB = db.Column(db.String(50), nullable=False)
    Phnumber = db.Column(db.String(11), nullable=False)
    medicinePrescription = db.Column(db.String(1000), nullable=False)
    patientDiagnosis = db.Column(db.String(1000), nullable=False)
    createdAT = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def __repr__(self):
        return f"Event: {self.Fname}"

# Create the table
with app1.app_context():
    db.create_all()

# disease pridiction AI
l1 = ['itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain',
      'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition',
      'spotting_ urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss',
      'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes',
      'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea',
      'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever',
      'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach',
      'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes',
      'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate',
      'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain',
      'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes',
      'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts',
      'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck',
      'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side',
      'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases',
      'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium',
      'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic _patches', 'watering_from_eyes',
      'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration',
      'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding',
      'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload', 'blood_in_sputum', 'prominent_veins_on_calf',
      'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting',
      'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze']


disease = ['Fungal infection', 'Allergy', 'GERD', 'Chronic cholestasis', 'Drug Reaction', 'Peptic ulcer disease', 'AIDS',
           'Diabetes', 'Gastroenteritis', 'Bronchial Asthma', 'Hypertension', 'Migraine', 'Cervical spondylosis',
           'Paralysis (brain hemorrhage)', 'Jaundice', 'Malaria', 'Chicken pox', 'Dengue', 'Typhoid', 'hepatitis A',
           'Hepatitis B', 'Hepatitis C', 'Hepatitis D', 'Hepatitis E', 'Alcoholic hepatitis', 'Tuberculosis',
           'Common Cold', 'Pneumonia', 'Dimorphic hemmorhoids(piles)', 'Heart attack', 'Varicose veins', 'Hypothyroidism',
           'Hyperthyroidism', 'Hypoglycemia', 'Osteoarthritis', 'Arthritis', '(vertigo) Paroxysmal Positional Vertigo',
           'Acne', 'Urinary tract infection', 'Psoriasis', 'Impetigo']

l2 = [0] * len(l1)


# Load training data
df = pd.read_csv("Training.csv")
df.replace({'prognosis': {disease[i]: i for i in range(len(disease))}}, inplace=True)

X = df[l1]
y = df[["prognosis"]]
np.ravel(y)


# Load testing data
tr = pd.read_csv("Testing.csv")

tr.replace({'prognosis': {disease[i]: i for i in range(len(disease))}}, inplace=True)

X_test = tr[l1]
y_test = tr[["prognosis"]]
np.ravel(y_test)

#Pridiction Data ends here
# Create a RandomForestClassifier
# gnb = RandomForestClassifier(n_estimators=100)
# gnb.fit(X, np.ravel(y))
y = y.astype(str)
label_encoder = LabelEncoder()
y_encoded = label_encoder.fit_transform(y.values.ravel())

gnb = GaussianNB()
gnb.fit(X, y_encoded)



@app1.route('/')
def hello():
    return 'heyx'

# Add the /insert route for data insertion
@app1.route('/insert', methods=['POST'])
def insert_data():
    if request.method == 'POST':
        data = request.json  # Assumes data is sent as JSON

        # Extract data from the JSON request
        fname = data.get('Fname')
        address = data.get('adress')
        blood_group = data.get('BloodGroup')
        gender = data.get('gender')
        dob = data.get('DOB')
        phone_number = data.get('Phnumber')
        medicine_prescription = data.get('medicinePrescription')
        patient_diagnosis = data.get('patientDiagnosis')

        # Create a new Event instance and add it to the database
        new_event = Event(
            Fname=fname,
            adress=address,
            BloodGroup=blood_group,
            gender=gender,
            DOB=dob,
            Phnumber=phone_number,
            medicinePrescription=medicine_prescription,
            patientDiagnosis=patient_diagnosis
        )

        db.session.add(new_event)
        db.session.commit()

        return jsonify({'message': 'Data inserted successfully'})

@app1.route('/search', methods=['GET'])
def search_record():
    fname = request.args.get('Fname')
    phnumber = request.args.get('Phnumber')

    # Query the database for a record with matching Fname and Phnumber
    record = Event.query.filter_by(Fname=fname, Phnumber=phnumber).first()

    if record:
        # Return the record as JSON if found
        return jsonify({
            'id': record.id,
            'Fname': record.Fname,
            'adress': record.adress,
            'BloodGroup': record.BloodGroup,
            'gender': record.gender,
            'DOB': record.DOB,
            'Phnumber': record.Phnumber,
            'medicinePrescription': record.medicinePrescription,
            'patientDiagnosis': record.patientDiagnosis,
            'createdAT': record.createdAT.strftime('%Y-%m-%d %H:%M:%S')
        })
    else:
        # Return a message if no matching record is found
        return jsonify({'message': 'Record not found'})

@app1.route('/update', methods=['POST'])
def update_record():
    data = request.json  # Assumes data is sent as JSON

    fname = data.get('Fname')
    phnumber = data.get('Phnumber')
    medicine_prescription = data.get('medicinePrescription')
    patient_diagnosis = data.get('patientDiagnosis')

    # Query the database for a record with matching Fname and Phnumber
    record = Event.query.filter_by(Fname=fname, Phnumber=phnumber).first()

    if record:
        # Update the record with new values
        record.medicinePrescription = medicine_prescription
        record.patientDiagnosis = patient_diagnosis
        db.session.commit()

        return jsonify({'message': 'Record updated successfully'})
    else:
        # Return a message if no matching record is found
        return jsonify({'message': 'Record not found'})


@app1.route('/predict_disease', methods=['POST'])
def predict_disease_endpoint():
    # Get symptom inputs from the JSON data received in the request
    symptoms = request.json.get('symptoms')

    # Ensure at least one symptom is provided
    if not symptoms:
        return jsonify({'message': 'Please provide symptoms for prediction'})

    # Initialize symptom vector
    symptom_vector = [0] * len(l1)

    # Map provided symptoms to the symptom vector
    for symptom in symptoms:
        if symptom in l1:
            index = l1.index(symptom)
            symptom_vector[index] = 1

    # Use the pre-trained Random Forest Classifier model to make a prediction
    prediction = gnb.predict([symptom_vector])

    # Retrieve the predicted disease
    predicted_disease = disease[prediction[0]]

    return jsonify({'predicted_disease': predicted_disease})




if __name__ == '__main__':
    print("hellox")
    app1.run()
