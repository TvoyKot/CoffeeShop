import { Component } from "react";

import AppHeader from "../components/AppHeader/app-header";
import AppAbout from "../components/AppAbout/app-about";
import AppBest from "../components/AppBest/app-best";

class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppAbout />
        <AppBest />
      </div>
    );
  }
}

export default MainPage;
