import React, { useRef } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import "./navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const navHandler = () => {
    navRef.current.classList.toggle("active");
  };

  const user = JSON.parse(localStorage.getItem("auth"));
  console.log(user);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    toast.success("Logged out")
    navigate('/');
  }
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
          {localStorage.getItem("auth") ? (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/upload">Upload</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
        </div>
        {/* <div className="drop">
          <NavDropdown title="user-name">
            <NavDropdown.Item>Logout</NavDropdown.Item>
          </NavDropdown>
        </div> */}
        <div className="icons">
          <NavDropdown title={"anik"}>
            <NavDropdown.Item>DashBoard</NavDropdown.Item>
            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
          </NavDropdown>
          <div className="fas fa-bars" id="menu-btn" onClick={navHandler}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
