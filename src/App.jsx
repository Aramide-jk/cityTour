import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/navbar/Home";
import Tour from "./components/navbar/Tour";
import About from "./components/navbar/About";
import TourList from "./components/tourList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tour" element={<Tour />} />
        <Route path="about" element={<About />} />
      </Routes>
      {/* <TourList /> */}
    </>
  );
}

export default App;
