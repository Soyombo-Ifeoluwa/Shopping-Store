import { NavLink } from "react-router-dom";

const Collections = () => {
  return (
    <div>
      <div id="img" className="shoes"></div>
      <NavLink className="bg-title" to="/shop/shoe">
        Shoes
      </NavLink>
      <div id="img" className="shirts"></div>
      <NavLink className="bg-title2" to="/shop/shirts">
        Shirts
      </NavLink>
      <div id="img" className="trousers"></div>
      <NavLink className="bg-title3" to="/shop/trousers">
        Trousers
      </NavLink>
      <div id="img" className="skirts"></div>
      <NavLink className="bg-title4" to="/Shop/skirts">
        Skirts
      </NavLink>
      <div id="img" className="Hoodie"></div>
      <NavLink className="bg-title5" to="/shop/hoodies">
        Hoodies
      </NavLink>
    </div>
  );
};

export default Collections;
