import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../images/icons/logo2.png";
import cart from "../../images/icons/Path 1.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between mx-5 my-2">
      <div>
        <Link to="/home">
          <img className="w-32 mx-5" src={logo2} alt="" />
        </Link>
      </div>
      <div className="flex items-center">
        <img className="my-5 mx-4" src={cart} alt="" />
        <Link className="my-5 mx-4" to="/login">
          Login
        </Link>
        <Link className="my-5 mx-4" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
