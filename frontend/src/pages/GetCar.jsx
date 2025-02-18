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
        

        if (response.data.img && response.data.img.data) {
          const base64String = `data:${
            response.data.img.contentType
          };base64,${btoa(
            String.fromCharCode(...new Uint8Array(response.data.img.data.data))
          )}`;

          response.data.img = base64String 
        }
        console.log("Car Data:", response.data);

        setCar(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  

  if (loading) return <p>Loading car details...</p>;

  return (
    <div>
      <h1>Car Info</h1>
      <p>Brand: {car.brand}</p>
      <p>Distance Covered: {car.distanceCovered} km</p>
      <p>Mileage: {car.mileage} km/l</p>
      {car.img ? (
        <div>
          <img src={car.img} alt={car.brand} width="200" />
        </div>
      ) : (
        <p>No Image Available</p>
      )}
    </div>
  );
};

export default GetCar;
