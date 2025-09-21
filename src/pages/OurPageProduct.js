import { Component } from "react";

import AppOur from "../components/AppOur/app-our";
import AppProductCard from "../components/AppProductCard/app-product-card";

class OurPageProduct extends Component {
  render() {
    return (
      <>
        <AppOur />
        <div className="container">
          <AppProductCard />
        </div>
      </>
    );
  }
}
export default OurPageProduct;
