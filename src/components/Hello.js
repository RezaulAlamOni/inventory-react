import React from "react";

const Hello = () =>{
    return (
        // JSX use in component
      <div>
          <h1>Hello JSX Example</h1>
      </div>
    );
    // without JSX
    // return React.createElement( // this method contain 3 parameter fist one tag and 2nd additional data and 3rd inner value
    //     'div',
    //     {id : 'hello', className : 'dummyClass'},
    //     React.createElement('h1',null,'Hello JSX')
    // )
}
export default Hello;