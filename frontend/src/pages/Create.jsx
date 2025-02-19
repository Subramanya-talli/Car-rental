import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [brand, setBrand] = useState("");
  const [distance, setDistance] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuelType, setFuel] = useState("");
  const [img, setImg] = useState(null);
  const navigate = useNavigate();

  const handleNewCarEntry = async () => {
    
    try {
      if (!brand || !distance || !mileage || !fuelType || !img) {
      alert("All fields are required!"); // ✅ Prevent empty submission
      return;
    }

    const formData = new FormData();
    formData.append("brand", brand);
    formData.append("distanceCovered", distance);
    formData.append("mileage", mileage);
    formData.append("fuelType", fuelType);
    formData.append("img", img);

      const response = await axios.post("http://localhost:5000/api/car/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Success:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h2>Add Your New Vehicle</h2>
      <div>
        <label htmlFor="brand">Vehicle Company</label>
        <input type="text" id="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
      </div>
      <div>
        <label htmlFor="distance">Distance Covered</label>
        <input type="text" id="distance" value={distance} onChange={(e) => setDistance(e.target.value)} />
      </div>
      <div>
        <label htmlFor="mileage">Mileage</label>
        <input type="text" id="mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} />
      </div>
      <div>
        <label htmlFor="fuel">Fuel Type</label>
        <input type="text" id="fuel" value={fuelType} onChange={(e) => setFuel(e.target.value)} />
      </div>
      <div>
        <label htmlFor="img">Upload Vehicle Image</label>
        <input type="file" id="img" onChange={(e) => setImg(e.target.files[0])} />
      </div>
      <div>
        <button onClick={handleNewCarEntry}>Save</button>
      </div>
    </div>
  );
};

export default Create;
