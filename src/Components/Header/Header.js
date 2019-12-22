import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div id="header">
          <div id="logo">
            <img src="/images/transparent_logo.png" alt="logo" />
          </div>
          <div id='label'>
          <img src='/images/label.png' alt='label' />
          <div id='nav-button' onClick={()=> alert('Button clicked')}>
            <img src='images/hamburger_button.png' alt='nav' />
          </div>
          </div>
          <div id="nav">
            <nav id='navigation-bar'>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/crew">Crew</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/learn">Learn</Link>
                </li>
                <li>
                  <Link to="/store">Store</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
