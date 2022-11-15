import React from "react";

export default class NewRoomForm extends React.Component {
    constructor(props) {
        super(props);
        // values that are in the NewRoomForm
        this.state = {
            nameValue: "",
            areaValue: ""
        }

        // methods
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(e) {
        this.setState({nameValue: e.target.value});
    }

    handleAreaChange(e) {
        this.setState({areaValue: e.target.value});
    }

    // changes local state when adding new room
    handleClick(e) {
        this.props.addNewRoom(e, this.props.data,
            {name: this.state.nameValue, area: this.state.areaValue});
        this.setState({nameValue: '', areaValue: ''});
    }

    render() {
        return (
            // updates the specific inputted value with corresponding method above
            <div>
                <input className="input" type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.nameValue} />
                <input className="input" type="text" placeholder="Area (sq. ft.)" onChange={this.handleAreaChange} value={this.state.areaValue} />
                <button className="button" onClick={this.handleClick}>Add Room</button>
            </div>
        );
    }

}