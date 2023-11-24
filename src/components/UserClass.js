import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Name",
                location: "Location",
                login: "Contact",
                avatar_url: "https://robohash.org/dummy",
            },
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/prakash-joshi");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
    }

    render() {
        const { name, location, login, avatar_url, html_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : {location} </h3>
                <h3>Contact : <a href={html_url} target="_blank">{login}</a></h3>
            </div>
        );
    }
}

export default UserClass;