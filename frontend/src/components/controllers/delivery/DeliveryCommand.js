import React from "react";
import {
  getAllcommand,
  getcommanddetails,
  confirmDeliveryCommand,
  getOnecommand,statusCommand
} from "./../../../services/CommandService";
import Navbar from "./../../../components/layouts/navbar";
import Siderbar from "./../../../components/layouts/siderbar";
import { handelCatchInAxios } from "../../../services/AxiosCatchService";
import { DropdownButton ,Dropdown } from 'react-bootstrap';

class Commanddelivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infocommand: this.infoComand(),
      panding: true,
      infocommanddetails: {},
      pandingclient: true,
      pandingdelivery: true,
      pandingproduct: true,
    };
   
    
  }


  async infoComand() {
    try {
      let res = await getAllcommand(); // get axios promise
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
      let res = await getcommanddetails(id); // get axios promise
      let data = res.data;
      console.log(" command details  :", data);
      // get all data from pomise
      this.setState({ infocommanddetails: data }); // Set data to state
      this.setState({ pandingclient: false }); // Change status panding for render data
      this.setState({ pandingdelivery: false }); // Change status panding for render data
      this.setState({ pandingproduct: false }); // Change status panding for render data
    } catch (e) {
      console.error(e);
      handelCatchInAxios(e);
    }
  }

  async SetCommand(command_id ,delivery_id) {
    let comand = await getOnecommand(command_id);
    let  data = comand.data.id
   
    console.log("command is : ",data ,delivery_id);
    try {
        if (delivery_id == null) {
           await confirmDeliveryCommand(command_id,window.localStorage.getItem('id'))
          alert('on');
        }else{
          alert ('off')
        }
    
    
    } catch (e) {
      console.error(e);
      handelCatchInAxios(e);
    }
  }

  async ChangeStausCommand(command_id,status) {
    let comand = await getOnecommand(command_id);
    let  data = comand.data.id
    console.log("command is : ",data );
    let statusc = await statusCommand(command_id,status)
    console.log(statusc.data);
     
  }

  render() {
  
 

    // table command:::::::::::::::::::::::::::::::::::::::::
    let tablecommand = "";
    if (!this.state.panding) {
      let ThisClass = this;
      let status = window.localStorage.getItem("status");
      let user = window.localStorage.getItem("id");
      tablecommand = this.state.infocommand.map(function (command, index) {
        return (
          <tr key={index}>
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
              <div className="widget-heading">
              
                {command.status == 1 ? (
                  <p className=" btn btn-primary btn-sm">
                  
                    <i class="fas fa-check-circle"></i> In production
                  </p>
                ) : command.status == 2 ? (
                  <p className=" btn btn-info btn-sm">
                   
                    <i class="fas fa-motorcycle"></i> In livraison
                  </p>
                ) : command.status == 3 ? (
                  <p className=" btn btn-success btn-sm">
                 
                    <i class="far fa-thumbs-up"></i> delevred
                  </p>
                ) : command.status == 4 ? (
                  <p className=" btn btn-danger btn-sm">
                    
                    <i class="fas fa-ban"></i> Canceled
                  </p>
                ) : (
                  <p className=" btn btn-warning btn-sm">
                   
                    <i class="far fa-pause-circle"></i> new
                  </p>
                )}
              </div>
            </td>
            <td className="text-center">
              <div className="widget-heading">{command.total} $</div>
            </td>

            <td className="text-center">
              {status == 1 ? (  <button
                type="button"
                id="PopoverCustomT-1"
                className="btn btn-primary btn-sm"
                onClick={() => ThisClass.detailsCommand(command.id)}
              >
                Details
              </button>) :(  <button
                type="button"
                id="PopoverCustomT-1"
                className="btn btn-danger btn-sm"
                
              >
                off
              </button>)}
            
            </td>
            <td className="text-center">
              {status == 1 && command.delivery_id == null ? ( <button
                type="button"
                id="PopoverCustomT-1"
                className="btn btn-success btn-sm"
                onClick={() => ThisClass.SetCommand(command.id, command.delivery_id)}
                
              >
                confirm
              </button>) : status == 1 && command.delivery_id != null ? ( <button
                type="button"
                id="PopoverCustomT-1"
                className="btn btn-danger btn-sm"
                
                
              >
                off
              </button>): ( <button
                type="button"
                id="PopoverCustomT-1"
                className="btn btn-danger btn-sm"
                
                
              >
                off
              </button>)}
             
            </td>
             <td className="text-center">
               {status == 1 && command.delivery_id == user  ? (         <Dropdown>
     <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm" >
    change 
      </Dropdown.Toggle>

      <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"  onClick={() => ThisClass.ChangeStausCommand(command.id,2)}  > in livraison</Dropdown.Item>
     <Dropdown.Item href="#/action-2" onClick={() => ThisClass.ChangeStausCommand(command.id,3)} > delevred</Dropdown.Item>
    <Dropdown.Item href="#/action-3" onClick={() => ThisClass.ChangeStausCommand(command.id,4)} > Canceled</Dropdown.Item> 
  </Dropdown.Menu>
</Dropdown>) : (<button
                type="button"
                id="PopoverCustomT-1"
                className="btn btn-danger btn-sm"
                
                
              >
                off
              </button>)}
            
    
            </td> 
          </tr>
        );
      });
    }

    //  info client :::::::::::::::::::::::::::::::::::::::::::::
    let infoclient = "";
    if (!this.state.pandingclient) {
      infoclient = (
        <div className="card" style={{ maxWidth: "20rem" }}>
          <img
            className="card-img-top"
            src="https://img.freepik.com/vecteurs-libre/concept-illustration-service-client_42694-25.jpg"
            height={"200px"}
            alt="Card image cap"
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-info">client Info</li>

            <li className="list-group-item">
              {" "}
              {this.state.infocommanddetails.client.name}
            </li>
            <li className="list-group-item">
              {" "}
              {this.state.infocommanddetails.client.email}
            </li>
          </ul>
        </div>
      );
    }
    //  info delivery :::::::::::::::::::::::::::::::::::::::::::::
    let infodelivery = "";
    if (!this.state.pandingdelivery) {
      infodelivery = (
        <div className="card" style={{ maxWidth: "20rem" }}>
          <img
            className="card-img-top"
            src="https://cdn.dribbble.com/users/2417352/screenshots/16167656/media/21a47abf816f1f18558b1fd74f5214dd.png?compress=1&resize=400x300&vertical=top"
            height={"200px"}
            alt="Card image cap"
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-info">delivery Info</li>

            <li className="list-group-item">
              {" "}
              {this.state.infocommanddetails.delivery.name}
            </li>
            <li className="list-group-item">
              {" "}
              {this.state.infocommanddetails.delivery.email}
            </li>
          </ul>
        </div>
      );
    }

    //  info products with command product :::::::::::::::::::::::::::::::::::::::::::::

    let infoproducts = "";
    if (!this.state.pandingproduct) {
      infoproducts = this.state.infocommanddetails.products.map(function (
        product
      ) {
        //  let src = "http://localhost:5500/" + product.image ;

        return (
          <div className="card " style={{ maxWidth: "20rem" }}>
            {/* <img className="card-img-top" src={src} height={'200px'} alt="Card image cap" /> */}
            <div className="card-body">
              <p className="card-text text-info">Product</p>

              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.decsription} </p>
              <p className="card-text">{product.price} $</p>
              <p className="card-text text-info">Command Product</p>

              <p className="card-text">
              
                quantity : {product.command_products.quantity}
              </p>
              <p className="card-text">
              
                price : {product.command_products.price} 
              </p>
              <p className="card-text">
                
                total : {product.command_products.total} 
              </p>
            </div>
          </div>
        );
      });
    }

    return (
      <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <Navbar />
        <div class="app-main">
          <Siderbar />
          <div class="app-main__outer">
            <div className="container mt-5 ">
              <div className="app-page-title">
                <div className="page-title-wrapper">
                  <div className="page-title-heading">
                    <div className="page-title-icon">
                      <i className="pe-7s-note2 icon-gradient bg-mean-fruit"></i>
                    </div>
                    <div>
                      All Commands
                      <div className="page-title-subheading">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
              {/* :::::::::::::::::tables commands::::::::::::::::::::: */}
              <div className="row">
                <div className="col-md-12">
                  <div className="main-card mb-3 card">
                    <div className="card-header">
                      Table commands
                      <div className="btn-actions-pane-right">
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th>Adress</th>
                            <th className="text-center">Phone</th>
                            <th className="text-center">status</th>
                            <th className="text-center">total</th>
                            <th className="text-center">info</th>
                            <th className="text-center">Set Command</th>
                            <th className="text-center">change Status</th>
                          </tr>
                        </thead>
                        <tbody>{tablecommand}</tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-deck d-flex justify-content-center mt-3 ">
                {infoclient}
                {infodelivery}
              </div>
              <div className="card-deck d-flex justify-content-center mt-3 ">
                {infoproducts}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Commanddelivery;
