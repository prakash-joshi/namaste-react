import React from "react";
import ReactDOM from "react-dom/client";

///React element
const Title = (<h1 className="head" tabIndex="5">Namaste React 🙏</h1>)

///React component
const Message1 = () => {
    return <h3>This is Episode 3.</h3>
}
const Message2 = () => {
    return <h3>Using JSX to create React componenets & elements.</h3>
}

///React component
const Header = () => (
    <div>
        {Title /* render the react element using JS inside JSX*/}
        <Message1 /* render react component using JSX*/ />
        {Message2() /* Render react function component which is JSX like executing a function*/}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Header />);