import React from "react";
import { isLogin ,checkLoginRoleClient,checkLoginBeforeRenderComponent} from './../../middlewares/AuthMiddleware';


class Siderbar extends React.Component {
  logout = ()=> {

    localStorage.clear()
    window.location = "/";

  }
  render() {
    let role = window.localStorage.getItem("role");
    let btn = '';
    let button = '';
    let thisClass = this;
    button = <a className="text-decoration-none mt-5 btn btn-danger " href="#" onClick={() => thisClass.logout()}>
    <i className="metismenu-icon pe-7s-close-circle" />
    Logout
  </a>
 if (role== "admin") {
   btn = 
      <div>
        <li>
    <a className="text-decoration-none" href="#">
      <i className="metismenu-icon pe-7s-users" />
      Users
      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
    </a>
    <ul>
     
      <li>
        <a  className="text-decoration-none" href="/dashboard/user">
          <i className="metismenu-icon">
          </i>All Users

        </a>
      </li>
      <li>
        <a  className="text-decoration-none" href="/dashboard/user/delivery">
          <i className="metismenu-icon">
          </i>All Delivery

        </a>
      </li>
      <li>
        <a  className="text-decoration-none" href="/dashboard/user/create">
          <i className="metismenu-icon">
          </i> Create User

        </a>
      </li>
   
      
    </ul>
  </li>
  <li>
    <a className="text-decoration-none" href="#">
      <i className="metismenu-icon pe-7s-note2" />
      Categorys
      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
    </a>
    <ul>
     
      <li>
        <a  className="text-decoration-none" href="/dashboard/category">
          <i className="metismenu-icon">
          </i>All Categorys
        </a>
      </li>
      <li>
        <a  className="text-decoration-none" href="/dashboard/category/create">
          <i className="metismenu-icon">
          </i>Create Category
        </a>
      </li>
      
    </ul>
  </li>
  <li>
    <a className="text-decoration-none" href="#">
      <i className="metismenu-icon pe-7s-menu" />
      Products
      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
    </a>
    <ul>
     
      <li>
        <a  className="text-decoration-none" href="/dashboard/product">
          <i className="metismenu-icon">
          </i>All  Products
        </a>
      </li>
      <li>
        <a  className="text-decoration-none" href="/dashboard/product/create">
          <i className="metismenu-icon">
          </i>Create  Products
        </a>
      </li>
    
    </ul>
  </li>
  <li>
    <a className="text-decoration-none" href="#">
      <i className="metismenu-icon pe-7s-cart" />
      Commands
      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
    </a>
    <ul>
     
      <li>
        <a  className="text-decoration-none" href="/dashboard/command">
          <i className="metismenu-icon">
          </i>All Commands

        </a>
      </li>
   
      
    </ul>
  </li>
      </div> 
 } else {
   btn =  <li>
   <a className="text-decoration-none" href="#">
     <i className="metismenu-icon pe-7s-cart" />
     Commands
     <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
   </a>
   <ul>
    
     <li>
       <a  className="text-decoration-none" href="/dashboard/delivery">
         <i className="metismenu-icon">
         </i>All Commands

       </a>
     </li>
  
     
   </ul>
 </li>
 }

    



     

    return (


  <div className="app-sidebar sidebar-shadow">
    <div className="app-header__logo">
      <div className="logo-src" />
      <div className="header__pane ml-auto">
        <div>
          <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
    </div>
    <div className="app-header__mobile-menu">
      <div>
        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
    </div>
    <div className="app-header__menu">
      <span>
        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
          <span className="btn-icon-wrapper">
            <i className="fa fa-ellipsis-v fa-w-6" />
          </span>
        </button>
      </span>
    </div>    <div className="scrollbar-sidebar">
      <div className="app-sidebar__inner">
        <ul className="vertical-nav-menu">
          <li className="app-sidebar__heading">Dashboards</li>
          <li>
            <a href="/" className="mm-active text-decoration-none">
              <i className="metismenu-icon pe-7s-home" />
              <i className="fas fa-burger-soda"></i>
              Livraison Marhaba
            </a>
          </li>
          <li className="app-sidebar__heading">Services</li>
          {btn}
         <li>
           {button}
          
          </li>
         
        </ul>
      </div>
    </div>
  </div>  



    );
  }
}

export default Siderbar;
