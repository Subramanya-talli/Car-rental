import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const GetCar = () => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/car/get/${id}`)
      .then((response) => {
        let carData = response.data;
        console.log("Car Data:", carData);
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
    </div>
  );
};

export default GetCar;
