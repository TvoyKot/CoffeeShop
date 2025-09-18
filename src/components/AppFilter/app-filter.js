import { Component } from "react";

import "./app-filter.scss";

class AppFilter extends Component {
  render() {
    let filter = this.props.filter;
    const buttonsData = [
      { name: "Brazil", label: "Brazil" },
      { name: "Kenya", label: "Kenya" },
      { name: "Columbia", label: "Columbia" },
    ];
    const buttons = buttonsData.map(({ name, label }) => {
      const active = filter === name;
      const clazz = active ? "button--active" : "";
      let classButton = "filter-button";
      return (
        <button
          onClick={() => this.props.selectFilter(name)}
          key={name}
          className={`${classButton} ${clazz}`}
          type="button"
        >
          {label}
        </button>
      );
    });
    return (
      <>
        <div className="filter">
          <span className="filter__title">Or filter</span>
          <div className="filter__buttons">{buttons}</div>
        </div>
      </>
    );
  }
}
export default AppFilter;
