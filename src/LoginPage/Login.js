import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import shop from "../Assets/shop.png";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/home");
  };

  return (
    <div id="login-div">
      <div id="logo">
        <img src={logo} alt="our logo" width="1500px" height="800px" />
      </div>
      <form className="input-form" onSubmit={handleSubmit} id="body">
        <Helmet>
          <title>Login Page</title>
          <link rel="canonical" href="/" />
          <meta name="description" content="Log In to our page." />
        </Helmet>
        <div className="shoplogo">
          <img src={shop} alt="our shop" width="700px" height="800px" />
        </div>
        <div className="p2">
          <h1 className="login-page">WELCOME TO KARISMA'S STORE</h1>
          <input
            className="input"
            id="Fname"
            placeholder="Full Name..."
            type="name"
            required
          />
          <input
            className="input"
            id="Uname"
            placeholder="UserName..."
            type="username"
            required
          />
          <input
            className="input"
            id="email"
            placeholder="E-mail address..."
            type="email"
            required
          />
          <button className="input" type="submit">
            Log In
          </button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default Login;
