import { Component } from "react";

import "./app-search-panel.scss";

class AppSearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: props.term,
    };
  }
  onUpdateSearch = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };
  render() {
    return (
      <>
        <div className="search-panel">
          <span className="search-panel__title">Looking for</span>
          <input
            className="search-panel__input"
            type="text"
            placeholder="start typing here..."
            value={this.props.term}
            onChange={this.onUpdateSearch}
          />
        </div>
      </>
    );
  }
}

export default AppSearchPanel;
