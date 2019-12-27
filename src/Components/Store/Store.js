import React, { Component } from 'react';
import './Store.css';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from '../../../actions/index';
// import axios from 'axios';



//Google analytics for visitor tracking
// import ReactGA from 'react-ga';





class Store extends Component {
  state ={
    Store: [],
}

// async componentDidMount(){
//   ReactGA.pageview('/Store');
// }

    render(){

      return (
        <div className='store'>
          <h1>Store Coming Soon!</h1>
        </div>
      )
    }
}






export default Store;