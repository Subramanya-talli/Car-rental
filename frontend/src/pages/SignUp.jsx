import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleNewUser = async () => {
    try {
      if (!name || !email || !mobileNumber || !password || !role) {
        alert("All fields are required!");
        return;
      }
      console.log("Selected Role:", role);
      const newUser = {
        name,
        lastName,
        email,
        mobileNumber,
        role,
        password,
      };
      console.log("Sending Data:", newUser);

      const res = await axios.post(
        "http://localhost:5000/user/signup",
        newUser
      );
      console.log(res.data);
      navigate("/user/signin");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Doss"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="john@gmail.com"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="mobileNumber">Mobile Number</label>
        <input
          type="mobileNumber"
          id="mobileNumber"
          placeholder="123-456"
          required
          value={mobileNumber}
          onChange={(e) => {
            setMobileNumber(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <p>
          <strong>What is your purpose on this platform?</strong>
        </p>
        <input
          type="radio"
          name="role"
          id="Renter"
          value="Renter"
          onChange={(e) => setRole(e.target.value)}
        />
        <label htmlFor="Renter">I want to rent a car</label>
        <br />
        <input
          type="radio"
          name="role"
          id="Owner"
          value="Owner"
          onChange={(e) => setRole(e.target.value)}
        />
        <label htmlFor="Owner">I have a car to rent out</label>
      </div>
      <div>
        <button onClick={handleNewUser}>Sign Up</button>
      </div>
      <div>
        <span>
          Already have Account ? Please Do{" "}
          <Link to="/user/signin">Sign In</Link>
        </span>
      </div>
    </>
  );
};

export default SignIn;
