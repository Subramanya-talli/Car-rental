import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const GetCar = () => {
  const [car, setCar] = useState();
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/car/get/${id}`)
      .then((response) => {
        setCar(response.data)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) return <p>Loading car details...</p>;

  return (
    <div>
      <h1>Car Info</h1>
      <p>{car.brand}</p>
      <p>{car.brand}</p>
      <p>{car.brand}</p>
    </div>
  );
};

export default GetCar;
