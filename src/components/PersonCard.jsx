import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            age: this.props.age
        };
    }


    changeAge = () => {
        this.setState({age: this.state.age + 1});
    };

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         age: this.props.age
    //     };
    // }

    // changeAge = () => {
    //     this.setState({ age: this.state.age + 1});
    // };

    render() {
        return (
            <div>
                <h1>{this.props.firstName},{this.props.lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>HairColor:{this.props.color}</p>
                <button onClick={this.changeAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button> 
            </div>
            
        );
    }
}

export default PersonCard;
