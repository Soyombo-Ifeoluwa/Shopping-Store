import { useLocation, useNavigate } from 'react-router-dom' ;


function PageNotFound() {
  const navigate = useNavigate();

  const handleNavigate = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  const location = useLocation();
  console.log(location);
  return (
    <>
      <section className="section">
        <h1 className="error">
          -404 Error-
        </h1>
        <h1 className="error-h1">Page Not Found</h1>
      </section>
      <div>
        <button className="error-nav" onClick={handleNavigate}>
          Go Back To HOME Page
        </button>
      </div>
    </>
  );
}

export default PageNotFound;