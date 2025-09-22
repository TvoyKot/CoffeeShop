import { products } from "../../data/products";
import { Component } from "react";
import "./app-product-card.scss";

class AppProductCard extends Component {
  render() {
    const { productId } = this.props;
    const product = products.find(
      (product) => product.id === parseInt(productId)
    );
    return (
      <div className="product-card">
        <div className="product-card__inner">
          <div className="product-card__img">
            <img src={product.imgUrl2} alt="product-image" />
          </div>
          <div className="product-card__content">
            <h1 className="product-card__title title">{product.name}</h1>
            <div className="decoration">
              <span className="decoration-element"></span>
              <img src="/icons/coffee-beans.svg" alt="Coffee-icon" />
              <span className="decoration-element"></span>
            </div>
            <ul className="product-card__list">
              <li className="product-card__list-item">
                <p className="product-card__list-item--info">
                  <span>Country: </span>
                  {product.country}
                </p>
              </li>
              <li className="product-card__list-item">
                <p className="product-card__list-item--info">
                  <span>Description: </span>
                  {product.description}
                </p>
              </li>
              <li className="product-card__list-item">
                <p className="product-card__list-item--info">
                  <span>Price: </span>
                  {product.price}$
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default AppProductCard;
