import { NavLink, Route, Routes } from "react-router-dom";
import Collections from "./Collections";

const Collector = () => {
  return (
    <div>
      <NavLink to="home_id" className="nav2">
        Collections
      </NavLink>

      <Routes>
        <Route path="home_id" element={<Collections />} />
      </Routes>
    </div>
  );
};

export default Collector;
