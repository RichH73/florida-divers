import React, { Component } from "react";
import "./Crew.css";

class Crew extends Component {
  render() {
    return (
      <div className="crew">
      <h3>Meet the Crew</h3>
        <div className="crew-container">
          <img src="http://dev.richthats.me/images/nich_small.jpg" alt="Nich" />
          <div className='bio'>
            <b>
              Nicholas Strazzulla
              <br />
              MSDT
              <br />
              Founder & Lead Instructor
              <br />
            </b>
            Nicholas' experience includes: 10+ years as a paramedic 8 years as a
            scuba diver 2 years as a Hyperbaric technician.
          </div>
        </div>
        <div className="crew-container">
          <img src="http://dev.richthats.me/images/tam_small.jpg" alt="Nich" />
          <div className='bio'>
            <b>
              Tammy Strazzulla
              <br />
              Master Scub​a Diver
            </b>
            <br />
            Tammy started out as a student, and now helps manage Floridivers.
            Tammy is currently on the path to obtaining her Dive Master
            Certification.
          </div>
        </div>
        <div className="crew-container">
          <img src="http://dev.richthats.me/images/sandi_small.png" alt="Nich" />
          <div className='bio'>
            <b>
              Sandi Zoch
              <br />
              Master Instructor
              <br />
              Public Safety Diver Instructor
            </b>
            <br />
            <i>"As early as I can remember, I have been fascinated with the Ocean"</i>.
            Sandi began diving in 2006, and in 2013 started her career as a dive
            instructor, working her way up the ranks. She is a Master Instructor
            with several specialty ratings. She is our premier PSD instructor,
            and is more than qualified to help you achieve all of your diving
            dreams. She is a blessing and a treasure here at Floridivers.
          </div>
        </div>
      </div>
    );
  }
}

export default Crew;
