import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Navbar from "./pages/Navbar/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
};

export default App;
