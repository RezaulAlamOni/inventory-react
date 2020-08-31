import React from "react";

const Hello = (props) =>{
    const users = ['Oni',"Mariam","Rezaul","Miraz"];
    const userList = users.map(name => <h1>{name}</h1>);
    return (
        // JSX use in component
      <div>
          <h1>Hello JSX Example</h1>
          {users.map(name => <h1>{name}</h1>)}
          =======
          {userList}
          <button onClick={() =>props.clickToParent('1111')}>Click to parent</button>
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