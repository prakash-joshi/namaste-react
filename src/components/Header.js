import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import useShowOnlineStatus from "../utils/useShowOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Login')
    const onlineStatus = useShowOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="flex justify-between bg-orange-100">
            <div className="logo-container">
                <img className="w-[150px] h-[150px] mix-blend-darken" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex p-10 m-5">
                    <li className="px-5">
                        Online Status : {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-5">
                        <Link to='/'> Home </Link>
                    </li>
                    <li className="px-5">
                        <Link to='/about'> About </Link>
                    </li>
                    <li className="px-5">
                        <Link to='/contact'> Contact Us </Link>
                    </li>
                    <li className="px-5">
                        Cart
                    </li>
                    <button className="px-4 py-1 bg-gray-100  hover:bg-gray-200 rounded-lg"
                        onClick={() => {
                            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                        }}
                    >
                        {loginBtn} - {loggedInUser}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;