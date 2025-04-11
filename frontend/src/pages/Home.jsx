import React from "react";
import NavBar from "../Components/NavBar";
import Herosection from "../Components/Herosection";
import About from "./About";
import ContactUs from "./contact";


const Home = () => {
  return <>
  <NavBar/>
  <Herosection/>
  <About/>
  <ContactUs/>
  </>;
};
export default Home;
