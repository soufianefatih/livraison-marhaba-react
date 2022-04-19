import React from "react";


class CardDash extends React.Component {
  render() {
    return (


<div className="grey-bg container-fluid">
  <section id="minimal-statistics">
   
    <div className="row">
      <div className="col-xl-3 col-sm-6 col-12"> 
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-pencil primary font-large-2 float-left" />
                </div>
                <div className="media-body text-right">
                  <h3>278</h3>
                  <span>New Posts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-speech warning font-large-2 float-left" />
                </div>
                <div className="media-body text-right">
                  <h3>156</h3>
                  <span>New Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-graph success font-large-2 float-left" />
                </div>
                <div className="media-body text-right">
                  <h3>64.89 %</h3>
                  <span>Bounce Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12">
        <div className="card">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className="icon-pointer danger font-large-2 float-left" />
                </div>
                <div className="media-body text-right">
                  <h3>423</h3>
                  <span>Total Visits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  </section>
 
</div>





    );
  }
}

export default CardDash;
