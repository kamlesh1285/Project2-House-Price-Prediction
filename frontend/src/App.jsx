import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    MedInc: "",
    HouseAge: "",
    AveRooms: "",
    AveBedrms: "",
    Population: "",
    AveOccup: "",
    Latitude: "",
    Longitude: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Update input values
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // Send data to FastAPI
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      MedInc: Number(formData.MedInc),
      HouseAge: Number(formData.HouseAge),
      AveRooms: Number(formData.AveRooms),
      AveBedrms: Number(formData.AveBedrms),
      Population: Number(formData.Population),
      AveOccup: Number(formData.AveOccup),
      Latitude: Number(formData.Latitude),
      Longitude: Number(formData.Longitude),
    };

    try {
      const response = await fetch(
        "https://house-price-prediction-api-h488.onrender.com/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      setResult(result);

    } catch(error) {
      alert("Something went wrong. Check FastAPI server.");
    }

    setLoading(false);
  };


  return (
    <div className="container">
      <h1>🏠 House Price Prediction</h1>

      <p>
        AI Powered California Housing Price Predictor
      </p>


      <form className="form" onSubmit={handleSubmit}>

        <input
          name="MedInc"
          placeholder="Median Income"
          onChange={handleChange}
        />

        <input
          name="HouseAge"
          placeholder="House Age"
          onChange={handleChange}
        />

        <input
          name="AveRooms"
          placeholder="Average Rooms"
          onChange={handleChange}
        />

        <input
          name="AveBedrms"
          placeholder="Average Bedrooms"
          onChange={handleChange}
        />

        <input
          name="Population"
          placeholder="Population"
          onChange={handleChange}
        />

        <input
          name="AveOccup"
          placeholder="Average Occupancy"
          onChange={handleChange}
        />

        <input
          name="Latitude"
          placeholder="Latitude"
          onChange={handleChange}
        />

        <input
          name="Longitude"
          placeholder="Longitude"
          onChange={handleChange}
        />


        <button type="submit">
          {loading ? "Predicting..." : "Predict Price"}
        </button>

      </form>


      {result && (
        <div>
          <h2>Prediction Result</h2>

          <h3>
            💰 ${result.price_in_dollars.toFixed(2)}
          </h3>

        </div>
      )}

    </div>
  );
}

export default App;