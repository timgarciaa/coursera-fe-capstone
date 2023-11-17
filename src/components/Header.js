import React, { useState } from "react";
import NavBar from "./NavBar";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";
import Logo from "../assets/Logo.svg";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }
  return (
    <header className={"header"}>
      <nav className="burger-nav">
        <img src={Logo} alt="Little Lemon logo" className="nav-image"></img>

        <button className="burger-btn" onClick={handleToggle}>
          <img
            className="burger-icon"
            src={navbarOpen ? Close : Hamburger}
            alt="Navigation Bar"
          />
        </button>
      </nav>
      {navbarOpen ? <NavBar className="open" type={'mobile'}/> : <></>}
      {/* <NavBar /> */}
    </header>
  );
}

export default Header;
