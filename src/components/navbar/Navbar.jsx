import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navActive = ({ isActive }) => {
    return {
      font: isActive ? "bold" : "normal",
      color: isActive ? "lightGreen" : "",
      //   backgroundColor: isActive ? "green" : "",
    };
  };

  return (
    <nav className="navbar bg-black grid grid-cols-[auto_1fr] py-2 px-4">
      <img src={"/assets/img-src/logo.png"} alt="" />
      <ul className="grid grid-cols-3 items-center text-center">
        <li>
          <NavLink
            style={navActive}
            to={"/"}
            className="text-gray-200 text-xl transition-all duration-400 hover:text-green-200">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={navActive}
            to={"tour"}
            className="text-gray-200 text-xl transition-all duration-400 hover:text-green-200">
            Tour
          </NavLink>
        </li>
        <li>
          <NavLink
            style={navActive}
            to={"about"}
            className="text-gray-200 text-xl transition-all duration-400 hover:text-green-200">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
