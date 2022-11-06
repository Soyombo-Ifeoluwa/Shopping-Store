import { NavLink } from "react-router-dom";

const RouteNav = () => {
  return (
    <div className="nested-bar">
      <NavLink to="shoe" className="nested-nav">
        Shoes
      </NavLink>
      <NavLink to="skirts" className="nested-nav">
        Skirts
      </NavLink>
      <NavLink to="shirts" className="nested-nav">
        Shirts
      </NavLink>
      <NavLink to="trousers" className="nested-nav">
        Trousers
      </NavLink>
      <NavLink to="hoodies" className="nested-nav">
        Hoodies
      </NavLink>
    </div>
  );
};

export default RouteNav;
