import { Component } from "react";
import "./app-product-card.scss";

class AppProductCard extends Component {
  render() {
    return (
      <div className="product-card">
        <div className="product-card__inner">
          <div className="product-card__img">
            <img src="/images/ProductCardImg.jpg" alt="product-image" />
          </div>
          <div className="product-card__content">
            <h1 className="product-card__title title">About it</h1>
            <div className="decoration">
              <span className="decoration-element"></span>
              <img src="/icons/coffee-beans.svg" alt="Coffee-icon" />
              <span className="decoration-element"></span>
            </div>
            <ul className="product-card__list">
              <li className="product-card__list-item">
                <p className="product-card__list-item--info">
                  <span>Country: </span>Brazil
                </p>
              </li>
              <li className="product-card__list-item">
                <p className="product-card__list-item--info">
                  <span>Description: </span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                  molestiae vitae suscipit natus, consequuntur fugiat.
                </p>
              </li>
              <li className="product-card__list-item">
                <p className="product-card__list-item--info">
                  <span>Price: </span>16.99$
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
