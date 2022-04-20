import React from 'react';
import { createuser } from './../../../services/Userservice'
import { handelCatchInAxios } from "../../../services/AxiosCatchService";
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import Cards from './../../../components/layouts/cards';


class Createuser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password:'', role:'', status:'' };

        this.handleName = this.handleName.bind(this);
       
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePssword = this.handlePssword.bind(this);
        this.handleRole = this.handleRole.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleName(event) {
        this.setState({ name: event.target.value });
    }
    handleEmail(event) {
        this.setState({ email: event.target.value });
    }
    handlePssword(event) {
        this.setState({ password: event.target.value });
    }
    handleRole(event) {
        this.setState({ role: event.target.value });
    }
    handleStatus(event) {
        this.setState({status: event.target.value });
    }
  
  

    async handleSubmit(event) {
        event.preventDefault();

        console.log('A name was submitted: ' + this.state.name);
        console.log('A email was submitted: ' + this.state.email);
        console.log('A email was submitted: ' + this.state.password);
        console.log('A role was submitted: ' + this.state.role);
        console.log('A status was submitted: ' + this.state.status);

        try {

            let rescreate = await createuser(this.state.name, this.state.email, this.state.password , this.state.role,this.state.status)

            if ( rescreate .status == 200) {
                console.log('Done Req  : ');
                window.location = "/dashboard/user";
            }

            console.log('rescreate: ', rescreate);

        } catch (error) {
            console.log('error', error);
            handelCatchInAxios(error)
        }
    }
    render() {
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
              </span><a  className="text-decoration-none text-white" href='/dashboard/category/create'>Create user</a>
            </button>
           
          </div>
        </div>  </div>
                   </div>
    <Cards/>
    {/* :::::::::::::::::create categorys::::::::::::::::::::: */}
    <div className='container'>
   <div className=' card text-white bg-light 'style={{maxWidth: '100rem'}} >
  <div className="card-header text-dark">Create User</div>
  <div className="card-body">
  <div>
                <form onSubmit={this.handleSubmit} >
                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Name</label>
                        <input type="text" value={this.state.name} onChange={this.handleName} class="form-control" id="exampleInputName1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputImage1" class="form-label">Email</label>
                        <input type="text" value={this.state.email} onChange={this.handleEmail} class="form-control" id="exampleInputImage1" multiple="multiple" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputImage1" class="form-label"> password</label>
                        <input type="text" value={this.state.password} onChange={this.handlePssword} class="form-control" id="exampleInputImage1" multiple="multiple" />
                    </div>
                    <div class="mb-3">
                            <select for="exampleInputImage1" class="form-control form-select" value={this.state.role} onChange={this.handleRole} required>
                                <option >Role</option>

                                <option value='client'>Client</option>
                                <option value="livreur">delivery</option>
                            </select>
                    </div>
                    <div class="mb-3">
                        <select for="exampleInputImage1" class="form-control form-select" value={this.state.status} onChange={this.handleStatus} required>
                                <option >Status</option>

                                <option value='0'>0</option>
                                <option value="1">1</option>
                            </select>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
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
export default Createuser;