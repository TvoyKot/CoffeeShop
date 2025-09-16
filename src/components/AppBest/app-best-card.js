import { Component } from "react";
import "./app-best-card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="best__card">
        <img className="best__card-img" src={this.props.imgUrl}/>
        <p className="best__card-title">
          {this.props.name}
          <span className="best__card-weight"> {this.props.weight}</span>
        </p>
        <p className="best__card-price">{this.props.price}</p>
      </li>
    );
  }
}

export default Card;
