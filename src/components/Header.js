import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from 'react-router-dom';
import useShowOnlineStatus from "../utils/useShowOnlineStatus";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Login')
    const onlineStatus = useShowOnlineStatus();
    return (
        <div className="header">
            <img className="logo" src={LOGO_URL} />
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>
                    <li>
                        <Link to='/about'> About </Link>
                    </li>
                    <li>
                        <Link to='/contact'> Contact Us </Link>
                    </li>
                    <li>
                        Cart
                    </li>
                    <button className="login-btn"
                        onClick={() => {
                            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                        }}
                    >
                        {loginBtn}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;