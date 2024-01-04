import React from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="px-4">
      <div className="flex justify-between">
        <div>
          <img src={logo} alt="Logo of the group" />
        </div>
        <a href="https://direct.me/dominiqueruiz">About Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
