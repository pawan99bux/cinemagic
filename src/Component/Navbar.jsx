import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../Images/logo.png";
function Navbar() {
  const [show, handleshow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src={logo}
        alt="cinemagic Logo"
      />
     <div className="banner_buttons">
          <button className="login_button">Login</button>
          
        </div>
    </div>
  )
}

export default Navbar;
