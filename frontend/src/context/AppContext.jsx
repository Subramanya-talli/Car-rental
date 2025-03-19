import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );
  const [user, setUser] = useState("");

  async function getVehicles() {
    try {
      const response = await axios.get("https://localhost:5000/api/cars");
      console.log(response);

      let allVehicles = response.data;
      setVehicles(allVehicles);
    } catch (error) {
      console.log(error.message);
    }
  }

  const getUser = () => {
    try {
      if (token) {
        const deCodeUser = jwtDecode(token);
        setUser(deCodeUser);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const values = {
    user,
    vehicles,
    token,
    setToken,
  };

  useEffect(() => {
    getVehicles();
  }, []);

  useEffect(() => {
    getUser();
  }, [token]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
