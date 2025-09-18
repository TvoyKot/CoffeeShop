import { Component } from "react";

import "./app-about-beans.scss";

class AppAboutBeans extends Component {
  render() {
    return (
      <>
        <section className="about__beans">
          <div className="about__inner">
            <img src="images/AboutBeansContent.jpg" alt="" />
            <div className="about__content">
              <h2 className="about__beans-title title">About Our Beans</h2>
              <div className="decoration">
                <span className="decoration-element"></span>
                <img src="icons/coffee-beans.svg" alt="Coffee-icon" />
                <span className="decoration-element"></span>
              </div>
              <p className="about__beans-text first-part">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible.
              </p>
              <p className="about__beans-text">
                Afraid at highly months do things on at. Situation recommend
                objection do intention so questions. As greatly removed calling
                pleased improve an. Last ask him cold feel met spot shy want.
                Children me laughing we prospect answered followed. At it went
                is song that held help face.
              </p>
            </div>
          </div>
          <div className="about__beans-decor">
          </div>
        </section>
      </>
    );
  }
}

export default AppAboutBeans;
