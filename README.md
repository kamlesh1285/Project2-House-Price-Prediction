# 🏠 AI House Price Prediction Web Application

![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green?logo=fastapi)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![Machine Learning](https://img.shields.io/badge/Machine%20Learning-Random%20Forest-orange)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/API-Render-purple)

## 🌟 Project Overview

An end-to-end Full Stack AI application that predicts California house prices using a Random Forest Machine Learning model.

The application provides a modern React frontend where users enter housing details, a FastAPI backend that processes requests, and a trained ML model that returns real-time price predictions.

---

## 🚀 Live Demo

### 🌐 Frontend Website

https://project2-house-price-prediction.vercel.app/

### ⚡ FastAPI Backend

https://house-price-prediction-api-h488.onrender.com

---

## 📸 Application Screenshot

> Add your application screenshot here

Example:

```
images/project-demo.png
```

You can create a folder named `images` in your repository and place screenshots inside it.

---

## ✨ Features

* 🤖 Machine Learning-based house price prediction
* 🌳 Random Forest Regressor model
* ⚡ FastAPI REST API
* 🎨 Modern React + Vite frontend
* 🔄 Real-time frontend-backend communication
* ☁️ Cloud deployment using Vercel & Render
* 🗃️ Model optimization using Joblib compression
* 📱 Responsive user interface
* 🔒 API validation using Pydantic

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* CSS

### Backend

* Python
* FastAPI
* Uvicorn
* Pydantic

### Machine Learning

* Scikit-learn
* Random Forest Regressor
* Pandas
* NumPy
* Joblib

### Deployment & Tools

* Git
* GitHub
* Vercel
* Render

---

## 🧠 Machine Learning Model Performance

| Model                   | R² Score |
| ----------------------- | -------- |
| Random Forest Regressor | **0.80** |

The Random Forest model achieved approximately **80% prediction accuracy** on the California Housing Dataset.

---

## 📂 Project Structure

```
House-Price-Prediction/
│
├── frontend/          # React application
│   ├── src/
│   └── public/
│
├── src/
│   └── api.py         # FastAPI backend
│
├── models/
│   └── house_price_model.pkl
│
├── notebooks/
│   └── house_price_analysis.ipynb
│
├── requirements.txt
└── README.md
```

---

## ⚙️ Local Installation

### 1. Clone Repository

```bash
git clone https://github.com/kamlesh1285/Project2-House-Price-Prediction.git
cd Project2-House-Price-Prediction
```

### 2. Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate
```

### 3. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run FastAPI Server

```bash
uvicorn src.api:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

### 5. Run React Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔮 Future Improvements

* Add Indian Rupee (₹) price conversion
* Improve UI using Tailwind CSS
* Add loading animations
* Store prediction history using a database
* Add user authentication
* Train models on real Indian city datasets
* Dockerize the complete application
* Add CI/CD using GitHub Actions

---

## 👨‍💻 Developer

**Kamlesh Kumar**

Aspiring Software Engineer | Full Stack Developer | AI/ML Enthusiast

If you found this project useful, consider giving it a ⭐ on GitHub!

---

### ⭐ Show Your Support

Star this repository and share your feedback!
