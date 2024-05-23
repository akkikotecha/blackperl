import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AboutUs, Home,LiveTrainning,Training,Review,GetInTouch,Certification,BCCD,BCDE,TTIA,ReviewAll,TermAndCondition,PrivacyPolicy } from "./Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/LiveTrainning" element={<LiveTrainning />} />
      <Route path="/BCAD" element={<Training />} />
      <Route path="/BCCD" element={<BCCD />} />
      <Route path="/BCDE" element={<BCDE />} />
      <Route path="/TTIA" element={<TTIA />} />
      <Route path="/Review" element={<Review />} />
      <Route path="/GetInTouch" element={<GetInTouch />} />
      <Route path="/Certification" element={<Certification />} />
      <Route path="/ReviewAll" element={<ReviewAll />} />
      <Route path="/TermAndCondition" element={<TermAndCondition />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
