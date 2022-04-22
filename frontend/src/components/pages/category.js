import React from "react";
import "./landingpage.css";
import Navbar  from './navbar';
import {getAllcategory} from './../../../src/services/Categoryservice';



class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          infocategory: this.infoCategory(),
          panding: true,
        }
        }

  async infoCategory() {
            try {
              let res = await getAllcategory(); // get axios promise
              let data = res.data;
              console.log("ALL Categorys :", data);
              // get all data from pomise
              this.setState({infocategory: data }); // Set data to state
              this.setState({ panding: false }); // Change status panding for render data
            } catch (e) {
              console.error(e);
            }
          }



  render() {
       // info  category:::::::::::::::::::::::::::::::::::::::::
    let category = "";
    if (!this.state.panding) {
    //   let ThisClass = this;
      category = this.state.infocategory.map(function (category,index) {
        let src = "http://localhost:5500/" + category.image ;
        return (
            <div className="card box " style={{maxWidth: '20rem'}} >
            <a href="#" className="fas fa-heart" />
              <a href="#" className="fas fa-eye" />
                      <img className="card-img-top p-3" src={src} height={'150px'} alt="Card image cap" />
                    <div className="card-body">
                    <h3 className="card-title">{category.name}</h3>
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
        
        );
      });
    }



    
    return (
        <div className= "landingpage">
<Navbar/>
  <section className="dishes mt-2" id="dishes">
  <h3 className="sub-heading mt-5"> our Category </h3>
  <h1 className="heading"> popular category </h1>
  <div className="box-container">
   
   {category}
  </div>
</section>
</div>

    );
  }
}

export default Category;



