import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router";


const Header = () => {

  const [ BtnNameReact , setBtnNameReact ] = useState("Login");
   console.log("render");
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logoo"
            src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
          <Link to ="/"> Home </Link></li>
          <li>
          <Link to ="/about">About</Link></li>
          <li>
          <Link to="/contact us">Contact
          </Link></li>
          <li>
            Cart <i className="fa-solid fa-cart-shopping"></i>
          </li>
         <button className="login" 
         onClick={() => {
          BtnNameReact === ("Login")? setBtnNameReact("Logout"):setBtnNameReact("login");
         
         }}
         >
        {BtnNameReact}
      </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;