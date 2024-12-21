import React, { useState } from "react";
import "./Navbar.css";
import logo from "./assets/logo1.png";
import { BsGithub } from "react-icons/bs";



const Navbar = () => {

    const [menuOpen, setmenuOpen] = useState(true)
    const onew ="new";
  return (
    <nav className="navContainer">
      {/* 1st part */}
      <div className="logo">
        <a className="logoName" href="/">
          <img src={logo} alt="" /><span >Saurav</span>
        </a>
      </div>

      {/* 2nd part */}
      <div className={`menuScreen ${menuOpen && onew}`} >
      
      </div>


      {/* 3rd part  */}
      <div className="navBtns">
       <a href="https://github.com/SauravDutta002" target="_blank"> <button className="actionBtn"><BsGithub /></button> </a>
      </div>
    </nav>
  );
};

export default Navbar;
