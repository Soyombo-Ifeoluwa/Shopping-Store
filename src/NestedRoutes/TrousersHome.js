import { Route, Routes } from "react-router-dom";
import Trousers from "./Trousers";

const TrousersHome = () => {
  return(
    <div>
      {/* <div className="nested-bar">
      <NavLink to="trousers" className="nested-nav" >Trousers</NavLink>
      </div> */}
      <Routes>
        <Route path="trousers" element={<Trousers/>} />
      </Routes>
    </div>
  )
}

export default TrousersHome;