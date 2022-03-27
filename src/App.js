import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Grid, Row } from "react-bootstrap";
import "./App.css";

import Header from "./components/common/Header";
import Home from "./components/common/Home";
import Footer from "./components/common/Footer";
import Exhebition from "./components/common/Exhebition";
import Login from "./components/admin/Login";
import Logout from "./components/admin/Logout";

import Category from "./components/common/Category";

import Three from "./components/Three/Three";

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Grid>
            <Row>
              <Header entries={this.props.entries} />
            </Row>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/Footer" component={Footer} />
            <Route path="/logout" component={Logout} />
            <Route path="/Exhebition" component={Exhebition} />
            <Route path="/Three" component={Three} />
            <Route path="/Category" component={Category} />
          </Grid>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
