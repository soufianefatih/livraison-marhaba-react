import React from 'react';
import { createCategorys } from './../../../services/Categoryservice'
import { handelCatchInAxios } from "../../../services/AxiosCatchService";
import Navbar from './../../../components/layouts/navbar';
import Siderbar from './../../../components/layouts/siderbar';
import Cards from './../../../components/layouts/cards';


class createcategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', image: '' };

        this.handleName = this.handleName.bind(this);
       
        this.handleImage = this.handleImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }
    handleName(event) {
        this.setState({ name: event.target.value });
    }
  
    handleImage(event) {
        console.log('event.target.files', event.target.files);
        this.setState({ image: event.target.files[0] });
    }

    async handleSubmit(event) {
        event.preventDefault();

        console.log('A name was submitted: ' + this.state.name);
        console.log('A image was submitted: ' + this.state.image);

        try {

            let rescreatecategory = await createCategorys(this.state.name, this.state.image)

            if (rescreatecategory .status == 200) {
                console.log('Done Req  : ');
                window.location = "/dashboard/category";
            }

            console.log('rescreatecategory : ', rescreatecategory);

        } catch (error) {
            console.log('error', error);
            handelCatchInAxios(error)
        }
    }
    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Name</label>
                        <input type="text" value={this.state.name} onChange={this.handleName} class="form-control" id="exampleInputName1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputImage1" class="form-label">profile</label>
                        <input type="file" onChange={this.handleImage} class="form-control" id="exampleInputImage1" multiple="multiple" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        );
    }
}
export default createcategory;