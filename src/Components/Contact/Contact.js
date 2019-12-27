import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {



  render() {
    return (
      <div className='contact'>
        <h3>Contact</h3>
        (352)448-0028
        <br />
        <a href="mailto:scubaJ1210@floridivers.com">
          scubaJ1210@floridivers.com
        </a>
        <h4>Nicholas</h4>
        <a href='mailto:scubaJ1210@floridivers.com'>scubaJ1210@floridivers.com</a>
        <h4>Tammy</h4>
        <a href='mailto:tjstrazzulla@yahoo.com'>tjstrazzulla@yahoo.com</a>
        <h3>Hours</h3>
        Mon-Fri: 2:30pm - 7:30pm
        <br />
        Sat: 9:00am -5:00 pm
        <br />
        Sun: Closed
        <div className='social-media'>
        <h3>Social Media</h3>
        <a href='https://facebook.com/scubaforthesoul' target='new'><img src='http://dev.richthats.me/images/icons/fb.png' alt='FaceBook'/></a>
        <a href='https://twitter.com/@scubaforthesoul' target='new'><img src='http://dev.richthats.me/images/icons/twitter.png' alt='Twitter'/></a>
        <a href='https://www.instagram.com/explore/tags/scubaforthesoul/' target='new'><img src='http://dev.richthats.me/images/icons/inst.png' alt='Instagram'/></a>
        <a href='https://www.youtube.com/channel/UC57qQD8U-ZGDKAbzFjllJ4A' target='new'><img src='http://dev.richthats.me/images/icons/youtube.png' alt='YouTube'/></a>
        </div>
      </div>
    );
  }
}

export default Contact;
