import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import { composeWithDevTools, } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


// const store = createStore(allReducers)
//  export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(logger)))
export const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk)),
    // applyMiddleware(thunk)
    )
  




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

