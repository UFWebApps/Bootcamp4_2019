import React from 'react'

class RemoveBuilding extends React.Component {
    render() {
        const {remove, id} = this.props

        return (
            <div className = "remove">
                <button onClick = {() => remove(id)}> Remove Building </button>
            </div>
        );
    }
}
export default RemoveBuilding;