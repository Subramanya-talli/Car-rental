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
      <div>
        {/* <img src={selectedVehicle.img} alt="" /> */}
        <p>{selectedVehicle.brand}</p>
        <p>{selectedVehicle.mileage}</p>
        <p>{selectedVehicle.distanceCovered}</p>
        <p>{selectedVehicle.fuelType}</p>
      </div>
      <p>{console.log(selectedVehicle._id)}</p>
    </div>
  );
};

export default BookingForm;
