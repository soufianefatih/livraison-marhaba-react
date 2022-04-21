import React from "react";
import "./landingpage.css";
import logo  from './../../../src/components/images/logo.jpg';



class Category extends React.Component {
  render() {
    return (
 
  <section className="dishes" id="dishes">
  <h3 className="sub-heading"> our dishes </h3>
  <h1 className="heading"> popular dishes </h1>
  <div className="box-container">
    <div className="box">
      <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-eye" />
      <img src="https://www.francine.com/media/cache/recipe_big/uploads/media/recipe/0001/05/pizza-4-saisons.jpeg.webp" alt />
      <h3>tasty food</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <span>$15.99</span>
      <a href="#" className="btn">add to cart</a>
    </div>
    <div className="box">
      <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-eye" />
      <img src="https://www.francine.com/media/cache/recipe_big/uploads/media/recipe/0001/05/pizza-4-saisons.jpeg.webp" alt />
      <h3>tasty food</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <span>$15.99</span>
      <a href="#" className="btn">add to cart</a>
    </div>
  </div>
</section>


    );
  }
}

export default Category;



