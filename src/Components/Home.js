import { Helmet } from "react-helmet-async";
import Navigation from "../Navigation/Nav";
import Collector from "../NestedRoutes/Collector";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="/home" />
        <meta name="description" content="Checkout Our shop" />
      </Helmet>
      <div className="home">
        <h1 className="title">KARIS COLLECTIONS..</h1>
        <p className="advert">
          Discover something new every day - whether it's that sweatshirt you
          saw on Insta or the dress you never knew you wanted
        </p>
        <div />
        <div className="VC-Link">
          <Collector className="collections-link" />
        </div>
      </div>
    </div>
  );
};

export default Home;
