import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./Components/About"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </>
  );
}

export default App;
