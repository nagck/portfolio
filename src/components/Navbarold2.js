import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../logo.png";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link" >About me</Link>
            </li>

            {/* <li className="nav-item active">
              <Link smooth={true} to="/" className={location.pathname === "/" ? "nav-link" : "nav-link"} >Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="/about" offset={-110} className={location.pathname === "/about" ? "nav-link active" : "nav-link"} >About Me</Link>
            </li> */}
            
            <li className="nav-item">
              <Link smooth={true} to="/portfolio" offset={-110} className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} >Portfolio</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to="/contacts" offset={-110} className={location.pathname === "/contacts" ? "nav-link active" : "nav-link"} >Contact</Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar



