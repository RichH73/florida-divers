import React, { Component } from 'react';
import './NAME.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions/index';
import axios from 'axios';



//Google analytics for visitor tracking
import ReactGA from 'react-ga';





class NAME extends Component {
  state ={
    NAME: [],
}

async componentDidMount(){
  ReactGA.pageview('/NAME');
}

    render(){

      return (
        <div>

        </div>
      )
    }
}



const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(NAME);