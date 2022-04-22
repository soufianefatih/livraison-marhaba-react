import React from "react";
import "./landingpage.css";
import Navbar  from './navbar';
import {  getAllcategory} from './../../../src/services/Categoryservice';



class Category extends React.Component {
  render() {
    return (
        <div className= "landingpage">
<Navbar/>
  <section className="dishes mt-2" id="dishes">
  <h3 className="sub-heading mt-5"> our Category </h3>
  <h1 className="heading"> popular category </h1>
  <div className="box-container">
   
    <div className="card box " style={{maxWidth: '20rem'}} >
    <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-eye" />
              <img className="card-img-top p-3" src="https://miro.medium.com/max/1400/1*KKL94ILBNpmH1RKLgsCRiw.png" height={'150px'} alt="Card image cap" />
            <div className="card-body">
            <h3 className="card-title">ggggg</h3>
            <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <a href="#" className="btnn">view All Product</a>


            </div>
    </div>
    <div className="card box " style={{maxWidth: '20rem'}} >
    <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-eye" />
              <img className="card-img-top p-3" src="https://miro.medium.com/max/1400/1*KKL94ILBNpmH1RKLgsCRiw.png" height={'180px'} alt="Card image cap" />
            <div className="card-body">
            <h3 className="card-title">ggggg</h3>
            <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <a href="#" className="btnn">add to cart</a>


            </div>
    </div>
    <div className="card box " style={{maxWidth: '20rem'}} >
    <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-eye" />
              <img className="card-img-top p-3" src="https://miro.medium.com/max/1400/1*KKL94ILBNpmH1RKLgsCRiw.png" height={'180px'} alt="Card image cap" />
            <div className="card-body">
            <h3 className="card-title">ggggg</h3>
            <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <a href="#" className="btnn">add to cart</a>


            </div>
    </div>
    <div className="card box " style={{maxWidth: '20rem'}} >
    <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-eye" />
              <img className="card-img-top p-3" src="https://miro.medium.com/max/1400/1*KKL94ILBNpmH1RKLgsCRiw.png" height={'180px'} alt="Card image cap" />
            <div className="card-body">
            <h3 className="card-title">ggggg</h3>
            <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <a href="#" className="btnn">add to cart</a>


            </div>
    </div>
    <div className="card box " style={{maxWidth: '20rem'}} >
    <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-eye" />
              <img className="card-img-top p-3" src="https://miro.medium.com/max/1400/1*KKL94ILBNpmH1RKLgsCRiw.png" height={'180px'} alt="Card image cap" />
            <div className="card-body">
            <h3 className="card-title">ggggg</h3>
            <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <a href="#" className="btnn">add to cart</a>


            </div>
    </div>
  </div>
</section>
</div>

    );
  }
}

export default Category;



