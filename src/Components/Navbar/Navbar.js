import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            NewsApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/business">
                    Business
                  </Link>
                  <Link className="dropdown-item" to="/entertainment">
                    Entertainment
                  </Link>
                  <Link className="dropdown-item" to="/general">
                    General
                  </Link>
                  <Link className="dropdown-item" to="/health">
                    Health
                  </Link>
                  <Link className="dropdown-item" to="/sports">
                    Sports
                  </Link>
                  <Link className="dropdown-item" to="/science">
                    Science
                  </Link>
                  <Link className="dropdown-item" to="/technology">
                    Technology
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
