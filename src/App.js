import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Pages from "./Components/Pages/Pages";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Pages />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
