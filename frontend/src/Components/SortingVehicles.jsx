import React, { useState } from "react";

const SortingVehicles = ({SetSort}) => {
  return (
    <div className="flex flex-row items-center">
    <label htmlFor="vehicles" className="mx-1" onClick={(e)=>{setSort(e.target.value)}}>Sort By</label>
    <select name="vehicles" id="vehicles" className="border ">
      <option value="Distance Covered">Distance Covered</option>
      <option value="Mileage">Mileage</option>
      <option value="FuleType">Fule Type</option>
    </select>
  </div>
  );
};

export default SortingVehicles;