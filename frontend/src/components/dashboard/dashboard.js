import React from "react";
import Navbar from './../../../src/components/layouts/navbar';



class Dashboard extends React.Component {
  render() {
    return (
        
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

             <Navbar />
        </div>

    );
  }
}

export default Dashboard;
