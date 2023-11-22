import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count1: 1,
            count2: 2,
        }
    }
    render() {
        const { name, location, contact } = this.props;
        const { count1, count2 } = this.state;

        return (
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>Location :{location} </h3>
                <h3>Contact : {contact}</h3>
                <h3>Count1 : {count1}</h3>
                <h3>Count2 : {count2}</h3>
            </div>
        );
    }
}

export default UserClass;