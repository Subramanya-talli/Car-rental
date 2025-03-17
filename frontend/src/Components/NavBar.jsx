import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const NavBar = () => {
  const navigate = useNavigate();
  const [loogedin, setloggedin] = useState(true);
  const { user, vehicles, token, setToken } = useContext(AppContext);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 mx-2">
      <ul className="hidden md:flex items-start gap-5 font-medium ">
        <NavLink to={"/"} className="py-1">
          <li className="text-blue-900">Home</li>
        </NavLink>
        <NavLink to={"/about"} className="py-1 ">
          <li className="text-blue-900">About</li>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {loogedin ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <div>
              <img
                src="\src\assets\down-arrow.png"
                className="w-4 pr-1"
                alt=""
              />
            </div>
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-3">
                <p onClick={() => navigate("/")}>My Profile</p>
                <p onClick={logout}>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button className="bg-primary text-black px-8 py-3 rounded-full font-light hidden md:block">
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
