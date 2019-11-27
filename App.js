import React, { Component } from "react";
import logo from "./logo.svg";
import { Button,ButtonToolbar,Card  } from 'react-bootstrap';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
            <ButtonToolbar>
              <Button variant="outline-primary">Primary</Button>
              <Button variant="outline-secondary">Secondary</Button>
              <Button variant="outline-success">Success</Button>
              <Button variant="outline-warning">Warning</Button>
              <Button variant="outline-danger">Danger</Button>
              <Button variant="outline-info">Info</Button>
              <Button variant="outline-light">Light</Button>
              <Button variant="outline-dark">Dark</Button>
          </ButtonToolbar>


      </div>
    );
  }
}

export default App;
