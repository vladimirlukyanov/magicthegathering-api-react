import React, {PureComponent} from 'react';
import './cards.scss';
import Topnav from '../topnav';
import Card from '../card';

class Cards extends PureComponent {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {is_loading: false, cards: []};

  }

  componentDidMount() {
    fetch('https://api.magicthegathering.io/v1/cards')
      .then(response => response.json())
      .then(data => this.setState({cards: data.cards}));
  }

  render() {

    const {cards} = this.state;
    let cardsList;

    cards.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    const cards_arr = [], size = 3;

    if (cards.length > -1 && cards.length < 2) {

      let remove_duplicates_arr = cards.filter(function (el) {
        return "imageUrl" in el;
      });

      cards_arr.push(remove_duplicates_arr);


    } else {

      let remove_duplicates_arr = cards.filter(function (el) {
        return "imageUrl" in el;
      });

      while (remove_duplicates_arr.length > 0)
        cards_arr.push(remove_duplicates_arr.splice(0, size));


    }

    if (this.state.cards.length > 0) {
      cardsList = cards_arr.map((item, i) =>
        <div className="row" key={'row' + i}>
          {item.map((card, k) =>
            <div className="md-one-third">
              <Card key={'card' + k} name={card.name} img={card.imageUrl} number={card.multiverseid}></Card>
            </div>
          )}
        </div>
      );
    } else {
      cardsList = <div className="loader"></div>
    }

    return (
      <div className="container cards">
        <Topnav></Topnav>
        <div className="row content">
          <div className="md-16">
            <div className="dimmer">
              {cardsList}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
