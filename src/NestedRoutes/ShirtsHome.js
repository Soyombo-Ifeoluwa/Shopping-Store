import { Route, Routes } from "react-router-dom";
import Shirts from "./Shirts";

const ShirtsHome = () => {
  return(
    <div>
      {/* <div className="nested-bar">
      <NavLink to="shirts" className="nested-nav">Shirts</NavLink>
      </div> */}
      <Routes>
        <Route path="shirts" element={<Shirts/>}/>
      </Routes>
    </div>
  )
}

export default ShirtsHome;