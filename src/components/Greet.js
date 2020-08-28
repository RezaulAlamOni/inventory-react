import React from 'react';


// function Greet(props){
//     return <h1> React APP ! <br/> Hello  {props.name}</h1>
// }

const Greet = props => {
    return (
        <div>
            <h1> Hello  {props.name} Welcome</h1>
            { props.children }
        </div>
    )
}

export default Greet;