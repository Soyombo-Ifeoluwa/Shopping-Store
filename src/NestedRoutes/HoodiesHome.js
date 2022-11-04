import {Route, Routes } from "react-router-dom";
import RouteNav from "../NestedNav/RoutesNav";
import Hoodies from "./Hoodies";


const HoodiesHome = () => {
  return (
    <div>
      <RouteNav/>
      {/* <div className="nested-bar">
        <NavLink to="hoodies" className="nested-nav">Hoodies</NavLink>
      </div> */}
      <Routes>
        <Route path="hoodies" element={<Hoodies/>} />
      </Routes>
    </div>
  )
}

export default HoodiesHome;