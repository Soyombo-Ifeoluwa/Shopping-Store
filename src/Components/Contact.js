import { Helmet } from "react-helmet-async";
import Navigation from "../Navigation/Nav";

const Contact = () => {
  const handleClick = () => {
    return alert("We will get back to you as soon as possible.");
  };

  return (
    <section>
      <Navigation />
      <Helmet>
        <title>Contact Us</title>
        <link rel="canonical" href="/contact" />
        <meta name="description" content="Talk to us." />
      </Helmet>
      <div className="Contact-Page">
      <div className="contact-page">
        <h1 className="contact-header">How Can We Help You?</h1>
        <p className="contact-parag">Fill our Contact Form to reach us.</p>
      </div>
      <div className="input-box">
        <input
          className="input"
          id="fname"
          placeholder="First Name..."
          type="text"
          required
        />
        <input
          className="input"
          id="lname"
          placeholder="Last Name..."
          type="text"
          required
        />
        <input
          className="input"
          id="email"
          placeholder="Email-address..."
          type="email"
          required
        />
        <input
          className="input"
          placeholder="Message..."
          type="text"
          required
        />
        <button
          className="input"
          type="submit"
          onClick={handleClick}
          value="Submit"
        >
          Submit
        </button>
      </div>
      </div>
    </section>
  );
};

export default Contact;
