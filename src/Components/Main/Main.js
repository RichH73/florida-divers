import React, { Component } from "react";
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className='main'>
      <div className='intro'>
      <h1>Welcome to Florida Divers</h1>
        <p>
          Never been in the ocean? Don't worry!
          </p>
          <p id='intro'>
          Floridivers works with new
          divers, swimmers, and clients of all ages. Got a vacation planned? Let
          us certify you and your family so you can see and enjoy things that
          most other families won't. Our classes are flexible to meet the needs
          of your hectic schedule and we're outfitted to help you make a big
          splash.
        </p>
        </div>
        <div id='hero'>
          <img src='images/hero.png' alt='hero img' />
        </div>
      </div>
    );
  }
}

export default Main;
