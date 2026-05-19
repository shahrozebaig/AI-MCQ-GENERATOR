# Project Structure and Setup Guide

This document describes the tech stack, directory structure, and step-by-step instructions to set up and run both the backend and frontend services.

---

## Tech Stack Overview

### Backend Stack
* Language: Python 3.10 or higher
* Framework: FastAPI (Uvicorn web server)
* Orchestration: LangChain
* Embedding Model: Sentence Transformers
* Vector Storage: FAISS (CPU variant)
* PDF Parsing: PyMuPDF (fitz) and pdfplumber
* PDF Exporting: ReportLab
* Environment Management: Python dotenv

---

## Backend Setup and Start Procedure

Follow these steps to configure, install dependencies, and run the Python backend service.

### Step 1 - Navigate to Backend Directory
Open your terminal and enter the backend directory:
```bash
cd backend
```

### Step 2 - Create the Python Virtual Environment
Create a virtual environment named "myenv" to isolate project dependencies:
```bash
python -m venv myenv
```

### Step 3 - Activate the Virtual Environment
Activate the environment depending on your operating system.

On Windows (Command Prompt):
```cmd
myenv\Scripts\activate.bat
```

### Step 4 - Install Required Dependencies
Install the required packages defined in the requirements.txt file:
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### Step 5 - Environment Configuration
Ensure there is a .env file located inside the backend/ directory with your credentials:
```env
GROQ_API_KEY=your_groq_api_key_here
```

### Step 6 - Start the Backend Server
Run the FastAPI application server using Uvicorn:
```bash
uvicorn main:app --reload
```
The backend server will run locally at http://127.0.0.1:8000 (or http://localhost:8000).

---

## Frontend Setup and Start Procedure

Follow these steps to install packages and start the React application.

### Step 1 - Navigate to Frontend Directory
Open a new terminal window, navigate to the frontend directory:
```bash
cd frontend
```

### Step 2 - Install Node Dependencies
Install all package dependencies defined in the package.json file:
```bash
npm install
```

### Step 3 - Start the Frontend Server
Launch the React development server:
```bash
npm start
```
The React development server will automatically launch in your browser at http://localhost:3000.