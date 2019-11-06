import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class ViewBuilding extends React.Component {
	render() {
		const{data, id} = this.props
		const building = data.filter(directory => {return directory.id === id})[0]
		let info = ' '
		if(building) {
			info = 
			<div>
				Name : {building.name}
				<br/>
				Code: {building.code}
				<br/>
				Address: {building.address}
				<RemoveBuilding remove={this.props.remove} id={id}/>
			</div>
		}
		else {
			info = <i>Click on a name to view more information</i>
		}
		return (
			<div>
				{info}
			</div>
		);
	} 
}
export default ViewBuilding;
