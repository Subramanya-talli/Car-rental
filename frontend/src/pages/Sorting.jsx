import React, { useState } from "react";

const SortingVehicles = ({setSortBy}) => {
  return (
    <div>
      <label htmlFor="">
        Sort By:
        <select name="sort" id="sort" onChange={(e)=>{setSortBy(e.target.value)}}>
        
          <option value="distanceCovered">Distance Covered</option>
          <option value="mileage">Mileage</option>
          <option value="brand">Brand Name</option>
        </select>
      </label>
    </div>
  );
};

export default SortingVehicles;
