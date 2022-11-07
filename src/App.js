import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/Error";
import "./styles.css";
import { ImSpinner4 } from "react-icons/im";
import ShoeHome from "./NestedRoutes/ShoeHome";
import SkirtSHome from "./NestedRoutes/SkirtsHome";
import ShirtsHome from "./NestedRoutes/ShirtsHome";
import HoodiesHome from "./NestedRoutes/HoodiesHome";
import TrousersHome from "./NestedRoutes/TrousersHome";

const Home = lazy(() => import("./Components/Home"));
const Shop = lazy(() => import("./Components/Shop"));
const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));
const UserProfile = lazy(() => import("./Components/Profile"));
const Login = lazy(() => import("./LoginPage/Login"));

const OurFallbackComponent = ({
  error,
  componentStack,
  resetErrorBoundary
}) => {
  return (
    <div>
      <h1 className="error">An error occurred: {error.message}</h1>
      <button className="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
};

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="spinner-box">
          <ImSpinner4 className="spinner" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={OurFallbackComponent}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/home" element={<Home />}/>


            <Route path="/shop" element={<Shop />} >
            <Route path="shoe" element={<ShoeHome />} />

<Route path="skirts" element={<SkirtSHome />} />

<Route path="shirts" element={<ShirtsHome />} />

<Route path="trousers" element={<TrousersHome />} />

<Route path="hoodies" element={<HoodiesHome />} />
</Route>

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/profile" element={<UserProfile />} />

            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Suspense>
  );
}
