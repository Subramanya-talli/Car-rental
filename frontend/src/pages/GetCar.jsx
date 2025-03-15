import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

const GetCar = () => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const location = useLocation();
  const user = location.state?.owner
  console.log(user)
  const { name} = user;
  

  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/car/get/${id}`)
      .then((response) => {
        let carData = response.data;
        setCar(carData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching car:", error);
        setLoading(false);
      });
  }, [id]);



  if (loading) return <p>Loading car details...</p>;
  if (!car) return <p>Car not found</p>;


  return (
    <div>
      <h1>Car Info</h1>
      <p><strong>Brand:</strong> {car.brand}</p>
      <p><strong>Distance Covered:</strong> {car.distanceCovered} km</p>
      <p><strong>Mileage:</strong> {car.mileage} km/l</p>
      {car.img ? (
        <div>
          <img
            src={`http://localhost:5000${car.img.startsWith("/") ? car.img : "/" + car.img}`}
            alt={car.brand}
            width="200"
            height="auto"
          />
        </div>
      ) : (
        <p><strong>No Image Available</strong></p>
      )}
      <div>
        <h3>Car Owner Details </h3>
        <div>
          <p>Car Owner Name :  <strong>{name}</strong></p>
          <p>Car Owner Contact Number :  {}</p>
        </div>
      </div>
    </div>
  );
};

export default GetCar;
