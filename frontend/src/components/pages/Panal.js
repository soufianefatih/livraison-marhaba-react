import React from "react";
import "./landingpage.css";
import Navbar from "./navbar.js";



class About extends React.Component {
  render() {
    return (
        <div className= "landingpage mt-5">
        <Navbar/>
       <div className=" pt-5 ">
       <h3 className="sub-heading mt-5 "> Create Command </h3>
  <h1 className="heading"> why choose us? </h1>
       <div className='container mt-5 '>
        <div className=' card text-white bg-white 'style={{maxWidth: '100rem'}} >
       <div className="card-header text-black">Create Command</div>
       <div className="card-body">
       <div>
                     <form >
                         <div class="mb-3">
                             <label for="exampleInputName1" class="form-label">Name</label>
                             <input type="text"  class="form-control" id="exampleInputName1" />
                         </div>
                         <div class="mb-3">
                             <label for="exampleInputName1" class="form-label">Name</label>
                             <input type="text"  class="form-control" id="exampleInputName1" />
                         </div>
                        
     
                         <button type="submit" class="btn btn-success">Submit</button>
                     </form>
                 </div>
       </div>
     </div>
     
     </div>
       </div>
      
</div>


    );
  }
}

export default About;



