import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import SortingVehicles from "./Sorting";
import GetAllVehicles from "../pages/GetAllCars";
import GetUserVehicles from "./GetUserVehicles";
import CreateVehicle  from "../pages/Create"

const Home = () => {
  const [user, setUser] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [sortBy, setSortBy] = useState("distanceCovered");
  const [Loading, setLoading] = useState(true);

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
      return a[sortBy] > b[sortBy] ? 1 : -1;
    });
  };

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

  const handleAddVehicle = () => {
    return <CreateVehicle/>
  };

  useEffect(() => {
    setVehicles((prevVehicles) => sortData(prevVehicles, sortBy));
  }, [sortBy]);

  return (
    <>
      {user ? (
        <div>
          <main>
            {user.role === "Owner" ? (
              <div>
                <nav>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    {user.role === "Owner" ? (
                      <li>Your Vehicles</li>
                    ) : (
                      <li>
                        <a href="/">Rent a Car</a>
                      </li>
                    )}
                    {user.role === "Owner" ? (
                      <li>
                        <button onClick={handleAddVehicle}>Add a Vehicle</button>
                      </li>
                    ) : (
                      <li></li>
                    )}
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </nav>
                {/* <SortingVehicles setSortBy={setSortBy} /> */}
                <GetUserVehicles vehicles={vehicles}/>
              </div>
            ) : (
              <div>
                <nav>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">Rent a Car</a>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </nav>
                <SortingVehicles setSortBy={setSortBy} />
                <GetAllVehicles
                  user={user}
                  Loading={Loading}
                  vehicles={vehicles}
                />
              </div>
            )}
          </main>
        </div>
      ) : (
        <div>
          <p>
            Please do <a href="/user/signin">Sign In</a>
          </p>
        </div>
      )}
    </>
  );
};
export default Home;
