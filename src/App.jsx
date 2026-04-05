import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./Pages/Home.page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
