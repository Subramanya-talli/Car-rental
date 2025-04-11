import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RentCar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { vehicles, token } = useContext(AppContext);
  const [sortedVehicles, setSortedVehicles] = useState(vehicles);
  const [sortBy, setSortBy] = useState("distanceCovered");

  const handlebooking = (id) => {
    if (token) {
      const data = { id: id };
      navigate("/booking", { state: data });
    } else {
      navigate("/signup");
    }
  };

  const handleSorting = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    if (vehicles && vehicles.length > 0) {
      let sorted = [];
  
      if (sortBy === "mileage" || sortBy === "distanceCovered") {
        sorted = [...vehicles].sort((a, b) => b[sortBy] - a[sortBy]);
      } else {
        sorted = [...vehicles].sort((a, b) => {
          const avalue = a[sortBy].toLowerCase()
          const bvalue = b[sortBy].toLowerCase()
          if (avalue > bvalue) return 1;
          if (avalue < bvalue) return -1;
          return 0;
        });
      }
      setSortedVehicles(sorted);
      setLoading(false);
    }
  }, [vehicles, sortBy]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-3xl font-semibold">Loading...</p>
        </div>
      ) : (
        <div className="flex flex-col m-4 p-3">
          {sortedVehicles.length == 0 ? (
            <h1>No vehicle</h1>
          ) : (
            <div>
              <div className="flex flex-row justify-between">
                <h1 className="font-medium text-3xl text-gray-900">
                  Vehicles Availabel For Rent
                </h1>
                <div className="flex flex-row items-center">
                  <label htmlFor="vehicles" id="vehicles" className="mx-1">
                    Sort By
                  </label>
                  <select
                    name="vehicles"
                    id="vehicles"
                    className="border"
                    onChange={handleSorting}
                  >
                    <option value="distanceCovered">Distance Covered</option>
                    <option value="brand">Brand</option>
                    <option value="mileage">Mileage</option>
                    <option value="fuelType">Fule Type</option>
                    
                  </select>
                </div>
              </div>
              <div className="py-1 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sortedVehicles.map((vehicle) => (
                  <div
                    className="w-xs min-h-40 p-2 border border-gray-300 rounded-sm"
                    key={vehicle._id}
                  >
                    <div className="flex items-center justify-center">
                      {vehicle.img ? (
                        <img
                          className="p-2 h-56 w-96 object-cover object-cover"
                          src={`http://localhost:5000${
                            vehicle.img.startsWith("/")
                              ? vehicle.img
                              : "/" + vehicle.img
                          }`}
                          alt={vehicle.brand}
                          width="150"
                          height="auto"
                        />
                      ) : (
                        <p>No Image Available</p>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <p className="mt-2">
                        <strong>Brand:</strong> {vehicle.brand}
                      </p>
                      <p className="mt-2">
                        <strong>Mileage:</strong> {vehicle.mileage} km/l
                      </p>
                      <p className="mt-2">
                        <strong>Distance Covered:</strong>{" "}
                        {vehicle.distanceCovered} km
                      </p>
                      <p className="mt-2">
                        <strong>Type of Fuel:</strong> {vehicle.fuelType}
                      </p>{" "}
                    </div>

                    <button
                      className="w-full mt-4 p-2 bg-blue-500 rounded-sm text-white font-medium hover:bg-blue-600"
                      onClick={() => {
                        handlebooking(vehicle._id);
                      }}
                    >
                      Book This Vehicles
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RentCar;
