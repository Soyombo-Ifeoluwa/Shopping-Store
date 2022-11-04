import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <section>
      <div className="storename">
        <h3 className="STORE">KARISMA'S STORE</h3>
      </div>
      <div className="navigation">
        <NavLink to="/home" className="nav">
          HOME
        </NavLink>

        <NavLink to="/shop" className="nav">
          SHOP
        </NavLink>

        <NavLink to="/about" className="nav">
          ABOUT
        </NavLink>

        <NavLink to="/contact" className="nav">
          CONTACT
        </NavLink>

        <NavLink to = "/profile" className="nav">
          My Profile
          </NavLink>

          <NavLink to ="/" className="nav">
            Log Out
            </NavLink>
      </div>
    </section>
  );
};

export default Navigation;
