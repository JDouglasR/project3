import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Error from "./pages/Error";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={"/react-portfolio"}>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/profile" component={Profile} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
