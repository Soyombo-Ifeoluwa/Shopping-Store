import { NavLink } from "react-router-dom";

const RouteNav = () => {
  return (
    <div className="nested-bar">
      <li>
        <NavLink to="shoe" className="nested-nav">
          Shoes
        </NavLink>
      </li>
      <li>
        <NavLink to="skirts" className="nested-nav">
          Skirts
        </NavLink>
      </li>
      <li>
        <NavLink to="shirts" className="nested-nav">
          Shirts
        </NavLink>
      </li>
      <li>
        <NavLink to="trousers" className="nested-nav">
          Trousers
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="hoodies" className="nested-nav">
          Hoodies
        </NavLink>
      </li>
    </div>
  );
};

export default RouteNav;
