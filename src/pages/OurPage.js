import { Component } from "react";

import AppOur from "../components/AppOur/app-our";
import AppAboutBeans from "../components/AppAboutBeans/app-about-beans";
import AppSearchPanel from "../components/AppSearchPanel/app-search-panel";
import AppFilter from "../components/AppFilter/app-filter";
import AppOurCoffee from "../components/AppOurCoffee/app-our-coffee";

class OurPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ourProducts: [
        {
          id: 1,
          imgUrl: "/images/aromisticoList.png",
          name: "AROMISTICO Coffee Black",
          weight: "1kg",
          country: "Brazil",
          price: "6.99",
        },
        {
          id: 2,
          imgUrl: "/images/aromisticoList.png",
          name: "AROMISTICO Coffee Yellow",
          weight: "1kg",
          country: "Kenya",
          price: "6.99",
        },
        {
          id: 3,
          imgUrl: "/images/aromisticoList.png",
          name: "AROMISTICO Coffee Black",
          weight: "1kg",
          country: "Columbia",
          price: "6.99",
        },
        {
          id: 4,
          imgUrl: "/images/aromisticoList.png",
          name: "AROMISTICO Coffee Red",
          weight: "1kg",
          country: "Brazil",
          price: "6.99",
        },
        {
          id: 5,
          imgUrl: "/images/aromisticoList.png",
          name: "AROMISTICO Coffee Yellow",
          weight: "1kg",
          country: "Brazil",
          price: "6.99",
        },
        {
          id: 6,
          imgUrl: "/images/aromisticoList.png",
          name: "AROMISTICO Coffee Red",
          weight: "1kg",
          country: "Brazil",
          price: "6.99",
        },
      ],
      filter: "all",
      term: "",
    };
  }

  searchEmp = (products, term) => {
    if (term.length === 0) {
      return products;
    } else {
      return products.filter((item) => {
        return item.name.toLowerCase().indexOf(term.toLowerCase()) >= 0;
      });
    }
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (products, filter) => {
    switch (filter) {
      case "Brazil":
        return products.filter((item) => item.country === "Brazil");
      case "Kenya":
        return products.filter((item) => item.country === "Kenya");
      case "Columbia":
        return products.filter((item) => item.country === "Columbia");
      default:
        return products;
    }
  };

  selectFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const visibleData = this.filterPost(
      this.searchEmp(this.state.ourProducts, this.state.term),
      this.state.filter
    );
    return (
      <>
        <AppOur />
        <AppAboutBeans />
        <div className="search-panel">
          <AppSearchPanel
            term={this.state.term}
            onUpdateSearch={this.onUpdateSearch}
          />
          <AppFilter
            filter={this.state.filter}
            selectFilter={this.selectFilter}
          />
        </div>
        <AppOurCoffee ourProducts={visibleData} />
      </>
    );
  }
}

export default OurPage;
