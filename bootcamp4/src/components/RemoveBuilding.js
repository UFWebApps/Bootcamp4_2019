import React from 'react';
import { Button} from 'react-bootstrap';

class RemoveBuilding extends React.Component {

	listingsUpdate() {

		// First, we grab the data from props
		const { data, selectedUpdate } = this.props;

		// We then filter out the building we wish to eliminate
		const newList = data
		.filter(directory => {
			return directory.id !== this.props.selectedBuilding;
		})

		console.log(newList);

		this.props.listingsUpdate(newList);

	}

	render() {


		return (
			<div className="remove-btn">
					<Button 
					variant="primary"  
					size="lg" 
					block
					onClick={this.listingsUpdate.bind(this)}
					>
						Remove Building
					</Button>
			</div>
		);
	}
}
export default RemoveBuilding;