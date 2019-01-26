import React, {PureComponent} from 'react';
import './cards.scss';
import Topnav from '../topnav';
import Card from '../card';
import noImage from "../card/no-image.png";

class Cards extends PureComponent {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {is_loading: false, card: {}};

  }

  componentDidMount() {
    console.log(this);
    fetch('https://api.magicthegathering.io/v1/cards/' + this.props.match.params.card)
      .then(response => response.json())
      .then(data => this.setState({card: data.card}));
  }

  render() {

    const title = this.state.card.name ? this.state.card.name : '';
    const imgSrc = this.state.card.imageUrl ? this.state.card.imageUrl : noImage;

    return (
      <div className="container configurator">
        <Topnav></Topnav>
        <div className="row">
          <div className="md-16">
            <h1>{title}</h1>
            <img src={imgSrc} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
