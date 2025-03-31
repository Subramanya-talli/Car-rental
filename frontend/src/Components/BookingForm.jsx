import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { FaArrowCircleLeft } from "react-icons/fa";

const BookingForm = () => {
  const { vehicles } = useContext(AppContext);
  const location = useLocation();
  const data = location.state;
  const vehicleId = data.id;
  const selectedVehicle = vehicles.find((vehicle) => vehicle._id == vehicleId);

  console.log(selectedVehicle);
  return (
    <div className="p-2 m-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-base">Booking Form</h1>
        <div>
          <a
            href="/rent"
            className="flex items-center p-2 border rounded-sm border-gray-300 drop-shadow-lg"
          >
            <FaArrowCircleLeft /> <span className="ml-1">Cancel</span>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className="rounded-md border border-gray-400 drop-shadow-lg  p-3">
          <div className="h-55 flex justify-center">
            <img className="" src={`http://localhost:5000${
                        selectedVehicle.img.startsWith("/")
                          ? selectedVehicle.img
                          : "/" + selectedVehicle.img
                      }`} alt="" />
          </div>
          {/* for img */}
          <div className="flex flex-row gap-3">
            <div className="flex flex-col w-md my-3">
              <p>Brand</p>
              <p className="border-2 border-gray-300 rounded-sm p-1 my-1 focus:none">
                {selectedVehicle.brand}
              </p>
            </div>

            <div className="flex flex-col w-md my-3">
              <p>Mileage</p>
              <p className="border-2 border-gray-300 rounded-sm p-1 my-1 focus:none">
                {selectedVehicle.mileage}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <div className="flex flex-col w-md my-3">
              <p>Distance Covered</p>
              <p className="border-2 border-gray-300 rounded-sm p-1 my-1 focus:none">
                {selectedVehicle.distanceCovered}
              </p>
            </div>

            <div className="flex flex-col w-md my-3">
              <p>Fule Type</p>
              <p className="border-2 border-gray-300 rounded-sm p-1 my-1 focus:none">
                {selectedVehicle.fuelType}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-400 text-white p-2 rounded-sm w-full alien-center my-2 font-medium">
              Book Vehicle
            </button>
          </div>
        </div>
      </div>
      <p>{console.log(selectedVehicle._id)}</p>
    </div>
  );
};

export default BookingForm;
