import React from 'react';
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import CardDash from './../../../components/layouts/carddash';




class User extends React.Component {
//   constructor(props) {
  
  
//   }








  render() {
    
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
                <a   className="text-decoration-none text-white" href='/dashboard/category/create'>Create Category</a>
              </button>
             
            </div>
          </div>  </div>
                     </div>
      <CardDash/>
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
              <th >Name</th>
              <th className="text-center">Image</th>
              <th className="text-center">update</th>
              <th className="text-center">Delete</th>
              <th className="text-center">info</th>
            </tr>
          </thead>
          <tbody>
          

          
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

export default User;