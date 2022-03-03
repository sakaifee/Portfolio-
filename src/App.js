import React from "react";
import Style from "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar
          homeName="Home"
          exp="Exprience"
          projectName="Projects"
          contactus="Contact Us"
        />
        <Switch>
          <Route path="/home">
            <Home homeBody="Hi there! My name is Kaifee & I am Software Engineer" />
          </Route>
          <Route path="/contact">
            <Contact contactBody="This is my Contact Page" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
