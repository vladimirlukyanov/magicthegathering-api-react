import React, {Component} from 'react';
import './welcome.scss';
import logo from './logo.png';
import { Link } from "react-router-dom";

class Configurator extends Component {

  componentDidMount() {
    // fetch()
  }

  render() {
    return (
      <div className="container welcome">
        <div className="row">
          <div className="md-16">

            <h1 className="text-center">MagicTheGathering Wizard</h1>
            <div className="text-center">
              <img src={logo} className="logo" alt="Mercedes-benz logo"/>
              <br />
              <Link to="/cards" className="btn btn-default">Configurator</Link>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Configurator;
