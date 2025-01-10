# Project Name

This project consists of a frontend and backend. Follow the steps below to execute the source code and deploy both servers.

## Prerequisites

Ensure that you have the following installed on your system:
- **Node.js** and **npm** for frontend execution
- **Python** and **Pipenv** for backend execution

### Frontend Execution (ReactJS)

1. **Open the project in VSCode:**
   - Launch your VSCode editor and open the project folder.

2. **Navigate to the frontend folder:**
   - Open `App.js` within the frontend files.

3. **Open the terminal from VSCode:**
   - Ensure that the terminal indicates the correct project directory (`cd path/to/your/project`).

4. **Ensure Node.js and npm are installed:**
   - If they are not installed, [download and install Node.js](https://nodejs.org/) first.

5. **Install the node modules:**
   - In the terminal, run the following command to install the required dependencies:
     ```bash
     npm install
     ```

6. **Start the frontend server:**
   - Deploy the frontend server by running:
     ```bash
     npm start
     ```
   - The frontend will be deployed on [http://localhost:3000](http://localhost:3000).

---

### Backend Execution (Python Flask)

1. **Navigate to the backend folder:**
   - Open the `app1.py` file located in the `Backend1` folder.

2. **Open another terminal in VSCode:**
   - Leave the frontend terminal open and open a new terminal window.

3. **Navigate to the backend directory:**
   - In the new terminal, change the directory to `Backend1`:
     ```bash
     cd Backend1
     ```

4. **Set up the Python virtual environment:**
   - Run the following command to create and activate a virtual environment:
     ```bash
     pipenv shell
     ```

5. **Install the required dependencies:**
   - Install the necessary dependencies for Flask and SQLAlchemy:
     ```bash
     pipenv install flask flask-sqlalchemy psycopg2 python-dotenv flask-cors
     ```
   - Install dependencies for **scikit-learn**, **NumPy**, and **Pandas**:
     ```bash
     pip install scikit-learn numpy pandas
     ```

6. **Start the backend server:**
   - Run the backend server with the following command:
     ```bash
     flask run
     ```
   - The backend will be deployed on [http://localhost:5000](http://localhost:5000).

---

## Notes

- Other than the node modules for the frontend, all the necessary files and modules are included in this repository. 
- Make sure both the frontend and backend servers are running simultaneously for full functionality.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
