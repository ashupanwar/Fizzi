import React from "react";
import Header from "../Components/Header";
import "../Styles/homePage.scss";
import Hero from "../Components/Hero";

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <Header />
      <Hero />
    </div>
  );
};

export default HomePage;
