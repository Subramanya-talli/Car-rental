import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetAllCars = () => {
  const [vehicles, setVehicles] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cars")
      .then((response) => {
        setVehicles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching vehicles:", error);
        setLoading(false);
      });
  }, []);

  if (Loading) return <p>Laoding the Car Details......</p>;

  return (
    <div>
      {vehicles.length === 0 ? (
        <p>No vehicles found.</p>
      ) : (
        vehicles.map((vehicle) => (
          <div
            key={vehicle._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <p>
              <strong>Brand:</strong> {vehicle.brand}
            </p>
            <p>
              <strong>Mileage:</strong> {vehicle.mileage} km
            </p>
            <p>
              <strong>Distance Covered:</strong> {vehicle.distanceCovered} km
            </p>
            <p>
              <strong>Type of Fuel:</strong> {vehicle.fuelType}
            </p>{" "}
            {vehicle.img ? (
              <img
                src={`http://localhost:5000${
                  vehicle.img.startsWith("/") ? vehicle.img : "/" + vehicle.img
                }`}
                alt={vehicle.brand}
                width="150"
                height="auto"
              />
            ) : (
              <p>No Image Available</p>
            )}
            <div>
              <button>Contact Owner</button>
              <button>
                <Link to={`/api/car/get/${vehicle._id}`}>More Details</Link>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default GetAllCars;
