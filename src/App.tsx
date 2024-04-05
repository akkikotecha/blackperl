import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AboutUs, Home,Trainning } from "./Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/trainning" element={<Trainning />} />
    </Routes>
  );
}

export default App;
