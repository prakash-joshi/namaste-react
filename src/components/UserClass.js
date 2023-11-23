import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    render() {
        const { name, location, contact } = this.props;
        const { count } = this.state;

        return (
            <div className="user-card">
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 })
                }}>
                    <h1>Count : {count}</h1>
                </button>
                <h2>Name : {name}</h2>
                <h3>Location :{location} </h3>
                <h3>Contact : {contact}</h3>
                {/* <h3>Count2 : {count2}</h3> */}
            </div>
        );
    }
}

export default UserClass;