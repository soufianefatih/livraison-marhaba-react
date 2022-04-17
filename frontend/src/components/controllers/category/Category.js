import React from 'react';
import {  getAllcategory } from './../../../services/Categoryservice';
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import Cards from './../../../components/layouts/cards';



class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infocategory: this.infoCategory(),
      panding: true,
     
    };
  }
  async infoCategory() {
    try {
      let res = await getAllcategory(); // get axios promise
      let data = res.data;
      console.log("ALL Catzgorys :", data);
      // get all data from pomise
      this.setState({  infocategory: data }); // Set data to state
      this.setState({ panding: false }); // Change status panding for render data
    } catch (e) {
      console.error(e);
    }
  }







  render() {
    let infocategory = "";
    if (!this.state.panding) {
      infocategory = this.state.infocategory.map(function (category) {
        let src = "http://localhost:5500/" + category.image
        return (
          <tr>
          <td className="text-center text-muted">{category.id}</td>
          <td>
            <div className="widget-content p-0">
              <div className="widget-content-wrapper">
                <div className="widget-content-left mr-3">
                  <div className="widget-content-left">
                  </div>
                </div>
                <div className="widget-content-left flex2">
                  <div className="widget-heading">{category.name}</div>
                </div>
              </div>
            </div>
          </td>
          <td className="text-center">
            <img width={40} className="rounded-circle" src={src} alt />
             </td>
          <td className="text-center">
            <div className=" btn btn-warning btn-sm"> <i class="fas fa-edit"></i> update</div>
          </td>
          <td className="text-center">
            <div className=" btn btn-danger btn-sm"> <i className="pe-7s-trash btn-icon-wrapper"></i> delete</div>
          </td>
          <td className="text-center">
            <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm">Details</button>
          </td>
        </tr>
        );
      });
    }
  


    return (

  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
  <Navbar />
  <div class="app-main">
  <Siderbar />
  <div class="app-main__outer">
      <div className="container mt-5">

      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div className="page-title-icon">
              <i className="pe-7s-note2 icon-gradient bg-mean-fruit">
              </i>
            </div>
            <div>All Category
              <div className="page-title-subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div className="page-title-actions">
            <button type="button" data-toggle="tooltip" title="Example Tooltip" data-placement="bottom" className="btn-shadow mr-3 btn btn-dark">
              <i className="fa fa-star" />
            </button>
            <div className="d-inline-block dropdown">
              <button type="button" className="btn-shadow  btn btn-info">
                <span className="btn-icon-wrapper pr-2 opacity-7">
                <i class="fas fa-plus-circle"></i>
                </span>
                Create Category
              </button>
             
            </div>
          </div>  </div>
                     </div>
      <Cards/>
      {/* :::::::::::::::::tables categorys::::::::::::::::::::: */}
       <div className="row">
  <div className="col-md-12">
    <div className="main-card mb-3 card">
      <div className="card-header">Table Categorys
        <div className="btn-actions-pane-right">
          <div role="group" className="btn-group-sm btn-group">
            <button className="active btn btn-focus">Create Category</button>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th>Name</th>
              <th className="text-center">Image</th>
              <th className="text-center">update</th>
              <th className="text-center">Delete</th>
              <th className="text-center">info</th>
            </tr>
          </thead>
          <tbody>
          { infocategory}

          
          </tbody>
        </table>
      </div>
      
    </div>
  </div>
       </div>
      </div>
      </div>
      </div>

</div>



    );
  }
}

export default Category;