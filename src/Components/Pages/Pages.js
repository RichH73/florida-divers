import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../Main/Main';
import About from '../About/About';



class Body extends Component {

    render() {
        return (
            <div className='main-body'>
            <Route exact path='/' component={Main}/>
            <Route path='/about' component={About}/>
            </div>
        )
    }
}

export default Body;