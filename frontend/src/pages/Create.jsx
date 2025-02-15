import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [brand, setBrand] = useState(" ");
  const [distance, setDistance] = useState("");
  const [milage, setMilage] = useState("");
  const [fuelType, setFuel] = useState(" ");
  const [img, setimg] = useState(null);
  const navigate = useNavigate();

  const handleNewCarEntry = async () => {
    const formData = new FormData();
    formData.append("brand", brand);
    formData.append("distanceCovered", distance); 
    formData.append("mileage", milage); 
    formData.append("typeoffuel", fuelType); 
    formData.append("img", img); 
  
    try {
      const response = await axios.post("http://localhost:5000/api/car/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <div>
      <h2>Add Your New Vehicle</h2>
      <div>
        <label htmlFor="brand">Vehicle Company</label>
        <input
          type="text"
          id="brand"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="distance">Distance Covered</label>
        <input
          type="text"
          id="distance"
          value={distance}
          onChange={(e) => {
            setDistance(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="mileage">Mileage</label>
        <input
          type="text"
          id="mileage"
          value={milage}
          onChange={(e) => {
            setMilage(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="fuel">Fuel Type</label>
        <input
          type="text"
          id="fuel"
          value={fuelType}
          onChange={(e) => {
            setFuel(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="img">Upload Vehicle Image</label>
        <input
          type="file"
          id="img"
          onChange={(e) => {
            setimg(e.target.files[0]);
          }}
        />
      </div>
      <div>
        <button onClick={handleNewCarEntry}>Save</button>
      </div>
    </div>
  );
};

export default Create;
