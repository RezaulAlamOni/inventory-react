import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Greet'
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import UserGreeting from "./components/UserGreeting";

function App() {
    return (
        <div className="App">
            {/*<Greet name="Oni"/>*/}
            {/*<Greet name="Rezaul" herroName="HErro">*/}
            {/*    <p>This is children props</p>*/}
            {/*</Greet>*/}
            {/*<Welcome name="Messi" herroName="Football">*/}
            {/*    <a href="/"> THis is children prop 1</a>*/}
            {/*</Welcome>*/}
            {/*<Welcome name="Nadal" herroName="Tennis">*/}
            {/*    <a href="/"> THis is children prop 2</a><br/>*/}
            {/*    <button>Click Here</button>*/}
            {/*</Welcome>*/}
            {/*<Hello/>*/}
            {/*<Message />*/}
            {/*<Counter/>*/}

            <UserGreeting />

        </div>
    );
}

export default App;
