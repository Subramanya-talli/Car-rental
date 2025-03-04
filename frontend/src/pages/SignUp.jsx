import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Renter");
  
  const navigate = useNavigate()

  const handleNewUser = async () => {
    try {
      if (!name || !email || !mobileNumber || !password || !role) {
        alert("All fields are required!");
        return;
      }
      const newUser = {
        name,
        lastName,
        email,
        mobileNumber,
        role,
        password,
      };

      const res = await axios.post("http://localhost:5000/user/signup", newUser)
        console.log(res.data)
        navigate('/');


    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
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
        <label htmlFor="role">Are you here for renting a Car ?</label>
        <br />
        <input type="radio" name="role" id="yes" value={"Renter"} onChange={(e)=>{
          setRole(e.target.value)
        }} />
        <label htmlFor="Yes">Yes</label>
        <input type="radio" name="role" id="No" value={"Owner"} onChange={(e)=>{
          setRole(e.target.value)
        }} />
        <label htmlFor="No" >No</label>
      </div>
      <div>
        <button onClick={handleNewUser}>Sign In</button>
      </div>
    </>
  );
};

export default SignIn;
