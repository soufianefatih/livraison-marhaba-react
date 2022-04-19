import React from 'react';
import {  getAllcategory,updateCategory,getcategory,deleteCategory,getcategorydetails } from './../../../services/Categoryservice';
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import Cards from './../../../components/layouts/cards';
import { handelCatchInAxios } from "../../../services/AxiosCatchService";




class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infocategory: this.infoCategory(),
      panding: true,
      infopdate: {},
      infouproducts: {},
      pandingcategory: true,
      pandingproducts: true,
      pandingupdate: true,
      newName: null,
    };
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
async editButton (id) {
  try{

    let res = await  getcategory(id); // get axios promise
    let data = res.data;
    console.log("Categorys :", data);
    this.setState({ infopdate: data });
    this.setState({pandingupdate: false });
  
  }catch (e) {
    console.error(e);
  }
 

}
async deleteButton (id) {
  try {
    let deletecategory = await deleteCategory(id);
    console.log("deleteButton:", deletecategory);
    alert("category is deleted!");
    window.location = "/dashboard/category";
} catch (e) {
    console.error(e);
    handelCatchInAxios(e);
}

}
async detailsButton (id) {
  try {
    let detail = await getcategorydetails(id);
    let data = detail.data; 
    console.log("info category products:", data);  
    this.setState({ infoproducts: data });
    this.setState({pandingproducts: false });
    this.setState({pandingcategory: false });

   
} catch (e) {
    console.error(e);
    handelCatchInAxios(e);
}

}

handleName(event) {
  this.setState({ newName: event.target.value });
}

async handleSubmit(event) {
  event.preventDefault();

  let name = this.state.newName ?? this.state. infopdate.name;


  console.log("A name was updating: " + name);

  try {
      let resupdate = await updateCategory(
          this.state.infopdate.id,
          name,

      );
      console.log(resupdate);

      if (resupdate.status == 200) {
          window.location = "/dashboard/category";
      }
  } catch (error) {
      console.log(error);
      handelCatchInAxios(error);
  }
}







  render() {
    // table category:::::::::::::::::::::::::::::::::::::::::
    let tablecategory = "";
    if (!this.state.panding) {
      let ThisClass = this;
      tablecategory = this.state.infocategory.map(function (category,index) {
        let src = "http://localhost:5500/" + category.image
        return (
          
          <tr  key={index}>
          <td className="text-center text-muted">{category.id}</td>
          <td>
            <div className="widget-content p-0">
              <div className="widget-content-wrapper">
               
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
            <div className=" btn btn-warning btn-sm" onClick={() => ThisClass.editButton(category.id)}> <i class="fas fa-edit"></i> update</div>
          </td>
          <td className="text-center">
            <div className=" btn btn-danger btn-sm" onClick={() => ThisClass.deleteButton(category.id)}> <i className="pe-7s-trash btn-icon-wrapper"></i> delete</div>
          </td>
          <td className="text-center">
            <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm" onClick={() => ThisClass.detailsButton(category.id)}>Details</button>
          </td>
        </tr>
        );
      });
    }

    // update category:::::::::::::::::::::::::::::::::::::::::
    let updateForm = "";

    if (!this.state.pandingupdate) {
        updateForm = (
           
            <div className='container '>
            <div className=' card text-white bg-success 'style={{maxWidth: '100rem'}} >
           <div className="card-header">Update Category</div>
           <div className="card-body">
           <div>
                         <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                             <div class="mb-3">
                                 <label for="exampleInputName1" class="form-label">Name</label>
                                 <input type="text" value={this.state.newName ?? this.state.infopdate.name}  onChange={this.handleName}class="form-control" id="exampleInputName1" />
                             </div>
                           
                             <button type="submit" class="btn btn-primary">Submit</button>
                         </form>
                     </div>
           </div>
         </div>
         
         </div>
            
        );
    }
//  info category :::::::::::::::::::::::::::::::::::::::::::::
    let infocategory = "";
    if (!this.state.pandingcategory) {

      infocategory = (

            <div>
                <p> {this.state.infoproducts.name}</p>

            </div>
        )
    }
    //  info products :::::::::::::::::::::::::::::::::::::::::::::

    let infoproducts = "";
    if (!this.state.pandingproducts) {
      infoproducts = this.state.infoproducts.products.map(function (product) {
            return  <section className="card" >
            <figure>
              <div className="img-overlay hot-home">
                <img src="" alt="Trulli" />
                <div className="overlay">
                  <a href="#">view property</a>
                </div>
                <div className="cont">
                  <div className="icons-img">
                    <button>
                      <i className="fas fa-heart" />
                    </button>
                    <button>
                      <i className="fas fa-share" />
                    </button>
                  </div>
                </div>
              </div>
            </figure>
            <div className="card-content">
              <h5>{product.name}</h5>
              <p>  {product.decsription}</p>

              {/* <button
                onClick={async () => {
                  await ThisClass.infoRoom(hotel.id);
                  ThisClass.showModal();
                }}
                type="button"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
                className="btn btn-sm btn-outline-danger"
              >
                View room
              </button> */}
            </div>
          </section>
        })

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
              <th >Name</th>
              <th className="text-center">Image</th>
              <th className="text-center">update</th>
              <th className="text-center">Delete</th>
              <th className="text-center">info</th>
            </tr>
          </thead>
          <tbody>
          { tablecategory}

          
          </tbody>
        </table>
      </div>
      
    </div>
  </div>
       </div>
     {  updateForm}
     <div>
     {infocategory}
     <div className="container">
          <div className="cards">
          {infoproducts}
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