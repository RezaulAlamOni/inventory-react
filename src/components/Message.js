import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome Visitor"
        }

        //bind this key
        // this.changeLog = this.changeLog.bind(this)

    }

    changeMessage(){
        this.setState({
            message: "Thank you for subscription !"
        })
    }
    changeLog(){
        console.log(this)
        console.log('class event handle')
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message} </h1>
                {/*{this.props.children}*/}
                <button onClick={() => this.changeMessage()}>Change Text</button>
                <button onClick={this.changeLog.bind(this)}>Change Text</button>
            </div>
        )
    }


}


export default Message;