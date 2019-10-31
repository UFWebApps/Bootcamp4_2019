import React from 'react';
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

        const newList = this.props.data.concat(newListing);
        console.log(newList);
        newList.sort((a,b) => {
            if(a.code < b.code) {
                return -1;
              }
              if (a.code > b.code){
                return 1;
              }
              if (a.code === b.code) {
                return 0;
              }
        });

        this.props.listingsUpdate(newList);
    }

    render () {
        return (
            <div class="border">
                <div class="bg-secondary text-white" >
                <span class="border">
                    <form>
                        <div class="form-group">
                            <label for="Code">Code: </label>
                            <input type="text" class="form-control" id="Code" placeholder="Building code" ref={(data) => this.code = data}></input>
                        </div>
                        <div class="form-group">
                            <label for="Name">Building Name: </label>
                            <input type="text" class="form-control" id="Name" placeholder="Building name" ref={(data) => this.buildingName = data}></input>
                        </div>
                        <div class="form-group">
                            <label for="Address">Address: </label>
                            <input type="text" class="form-control" id="Address" placeholder="Building Address" ref={(data) => this.buildingAddress = data}></input>
                        </div>
                        <div class="form-group">
                            <label for="Latitude">Latitude: </label>
                            <input type="text" class="form-control" id="Latitude" placeholder="latitude" ref={(data) => this.latitude = data}></input>
                        </div>
                        <div class="form-group">
                            <label for="Longitude">Longitude: </label>
                            <input type="text" class="form-control" id="Longitude" placeholder="longitude" ref={(data) => this.longitude = data}></input>
                        </div>
                        <div className="add-btn">
                                <Button 
                                variant="primary"  
                                size="lg" 
                                block
                                onClick={this.addListing.bind(this)}
                                >
                                    Add Building
                                </Button>
                        </div>
                    </form>
                </span>
                </div>
            </div>
        );
    }
}
export default AddBuilding;