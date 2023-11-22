import { useState } from "react";

const User = (props) => {
    const { name, location, contact } = props;
    const [count1] = useState(1);
    const [count2] = useState(2);
    
    return (
        <div className="user-card">
            <h2>Name : {name}</h2>
            <h3>Location :{location} </h3>
            <h3>Contact : {contact}</h3>
            <h3>Count1 : {count1}</h3>
            <h3>Count2 : {count2}</h3>
        </div>
    );
};

export default User;