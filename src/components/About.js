import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us 🉐</h1>
            <h3>Hey there this is about us component</h3>     
            <UserClass name={'Prakash Joshi'} location={"Pune, India"} contact={"@prakashjoshi"} />
        </div>

    );
};

export default About;