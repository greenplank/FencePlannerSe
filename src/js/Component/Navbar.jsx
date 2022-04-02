import React from "react";
import { Link } from "react-router-dom"

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar main-navbar px-5 navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#logo">
            <img
              src="./images/ebygghandel-new.png"
              alt="Logo"
              width="170"
              height="100%"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#handel_navbar"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="handel_navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item px-0 px-sm-5">
              <Link to="/" className="nav-link">Home</Link>

              </li>
              <li className="nav-item px-0 px-sm-5">
              <Link to="/help" className="nav-link">Help</Link>

              </li>
              <li className="nav-item px-0 px-sm-5">
                <Link to="/information" className="nav-link">Information</Link>
                
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
