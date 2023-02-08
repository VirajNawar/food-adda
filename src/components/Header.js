import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <a href="/">
      <img src="" alt="logo" />
      </a>
      <div className="nav">
        <ul className="nav--links">
          <Link to="/">
          <li> Home </li>        
          </Link>
          <Link to="/about">
          <li> About </li>
          </Link>
          <li> Contact </li>
          <li> Cart </li>
          <li>
            {isLoggedIn ? (
              <button id="logout__btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <button id="login__btn" onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
