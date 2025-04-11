import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RentCar from "./Components/RentCar";
import Booking from "./Components/BookingForm"
import Newvehicle from "./Components/Newvehicle";
import ContactUs from "./pages/contact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/rent" element={<RentCar/>}></Route>
        <Route path="/booking" element={<Booking/>}></Route>
        <Route path="/new/vehicle" element={<Newvehicle/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
      </Routes>
    </>
  );
}

export default App;
