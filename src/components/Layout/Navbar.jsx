import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const navHandler = () => {
    navRef.current.classList.toggle("active");
  };

  return (
    <div>
      {/* logo part */}
      <div className="header">
        <div className="logo">
          <h2>
            <span>R</span>ecipsy
          </h2>
        </div>
        {/* menu  part */}
        <div className="navbar" ref={navRef}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div className="fas fa-bars" id="menu-btn" onClick={navHandler}></div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
