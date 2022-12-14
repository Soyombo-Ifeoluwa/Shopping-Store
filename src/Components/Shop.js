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
      <div className="shop-section">
        <Navigation />
        <div>
          <Helmet>
            <title>Our Shop</title>
            <link rel="canonical" href="/shop" />
            <meta
              name="description"
              content="Check out our clothings and assesories"
            />
          </Helmet>

          <div>
            <ShoeHome />
            <ShirtsHome />
            <SkirtSHome />
            <TrousersHome />
            <HoodiesHome />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
