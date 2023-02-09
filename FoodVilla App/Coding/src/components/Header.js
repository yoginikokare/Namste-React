import { useState } from "react";
import { Link } from "react-router-dom"

function loggedInser() {
  //makeAPIcall
  return true;
}

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-10"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex justify-between items-center bg-yellow-500">
      <Title />
      <div>
        <ul className="flex p-2">
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/about">About</Link></li>
          <li className="px-2"><Link to="/contact">Contact</Link></li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
      <div>
        {isLoggedIn ? <button onClick={()=> {setIsLoggedIn(false)}}>Logout</button> 
        : <button onClick={()=> {setIsLoggedIn(true)}}>Login</button>}
      </div>
    </div>
  );
};

export default Header;
