import pickle
import pandas as pd 
from pathlib import Path


# Get project root directory
BASE_DIR = Path(__file__).resolve().parent.parent

# Path to saved model
MODEL_PATH = BASE_DIR / "models" / "house_price_model.pkl"


# Load model
with open(MODEL_PATH, "rb") as file:
    model = pickle.load(file)


# Sample input data
house_data = pd.DataFrame({
    "MedInc": [8.3252],
    "HouseAge": [41.0],
    "AveRooms": [6.984127],
    "AveBedrms": [1.023810],
    "Population": [322.0],
    "AveOccup": [2.555556],
    "Latitude": [37.88],
    "Longitude": [-122.23]
}) 


# Make prediction
prediction = model.predict(house_data)


print("🏠 Predicted House Price:", prediction[0])
print("💰 Estimated Price: $", prediction[0] * 100000)