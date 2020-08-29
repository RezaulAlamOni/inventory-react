import React from 'react';


// function Greet(props){
//     return <h1> React APP ! <br/> Hello  {props.name}</h1>
// }

// const Greet = props => {
//     return (
//         <div>
//             <h1> Hello  {props.name} Welcome {props.herroName}</h1>
//             { props.children }
//         </div>
//     )
// }
const Greet = ({name,herroName}) => {
    // const {name, herroName} = props
    return (
        <div>
            <h1> Hello  {name} Welcome {herroName}</h1>
        </div>
    )
}

export default Greet;