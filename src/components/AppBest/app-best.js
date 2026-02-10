import { Component } from "react";
import Card from "../AppBest/app-best-card";
import "./app-best.scss";
import coffeImageSolimo from "../../images/coffee-items/solimo.png"
import coffeImagePresto from "../../images/coffee-items/presto.png"
import coffeImageAromisto from "../../images/coffee-items/aromistico.png"

class AppBest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestProducts: [
        {
          id: 1,
          imgUrl: coffeImageSolimo,
          name: "Solimo Coffee Beans",
          weight: "2kg",
          price: "10.73",
        },
        {
          id: 2,
          imgUrl: coffeImagePresto,
          name: "Presto Coffee Beans",
          weight: "1kg",
          price: "15.99",
        },
        {
          id: 3,
          imgUrl: coffeImageAromisto,
          name: "Aromisto Coffee",
          weight: "1kg",
          price: "6.99",
        },
      ],
    };
  }
  renderList = () => {
    return this.state.bestProducts.map((product) => {
      return (
          <Card
            key={product.id}
            imgUrl={product.imgUrl}
            name={product.name}
            weight={product.weight}
            price={product.price}
          />
      );
    });
  };

  render() {
    return (
      <section className="best">
        <h2 className="best__title title">Our best</h2>
        <div className="best__content">
          <ul className="best__list">
            {this.renderList()}
          </ul>
        </div>
      </section>
    );
  }
}

export default AppBest;
