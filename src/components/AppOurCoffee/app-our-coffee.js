import { Component } from "react";
import AppOurCard from "../AppOurCard/app-our-card";
import "./app-our-coffee.scss";
import "../AppOurCard/app-our-card.scss";

class AppOurCoffee extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    const { ourProducts } = this.props;
 
    return ourProducts.map((item) => {
      return (
        <AppOurCard
          key={item.id}
          imgUrl={item.imgUrl}
          name={item.name}
          weight={item.weight}
          country={item.country}
          price={item.price}
        />
      );
    });
  }

  render() {
    return (
      <section className="our-coffee">
        <div className="container">
          <ul className="our-coffee__list">{this.renderList()}</ul>
        </div>
      </section>
    );
  }
}

export default AppOurCoffee;
