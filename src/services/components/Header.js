import React from "react";

function Header() {
  return (
    <header className="header">
      <a href="a" className="logo">
        <i className="fas fa-heartbeat"></i> Mansib
      </a>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#doctors">Doctors</a>
        <a href="#book">Book</a>
        <a href="#review">Review</a>
        <a href="#blogs">Blogs</a>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  );
}
export default Header;
