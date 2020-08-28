import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Class Component in Welcome {this.props.name} from {this.props.herroName} </h1>
                {this.props.children}
            </div>
        )
    }
}


export default Welcome;