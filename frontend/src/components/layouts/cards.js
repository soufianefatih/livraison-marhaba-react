import React from "react";


class Cards extends React.Component {
  render() {
    return (
        <div className="container mt-5">
   <div className="row">
  <div className="col-md-6 col-xl-4">
    <div className="card mb-3 widget-content bg-midnight-bloom">
      <div className="widget-content-wrapper text-white">
        <div className="widget-content-left">
          <div className="widget-heading">Total Orders</div>
          <div className="widget-subheading">Last year expenses</div>
        </div>
        <div className="widget-content-right">
          <div className="widget-numbers text-white"><span>1896</span></div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-xl-4">
    <div className="card mb-3 widget-content bg-arielle-smile">
      <div className="widget-content-wrapper text-white">
        <div className="widget-content-left">
          <div className="widget-heading">Clients</div>
          <div className="widget-subheading">Total Clients Profit</div>
        </div>
        <div className="widget-content-right">
          <div className="widget-numbers text-white"><span>$ 568</span></div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-xl-4">
    <div className="card mb-3 widget-content bg-grow-early">
      <div className="widget-content-wrapper text-white">
        <div className="widget-content-left">
          <div className="widget-heading">Followers</div>
          <div className="widget-subheading">People Interested</div>
        </div>
        <div className="widget-content-right">
          <div className="widget-numbers text-white"><span>46%</span></div>
        </div>
      </div>
    </div>
  </div>
  <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
    <div className="card mb-3 widget-content bg-premium-dark">
      <div className="widget-content-wrapper text-white">
        <div className="widget-content-left">
          <div className="widget-heading">Products Sold</div>
          <div className="widget-subheading">Revenue streams</div>
        </div>
        <div className="widget-content-right">
          <div className="widget-numbers text-warning"><span>$14M</span></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>





    );
  }
}

export default Cards;
