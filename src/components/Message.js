import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome Visitor"

        }
    }

    changeMessage(){
        this.setState({
            message: "Thank you for subscription !"
        })
    }
    changeLog(){
        console.log('class event handle')
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message} </h1>
                {/*{this.props.children}*/}
                <button onClick={() => this.changeMessage()}>Change Text</button>
                <button onClick={this.changeLog}>Change Text</button>
            </div>
        )
    }


}


export default Message;