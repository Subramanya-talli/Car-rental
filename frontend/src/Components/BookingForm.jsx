import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { FaArrowCircleLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const BookingForm = () => {
  const { vehicles } = useContext(AppContext);
  const location = useLocation();
  const data = location.state;
  const vehicleId = data.id;
  const selectedVehicle = vehicles.find((vehicle) => vehicle._id == vehicleId);
  const navigate = useNavigate();

  const notify = () => {
    toast("Vehicle has been booked")
    setTimeout(()=>{
      navigate('/')
    }, 5000);
  };
 
  return (
    <div className="p-2 m-4 ">
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
        <ToastContainer />
        <div className="rounded-md border border-gray-400 drop-shadow-lg  p-3 min-w-7xl min-h-full">
          <div className=" flex justify-center">
            <img
              className="p-2 object-cover"
              src={`http://localhost:5000${
                selectedVehicle.img.startsWith("/")
                  ? selectedVehicle.img
                  : "/" + selectedVehicle.img
              }`}
              alt=""
            />
          </div>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col w-lg my-3">
              <p className="font-semibold">Brand</p>
              <p className="border-2 border-gray-300 rounded-sm p-1 my-1 focus:none">
                {selectedVehicle.brand}
              </p>
            </div>

            <div className="flex flex-col w-lg my-3">
              <p className="font-semibold">Mileage</p>
              <p className="border-2 border-gray-300 rounded-sm p-1 my-1 focus:none">
                {selectedVehicle.mileage}
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col w-lg my-3">
              <p className="font-semibold">Distance Covered</p>
              <p className="border-2 border-gray-300 rounded-sm p-1 my-1 focus:none">
                {selectedVehicle.distanceCovered}
              </p>
            </div>

            <div className="flex flex-col w-lg my-3">
              <p className="font-semibold">Fule Type</p>
              <p className="border-2 border-gray-300 rounded-sm p-1 my-1 focus:none">
                {selectedVehicle.fuelType}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={notify}
              className="bg-blue-400 text-white p-2 rounded-sm w-full alien-center my-2 font-medium"
            >
              Book Vehicle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
