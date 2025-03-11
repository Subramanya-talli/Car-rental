import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import SortingVehicles from "./Sorting";
import GetAllVehicles from "../pages/GetAllCars";


const Home = () => {
  const [user, setUser] = useState(null);
 const [vehicles, setVehicles] = useState([]);
 const [sortBy, setSortBy] = useState("distanceCovered");
 const [Loading, setLoading] = useState(true);


  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token: ", token);
    if (token) {
      try {
        const deCodeUser = jwtDecode(token);
        setUser(deCodeUser);
      } catch (error) {
        console.log("Invalid Token", error);
      }
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cars")
      .then((response) => {
        const sortedVehicles = sortData(response.data, sortBy);
        setVehicles(sortedVehicles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching vehicles:", error);
        setLoading(false);
      });
  }, []);

  const sortData = (data, sortBy) => {
    return [...data].sort((a, b) => {
      if (sortBy === "mileage") {
        return b.mileage - a.mileage;
      }
      if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
      if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
      return 0;
    });
  };

  useEffect(() => {
    setVehicles((prevVehicles) => sortData(prevVehicles, sortBy));
  }, [sortBy, sortOrder]);

  return (
    <>
    {user ? (
        <div>
          <main>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                {user.role === "Owner" ? <li>Your Vehicles</li> : <li>Rent a Car</li>}
                <li><a href="/">Logout</a></li>
                <li><a href="/">Home</a></li>
              </ul>
            </nav>
           <SortingVehicles setSortBy={setSortBy}/>
           <GetAllVehicles Loading={Loading} vehicles={vehicles}/>
          </main>
        </div>
      ) : (
        <div>
          <p>Please do <a href="/user/signin">Sign In</a></p>
        </div>
      )}
    </>
  );
};
export default Home;
