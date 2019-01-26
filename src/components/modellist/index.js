import React, {PureComponent} from 'react';
import './modellist.scss';
import { Link, withRouter } from "react-router-dom";

class Modellist extends PureComponent {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {is_loading: false, models: [], img : '', model_id : '', condifuration_id : ''};

  }

  async componentDidMount() {
    let models = {}, configurations = {}, model_id = '', configuration_id = '';

    await fetch('https://mercedes-benz-api.herokuapp.com/markets/de_DE/models?classId='+ this.props.modelId)
      .then(response => response.json())
      .then(data => models = data);

    if(Array.isArray(models)) {
      model_id = models[0].modelId;
    } else {
      model_id = models.modelId;
    }

    console.log(model_id);

    this.setState({model_id : model_id});

    await fetch('https://mercedes-benz-api.herokuapp.com/markets/de_DE/models/'+ model_id +'/configurations/initial')
      .then(response => response.json())
      .then(data => configurations = data);

    if(Array.isArray(configurations)) {
      configuration_id = configurations[0].configurationId;
    } else {
      configuration_id = configurations.configurationId;
    }

    this.setState({condifuration_id : model_id});

    await fetch('https://mercedes-benz-api.herokuapp.com//markets/de_DE/models/'+model_id+'/configurations/'+configuration_id+'/images/vehicle?perspectives=EXT0201&roofOpen=false&night=false')
      .then(response => response.json())
      .then(data => this.setState({img: data.vehicle.EXT020.url}));

  }

  render() {

    const link = '/configurator/' + this.state.model_id;

    return (
      <Link to={link} className="model">
        <span className="title">{this.props.modelClass}</span>
        <img src={this.state.img} />
      </Link>
    );
  }
}

export default Modellist;
