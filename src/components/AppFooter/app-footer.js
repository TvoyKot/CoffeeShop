import { Component } from "react";
import { Link } from "react-router-dom";

import "./app-footer.scss";

class AppFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="/"> Coffee house</Link>
            </li>
            <li className="footer__list-item">
              <Link to="/ourPage">Our coffee</Link>
            </li>
            <li className="footer__list-item">
              <Link to="/Pleasure">For your pleasure</Link>
            </li>
          </ul>
          <div className="decoration">
            <span className="decoration-element"></span>
            <img src="/icons/coffee-beans.svg" alt="Coffee-icon" />
            <span className="decoration-element"></span>
          </div>
        </div>
      </footer>
    );
  }
}

export default AppFooter;
