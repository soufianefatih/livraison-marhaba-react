import React from 'react';
// import {  getAllproduct ,deleteproduct ,getproduct ,updateproduct} from './../../../services/ProductService';
// import { getAllcategory } from './../../../services/Categoryservice';
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import CardDash from './../../../components/layouts/carddash';
// import { handelCatchInAxios } from "../../../services/AxiosCatchService";




class Command extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   infoproduct: this.infoProduct(),
    //   panding: true,
     
    };
  
  }
 

  
 

  render() {
    // table product:::::::::::::::::::::::::::::::::::::::::
    // let tableproduct = "";
    // if (!this.state.panding) {
    //   let ThisClass = this;
    //   tableproduct = this.state.infoproduct.map(function (product,index) {
    //     let src = "http://localhost:5500/" + product.image ;
    //     return (
          
    //       <tr  key={index}>
    //       <td className="text-center text-muted">{product.id}</td>
    //       <td>
    //         <div className="widget-content p-0">
    //           <div className="widget-content-wrapper">
               
    //             <div className="widget-content-left flex2">
    //               <div className="widget-heading">{product.name}</div>
    //             </div>
    //           </div>
    //         </div>
    //       </td>
    //       <td className="text-center">
    //         <img width={60} className="" src={src} alt />
    //          </td>
    //          <td className="text-center">
    //          <div className="widget-heading">{product.price}</div>
    //       </td>
    //       <td className="text-center">
    //          <div className="widget-heading">{product.decsription}</div>
    //       </td>
    //       <td className="text-center">
    //         <div className=" btn btn-warning btn-sm"onClick={() => ThisClass.editButton(product.id)} > <i class="fas fa-edit"></i> update</div>
    //       </td>
    //       <td className="text-center">
    //         <div className=" btn btn-danger btn-sm" onClick={() => ThisClass.deleteButton(product.id)}> <i className="pe-7s-trash btn-icon-wrapper"></i> delete</div>
    //       </td>
    //       <td className="text-center">
    //         <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm"  >Details</button>
    //       </td>
    //     </tr>
    //     );
    //   });
    // }

   


    return (
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
  <Navbar />
  <div class="app-main">
  <Siderbar />
  <div class="app-main__outer">
      <div className="container mt-5 " >

      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div className="page-title-icon">
              <i className="pe-7s-note2 icon-gradient bg-mean-fruit">
              </i>
            </div>
            <div>All Commands
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
                <a   className="text-decoration-none text-white" href='/dashboard/product/create'>Create Product</a>
              </button>
             
            </div>
          </div>  </div>
                     </div>
      <CardDash/>
      {/* :::::::::::::::::tables commands::::::::::::::::::::: */}
       <div className="row">
  <div className="col-md-12">
    <div className="main-card mb-3 card">
      <div className="card-header">Table commands
        <div className="btn-actions-pane-right">
          <div role="group" className="btn-group-sm btn-group">
            <button className="active btn btn-focus">Create Products</button>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th >Adress</th>
              <th className="text-center">Phone</th>
              <th className="text-center">status</th>
              <th className="text-center">total</th>
              <th className="text-center">info</th>
            </tr>
          </thead>
          <tbody>
          {/* { tableproduct} */}

          
          </tbody>
        </table>
      </div>
      
    </div>
  </div>
       </div>
     {/* {  updateForm} */}
     
     {/* {infocategory}
     <div className="card-deck d-flex justify-content-center mt-3 ">
    {infoproducts} */}
    </div>
 
     
     </div>
    
      </div>
      </div>
    //   </div>




    );
  }
}

export default Command;