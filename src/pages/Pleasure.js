import { Component } from "react";
import AppPleasure from "../components/AppPleasure/app-pleasure";
import AppAboutGoods from "../components/AppAboutGoods/app-about-goods";
import AppOurCoffee from "../components/AppOurCoffee/app-our-coffee";
class Pleasure extends Component {
  constructor(props) {
    const imageUrl = "CoffeeShop/images/aromisticoList.png";

    super(props);
    this.state = {
      ourProducts: [
        {
          id: 1,
          imgUrl: imageUrl,
          name: "AROMISTICO Coffee Black",
          weight: "1kg",
          country: "Brazil",
          price: "6.99",
        },
        {
          id: 2,
          imgUrl: imageUrl,
          name: "AROMISTICO Coffee Yellow",
          weight: "1kg",
          country: "Kenya",
          price: "6.99",
        },
        {
          id: 3,
          imgUrl: imageUrl,
          name: "AROMISTICO Coffee Black",
          weight: "1kg",
          country: "Columbia",
          price: "6.99",
        },
        {
          id: 4,
          imgUrl: imageUrl,
          name: "AROMISTICO Coffee Red",
          weight: "1kg",
          country: "Brazil",
          price: "6.99",
        },
        {
          id: 5,
          imgUrl: imageUrl,
          name: "AROMISTICO Coffee Yellow",
          weight: "1kg",
          country: "Brazil",
          price: "6.99",
        },
        {
          id: 6,
          imgUrl: imageUrl,
          name: "AROMISTICO Coffee Red",
          weight: "1kg",
          country: "Brazil",
          price: "6.99",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <AppPleasure />
        <AppAboutGoods />
        <AppOurCoffee ourProducts={this.state.ourProducts} />
      </>
    );
  }
}
export default Pleasure;
