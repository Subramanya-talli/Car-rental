import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import Update from "./pages/Update";
import Create from "./pages/Create";
import GetAllCars from "./pages/GetAllCars";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/api/car/:id" element={<Edit />}></Route>
        <Route path="/api/car/:id" element={<Delete />}></Route>
        <Route path="/api/car/:id" element={<Update />}></Route>
        <Route path="/api/car/add" element={<Create />}></Route>
        <Route path="/api/cars" element={<GetAllCars />}></Route>
      </Routes>
    </>
  );
}

export default App;
