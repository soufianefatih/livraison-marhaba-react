import React from "react";
import "./landingpage.css";
import Navbar  from './navbar';
import {getAllcategory,getcategorydetails } from './../../../src/services/Categoryservice';
import { Modal, button } from "react-bootstrap";



class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          infocategory: this.infoCategory(),
          panding: true,
          infouproducts: {},
          pandingproducts: true,
          show: false,
          fullscreen: false,
        }
        }

 showModal = () => {
            this.setState({ show: !this.state.show });
            this.setState({ fullscreen: !this.state.fullscreen });
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

  async detailsButton (id) {
            try {
              let detail = await getcategorydetails(id);
              let data = detail.data; 
              console.log("info category products:", data);  
              this.setState({ infoproducts: data });
              this.setState({pandingproducts: false });
            //   this.setState({pandingcategory: false });
          
             
          } catch (e) {
              console.error(e);
            //   handelCatchInAxios(e);
          }
          
          }

  render() {
       // info  category:::::::::::::::::::::::::::::::::::::::::
    let category = "";
    if (!this.state.panding) {
      let ThisClass = this;
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
              <button className="btnn"   onClick={async () => {
                  await ThisClass.detailsButton(category.id)
                  ThisClass.showModal();
                }}
                >view All Product</button>
        
        
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
<Modal className="modal-container custom-map-modal"
          show={this.state.show} fullscreen={this.state.fullscreen} onHide={() => this.showModal()}>
          <Modal.Header closeButton>Products</Modal.Header>
          <Modal.Body>
<section className="menu" id="menu">
  <h3 className="sub-heading"> our menu </h3>
  <h1 className="heading"> today's speciality </h1>
  <div className="box-container">
   
  
    <div className="card box " style={{maxWidth: '24rem'}} >
    <div className="image">
        <img className="card-img-top p-3" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/high-protein-dinners-slow-cooker-meatballs-image-5a04d02.jpg?quality=90&resize=500,454" height={'150px'} alt="Card image cap" />
       
        <a href="#" className="fas fa-heart" />
      </div>
           
                    <div className="card-body">
                    <div className="content">
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <h3>delicious food</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
        <a href="#" className="btnn">add to cart</a>
        <span className="price">$12.99</span>
      </div>
      
               
              </div>
              
        
        
                    </div>
            </div>
   
 
</section>

          </Modal.Body>
        </Modal>
</div>

    );
  }
}

export default Category;



