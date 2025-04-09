import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ReactLoading from "react-loading";

const RentCar = () => {
 
  const navigate = useNavigate();
  const { vehicles, token } = useContext(AppContext);
  const [sortedVehicles, setSortedVehicles] = useState(vehicles)
  const [sortBy, setSortBy] = useState("distanceCovered")

  const handlebooking = (id) => {
    if (token) {
      const data = {id : id}
      navigate('/booking', {state: data})
    }
    else
    {
      navigate('/signup')
    }
  };

  const handleSorting = ((e)=>{
    setSortBy(e.target.value);
  })


  useEffect(() => {
    if (vehicles && vehicles.length > 0) {
      const sorted = [...vehicles].sort((a, b) => {
        if (a[sortBy] > b[sortBy]) return 1;
        if (a[sortBy] < b[sortBy]) return -1;
        return 0;
      });
      setSortedVehicles(sorted);
    }
  }, [vehicles, sortBy]);

  console.log(vehicles)
  console.log( "Sorted :", sortedVehicles)

  return (
    <div>
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
                <label htmlFor="vehicles" id="vehicles" className="mx-1">Sort By</label>
                <select name="vehicles" id="vehicles" className="border" onChange={handleSorting}>
                  <option value="distanceCovered">Distance Covered</option>
                  <option value="mileage">Mileage</option>
                  <option value="fuelType">Fule Type</option>
                </select>
              </div>
            </div>
            <div className="py-2 mt-6 grid grid-flow-col grid-columns-3">
              {sortedVehicles.map((vehicle) => (
                <div
                  className="w-xs min-h-40 p-2 border border-gray-300 rounded-sm"
                  key={vehicle._id}
                >
                  {vehicle.img ? (
                    <img
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
                    onClick={()=>{
                      handlebooking(vehicle._id)
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
    </div>
  );
};

export default RentCar;
