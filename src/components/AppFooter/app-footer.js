import { Component } from "react";
import "./app-footer.scss";

class AppFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <ul className="footer__list">
            <li className="footer__list-item">Coffee house</li>
            <li className="footer__list-item">Our coffee</li>
            <li className="footer__list-item">For your pleasure</li>
          </ul>
          <div className="decoration">
            <span className="decoration-element"></span>
            <img src="icons/coffee-beans.svg" alt="Coffee-icon" />
            <span className="decoration-element"></span>
          </div>
        </div>
      </footer>
    );
  }
}

export default AppFooter;
