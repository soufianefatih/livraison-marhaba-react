import React from "react";
import "./landingpage.css";
import Navbar from "./navbar";
import {
  getAllcategory,
  getcategorydetails,
} from "./../../../src/services/Categoryservice";
import { getproduct } from "./../../../src/services/ProductService";
import { isLogin } from "./../../middlewares/AuthMiddleware";
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
    };
  }

  showModal = () => {
    this.setState({ show: !this.state.show });
    this.setState({ fullscreen: !this.state.fullscreen });
  };
  async infoCategory() {
    try {
      let res = await getAllcategory(); // get axios promise
      let data = res.data;
      console.log("ALL Categorys :", data);
      // get all data from pomise
      this.setState({ infocategory: data }); // Set data to state
      this.setState({ panding: false }); // Change status panding for render data
    } catch (e) {
      console.error(e);
    }
  }

  async detailsButton(id) {
    try {
      let detail = await getcategorydetails(id);
      let data = detail.data;
      console.log("info category products:", data);
      this.setState({ infoproducts: data });
      this.setState({ pandingproducts: false });
      //   this.setState({pandingcategory: false });
    } catch (e) {
      console.error(e);
      //   handelCatchInAxios(e);
    }
  }

  async infobutonproduct(id) {
    if (isLogin()) {
      try {
        let product = await getproduct(id);
        console.log('dataproduct',product);
        let data = JSON.parse(window.localStorage.getItem("product"));
        let array = [data];
        array.push(product.data);
        console.log(product.data.id);
        console.log(array);
        window.localStorage.setItem("product", JSON.stringify(array));
      } catch (e) {
        console.error(e);
        //   handelCatchInAxios(e);
      }
    } else {
      window.location = "/login";
    }
  }

  render() {
    // info  category:::::::::::::::::::::::::::::::::::::::::
    let category = "";
    if (!this.state.panding) {
      let ThisClass = this;
      category = this.state.infocategory.map(function (category, index) {
        let src = "http://localhost:5500/" + category.image;
        return (
          <div className="card box " style={{ maxWidth: "20rem" }}>
            <a href="#" className="fas fa-heart" />
            <a
              href="#"
              onClick={async () => {
                await ThisClass.detailsButton(category.id);
                ThisClass.showModal();
              }}
              className="fas fa-eye"
            />
            <img
              className="card-img-top p-3"
              src={src}
              height={"150px"}
              alt="Card image cap"
            />
            <div className="card-body">
              <h3 className="card-title">{category.name}</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <button
                className="btnn"
                onClick={async () => {
                  await ThisClass.detailsButton(category.id);
                  ThisClass.showModal();
                }}
              >
                view All Product
              </button>
            </div>
          </div>
        );
      });
    }
    //  info products :::::::::::::::::::::::::::::::::::::::::::::

    let infoproducts = "";
    if (!this.state.pandingproducts) {
      let ThisClass = this;
      infoproducts = this.state.infoproducts.products.map(function (product) {
        let src = "http://localhost:5500/" + product.image;

        return (
          <div className="card box " style={{ maxWidth: "24rem" }}>
            <div className="image">
              <img
                className="card-img-top p-3"
                src={src}
                height={"150px"}
                alt="Card image cap"
              />

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
                <h3>{product.name}</h3>
                <p>{product.decsription}.</p>
                <a
                  href="#"
                  className="btnn"
                  onClick={() => ThisClass.infobutonproduct(product.id)}
                >
                  add to cart
                </a>
                <span className="price">$ {product.price}</span>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="landingpage">
        <Navbar />
        <section className="dishes mt-2" id="dishes">
          <h3 className="sub-heading mt-5"> our Category </h3>
          <h1 className="heading"> popular category </h1>
          <div className="box-container">{category}</div>
        </section>
        <Modal
          className="modal-container custom-map-modal bg-secondary"
          show={this.state.show}
          fullscreen={this.state.fullscreen}
          onHide={() => this.showModal()}
        >
          <Modal.Header closeButton>Products</Modal.Header>
          <Modal.Body>
            <section className="menu" id="menu">
              <h3 className="sub-heading"> our menu </h3>
              <h1 className="heading"> today's speciality </h1>
              <div className="box-container">{infoproducts}</div>
            </section>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Category;
