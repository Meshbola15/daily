import React from "react";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TermsOfUse from "./Components/TermsOfUse";
import PrivacyPolicy from "./Components/PrivacyPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/policies" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
