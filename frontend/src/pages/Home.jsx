import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import SortingVehicles from "./Sorting";
import GetAllVehicles from "../pages/GetAllCars";
import GetUserVehicles from "./GetUserVehicles";
import OwnerDashBorad from "./ownerDashBoard";
import UserDashBoard from "./UserDashBoard";


const Home = () => {
  const [user, setUser] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [sortBy, setSortBy] = useState("distanceCovered");
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const deCodeUser = jwtDecode(token);
        setUser(deCodeUser);
      } catch (error) {
        console.log("Invalid Token", error);
      }
    }
  }, []);

  const sortData = (data, sortBy) => {
    return [...data].sort((a, b) => {
      if (sortBy === "mileage") {
        return b.mileage - a.mileage;
      }
      return a[sortBy] > b[sortBy] ? 1 : -1;
    });
  };

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

  const handleLogout = () => {
    axios
      .get("http://localhost:5000/user/logout")
      .then((res) => {
        Cookies.remove("token");
        location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userVehicles = vehicles.filter(
    (vehicle) => vehicle.createdBy === user?.id
  );

  const handleAddVehicle = () => {
    navigate("/api/car/add");
  };

  useEffect(() => {
    setVehicles((prevVehicles) => sortData(prevVehicles, sortBy));
  }, [sortBy]);

  return (
    <>
      {user ? (
        <main>
          {user.role === "Owner" ? (
            <div>
              <OwnerDashBorad
                handleAddVehicle={handleAddVehicle}
                handleLogout={handleLogout}
              />
              <SortingVehicles setSortBy={setSortBy} />
              <GetUserVehicles vehicles={userVehicles} />
            </div>
          ) : (
            <div>
              <UserDashBoard handleLogout={handleLogout} />
              <SortingVehicles setSortBy={setSortBy} />
              <GetAllVehicles
                user={user}
                Loading={Loading}
                vehicles={vehicles}
              />
            </div>
          )}
        </main>
      ) : (
        <div>
          <main>
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <Link to="/user/signin">Sign In</Link>
                </li>
              </ul>
            </nav>
            <div>
              You are not Signed In Please Do{" "}
              <Link to="/user/signin">Sign In</Link>
            </div>
          </main>
        </div>
      )}
    </>
  );
};
export default Home;
