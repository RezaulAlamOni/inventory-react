import React, {Component} from 'react';


class UserGreeting extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isLoggedIn : true,
            users : ['Oni',"Mariam","Rezaul","Miraz"]
        }
    }

    render() {
        //if else block
        // if (this.state.isLoggedIn) {
        //     return <div><h1>Welcome Visitor</h1></div>
        // } else {
        //     return  <div><h1>Welcome guest</h1></div>
        // }
        //  use variable
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div><h1>Welcome Visitor</h1></div>
        // } else {
        //     message = <div><h1>Welcome guest</h1></div>
        // }
        //
        // return <div>{message}</div>

        // user ternary operator
        // return this.state.isLoggedIn ?
        //     <div><h1>Welcome Visitor</h1></div> :
        //     <div><h1>Welcome guest</h1></div>

        // user sort circuit operator approach

        return this.state.isLoggedIn && <div>
            <h1>Welcome Visitor</h1>
            {this.state.users.map(name => <h1>{name}</h1>)}
        </div>
    }
}

export default UserGreeting;
