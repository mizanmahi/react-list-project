import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ match }) => {
    const location = useLocation()
   return (
      <ul className="nav nav-tabs justify-content-center">
         <li className="nav-item">
            <Link className={`nav-link my-nav ${location.pathname === "/" ? "active" : ""}`} to="/">
               Table
            </Link>
         </li>
         <li className="nav-item">
            <Link className={`nav-link my-nav ${location.pathname === "/get-form" ? "active" : ""}`} to="/get-form">
               Create Form
            </Link>
         </li>
         <li className="nav-item">
            <Link className={`nav-link my-nav ${location.pathname === "/update" ? "active" : ""}`} to="/update">
               Update
            </Link>
         </li>
      </ul>
   );
};

export default Navbar;
