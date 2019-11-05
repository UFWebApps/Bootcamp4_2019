import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class ViewBuilding extends React.Component {
	render() {

		const { data, selectedBuilding } = this.props;

		const building = data
		.filter(directory => {
			return directory.id === selectedBuilding;
		})
		.map(directory => {
			return(
				<tr key={directory.id}>
				<h1>{directory.code} </h1>
				<h1> {directory.name} </h1>
				<h2> {directory.address} </h2>
			</tr> 
			)
			
		})
		
		return (
			<div>
				<p>
					<i>Click on a name to view more information</i>
					{building}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
