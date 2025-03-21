import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, token, setToken } = useContext(AppContext);

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <nav className="bg-gray-900 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CarValut
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg font-medium md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white  rounded-sm md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Rent Car
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
            <li>
              {token ? (
                <div className="flex items-center gap-2 cursor-pointer group relative">
                  <img
                    className="w-8 h-8 rounded-full cursor-pointer"
                    src="\src\assets\profile_.png"
                    alt="User dropdown"
                  ></img>
                  <div
                    id="userDropdown"
                    className="absolute w-20 top-8 left-1 bg-gray-900 pt-2 text-base font-medium  z-20 rounded-md hidden group-hover:block"
                  >
                    <div className="text-sm text-white ">
                      <ul
                        className="text-sm "
                        aria-labelledby="avatarButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 "
                            onClick={logout}
                          >
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <a
                    href="/signup"
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    SignUp
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
