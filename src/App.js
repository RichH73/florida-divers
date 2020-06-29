import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Pages from "./Components/Pages/Pages";
import Footer from "./Components/Footer/Footer";





class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <Header />
          </div>
          <div className="pages">
            <Pages />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
