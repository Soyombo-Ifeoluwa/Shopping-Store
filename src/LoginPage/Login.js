import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Login = () => {
 

  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/home");
  };

  return (
    <div className="body">
    <form className="input-form" onSubmit={handleSubmit}>
      <Helmet>
        <title>Login Page</title>
        <link rel="canonical" href="/" />
        <meta name="description" content="Log In to our page." />
      </Helmet>
      <h1 className="login-page">KARISMA'S STORE</h1>
      <h1 className="form">Log-In Page.</h1>
      <input
        className="input"
        id="Fname"
        placeholder="Full Name..."
        type="name"
        // ref={nameRef}
        required
      />
      <input
        className="input"
        id="Uname"
        placeholder="UserName..."
        type="username"
        // ref={usernameRef}
        required
      />
      <input
        className="input"
        id="email"
        placeholder="E-mail address..."
        // ref={emailRef}
        type="email"
        required
      />
      <button className="input" type="submit">
        Log In
      </button>
    </form>
    </div>
  );
};

export default Login;
