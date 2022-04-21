import React from "react";
import "./landingpage.css";

class Navbar extends React.Component {
  render() {
    return (
     <header>
  <a href="#" className="logo"><i className="fas fa-utensils" /> Food Delivry.</a>
  <nav className="navbar">
    <a className="active" href="#home">home</a>
    <a href="#dishes">dishes</a>
    <a href="#about">about</a>
    <a href="#menu">menu</a>
    <a href="#review">review</a>
    <a href="#order">order</a>
  </nav>
  <div className="icons">
    <i className="fas fa-bars" id="menu-bars" />
    <i className="fas fa-search" id="search-icon" />
    <a href="#" className="fas fa-heart" />
    <a href="#" className="fas fa-shopping-cart" />
  </div>
</header>


    );
  }
}

export default Navbar;
