import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
      <Router>
        <Header />
        <Switch>
                <Route path="/" exact component={Home} ></Route>
                <Route path="/About" component={About} ></Route>
                <Route path="/Main" component={Main} ></Route>
        </Switch>
        <Footer />
      </Router>
    );
  };


export default App;
