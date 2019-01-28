import React, {Component} from 'react';
import './welcome.scss';
import logo from './logo.png';
import {Link} from "react-router-dom";

class Configurator extends Component {

  componentDidMount() {
    // fetch()
  }

  render() {
    return (
      <div className="welcome">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="md-16">

                <div className="text-center">
                  <img src={logo} className="logo" alt="Mercedes-benz logo"/>
                  <br/>
                  <Link to="/cards" className="btn btn-default btn-large">Configurator</Link>
                </div>

              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="md-16">

                sdfsdfsdf

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Configurator;
