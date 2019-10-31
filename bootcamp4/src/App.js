import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';
import Credit from './components/Credit';
import { throwStatement } from '../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/@babel/types/lib';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingData: this.props.data,
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })

  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  listingsUpdate(newList) {
    this.setState({listingData: newList})
    console.log(this.state.listingData);
  }


  render() {

    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search 
        filterText={this.state.filterText} 
        filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">

                  <BuildingList
                    data={this.state.listingData}
                    // Pass in the filterText property from App.js
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />

              </div>
              <AddBuilding 
              data={this.state.listingData}
              listingsUpdate={this.listingsUpdate.bind(this)}
              />
            </div>
            <div className="column2">
              <ViewBuilding
                selectedBuilding={this.state.selectedBuilding}
                data={this.state.listingData}
              />
              <RemoveBuilding
              data={this.state.listingData}
              selectedBuilding={this.state.selectedBuilding}
              listingsUpdate={this.listingsUpdate.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
