import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

class AddBuilding extends React.Component {

    addListing() {
        const {data, listingsUpdate} = this.props;

        let newListing = {
            id: data.length + 1,
            address: this.buildingAddress.value,
            code: this.code.value,
            name: this.buildingName.value,
            coordinates: {
                latitude: this.latitude.value,
                longitude: this.longitude.value
            }
        };

        var frm = document.getElementById("listingForm");
        frm.reset();

        const newList = this.props.data.concat(newListing);
        console.log(newList);

        newList.sort((a,b) => {
            var nameA = a.code.toUpperCase(); // ignore upper and lowercase
            var nameB = b.code.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                     return 1;
                }

                // names must be equal
                return 0;
        });

        this.props.listingsUpdate(newList);
    }

    render () {
        return (
            <div className="border">
                <div className="bg-secondary text-white" >
                <span className="border">
                    <form id="listingForm">
                        <h2 style={{textAlign:'center'}}>Add a Listing</h2>
                        <div className="form-group" style={{padding:'0px 15px', margin:'0px'}}>
                            <label htmlFor="Code" style={{padding:'0px 15px', margin:'0px'}}>Code: </label>
                            <input type="text" className="form-control-sm" id="Code" placeholder="Building code" ref={(data) => this.code = data} style={{height:'2rem'}}></input>
                        </div>
                        <div className="form-group" style={{padding:'0px 15px', margin:'0px'}}>
                            <label htmlFor="Name" style={{padding:'0px 15px', margin:'0px'}}>Building Name: </label>
                            <input type="text" className="form-control-sm" id="Name" placeholder="Building name" ref={(data) => this.buildingName = data} style={{height:'2rem'}}></input>
                        </div>
                        <div className="form-group" style={{padding:'0px 15px', margin:'0px'}}>
                            <label htmlFor="Address" style={{padding:'0px 15px', margin:'0px'}}>Address: </label>
                            <input type="text" className="form-control-sm" id="Address" placeholder="Building Address" ref={(data) => this.buildingAddress = data} style={{height:'2rem'}}></input>
                        </div>
                        <div className="form-group" style={{padding:'0px 15px', margin:'0px'}}>
                            <label htmlFor="Latitude" style={{padding:'0px 15px', margin:'0px'}}>Latitude: </label>
                            <input type="text" className="form-control-sm" id="Latitude" placeholder="latitude" ref={(data) => this.latitude = data} style={{height:'2rem'}}></input>
                        </div>
                        <div className="form-group" style={{padding:'0px 15px', margin:'0px'}}>
                            <label htmlFor="Longitude" style={{padding:'0px 15px', margin:'0px'}}>Longitude: </label>
                            <input type="text" className="form-control-sm" id="Longitude" placeholder="longitude" ref={(data) => this.longitude = data} style={{height:'2rem'}}></input>
                        </div>
                        <Button  style={{padding: '15px'}}
                                variant="primary"  
                                size="lg" 
                                block
                                onClick={this.addListing.bind(this)}
                                >
                                    Add Listing
                                </Button>
                    </form>
                </span>
                </div>
            </div>
        );
    }
}
export default AddBuilding;
