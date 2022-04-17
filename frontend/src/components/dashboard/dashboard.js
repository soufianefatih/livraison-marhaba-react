import React from "react";
import Navbar from './../../../src/components/layouts/navbar';
import Siderbar from './../../../src/components/layouts/siderbar';




class Dashboard extends React.Component {
  render() {
    return (
        
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

             <Navbar />
             <Siderbar />

        </div>

    );
  }
}

export default Dashboard;
