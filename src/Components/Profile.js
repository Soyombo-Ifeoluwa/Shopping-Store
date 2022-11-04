import { Helmet } from "react-helmet-async";
import Navigation from "../Navigation/Nav";

const UserProfile = () => {
  return (
    <section>
      <Navigation />
      <Helmet>
        <title>Your Profile</title>
        <link rel="canonical" href="/profile" />
        <meta name="description" content="View Your Profile" />
      </Helmet>
      <div className="Card">
        <img
          className="avatar"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
        />
        <h2 className="details">Name:</h2>
        <h2 className="details">Email:</h2>
        <h2 className="details">UserName:</h2>
      </div>
    </section>
  );
};

export default UserProfile;
