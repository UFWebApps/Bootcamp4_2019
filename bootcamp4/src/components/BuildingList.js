import React from 'react';

class BuilingList extends React.Component {
	render() {
		const {data, selectedUpdate, filterText } = this.props;

		const buildingList = data.filter(building => {return building.code.toLowerCase().includes(filterText)}).map(building => {
			return (
				<tr key={building.id} onClick = {() => selectedUpdate(building.id)}>
					<td> {building.code} </td>
					<td> {building.name} </td>
				</tr>
			);
		});
		return <div> {buildingList} </div>;
	}
}
export default BuilingList;
