import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const Update = () => {
  const location = useLocation();
  const vehicle = location.state?.editVehicle;

  const [id, setID] = useState(vehicle?._id);
  const [brand, setBrand] = useState(vehicle?.brand || "");
  const [distance, setDistance] = useState(vehicle?.distanceCovered || "");
  const [mileage, setMileage] = useState(vehicle?.mileage || "");
  const [fuelType, setFuel] = useState(vehicle?.fuelType || "");
  const [img, setImg] = useState(vehicle?.img || null);
  const [previewImg, setPreviewImg] = useState(null);
  const navigate = useNavigate();

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    setImg(file);
    if (file) {
      setPreviewImg(URL.createObjectURL(file));
    }
  };

  async function handleUpdateVehicle() {
    try {
      const formData = new FormData();
      formData.append("brand", brand);
      formData.append("distanceCovered", distance);
      formData.append("mileage", mileage);
      formData.append("fuelType", fuelType);

      if (img && img instanceof File) {
        formData.append("img", img);
      }

      const response = await axios.put(
        `http://localhost:5000/api/car/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      navigate("/");
      
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  }

  return (
    <div>
      <h2>Edit Vehicle</h2>
      <div>
        <label htmlFor="brand">Vehicle Company</label>
        <input
          type="text"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="distance">Distance Covered</label>
        <input
          type="text"
          id="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="mileage">Mileage</label>
        <input
          type="text"
          id="mileage"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fuel">Fuel Type</label>
        <input
          type="text"
          id="fuel"
          value={fuelType}
          onChange={(e) => setFuel(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="img">Upload New Vehicle Image</label>
        <input type="file" id="img" onChange={handleImagePreview} />
        {previewImg && (
          <div>
            <p>Image Preview:</p>
            <img
              src={previewImg}
              alt="Vehicle Preview"
              style={{ width: "200px", height: "150px", objectFit: "cover" }}
            />
          </div>
        )}
      </div>
      <div>
        <button onClick={handleUpdateVehicle}>Update</button>
      </div>
    </div>
  );
};

export default Update;
