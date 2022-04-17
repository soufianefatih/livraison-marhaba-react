import React from "react";
import Navbar from './../../../src/components/layouts/navbar';
import Siderbar from './../../../src/components/layouts/siderbar';
import Cards from './../../../src/components/layouts/cards';
import Tabls from './../../../src/components/layouts/table';


class Dashboard extends React.Component {
  render() {
    return (
        
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

             <Navbar />
             <div class="app-main">
             <Siderbar />
             <div class="app-main__outer">
                 <div className="container mt-5">
                 <Cards />
                 <Tabls />


                 </div>

                 </div>
                 </div>

        </div>

    );
  }
}

export default Dashboard;
