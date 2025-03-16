import React, { useState } from "react";
import { Link } from "react-router-dom";

const GetUserVehicles = ({ vehicles }) => {
  return (
    <div>
      <h3>Your Own Added Vehicles</h3>
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
              <Link
                to={`/api/car/update/${vehicle._id}`}
                state={{ editVehicle: vehicle }}
              >
                <button>Update Vehicle</button>
              </Link>

              <Link
                to={`api/car/delete/${vehicle._id}`}
                state={{delete_vehicle : vehicle }}
              >
                <button>Delete Vehicle</button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default GetUserVehicles;
