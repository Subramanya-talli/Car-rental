import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation } from 'react-router-dom'

const Delete = () => {
  const location = useLocation();
  const vehicle = location.state?.delete_vehicle;

  const [isDeleting, setisDeleting ] = useState(true);
  return (
    <div>
      <p><strong>Brand:</strong> {vehicle.brand}</p>
      <p><strong>Distance Covered:</strong> {vehicle.distanceCovered} km</p>
      <p><strong>Mileage:</strong> {vehicle.mileage} km/l</p>
      {vehicle.img ? (
        <div>
          <img
            src={`http://localhost:5000${vehicle.img.startsWith("/") ? vehicle.img : "/" + vehicle.img}`}
            alt={vehicle.brand}
            width="200"
            height="auto"
          />
        </div>
      ) : (
        <p><strong>No Image Available</strong></p>
      )}
      <div>
        <p>Do you really want to delete the above vehicle</p>
      </div>
    </div>
  )
}

export default Delete