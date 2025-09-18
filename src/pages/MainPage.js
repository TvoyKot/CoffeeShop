import { Component } from "react";

import AppHeader from "../components/AppHeader/app-header";
import AppAbout from "../components/AppAbout/app-about";
import AppBest from "../components/AppBest/app-best";
import AppFooter from "../components/AppFooter/app-footer";

class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppAbout />
        <AppBest />
        <AppFooter />
      </div>
    );
  }
}

export default MainPage;
