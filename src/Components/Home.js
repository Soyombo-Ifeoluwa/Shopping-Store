import { Helmet } from "react-helmet-async";
import Navigation from "../Navigation/Nav";
import Collections from "../NestedRoutes/Collections";
import HoodiesHome from "../NestedRoutes/HoodiesHome";
import ShirtsHome from "../NestedRoutes/ShirtsHome";
import ShoeHome from "../NestedRoutes/ShoeHome";
import SkirtSHome from "../NestedRoutes/SkirtsHome";
import TrousersHome from "../NestedRoutes/TrousersHome";
// import Collector from "../NestedRoutes/Collector";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="Home-page">
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="/home" />
        <meta name="description" content="Checkout Our shop" />
      </Helmet>
      <div className="column-box">
      <div className="column">
      <div className="Routes-nav">
        <p> <ShoeHome /> </p>
        <p> <SkirtSHome /> </p>
         <p><ShirtsHome /> </p>
       <p> <TrousersHome /></p>
        <p> <HoodiesHome /> </p>
      </div>
      </div>
      </div>
      <div className="home">
        <h1 className="title">KARIS COLLECTIONS..</h1>
        <p className="advert">
          Discover something new every day - whether it's that sweatshirt you
          saw on Insta or the dress you never knew you wanted
        </p>
        <div />
          <Collections />
      </div>
      </div>
      </div>
  );
};

export default Home;
