import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ReactLoading from "react-loading";
import NavBar from "../Components/NavBar"
import BookingForm from "../Components/BookingForm"

const RentCar = () => {
  const { vehicles } = useContext(AppContext);

  const handlebooking = (id)=>{
    <BookingForm />
  }
  return (
    <div>
      {/* <NavBar/> */}
      <div className="flex flex-col m-4 p-3">
      
      {vehicles.length == 0 ? (
        <h1>No vehicle</h1>
      ) : (
        <div>
          <div className="flex flex-row justify-between">
          <h1 className="font-medium text-3xl text-gray-900">Vehicles Availabel For Rent</h1>
          <input type="text" className="border" placeholder="SortBy" />
          </div>
          <div className="py-2 mt-6 grid grid-flow-col grid-columns-3">
          
          {vehicles.map((vehicle) => (
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
                <strong>Distance Covered:</strong> {vehicle.distanceCovered} km
              </p>
              <p className="mt-2">
                <strong>Type of Fuel:</strong> {vehicle.fuelType}
              </p>{" "}
              </div>
              
              <button className="w-full mt-4 p-2 bg-blue-500 rounded-sm text-white font-medium hover:bg-blue-600" >Book This Vehicles</button>
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
