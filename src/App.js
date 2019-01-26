import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import routes from './routes';

class App extends Component {

  componentDidMount() {
    // fetch()
  }

  render() {
    return (
      <Router>
        {routes}
      </Router>


    );
  }
}

export default App;
