import { Component } from "react";

import "./app-our-card.scss";

class AppOurCard extends Component {
  render() {
    return (
      <li className="our__card">
        <img className="our__card-img" src={this.props.imgUrl} />
        <p className="our__card-title">
          {this.props.name}
          <span className="our__card-weight"> {this.props.weight}</span>
        </p>
        <p className="our__card-country">{this.props.country}</p>
        <p className="our__card-price">{this.props.price}</p>
      </li>
    );
  }
}

export default AppOurCard;
