import React from "react";
import "../Styles/header.scss";
import { FizziLogo } from "../Assets/SVGs/logo";
import { Colors } from "../Contants/Color/Color";

const Header = () => {
  return (
    <div className="header-wrapper">
      <FizziLogo className="header-logo" color={Colors.primaryColor} />
    </div>
  );
};

export default Header;
