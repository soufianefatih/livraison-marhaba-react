import React from "react";
import "./landingpage.css";
import { isLogin ,checkLoginRoleClient,checkLoginBeforeRenderComponent} from './../../middlewares/AuthMiddleware';


class Navbar extends React.Component {
 
  logout = ()=> {

    localStorage.clear()
    window.location = "/";

  }

  render() {

    let button = '';
    let thisClass = this;
    if (!isLogin()) {
      button =<div>

        <a href="/login">login</a>
      <a href="/register">register</a>
      </div> 
    } else{
      button = 
      <div>
      <a href="/dashboard/category">Dashboard</a>
      <a href="" onClick={() => thisClass.logout()}>Logout</a>

        </div>
      
    }


   






    return (
     <header>
  <a href="#" className="logo"><i className="fas fa-utensils" /> Food Delivry.</a>
  <nav className="navbar">
    <a className="active" href="/">home</a>
    <a href="/category">Category</a>
    <a href="#menu">menu</a>
    <a href="/about">about</a>
       {button}
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
