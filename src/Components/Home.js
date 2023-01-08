import { Helmet } from "react-helmet-async";
import Navigation from "../Navigation/Nav";
import Collections from "../NestedRoutes/Collections";

const Home = () => {
  return (
    <div>
      <div className="header">
        <Navigation />
      </div>
      <div className="Home-page">
        <Helmet>
          <title>Home</title>
          <link rel="canonical" href="/home" />
          <meta name="description" content="Checkout Our shop" />
        </Helmet>
        <div className="main-page">
          <div className="home">
            <h1 className="title">KARIS COLLECTIONS..</h1>
            <p className="advert">
              Discover something new every day - whether it's that sweatshirt
              you saw on Insta or the dress you never knew you wanted
            </p>
            <div />
            <div className="wrapper">
              <Collections />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
