import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const {name,herroName} = this.props
        return (
            <div>
                <h1>Class Component in Welcome {this.props.name} from {this.props.herroName} </h1>
                <p>Destruct params</p>
                <h1>Class Component in Welcome {name} from {herroName} </h1>
                {this.props.children}
            </div>
        )
    }
}


export default Welcome;