import React from 'react';
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import CardDash from './../../../components/layouts/carddash';
import { getAllusers , getuser } from './../../../services/Userservice';
import { handelCatchInAxios } from "../../../services/AxiosCatchService";


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infouser: this.infoUsers(),
      panding: true,
   
    };
  
  }
  async infoUsers() {
    try {
      let res = await getAllusers(); // get axios promise
      let data = res.data;
      console.log("ALL Users :", data);
      // get all data from pomise
      this.setState({  infouser: data }); // Set data to state
      this.setState({ panding: false }); // Change status panding for render data
    } catch (e) {
      console.error(e);
      handelCatchInAxios(e);

    }
  }

  async editButton (id) {
    try{
  
      let res = await  getuser(id); // get axios promise
      let data = res.data;
      console.log("user :", data);
    //   this.setState({ infopdate: data });
    //   this.setState({pandingupdate: false });
    
    }catch (e) {
      console.error(e);
    }
   
  
  }







  render() {
       // table category:::::::::::::::::::::::::::::::::::::::::
    let tableusers = "";
    if (!this.state.panding) {
      let ThisClass = this;
      tableusers = this.state.infouser.map(function (user,index) {
        return (
          
          <tr  key={index}>
          <td className="text-center text-muted">{user.id}</td>
          <td>
            <div className="widget-content p-0">
              <div className="widget-content-wrapper">
               
                <div className="widget-content-left flex2">
                  <div className="widget-heading">{user.name}</div>
                </div>
              </div>
            </div>
          </td>
          <td className="text-center">
          <div className="widget-heading">{user.email}</div>

             </td>
             <td className="text-center">
          <div className="widget-heading">{user.role}</div>

             </td>
             <td className="text-center">
          <div className="widget-heading">{user.status}</div>

             </td>
          <td className="text-center">
            <div className=" btn btn-warning btn-sm" onClick={() => ThisClass.editButton(user.id)} > <i class="fas fa-edit"></i> update</div>
          </td>
          <td className="text-center">
            <div className=" btn btn-danger btn-sm" > <i className="pe-7s-trash btn-icon-wrapper"></i> delete</div>
          </td>
          <td className="text-center">
            <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm" >Details</button>
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
      <div className="container mt-5 " >

      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div className="page-title-icon">
              <i className="pe-7s-note2 icon-gradient bg-mean-fruit">
              </i>
            </div>
            <div>All Users
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
                <a   className="text-decoration-none text-white" href='/dashboard/user/create'>Create user</a>
              </button>
             
            </div>
          </div>  </div>
                     </div>
      <CardDash/>
      {/* :::::::::::::::::tables users::::::::::::::::::::: */}
       <div className="row">
  <div className="col-md-12">
    <div className="main-card mb-3 card">
      <div className="card-header">Table users
        <div className="btn-actions-pane-right">
          <div role="group" className="btn-group-sm btn-group">
            <button className="active btn btn-focus">Create User</button>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th >Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Role</th>
              <th className="text-center">Status</th>
              <th className="text-center">update</th>
              <th className="text-center">Delete</th>
              <th className="text-center">info</th>
            </tr>
          </thead>
          <tbody>
             {tableusers}
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