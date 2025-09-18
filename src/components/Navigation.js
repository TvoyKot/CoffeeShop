import { Link } from "react-router-dom";

import "./navigation.scss";
function Navigation() {
  return (
      <header>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__list-item">
              <Link to="/">Coffe house</Link>
            </li>
              <li className="navigation__list-item">
                <Link to="/ourPage">Our coffee</Link>
              </li>
            <li className="navigation__list-item">
              <Link to="/Pleasure">For your pleasure</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Navigation;
