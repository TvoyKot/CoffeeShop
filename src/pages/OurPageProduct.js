import { Component } from "react";
import { withRouter } from "../helper/withRouter";
import AppOur from "../components/AppOur/app-our";
import AppProductCard from "../components/AppProductCard/app-product-card";

class OurPageProduct extends Component {
  render() {
    const { id } = this.props.params;
    return (
      <>
        <AppOur />
        <div className="container">
          <AppProductCard productId={id} />
        </div>
      </>
    );
  }
}
export default withRouter(OurPageProduct);
