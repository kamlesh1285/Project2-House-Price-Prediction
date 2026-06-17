
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
from pathlib import Path


# Create FastAPI application
app = FastAPI(
    title="House Price Prediction API",
    description="Predict California house prices using Random Forest",
    version="1.0"
)


# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://project2-house-price-prediction.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load ML model
BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_PATH = BASE_DIR / "models" / "house_price_model.pkl"

model = joblib.load(MODEL_PATH)


# Define input data structure
class HouseData(BaseModel):
    MedInc: float
    HouseAge: float
    AveRooms: float
    AveBedrms: float
    Population: float
    AveOccup: float
    Latitude: float
    Longitude: float


# Home route
@app.get("/")
def home():
    return {
        "message": "🏠 House Price Prediction API is running!"
    }


# Prediction route
@app.post("/predict")
def predict(data: HouseData):

    input_data = pd.DataFrame({
        "MedInc": [data.MedInc],
        "HouseAge": [data.HouseAge],
        "AveRooms": [data.AveRooms],
        "AveBedrms": [data.AveBedrms],
        "Population": [data.Population],
        "AveOccup": [data.AveOccup],
        "Latitude": [data.Latitude],
        "Longitude": [data.Longitude]
    })

    prediction = model.predict(input_data)

    return {
        "predicted_price": float(prediction[0]),
        "price_in_dollars": float(prediction[0] * 100000)
    } 