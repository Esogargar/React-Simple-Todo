import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "../src/components/layout/Header";
import "./App.css";
import About from "./components/pages/About";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" component={Todos} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
};

export default App;
