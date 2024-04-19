import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AboutUs, Home,LiveTrainning,Training,Review,GetInTouch,Certification } from "./Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/LiveTrainning" element={<LiveTrainning />} />
      <Route path="/BCAD" element={<Training />} />
      <Route path="/Review" element={<Review />} />
      <Route path="/GetInTouch" element={<GetInTouch />} />
      <Route path="/Certification" element={<Certification />} />
    </Routes>
  );
}

export default App;
