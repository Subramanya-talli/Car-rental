import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import Update from "./pages/Update";
import Create from "./pages/Create";
import GetAllCars from "./pages/GetAllCars";
import GetCar from "./pages/GetCar";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/car/edit/:id" element={<Edit />}></Route>
        <Route path="/car/delete/:id" element={<Delete />}></Route>
        <Route path="/car/update/:id" element={<Update />}></Route>
        <Route path="/api/car/add" element={<Create />}></Route>
        <Route path="/api/car/get/:id" element={<GetCar />}></Route>
        <Route path="/api/cars" element={<GetAllCars />}></Route>
        
      </Routes>
    </>
  );
}

export default App;
