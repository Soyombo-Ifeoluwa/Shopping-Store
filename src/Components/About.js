import { Helmet } from "react-helmet-async";
import Navigation from "../Navigation/Nav";

const About = () => {
  return (
    <div>
      <Navigation />
      <div className="Mission">
        <Helmet>
          <title>About Page</title>
          <link rel="canonical" href="/about" />
          <meta name="description" content="Check all about us" />
        </Helmet>
        <h1>-Our Mission-</h1>
        <p className="parag">
          Making sure you get the piece of clothing you want.
        </p>
      </div>
      <div className="About">
        <h1 className="about">-About-</h1>
        <p className="parag">
          At KARIS, we all come to work everyday because we want to solve the
          biggest clothing problem in mobile.
          <br />
          People don't really know what clothings to put on for events,how to
          wear them,
          <br />
          how to get them as quickly as possible or even how much need to be
          spent to order them.
        </p>
        <p className="parag">
          That's why KARIS is here to tend to your needs, tell you different
          ways to wear a particular clothing.
          <br />
          We also make things easy for you to order without paying a lot for
          shipping alone.
          <br />
          We want people to feel comfortable enough to get clothings they like.
        </p>
      </div>
      <div className="identity">
        <h1 className="ceo">-CEO-</h1>
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="Avatar"
          className="avatar"
        />
        <h2 className="avatar-name">
          {" "}
          Name : Karis Essence.
          <br />
          <br />
          Email: karisesscence20@gmail.com
        </h2>
      </div>
    </div>
  );
};

export default About;
