import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <section>
      <div className="navigation">
        <div className="storename">
          <h3 className="STORE">KARISMA'S </h3>
        </div>
        <div className="Nav">
          <ul className="list">
            <li id="list">
              <NavLink to="/home" className="nav">
                <h5> Home</h5>
              </NavLink>
            </li>

            <li id="list">
              {" "}
              <NavLink to="/shop" className="nav">
                <h5> Shop</h5>
              </NavLink>
            </li>

            <li id="list">
              <NavLink to="/about" className="nav">
                <h5>About</h5>
              </NavLink>
            </li>

            <li id="list">
              <NavLink to="/contact" className="nav">
                <h5>Contact</h5>
              </NavLink>
            </li>

            <li id="list">
              <NavLink to="/profile" className="nav">
                <h5>My Profile</h5>
              </NavLink>{" "}
            </li>

            <li id="list">
              {" "}
              <NavLink to="/" className="nav">
                <h5>Log Out</h5>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
