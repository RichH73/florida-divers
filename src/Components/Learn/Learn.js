import React, { Component } from "react";
import "./Learn.css";

class Learn extends Component {
  render() {
    return (
      <div className="learn">
        <h2>Ready to take the next step?</h2>
        <p>CERTIFICATION’S AVAILABLE ARE AS FOLLOWS:</p>
        <ul>
          <li>Open Water: $300</li>
          <li>Advanced Open Water: $250</li>
          <li>SPECIALTY COURSES: $250</li>
          <li>U/W Navigator Sidemount Diver: $300</li>
          <li>Dry suit Diver: $300</li>
          <li>EFR/Rescue Diver: $475</li>
          <li>Public Safety Diver: $600</li>
          <li>Dive master: $600</li>
        </ul>
        <p>
            If you would like more information about a course, or if you are ready to get started please contact us.
        </p>
        <h3>We look forward to diving with you soon!!</h3>
      </div>
    );
  }
}

export default Learn;
