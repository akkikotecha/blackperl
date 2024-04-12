import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AboutUs, Home,LiveTrainning,Training } from "./Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/LiveTrainning" element={<LiveTrainning />} />
      <Route path="/Training" element={<Training />} />
    </Routes>
  );
}

export default App;
