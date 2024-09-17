import { Link, useNavigate } from "react-router-dom";
import add_contact from "../photos/add_contact.webp";

const Home = () => {
  const navigate = useNavigate();

  const getStartedBtn = () => {
    navigate("/add");
  };

  return (
    <div className="homeNav">
      <nav className="navBar fs-5 fw-bold">
        <ul className="nav justify-content-end p-4">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contacts
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Log Out
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container mt-5 p-5">
        <div className="row">
          <div className="col-md-6 col-12 mb-4">
            <img
              src={add_contact}
              alt="Description of the image"
              className="img-fluid shadow-lg rounded w-100"
            />
          </div>
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
            <h1 className="mb-3">Add Contact</h1>
            <p className="lead text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button
              onClick={getStartedBtn}
              className="btn btn-primary h4 text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
