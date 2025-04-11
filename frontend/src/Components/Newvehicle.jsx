import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Newvehicle = () => {
  const [brand, setBrand] = useState("");
  const [distance, setDistance] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuelType, setFuel] = useState("");
  const [img, setImg] = useState(null);
  const navigate = useNavigate();

  const handleNewCarEntry = async () => {
    try {
      if (!brand || !distance || !mileage || !fuelType || !img) {
      alert("All fields are required!"); 
      return;
    }

    const formData = new FormData();
    formData.append("brand", brand);
    formData.append("distanceCovered", distance);
    formData.append("mileage", mileage);
    formData.append("fuelType", fuelType);
    formData.append("img", img);
    

      const response = await axios.post("http://localhost:5000/api/car/add", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });

      console.log("Success:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6">
  <h2 className="text-2xl font-semibold text-center text-gray-800">Add Your New Vehicle</h2>

  <div className="space-y-4">
    <div>
      <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Vehicle Company</label>
      <input
        type="text"
        id="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label htmlFor="distance" className="block text-sm font-medium text-gray-700">Distance Covered</label>
      <input
        type="text"
        id="distance"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">Mileage</label>
      <input
        type="text"
        id="mileage"
        value={mileage}
        onChange={(e) => setMileage(e.target.value)}
        className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label htmlFor="fuel" className="block text-sm font-medium text-gray-700">Fuel Type</label>
      <input
        type="text"
        id="fuel"
        value={fuelType}
        onChange={(e) => setFuel(e.target.value)}
        className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label htmlFor="img" className="block text-sm font-medium text-gray-700">Upload Vehicle Image</label>
      <input
        type="file"
        id="img"
        onChange={(e) => setImg(e.target.files[0])}
        className="mt-1 text-gray-700 border p-2 rounded-lg w-58"
      />
    </div>
  </div>

  <div className="text-center">
    <button
      onClick={handleNewCarEntry}
      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300"
    >
      Save
    </button>
  </div>
</div>

  );
};

export default Newvehicle;
