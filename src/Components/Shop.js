import { Helmet } from "react-helmet-async";
import Navigation from "../Navigation/Nav";
import HoodiesHome from "../NestedRoutes/HoodiesHome";
import ShirtsHome from "../NestedRoutes/ShirtsHome";
import ShoeHome from "../NestedRoutes/ShoeHome";
import SkirtSHome from "../NestedRoutes/SkirtsHome";
import TrousersHome from "../NestedRoutes/TrousersHome";

const Shop = () => {
  return (
    <section>
      <div>
        <Navigation />
        <Helmet>
          <title>Our Shop</title>
          <link rel="canonical" href="/shop" />
          <meta
            name="description"
            content="Check out our clothings and assesories"
          />
        </Helmet>
        <div className="heading">
          <h1 className="heading-header">SHOP</h1>
          <p className="heading-parag">
            We've got variety of clothings and shoe wears,it is up to you.....
          </p>
        </div>
      </div>
      <div className="">
        <ShoeHome />
        <SkirtSHome />
        <ShirtsHome />
        <TrousersHome />
        <HoodiesHome />
      </div>
    </section>
  );
};

export default Shop;
