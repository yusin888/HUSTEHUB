// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from "../Assets/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img src={logo}/></div>
      <nav>
        <ul>
          <li>Home</li>

          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;