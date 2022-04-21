import React from "react";
import "./landingpage.css";
import logo  from './../../../src/components/images/logo.jpg';



class Home extends React.Component {
  render() {
    return (
    <section className="home" id="home">
        
  <div className="swiper-container home-slider">
    <div className="swiper-wrapper wrapper">

      <div className="swiper-slide slide">
        <div className="content">
     <div className="shape shape-2 " />
     <div className="shape shape-3 mt-2" />
 
          <span>our special dish</span>
          <h3>Food Delivery</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
          <a href="#" className="btnn">order now</a>
    
  <div className="shape shape-7 mt-3" />
 
        </div> 
        <div>                  <div className="shape shape-4" />
</div>

        <div className="image">
        <div className="shape shape-1" />
        <div className="shape shape-7" />


          <img src="https://i.pinimg.com/originals/0c/27/5e/0c275e1ffc9166e2d6b98f1de30bd4cd.png" alt />
        </div>
        <div>        <div className="shape shape-8" />
</div>

      </div>
     
    </div>
    <div className="swiper-pagination" />
  </div>
</section>


    );
  }
}

export default Home;



