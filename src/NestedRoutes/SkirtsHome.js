import { Route, Routes } from "react-router-dom";
import Skirts from "./Skirts";

const SkirtSHome= () => {
  return(
    <div>
      {/* <div className="nested-bar">
       <NavLink to="skirts" className="nested-nav">Skirts</NavLink>
     </div> */}
       <Routes>
         <Route path="skirts" element={<Skirts/>}/>
         </Routes>
    </div>
  )
}

export default SkirtSHome;