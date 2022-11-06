import { Route, Routes } from "react-router-dom";
import Shoe from "./Shoe";

const ShoeHome = () => {
  return (
    <div>
      <Routes>
        <Route path="shoe" element={<Shoe />} />
      </Routes>
    </div>
  );
};

export default ShoeHome;
