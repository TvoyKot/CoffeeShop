import { Component } from "react";
import coffeeIconSVG from "../../icons/coffee-beans.svg"

import "./app-header.scss";

class AppHeader extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__content">
            <h1 className="header__content-title">Everything You Love About Coffee</h1>
            <div className="decoration">
              <span className="decoration-element"></span>
              <img src={coffeeIconSVG} alt="Coffee-icon" />
              <span className="decoration-element"></span>
            </div>
            <p className="header__content-text">We makes every day full of energy and taste</p>
            <p className="header__content-text">Want to try our beans?</p>
            <a className="header__content-btn" href="#">
              More
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
