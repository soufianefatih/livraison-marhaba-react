import React from "react";
import "./landingpage.css";
import Navbar from "./navbar.js";



class About extends React.Component {
  render() {
    return (
        <div className= "landingpage mt-5">
    <Navbar />
       <section className="contact-from pt-4 ">
  <div className="container " style={{maxWidth: '60rem'}}>
    <div className="card mt-5  cardcontact" >
      <div className="row p-3">
        <div className="col-md-6 mx-auto text-center">
          <h1 className="text-success font-weight-bold">Contact us</h1>
          <div className="divider bg-success mx-auto" />
          <p className="text-dark lead font-weight-normal">
            We are looking forward to hear something from you?
            Lorem, ipsum dolor sit amet consectetur adipisicin .
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-8 mx-auto">
          <form method="POST" action="{{route('new.message')}}">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" name="firstName" className="form-control form-controlaa" placeholder="Your FirstName" />
                </div>
              </div>
              <div className="col-md-6 mx-auto">
                <div className="form-group">
                  <input type="text" name="lastName" className="form-control form-controlaa" placeholder="Your LastName" />
                </div>
              </div>
              <div className="col-md-6 mx-auto">
                <div className="form-group">
                  <input type="tel" name="Phnoe" className="form-control form-controlaa" placeholder="Phone number" />
                </div>
              </div>
              <div className="col-md-6 mx-auto">
                <div className="form-group">
                  <input type="email" name="email" className="form-control form-controlaa" placeholder="Your email address" />
                </div>
              </div>
              <div className="col-12 mx-auto">
                <div className="form-group">
                  <textarea rows={5} name="desc" className="form-control form-controlaa" placeholder="What are you looking for?" defaultValue={""} />
                </div>
              </div>
            </div>
            <div className="text-center  p-3 ">
              <button type="submit" className="btnn ">Send your question</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

</div>



    );
  }
}

export default About;



