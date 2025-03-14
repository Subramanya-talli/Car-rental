import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async function () {
    try {
      if (!email || !password) {
        if(!email)
        {
          throw new Error("Email is Required");
        }
        else
        {
          throw new Error("Pasword is Required");
        }
      }
      const userCredentials = {
        email,
        password,
      };

      const response = await axios.post(
        "http://localhost:5000/user/signin",
        userCredentials,
        { withCredentials: true }
      );
      console.log(response.data);
      if (response.data.redirect) {
        window.location.href = response.data.redirect;
      } 
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <div>
        <h1>SignIn</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="johan@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <span></span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={handleSignIn}>Login</button>
        </div>
        <span>Dont have Account ? Please Do <Link to="/user/signup">Sign Up</Link></span>
      </div>
    </>
  );
};

export default SignIn;
