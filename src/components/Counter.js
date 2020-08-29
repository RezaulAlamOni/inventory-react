import React, {Component} from 'react';
import Hello from "./Hello";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            message : 'Parent'
        }
    }

    increment() {

        // this.setState({
        //     count: this.state.count + 1
        // },()=>{
        //     console.log(this.state.count)
        // })

        // use previous state update data
        this.setState((preState) => ({
            count: preState.count + 1
        }))

    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    greetParent(data){
        alert(`This ${this.state.message} from ${data}`)
    }

    render() {
        return (
            <div>
                <h1>Count - {this.state.count} </h1>
                <button onClick={() => this.incrementFive()}>Increment Count</button>
                <Hello clickToParent={this.greetParent.bind(this)}/>
            </div>
        )
    }


}


export default Counter;