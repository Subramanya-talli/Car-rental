import React, { useEffect, useState } from "react";
import axios from "axios";
import GetCar from "./GetCar";
import { Link } from "react-router-dom";

const GetAllCars = () => {
  const [vehicles, setVehicles] = useState([]);
  // const [selectedCar, setSelectedCar] = useState(null)
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cars")
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vehicles:", error);
      });
  }, []);

  return (
    <div>
      {vehicles.map((vehicle, index) => {
        return (
          <ul key={index}>
            <div>
              <div>
                <p>Brand: {vehicle.brand}</p>
                <p>Mileage:{vehicle.mileage}</p>
              </div>
              <div>
                <p>Distance Covered: {vehicle.distanceCovered}</p>
                <p>Type of Fuel :{vehicle.mileage}</p>
                {vehicle.img ? (
                  <img
                    src={vehicle.img}
                    alt={vehicle.brand}
                    width="150"
                    height="auto"
                  />
                ) : (
                  <p>No Image Available</p>
                )}
              </div>
              <div>
                <button>Contact Owner</button>
                <button>
                  <Link to={`/api/car/get/${vehicle._id}`}>More Details</Link>
                </button>
              </div>
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default GetAllCars;
