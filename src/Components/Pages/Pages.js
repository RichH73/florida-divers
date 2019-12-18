import React, { Component } from "react";
import { Route } from "react-router-dom";
import './Pages.css';

import Main from "../Main/Main";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Contact from '../Contact/Contact';
import Crew from "../Crew/Crew";

class Body extends Component {
  render() {
    return (
      <div className="main-body">
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/crew" component={Crew} />
        <Route path="/gallery" component={Gallery} />
        <Route path='/contact' component={Contact} />
      </div>
    );
  }
}

export default Body;
