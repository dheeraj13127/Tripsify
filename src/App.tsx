import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
const App = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
