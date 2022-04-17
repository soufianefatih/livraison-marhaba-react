import React from 'react';
import {  getAllcategory } from './../../../services/Categoryservice';


class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infocategory: this.infoCategory(),
      panding: true,
     
    };
  }
  async infoCategory() {
    try {
      let res = await getAllcategory(); // get axios promise
      let data = res.data;
      console.log("ALL Catzgorys :", data);
      // get all data from pomise
      // this.setState({ infohotel: data }); // Set data to state
      // this.setState({ panding: false }); // Change status panding for render data
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (

  <h1>categorys</h1>


 



    );
  }
}

export default Category;