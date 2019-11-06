import React from 'react';

class AddBuilding extends React.Component {
    render() {
        const{add} = this.props

        return (
            <form className = "Add" onSubmit = {event => {
                event.preventDefault()
                this.refs.name.value = ''
                this.refs.code.value = ''
                this.refs.address.value = ''
            }}>
                <input ref='name' placeholder='Name' ></input>
				
				<input ref='code' placeholder='Code' ></input>
				
				<input ref='address' placeholder='Address' ></input>
				
				<button onClick={() => add(this.refs.name.value, this.refs.code.value, this.refs.address.value)}>Add Building</button>
            </form>
        );
    }
}
export default AddBuilding;