import React, {Component} from 'react';
import './topnav.scss';
import { Link } from "react-router-dom";

class Topnav extends Component {

  componentDidMount() {
    // fetch()
  }

  render() {
    return (

      <div className="top-nav">
        <ul className="nav nav-horizontal">

          <li className="hamburger">
            <button>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </li>

          <li className="nav-logo">
            <Link to="/cards"></Link>
          </li>

        </ul>
      </div>
    );
  }
}

export default Topnav;
