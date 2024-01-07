import React from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="px-24">
      <div className="flex justify-between">
        <div className="w-12">
          <img src={logo} alt="Logo of the group" />
        </div>
        <a
          href="https://direct.me/dominiqueruiz"
          className="cursor-pointer no-underline text-[#000080] font-bold"
        >
          About Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
