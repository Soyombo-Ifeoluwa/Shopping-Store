import { Helmet } from "react-helmet-async";
import Navigation from "../Navigation/Nav";
// import HoodiesHome from "../NestedRoutes/HoodiesHome";
// import ShirtsHome from "../NestedRoutes/ShirtsHome";
// import ShoeHome from "../NestedRoutes/ShoeHome";
// import SkirtSHome from "../NestedRoutes/SkirtsHome";
// import TrousersHome from "../NestedRoutes/TrousersHome";

const Shop = () => {
  return (
    <section>
      <div>
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
          {/* <div className="column-box">
      <div className="column">
      <div className="Routes-nav">
        <p> <ShoeHome /> </p>
        <p> <SkirtSHome /> </p>
         <p><ShirtsHome /> </p>
       <p> <TrousersHome /></p>
        <p> <HoodiesHome /> </p>
      </div>
      </div>
      </div> */}
          <div className="heading">
            <p className="heading-parag">
              We've got variety of clothings and shoe wears, it is up to
              you.....
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
