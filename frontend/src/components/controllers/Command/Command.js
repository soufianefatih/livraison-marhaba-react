import React from 'react';
import { getAllcommand , getcommanddetails } from './../../../services/CommandService';
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import CardDash from './../../../components/layouts/carddash';
import { handelCatchInAxios } from "../../../services/AxiosCatchService";




class Command extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infocommand: this.infoComand(),
      panding: true,
     
    };
  
  }
  async infoComand() {
    try {
      let res = await  getAllcommand(); // get axios promise
      let data = res.data;
      console.log("ALL command :", data);
      // get all data from pomise
      this.setState({ infocommand: data }); // Set data to state
      this.setState({ panding: false }); // Change status panding for render data
    } catch (e) {
      console.error(e);
      handelCatchInAxios(e);

    }
  }

  async detailsCommand(id) {

    try {
        let res = await  getcommanddetails(id); // get axios promise
        let data = res.data;
        console.log(" command details  :", data);
        // get all data from pomise
        // this.setState({ infocommand: data }); // Set data to state
        // this.setState({ panding: false }); // Change status panding for render data
      } catch (e) {
        console.error(e);
        handelCatchInAxios(e);
  
      }

  }
 

  
 

  render() {
    // table command:::::::::::::::::::::::::::::::::::::::::
    let tablecommand = "";
    if (!this.state.panding) {
      let ThisClass = this;
      tablecommand = this.state.infocommand.map(function (command,index) {
        return (
          
          <tr  key={index}>
          <td className="text-center text-muted">{command.id}</td>
          <td>
            <div className="widget-content p-0">
              <div className="widget-content-wrapper">
               
                <div className="widget-content-left flex2">
                  <div className="widget-heading">{command.address}</div>
                </div>
              </div>
            </div>
          </td>
        
             <td className="text-center">
             <div className="widget-heading">{command.phone}</div>
          </td>
          <td className="text-center">
             <div className="widget-heading">{command.status}</div>
          </td>
          <td className="text-center">
             <div className="widget-heading">{command.total}</div>
          </td>
        
          <td className="text-center">
            <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm" onClick={() => ThisClass.detailsCommand(command.id)} >Details</button>
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
          { tablecommand}

          
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