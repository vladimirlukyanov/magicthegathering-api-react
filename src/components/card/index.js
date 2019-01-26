import React, {PureComponent} from 'react';
import './card.scss';
import {Link} from "react-router-dom";
import Topnav from '../topnav';
import noImage from './no-image.png';

class Card extends PureComponent {

  constructor(props) {
    super(props);

  }

  render() {

    const imgSrc = this.props.img ? this.props.img : noImage;

    return (
      <Link to={'/cards/' + this.props.number } className="card">
        <div className="inner">
          <h3 className="title">{this.props.name}</h3>
          <div className="img-wrapper">
            <img className="img" src={imgSrc}/>
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;
