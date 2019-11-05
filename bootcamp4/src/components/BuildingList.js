import React from 'react';

class BuilingList extends React.Component {

	selectedUpdate(index) {
		const listings = this.props.data;
		
		const listingID = listings[index].id;

		this.props.selectedUpdate(listingID);
	}

	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
		
		.filter(directory => {
			// Remove the building listings that don't match the current filter text
				return (directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || 
				directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ) ;
		})

		.map((directory, index) => {

			//const listing = this.props;
			//console.log(listing.id);
			return (	
				<tr key={directory.id} onClick={this.selectedUpdate.bind(this, index)}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr> 
			);
		});

		return <div className="ListingTable">
					<table className="table table-hover">
						<thead>
						<tr>
							<th scope="col">Code</th>
							<th scope="col">Building Name</th>
						</tr>
						</thead>
						<tbody>
							{buildingList}
						</tbody>
					</table>

		</div>;
	}
}
export default BuilingList;
